import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-core-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-core-services.component.html',
})
export class ServicesCoreServicesComponent {
  @Input() secTitle: string = '';
  @Input() secHeading: string = '';
  @Input() secDesc: string = '';
  @Input() columns: number = 3;
  @Input() cardData: any[] = [];
}
