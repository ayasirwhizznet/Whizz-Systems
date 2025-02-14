import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './product-overview.component.html'
})
export class ProductOverviewComponent {
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() desc1: string = '';
  @Input() desc2: string = '';
  @Input() desc3: string = '';
  @Input() btnText: string = '';
  @Input() imgUrl: string = '';
  @Input() navigate: string = '';
}
