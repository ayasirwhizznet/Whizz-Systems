import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsCardComponent } from '@components/news-card/news-card.component';

@Component({
  selector: 'app-hardware-design',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedButton,
    BlogTagComponent,
    ButtonComponent,
    NewsCardComponent,
    RouterLink,
  ],
  templateUrl: './hardware-design.component.html',
  styleUrl: './hardware-design.component.scss',
})
export class HardwareDesignComponent {
  tags = [
    'High-Density Hardware Design',
    'AI System Thermal',
    'Signal Management',
  ];

  cards: any[] = [
    {
      imageUrl: 'assets/news/blogs/blog-bottom/5g.png',
      link: '/news-&-insights/whitepaper-5g-oru',
      tags: ['Case Study', 'Hardware Design', 'Telecom Engineering'],
      date: 'September  05, 2020',
      title:
        'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
    },
    {
      imageUrl: 'assets/news/blogs/blog-bottom/heatsink.png',
      link: '/news-&-insights/whitepaper-heatsink',
      tags: ['Heatsink', 'Thermal Management'],
      date: 'July 09, 2024',
      title: 'Heatsinks: Considerations, guidance, and best practices.',
    },
    {
      imageUrl: 'assets/news/blogs/blog-bottom/invensify.png',
      link: '/news-&-insights/whitepaper-invensify',
      tags: ['Case Study', 'Medical Devices'],
      date: 'December 12, 2024',
      title: 'Developing Smart Medical Devices: The Invensify Case Study',
    },
  ];

  points: any[] = [
    'The Complexity Behind the AI Hardware',
    'Key Challenges in High-Density Systems',
    'Whizz Systems’s Approach and Expertise',
    'Best Practices in Action',
    'Key Considerations for Customers'
  ];

  pinCounts:any[] = [
    'Pin configuration,',
    'Signal routing, and',
    'Thermal management'
  ]
  signals1:any[] = [
    'Data corruption',
    'Reduced System Performance.'
  ]
  signals2:any[] = [
    'Impedance-controlled routing',
    'Precisely optimized layouts.'
  ]
  optimized:any[] = [
    'Reduce the risk of signal crosstalk',
    'Enable reliable data transmission.'
  ]
  robust:any[] = [
    '<b>Efficient power delivery</b> across densely populated boards',
    '<b>Mitigating the risk of thermal issues</b>'
  ]
  advanced:any[] = [
    'Run at lower temperatures',
    'Prolong operational  life',
    'Improves overall reliability'
  ]

  considerations:any[] = [
    {
      title: '1. Prioritizing Signal Integrity',
      desc1: 'Signal integrity remains a primary concern; effective design must <b>minimize interference<b> and <b>maintain data quality across densely packed components</b>, especially during high-speed data transfers. ',
      desc2: 'A slight disruption in the signal can cause severe performance degradation, so choices must be made wisely.'
    },
    {
      title: '2 . Optimizing Ball Maps and Pin Counts ',
      desc1: 'Optimizing the ball map and pin configurations is crucial for managing high pin counts. Companies should work with design partners that have a proven track record with <b>complex layouts that minimize crosstalk</b> and <b>improve data transfer reliability</b>. This know-how is necessary in order to maintain system compatibility, with designs growing in complexity.'
    },
    {
      title: '3 . Ensuring Efficient Power Distribution',
      desc1: 'Power distribution is another essential factor, particularly as AI hardware becomes more powerful. Efficient power flow across densely populated boards <b>reduces the risk of thermal issues</b> and <b>supports system reliability</b>. Partnering with a design specialist who excels in advanced power management can prevent costly delays and inefficiencies associated with thermal hotspots.'
    },
    {
      title: '4 . Adhering to Industry Standards',
      desc1: 'It is extremely important for AI hardware companies to follow the standards of the industry in order to produce compliant and competitive products. There are standards such as the <b>Open Compute Project (OCP)</b> which guarantees interoperability and reliability so that companies can plug their hardware into any system. Collaborating with a specialist like Whizz Systems can help address these considerations effectively, as our team brings both experience and insight into designing solutions that meet these demands with precision.'
    },
  ]
  
}
