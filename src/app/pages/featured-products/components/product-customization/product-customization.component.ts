import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-product-customization',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './product-customization.component.html'
})
export class ProductCustomizationComponent {
@Input() heading:string = '';
@Input() title:string = '';
@Input() desc:string = '';
@Input() btnText:string = '';
@Input() navigate:string = '';
@Input() tagTitle:string = '';
@Input() tagsData:any[] = [];
@Input() customizationsData:any[] = [];
}
