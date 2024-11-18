import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cbutton2',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './cbutton2.component.html',
  styleUrls: ['./cbutton2.component.scss']
})
export class Cbutton2Component {
  @Input() routerLink!: string;
  @Input() heading: string = '';
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

  isHovered:boolean = false;
  icon:string | null = '../../assets/news/right-arrow.svg';  // default icon
  hoverIcon:string = '../../assets/news/rwhite-arrow.png'; // hover icon
}