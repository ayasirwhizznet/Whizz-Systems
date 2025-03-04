import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-services-benefits',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './services-benefits.component.html',
})
export class ServicesBenefitsComponent {
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() btnText: string = '';
  @Input() navigate: string = '';
  @Input() columns!: number;
  @Input() benefitsData: any[] = [];
  @Input() cutCard: boolean = false;
}
