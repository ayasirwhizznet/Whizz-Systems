import { Component, Input } from '@angular/core';
import { CbuttonComponent } from '../cbutton/cbutton.component';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [CbuttonComponent],
  templateUrl: './services-hero.component.html',
  styleUrl: './services-hero.component.scss'
})
export class ServicesHeroComponent {
  @Input() category: string = '';
  @Input() heading: string = '';
  @Input() desc: string = '';
  @Input() imgUrl: string = '';
  @Input() routerLink!: string;
  @Input() btnText: string = '';
}
