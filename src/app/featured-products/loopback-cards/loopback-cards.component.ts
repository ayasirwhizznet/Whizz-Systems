import { Component } from '@angular/core';
import { CbuttonComponent } from '../../components/cbutton/cbutton.component';
import { ServicesHeroComponent } from '../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';

@Component({
  selector: 'app-loopback-cards',
  standalone: true,
  imports: [CbuttonComponent, ServicesHeroComponent, ServicesIntroComponent],
  templateUrl: './loopback-cards.component.html',
  styleUrl: './loopback-cards.component.scss'
})
export class LoopbackCardsComponent {

}
