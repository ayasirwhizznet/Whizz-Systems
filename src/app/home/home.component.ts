import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { ServicesComponent } from '../components/service/services.component';
import { IdeasComponent } from '../components/ideas/ideas.component';
import { TrustComponent } from '../components/trust/trust.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { NewsComponent } from '../components/news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    IdeasComponent,
    TrustComponent,
    TestimonialsComponent,
    NewsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
