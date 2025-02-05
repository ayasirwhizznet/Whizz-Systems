import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cbutton4',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './cbutton4.component.html',
  styleUrl: './cbutton4.component.scss'
})
export class Cbutton4Component {
  @Input() routerLink!: string;
  @Input() heading: string = '';
  @Input() icon: string | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'small';

  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'px-2 py-1 text-sm';
      case 'medium':
        return 'px-[18px] py-[14px] text-base font-semibold border-[1px] border-teal2'
      case 'large':
        return 'px-[18px] py-[11px] text-lg font-medium border-[1px] border-teal2';
      default:
        return 'px-4 py-2 text-base';
    }
  }
}
