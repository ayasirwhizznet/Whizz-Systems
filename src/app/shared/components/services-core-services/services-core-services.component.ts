import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-core-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-core-services.component.html',
})
export class ServicesCoreServicesComponent {
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() columns!: number;
  @Input() coreServicesData: any[] = [];
}
