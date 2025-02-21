import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';
import { BlogTagComponent } from '../blog-tag/blog-tag.component';

@Component({
  selector: 'app-featuredblog',
  standalone: true,
  imports: [RouterLink, CommonModule, NewsCardComponent, BlogTagComponent],
  templateUrl: './featuredblog.component.html',
})
export class FeaturedblogComponent {
  @Input() date: string | null = null;
  @Input() blogTitle: string | null = null;

  blogData: any[] = [
    {
      imgUrl: 'assets/news/featured-blog.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imgUrl: 'assets/news/featured-blog.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imgUrl: 'assets/news/featured-blog.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
  ];
}
