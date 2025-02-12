import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-benefits.component.html',
})
export class ServicesBenefitsComponent {
  @Input() secTitle: string = '';
  @Input() secHeading: string = '';
  @Input() customStyle: boolean = false;
  @Input() cardData: any[] = [];
}
