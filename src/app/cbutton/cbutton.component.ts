import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cbutton',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './cbutton.component.html',
  styleUrls: ['./cbutton.component.scss']
})
export class CbuttonComponent {
  @Input() routerLink!: string;
  @Input() heading: string = '';
  @Input() icon: string | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'small';

  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'px-2 py-1 text-sm';
      case 'medium':
        return 'px-[12px] py-[10px] text-md font-semibold'
      case 'large':
        return 'px-[18px] py-[14px] text-lg font-semibold';
      default:
        return 'px-4 py-2 text-base';
    }
  }
}
