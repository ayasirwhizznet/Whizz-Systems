import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-services-contact-experts',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './services-contact-experts.component.html',
})
export class ServicesContactExpertsComponent {
  @Input() secHeading: string = '';
  @Input() secDesc: string = '';
  @Input() routerLink!: string;
  @Input() btnText: string = '';
}
