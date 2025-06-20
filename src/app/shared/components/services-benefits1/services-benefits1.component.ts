import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-benefits1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-benefits1.component.html',
})
export class ServicesBenefits1Component {
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() btnText: string = '';
  @Input() benefitsData: any[] = [];
}