import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-industry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-industry.component.html',
  styleUrl: './services-industry.component.scss'
})
export class ServicesIndustryComponent {
@Input() secTitle:string = '';
@Input() secHeading:string = '';
@Input() secDesc:string = '';
@Input() cardData:any[] = [];
}
