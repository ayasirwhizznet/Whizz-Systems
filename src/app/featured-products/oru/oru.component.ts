import { Component } from '@angular/core';
import { CbuttonComponent } from '../../components/cbutton/cbutton.component';
import { ServicesHeroComponent } from '../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';

@Component({
  selector: 'app-oru',
  standalone: true,
  imports: [CbuttonComponent, ServicesHeroComponent, ServicesIntroComponent],
  templateUrl: './oru.component.html',
  styleUrl: './oru.component.scss'
})
export class OruComponent {

}
