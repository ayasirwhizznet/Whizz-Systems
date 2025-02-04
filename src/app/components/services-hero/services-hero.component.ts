import { Component, Input } from '@angular/core';
import { CbuttonComponent } from '../cbutton/cbutton.component';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [CbuttonComponent],
  templateUrl: './services-hero.component.html'
})
export class ServicesHeroComponent {
  @Input() category: string = '';
  @Input() heading: string = '';
  @Input() desc: string = '';
  @Input() imgUrl: string = '';
  @Input() navigate!: string;
  @Input() btnText: string = '';
}
