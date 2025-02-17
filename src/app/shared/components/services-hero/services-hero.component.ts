import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './services-hero.component.html',
})
export class ServicesHeroComponent {
  @Input() serviceCategory: string = '';
  @Input() serviceTitle: string = '';
  @Input() serviceDesc: string = '';
  @Input() imgUrl: string = '';
  @Input() navigate!: string;
  @Input() btnText: string = '';
}
