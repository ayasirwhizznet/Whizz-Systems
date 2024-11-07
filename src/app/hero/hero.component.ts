import { Component } from '@angular/core';
import { CbuttonComponent } from '../cbutton/cbutton.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CbuttonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
