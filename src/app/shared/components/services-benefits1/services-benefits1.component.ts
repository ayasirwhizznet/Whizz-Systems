import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-services-benefits1',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './services-benefits1.component.html',
})
export class ServicesBenefits1Component {
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() btnText: string = '';
  @Input() navigate: string = '';
  @Input() benefitsData: any[] = [];
}