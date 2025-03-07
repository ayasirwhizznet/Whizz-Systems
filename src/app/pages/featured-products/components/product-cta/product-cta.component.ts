import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-product-cta',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-cta.component.html'
})
export class ProductCtaComponent {
@Input() slogan: string = '';
@Input() btnText: string = '';
@Input() navigate: string = '';
@Input() icon:string = '';
}
