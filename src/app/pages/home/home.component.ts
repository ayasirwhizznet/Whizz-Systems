import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { ServicesComponent } from '../../services/services.component';
import { IdeasComponent } from '../../ideas/ideas.component';
import { TrustComponent } from '../../trust/trust.component';
import { TestimonialsComponent } from '../../testimonials/testimonials.component';
import { NewsComponent } from '../../news/news.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeroComponent, ServicesComponent, IdeasComponent, TrustComponent, TestimonialsComponent, NewsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
