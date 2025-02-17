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
  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() desc1: string = '';
  @Input() desc2: string = '';
  @Input() desc3: string = '';
  @Input() subTitle: string = '';
  @Input() desc4: string = '';
  @Input() navigate!: string;
  @Input() btnText: string = '';
  @Input() imgUrl: string = '';
  @Input() isImageLeft: boolean = true;
}
