import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { blogList } from '../../news-blogs/blogs/blogList';

@Component({
  selector: 'app-amd-vpk180',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonComponent,
    BlogTagComponent,
    NewsComponent
  ],
  templateUrl: './amd-vpk180.component.html',
})
export class AmdVpk180Component {
  tags = ['Case Study'];
  blogs = blogList;
}
