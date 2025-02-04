import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';

@Component({
  selector: 'app-loopback-cards',
  standalone: true,
  imports: [ServicesHeroComponent, ServicesIntroComponent],
  templateUrl: './loopback-cards.component.html'
})
export class LoopbackCardsComponent {

}
