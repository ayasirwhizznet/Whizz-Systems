import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-larrowbutton',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './larrowbutton.component.html',
  styleUrl: './larrowbutton.component.scss'
})
export class LarrowbuttonComponent {
  @Input() routerLink!: string;
  @Input() icon: string | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'small';


  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'px-2 sm:px-[14px] 3xl:px-[18px] py-1 sm:py-[6px] 3xl:py-[14px] text-[10px] text-xs 3xl:text-sm font-semibold border border-teal2';
      case 'medium':
        return 'px-2 sm:px-[14px] 3xl:px-[18px] py-[6px] sm:py-[14px] 3xl:py-[14px] border border-teal2'
      case 'large':
        return 'px-2 sm:px-[14px] 3xl:px-[18px] py-2 sm:py-3 3xl:py-[14px] text-sm 3xl:text-lg font-medium 3xl:font-semibold border border-teal2';
      default:
        return 'px-4 py-2 text-base';
    }
  }
}
