import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';

@Component({
  selector: 'app-oru',
  standalone: true,
  imports: [ServicesHeroComponent, ServicesIntroComponent],
  templateUrl: './oru.component.html',
  styleUrl: './oru.component.scss'
})
export class OruComponent {

}
