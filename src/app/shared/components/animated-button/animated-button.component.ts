import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animated-button',
  standalone: true,
  imports: [NgIf, RouterLink, CommonModule],
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.scss'],
})
export class AnimatedButton {
  @Input() routerLink!: string;
  @Input() heading: string = '';
  @Input() icon: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() bg!: string;

  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'px-2 sm:px-[14px] 3xl:px-[18px] py-1 sm:py-[6px] 3xl:py-[14px] text-[10px] text-xs 3xl:text-sm font-semibold border border-teal2';
      case 'medium':
        return 'px-2 sm:px-[14px] 3xl:px-[18px] py-[6px] sm:py-[10px] 3xl:py-[14px] text-sm 3xl:text-base font-medium 3xl:font-semibold border border-teal2';
      case 'large':
        return 'px-2 sm:px-[14px] 3xl:px-[18px] py-2 sm:py-3 3xl:py-[14px] text-sm 3xl:text-lg font-medium 3xl:font-semibold border border-teal2';
      default:
        return 'px-2 sm:px-[14px] 3xl:px-[18px] py-1 sm:py-[6px] 3xl:py-[14px] text-[10px] text-xs 3xl:text-sm font-semibold border border-teal2';
    }
  }
}
