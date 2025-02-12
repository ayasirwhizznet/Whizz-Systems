import { Component, Input } from '@angular/core';
import { CbuttonComponent } from '../cbutton/cbutton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-case-study',
  standalone: true,
  imports: [CbuttonComponent, CommonModule],
  templateUrl: './services-case-study.component.html',
})
export class ServicesCaseStudyComponent {
  @Input() secTitle: string = '';
  @Input() secHeading: string = '';
  @Input() secDesc: string = '';
  @Input() imgUrl: string = '';
  @Input() routerLink!: string;
  @Input() btnText: string = '';
}
