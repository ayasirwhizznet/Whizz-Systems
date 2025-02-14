import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-case-study',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
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
