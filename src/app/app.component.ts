import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  Router,
  RouterOutlet,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import {
  CommonModule,
  DOCUMENT,
  isPlatformBrowser,
  isPlatformServer,
} from '@angular/common';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { filter } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  layout = true;
  private isBrowser: boolean;
  private isServer: boolean;
  private baseUrl: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isServer = isPlatformServer(this.platformId);
    this.baseUrl = environment.baseUrl;
  }

  async ngOnInit(): Promise<void> {
    // ✅ Immediately set meta for SSR
    this.setMetaFromRoute(this.activatedRoute);

    // ✅ CSR: Keep listening for route changes for SPA navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentRoute = this.router.url;
        this.layout = currentRoute !== '/404';

        if (this.isBrowser && typeof gtag !== 'undefined') {
          gtag('config', 'G-709E1EM7HP', {
            page_path: event.urlAfterRedirects,
          });
        }

        const canonicalUrl = `${this.baseUrl}${event.urlAfterRedirects}`;
        this.setCanonicalTag(canonicalUrl);
        const robotsConfig = currentRoute.includes('careers') ? 'noindex, follow' : 'index, follow';
        this.setRobotsMetaTag(robotsConfig);

        this.setMetaFromRoute(this.activatedRoute);
      });
  }

  private setMetaFromRoute(route: ActivatedRoute) {
    let deepest = route;
    while (deepest.firstChild) {
      deepest = deepest.firstChild;
    }

    const title = deepest.snapshot.data['title'];
    const description = deepest.snapshot.data['description'];
    const keywords = deepest.snapshot.data['keywords'];
    const schema = deepest.snapshot.data['schema'];
    const og = deepest.snapshot.data['og'];
    const twitter = deepest.snapshot.data['twitter'];

    if (title) {
      this.titleService.setTitle(title);
    }
    if (description) {
      this.metaService.updateTag({ name: 'description', content: description });
    }
    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    }
    if (schema) {
      this.setJsonLdSchema(schema);
    }
    if (og) {
      Object.entries(og).forEach(([key, value]) => {
        this.metaService.updateTag({
          property: `og:${key}`,
          content: value as string,
        });
      });
    }

    if (twitter) {
      Object.entries(twitter).forEach(([key, value]) => {
        this.metaService.updateTag({
          name: `twitter:${key}`,
          content: value as string,
        });
      });
    }
  }

  setCanonicalTag(url: string) {
    if (!url) return;
    let link: HTMLLinkElement | null = this.document.querySelector(
      "link[rel='canonical']"
    );
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }

  setRobotsMetaTag(content: string = 'index, follow') {
    let metaTag = this.metaService.getTag('name="robots"');
    if (metaTag) {
      this.metaService.updateTag({ name: 'robots', content });
    } else {
      this.metaService.addTag({ name: 'robots', content });
    }
  }

  private setJsonLdSchema(schema: any | any[]) {
    if (!schema) return;

    // Remove old schema tags first
    const oldScripts = this.document.body.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    oldScripts.forEach((s) => s.remove());

    const schemaArray = Array.isArray(schema) ? schema : [schema];

    schemaArray.forEach((entry) => {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(entry);
      this.document.body.appendChild(script);
    });
  }
}
