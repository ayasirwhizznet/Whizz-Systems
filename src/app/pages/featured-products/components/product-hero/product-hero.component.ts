import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-product-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-hero.component.html'
})
export class ProductHeroComponent {
@Input() productCategory: string = '';
@Input() productName: string = '';
@Input() productDesc: string = '';
@Input() imgUrl: string = '';
@Input() navigate: string = '';
@Input() btnText: string = '';
}
