import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-benefits1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-benefits1.component.html',
  styleUrl: './services-benefits1.component.scss'
})
export class ServicesBenefits1Component {
@Input() secTitle:string = '';
@Input() secHeading:string = '';
@Input() customStyle:boolean = false;
@Input() cardData:any[] = [];

// isEven(arr:any) {
//   return arr.length % 2 === 0 ? true : false;
// }
}
