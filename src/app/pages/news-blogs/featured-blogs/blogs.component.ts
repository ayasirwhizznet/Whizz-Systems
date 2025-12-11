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
      imgUrl: 'assets/news/blogs/amd-vpk180/strategic.png',
      date: 'Dec 06, 2025',
      tags: ['Case Study'],
      title:
        'AMD VPK180 Evaluation Board — Versal Premium Adaptive SoC Platform',
      link: '/news-&-insights/amd-vpk180',
    },
    {
      imgUrl: 'assets/news/blogs/future-performance/scalability-&-hardware.png',
      date: 'July 22, 2025',
      tags: ['AI Hardware', 'Modular Systems', 'Obsolescence Management'],
      title: 'Future-Proof Architecture and Performance in Next-Generation Systems',
      link: '/news-&-insights/future-architecture-performance',
    },
    {
      imgUrl: 'assets/news/blogs/high-power/key-challenges.png',
      date: 'June 10, 2025',
      tags: ['AI Hardware','High Density PCB Design','High-Pin Count Chips'],
      title: 'Managing High-Power Demands in Next-Generation Hardware',
      link: '/news-&-insights/high-power-demand',
    },
    {
      imgUrl: 'assets/news/blog-6.png',
      date: 'May 14, 2025',
      tags: ['AI Hardware Design','High-density PCB design','High-pin count chips'],
      title: 'NextGen Hardware Design for High-Density, High-Complexity Systems',
      link: '/news-&-insights/hardware-design',
    },
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
      title: 'Whizz Systems PCIe Gen 6 Insights',
      link: '/news-&-insights/whitepaper-pcle6',
    },
    {
      imgUrl: 'assets/news/featured-blog4.png',
      date: 'July 9, 2024',
      tags: ['Case Study', 'Medical Devices'],
      title: ' Whizz Systems & Invensify: Engineering a Smart, Reliable, and Efficient Medical Refrigeration System',
      link: '/news-&-insights/whitepaper-invensify'
    }
  ];
}
