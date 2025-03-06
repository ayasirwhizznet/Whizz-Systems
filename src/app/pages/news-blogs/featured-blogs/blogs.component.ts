import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsCardComponent } from '@components/news-card/news-card.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';

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
  blogs: any[] = [
    {
      imgUrl: 'assets/news/featured-blog1.png',
      date: 'February 11, 2025',
      tags: ['Hardware Design', 'Telecom Engineering'],
      title:
        'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
      link: '/news-&-insights/whitepaper-5g-oru',
    },
    {
      imgUrl: 'assets/news/featured-blog2.png',
      date: 'July 9, 2024',
      tags: ['Electronics Cooling', 'Thermal Management'],
      title:
        'Heatsinks Uncoverd: Best Practices For Optimized Thermal Management',
      link: '/news-&-insights/whitepaper-heatsink',
    },
    {
      imgUrl: 'assets/news/featured-blog3.png',
      date: 'July 9, 2024',
      tags: ['High-Speed Connectivity', 'Mechanical Design'],
      title: 'Whizz Systems PCIe Gen 6',
      link: '/news-&-insights/whitepaper-pcle6',
    },
    {
      imgUrl: 'assets/news/featured-blog3.png',
      date: 'July 9, 2024',
      tags: ['Heatsink', 'Thermal Management'],
      title: 'Invensify Blog Title that Can Fit On Two Lines',
      link: '/news-&-insights/whitepaper-invensify'
    }
  ];
}
