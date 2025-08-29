import { Component, Inject, OnInit } from '@angular/core';
import {
  Router,
  RouterOutlet,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { filter } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  layout = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          const currentRoute = this.router.url;
          this.layout = currentRoute !== '/404';

          // Google Analytics pageview tracking
          gtag('config', 'G-709E1EM7HP', {
            page_path: event.urlAfterRedirects,
          });

          const canonicalUrl = `${window.location.origin}${event.urlAfterRedirects}`;
          this.setRobotsMetaTag('index, follow');
          this.setCanonicalTag(canonicalUrl);

          // Get the deepest activated route
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }

          // Fragment-based meta config
          const fragmentMeta: Record<
            string,
            { title: string; description: string }
          > = {};

          route.fragment.subscribe((fragment) => {
            if (fragment && fragmentMeta[fragment]) {
              const { title, description } = fragmentMeta[fragment];
              this.titleService.setTitle(title);
              this.metaService.updateTag({
                name: 'description',
                content: description,
              });
            } else {
              const title = route.snapshot.data['title'];
              const description = route.snapshot.data['description'];

              if (title) {
                this.titleService.setTitle(title);
              }
              if (description) {
                this.metaService.updateTag({
                  name: 'description',
                  content: description,
                });
              }
            }
          });
        });
    } catch (error) {
      console.error('Error while loading config:', error);
    }
  }

  setCanonicalTag(url: string) {
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

}
