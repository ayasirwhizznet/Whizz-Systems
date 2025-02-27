import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogTagComponent } from '../blog-tag/blog-tag.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, BlogTagComponent, RouterLink],
  templateUrl: './news-card.component.html',
})
export class NewsCardComponent {
  @Input() imageUrl: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() tags: string[] = [];
  @Input() navigate: string = '';
}
