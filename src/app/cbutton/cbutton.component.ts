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
  // Input properties
  @Input() routerLink!: string;
  @Input() heading: string = '';
  @Input() icon: string | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'small'; // Default to 'medium'

  // Getter to apply appropriate Tailwind classes based on the size
  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'px-3 py-1 text-sm';  // Smaller padding and text size
      case 'medium':
        return 'px-5 py-3 text-md'; // Default size
      case 'large':
        return 'px-6 py-3 text-lg';   // Larger padding and text size
      default:
        return 'px-4 py-2 text-base'; // Fallback (medium)
    }
  }
}
