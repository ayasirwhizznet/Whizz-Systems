import { Component } from '@angular/core';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { FeaturedblogComponent } from '../../components/featured-blog/featuredblog.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    FeaturedblogComponent,
    NewsCardComponent,
    ButtonComponent,
    CommonModule,
  ],
  templateUrl: './blogs.component.html',
})
export class BlogsComponent {
  isBlogVisible: boolean = false;

  loadBlogs(): void {
    this.isBlogVisible = !this.isBlogVisible;
  }

  cards: any[] = [
    {
      imageUrl: 'assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
  ];
}
