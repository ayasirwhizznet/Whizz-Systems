import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { ServicesComponent } from '../components/services/services.component';
import { IdeasComponent } from '../components/ideas/ideas.component';
import { TrustComponent } from '../components/trust/trust.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { NewsComponent } from '../components/news/news.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, IdeasComponent, TrustComponent, TestimonialsComponent, NewsComponent, FooterComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
