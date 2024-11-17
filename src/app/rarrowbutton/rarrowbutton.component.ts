import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rarrowbutton',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './rarrowbutton.component.html',
  styleUrl: './rarrowbutton.component.scss'
})
export class RarrowbuttonComponent {
  @Input() routerLink!: string;
  @Input() icon: string | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'small';

  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'px-2 py-1 text-sm small';
      case 'medium':
        return 'px-[14px] py-[12px] text-md font-semibold medium';
      case 'large':
        return 'px-[14px] py-[18px] text-lg font-semibold large';
      default:
        return 'px-4 py-2 text-base';
    }
  }
}
