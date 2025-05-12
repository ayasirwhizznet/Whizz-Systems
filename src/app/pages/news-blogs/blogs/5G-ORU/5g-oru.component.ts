import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { RouterLink } from '@angular/router';
import { NewsComponent } from '@components/news/news.component';

@Component({
  selector: 'app-5g-oru',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedButton,
    BlogTagComponent,
    ButtonComponent,
    RouterLink,
    NewsComponent
],
  templateUrl: './5g-oru.component.html',
})
export class ORUComponent {
  sectionVisibility: any = {
    signalIntegrity: true,
    power: true,
  };

  toggleVisibility(section: string) {
    this.sectionVisibility[section] = !this.sectionVisibility[section];
  }

  cards: any[] = [
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
    {
      imageUrl: 'assets/news/blogs/blog-bottom/pcle6.png',
      link: '/news-&-insights/whitepaper-pcle6',
      tags: ['Heatsink','Thermal Management'],
      date: 'May 29, 2024',
      title: 'PCIe-6: Everything You Need To Know',
    }
  ];

  blogs: any[] = [
    {
      imgUrl: 'assets/news/blog-1.png',
      date: 'May 29, 2024',
      tags: ['Whitepaper', 'High Speed Connectivity'],
      title: 'PCIe-6: Everything You Need to Know',
      link: '/news-&-insights/whitepaper-pcle6',
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
