import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-marketing',
  standalone: true,
  imports: [],
  templateUrl: './product-marketing.component.html'
})
export class ProductMarketingComponent {
@Input() slogan: string = '';
}
