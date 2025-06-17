import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { ServicesComponent } from '@components/service/services.component';
import { IdeasComponent } from '@components/ideas/ideas.component';
import { TrustComponent } from '@components/trust/trust.component';
import { TestimonialsComponent } from '@components/testimonials/testimonials.component';
import { NewsComponent } from '@components/news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    IdeasComponent,
    TrustComponent,
    TestimonialsComponent,
    NewsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  blogs: any[] = [
    {
      imgUrl: 'assets/news/blogs/high-power/key-challenges.png',
      date: 'June 10, 2025',
      tags: ['AI Hardware','High Density PCB Design'],
      title: 'Managing High-Power Demands in Next-Generation Hardware',
      link: '/news-&-insights/high-power-demand',
    },
    {
      imgUrl: 'assets/news/blog-6.png',
      date: 'May 14, 2025',
      tags: ['AI Hardware Design','High-density PCB design'],
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
      title:
        'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
      link: '/news-&-insights/whitepaper-5g-oru',
    },
    {
      imgUrl: 'assets/news/blog-3.png',
      date: 'July 9, 2024',
      tags: ['Whitepaper', 'Thermal Management'],
      title:
        'Heatsinks Uncovered: Best Practices for Optimized Thermal Management',
      link: '/news-&-insights/whitepaper-heatsink',
    },
    {
      imgUrl: 'assets/news/blog-4.png',
      date: 'December 12, 2024',
      tags: ['Case Study', 'Medical Devices'],
      title: 'Engineering Smart Medical Devices: The Invensify Case Study',
      link: '/news-&-insights/whitepaper-invensify',
    }
  ];
}
