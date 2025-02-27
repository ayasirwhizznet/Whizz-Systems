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

  blogs: any[] = [
    {
      imgUrl: 'assets/news/featured-blog1.png',
      date: 'February 11, 2025',
      tags: ['Hardware Design','Telecom Engineering'],
      title: 'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
      link: '/news-&-insights/whitepaper-5g-oru'
    },
    {
      imgUrl: 'assets/news/featured-blog2.png',
      date: 'July 9, 2024',
      tags: ['Electronics Cooling','Thermal Management'],
      title: 'Heatsinks Uncoverd: Best Practices For Optimized Thermal Management',
      link: '/404'
    },
    {
      imgUrl: 'assets/news/featured-blog3.png',
      date: 'July 9, 2024',
      tags: ['High-Speed Connectivity','Mechanical Design'],
      title: 'Whizz Systems PCIe Gen 6',
      link: '/404'
    },
    {
      imgUrl: 'assets/news/featured-blog3.png',
      date: 'July 9, 2024',
      tags: ['High-Speed Connectivity','Mechanical Design'],
      title: 'Whizz Systems PCIe Gen 6',
      link: '/404'
    },
  ];
}
