import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsCardComponent } from '@components/news-card/news-card.component';
import { NewsComponent } from '@components/news/news.component';

@Component({
  selector: 'app-pcle-6',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, AnimatedButton, BlogTagComponent, NewsComponent],
  templateUrl: './pcle-6.component.html'
})
export class Pcle6Component {
  tags = ['Whitepapper','High-Speed Connectivity','Mechanical Design'];


  cards: any[] = [
    {
      imageUrl: 'assets/news/blogs/blog-bottom/5g.png',
      link: '/news-&-insights/whitepaper-5g-oru',
      tags: ['Case Study','Hardware Design','Telecom Engineering'],
      date: 'September  05, 2020',
      title: 'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
    },
    {
      imageUrl: 'assets/news/blogs/blog-bottom/heatsink.png',
      link: '/news-&-insights/whitepaper-heatsink',
      tags: ['Heatsink','Thermal Management'],
      date: 'July 09, 2024',
      title: 'Heatsinks: Considerations, guidance, and best practices.',
    },
    {
      imageUrl: 'assets/news/blogs/blog-bottom/invensify.png',
      link: '/news-&-insights/whitepaper-invensify',
      tags: ['Case Study','Medical Devices'],
      date: 'December 12, 2024',
      title: 'Developing Smart Medical Devices: The Invensify Case Study',
    },
  ];

  blogs: any[] = [
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
    },
    // {
    //   imgUrl: 'assets/news/blogs/hardwareDesign/hero.png',
    //   date: 'April 26, 2025',
    //   tags: ['High-Density Hardware Design', 'AI System Thermal','Signal Management'],
    //   title: 'NextGen Hardware Design for High-Density, High-Complexity Systems',
    //   link: '/news-&-insights/hardware-design',
    // },
  ];
}
