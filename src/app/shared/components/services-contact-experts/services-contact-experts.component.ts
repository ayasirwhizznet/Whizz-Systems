import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-contact-experts',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './services-contact-experts.component.html',
})
export class ServicesContactExpertsComponent {
  @Input() slogan: string = '';
  @Input() navigate!: string;
  @Input() btnText: string = '';
  @Input() desc: string = '';
}
