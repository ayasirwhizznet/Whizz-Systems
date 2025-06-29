import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-benefits.component.html',
})
export class ServicesBenefitsComponent {
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() btnText: string = '';
  @Input() columns!: number;
  @Input() note: string = '';
  @Input() noteDesc: string = '';
  @Input() benefitsData: any[] = [];
  @Input() cutCard: boolean = false;
}
