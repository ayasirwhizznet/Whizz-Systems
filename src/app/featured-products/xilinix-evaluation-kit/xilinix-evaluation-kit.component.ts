import { Component } from '@angular/core';
import { CbuttonComponent } from '../../components/cbutton/cbutton.component';
import { ServicesHeroComponent } from '../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';

@Component({
  selector: 'app-xilinix-evaluation-kit',
  standalone: true,
  imports: [CbuttonComponent, ServicesHeroComponent, ServicesIntroComponent],
  templateUrl: './xilinix-evaluation-kit.component.html',
  styleUrl: './xilinix-evaluation-kit.component.scss'
})
export class XilinixEvaluationKitComponent {

}
