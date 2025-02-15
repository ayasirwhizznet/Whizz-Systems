import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-industry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-industry.component.html',
})
export class ServicesIndustryComponent {
  @Input() secTitle: string = '';
  @Input() secHeading: string = '';
  @Input() secDesc: string = '';
  @Input() columns: number = 3;
  @Input() cardData: any[] = [];
}