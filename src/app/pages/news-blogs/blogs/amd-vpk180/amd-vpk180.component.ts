import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';

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

  blogs = [
    {
      imgUrl: 'assets/news/blogs/future-performance/scalability-&-hardware.png',
      date: 'July 22, 2025',
      tags: ['AI Hardware', 'Obsolescence Management'],
      title: 'Future-Proof Architecture and Performance in Next-Generation Systems',
      link: '/news-&-insights/future-architecture-performance',
    },
    {
      imgUrl: 'assets/news/blogs/high-power/key-challenges.png',
      date: 'June 10, 2025',
      tags: ['AI Hardware', 'High Density PCB Design'],
      title: 'Managing High-Power Demands in Next-Generation Hardware',
      link: '/news-&-insights/high-power-demand',
    },
    {
      imgUrl: 'assets/news/blog-6.png',
      date: 'May 14, 2025',
      tags: ['AI Hardware Design', 'High-density PCB design'],
      title: 'NextGen Hardware Design for High-Density, High-Complexity Systems',
      link: '/news-&-insights/hardware-design',
    },
    {
      imgUrl: 'assets/news/blog-1.png',
      date: 'May 29, 2024',
      tags: ['Whitepaper', 'High Speed Connectivity'],
      title: 'PCIe-6: Everything You Need to Know',
      link: '/news-&-insights/whitepaper-pcle6',
    },
    {
      imgUrl: 'assets/news/blog-2.png',
      date: 'July 9, 2024',
      tags: ['Case Study', 'Hardware Design'],
      title: 'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
      link: '/news-&-insights/whitepaper-5g-oru',
    },
    {
      imgUrl: 'assets/news/blog-3.png',
      date: 'July 9, 2024',
      tags: ['Whitepaper', 'Thermal Management'],
      title: 'Heatsinks Uncovered: Best Practices for Optimized Thermal Management',
      link: '/news-&-insights/whitepaper-heatsink',
    }
  ];
}
