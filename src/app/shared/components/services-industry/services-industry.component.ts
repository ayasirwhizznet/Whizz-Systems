import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-industry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-industry.component.html',
})
export class ServicesIndustryComponent {
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() columns!: number;
  @Input() indusryStandsData: any[] = [];
}