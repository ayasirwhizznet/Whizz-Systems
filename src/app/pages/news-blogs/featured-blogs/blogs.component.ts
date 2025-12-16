import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsCardComponent } from '@components/news-card/news-card.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { blogList } from '../blogs/blogList';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CommonModule,
    NewsCardComponent,
    BlogTagComponent,
  ],
  templateUrl: './blogs.component.html',
})
export class BlogsComponent {
  blogs = blogList;
}

