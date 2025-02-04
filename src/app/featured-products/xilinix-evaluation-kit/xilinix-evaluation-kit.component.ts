import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';

@Component({
  selector: 'app-xilinix-evaluation-kit',
  standalone: true,
  imports: [ServicesHeroComponent, ServicesIntroComponent],
  templateUrl: './xilinix-evaluation-kit.component.html'
})
export class XilinixEvaluationKitComponent {

}
