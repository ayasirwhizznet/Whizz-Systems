import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-tag.component.html',
})
export class BlogTagComponent {
  @Input() text: string = '';
  @Input() textColor: string = '';
  @Input() borderColor: string = '';
  @Input() borderRadius: string = '';
}
