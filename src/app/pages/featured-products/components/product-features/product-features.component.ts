import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-features.component.html'
})
export class ProductFeaturesComponent {
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() featuresData: { [key: string]: string[] } = {};
}
