import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';

@Component({
  selector: 'app-invensify',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, AnimatedButton, BlogTagComponent, NewsComponent],
  templateUrl: './invensify.component.html'
})
export class InvensifyComponent {
  blogs: any[] = [
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
    // {
    //   imgUrl: 'assets/news/blogs/hardwareDesign/hero.png',
    //   date: 'April 26, 2025',
    //   tags: ['High-Density Hardware Design', 'AI System Thermal','Signal Management'],
    //   title: 'NextGen Hardware Design for High-Density, High-Complexity Systems',
    //   link: '/news-&-insights/hardware-design',
    // },
  ];
  tags = ['Medical Devices','PCB Layout','Hardware Design'];

  overviews = ['<b>Precise Temperature Control:</b> Maintains optimal conditions for pharmaceutical integrity.', '<b>Energy Efficiency:</b> Consumes less than 0.24 kWh per day.', '<b>Robust Construction:</b> A 12-liter payload capacity in a single, durable enclosure.', '<b>Advanced Connectivity:</b> Integrated LTE, GPS, and Bluetooth for real-time monitoring.', '<b>Rapid Cooling & Charging:</b> Incorporates a high-performance liquid cooling system and phase change material (PCM) to extend thermal stability.'];

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
      imageUrl: 'assets/news/blogs/blog-bottom/pcle6.png',
      link: '/news-&-insights/whitepaper-pcle6',
      tags: ['Heatsink','Thermal Management'],
      date: 'May 29, 2024',
      title: 'PCIe-6: Everything You Need To Know',
    }
  ];

}
