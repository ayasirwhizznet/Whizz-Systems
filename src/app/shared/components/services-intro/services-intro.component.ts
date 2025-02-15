import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-services-intro',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './services-intro.component.html',
})
export class ServicesIntroComponent {
  @Input() secTitle: string = '';
  @Input() secHeading: string = '';
  @Input() secDesc1: string = '';
  @Input() secDesc2: string = '';
  @Input() secDesc3: string = '';
  @Input() secSubHeading: string = '';
  @Input() secDesc4: string = '';
  @Input() routerLink!: string;
  @Input() btnText: string = '';
  @Input() imgUrl: string = '';
  @Input() isImageFirst: boolean = true;
}
