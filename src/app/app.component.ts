import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { filter } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { fragmentMap } from './config/fragments';
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
    private titleService: Title
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
            page_path: event.urlAfterRedirects
          });
  
          // Get the deepest activated route
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
  
          // Fragment-based meta config
          const fragmentMeta: Record<string, { title: string; description: string }> = fragmentMap;
  
          route.fragment.subscribe((fragment) => {
            if (fragment && fragmentMeta[fragment]) {
              const { title, description } = fragmentMeta[fragment];
              this.titleService.setTitle(title);
              this.metaService.updateTag({ name: 'description', content: description });
            } else {
              const title = route.snapshot.data['title'];
              const description = route.snapshot.data['description'];
  
              if (title) {
                this.titleService.setTitle(title);
              }
              if (description) {
                this.metaService.updateTag({ name: 'description', content: description });
              }
            }
          });
        });
    } catch (error) {
      console.error('Error while loading config:', error);
    }
  }  
    
}
