import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { IdeasComponent } from './ideas/ideas.component';
import { TrustComponent } from './trust/trust.component';
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { NewsComponent } from "./news/news.component";
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, ServicesComponent, IdeasComponent, TrustComponent, TestimonialsComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Whizz';
}
