import { Component, Input } from '@angular/core';
import { CbuttonComponent } from '../cbutton/cbutton.component';

@Component({
  selector: 'app-services-contact-experts',
  standalone: true,
  imports: [CbuttonComponent],
  templateUrl: './services-contact-experts.component.html',
})
export class ServicesContactExpertsComponent {
  @Input() secHeading: string = '';
  @Input() secDesc: string = '';
  @Input() routerLink!: string;
  @Input() btnText: string = '';
}
