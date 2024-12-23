import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cbutton3',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cbutton3.component.html',
  styleUrl: './cbutton3.component.scss'
})
export class Cbutton3Component {
  @Input() routerLink!: string;
  @Input() heading: string = '';
  @Input() icon: string | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'small';

  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'px-[10x] py-[12px] text-base font-semibold';
      case 'medium':
        return 'px-[18px] py-[14px] text-base font-semibold'
      case 'large':
        return 'px-[18px] py-[14px] text-lg font-semibold';
      default:
        return 'px-4 py-2 text-base';
    }
  }
}
