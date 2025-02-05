import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cbutton1',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cbutton1.component.html',
  styleUrl: './cbutton1.component.scss'
})
export class Cbutton1Component {
  @Input() routerLink!: string;
  @Input() heading: string = '';
  @Input() icon: string | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'small';

  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'px-[16px] py-[10px] text-base font-semibold';
      case 'medium':
        return 'px-[18px] py-[14px] text-base font-semibold'
      case 'large':
        return 'px-[18px] py-[14px] text-lg font-semibold';
      default:
        return 'px-4 py-2 text-base';
    }
  }
}
