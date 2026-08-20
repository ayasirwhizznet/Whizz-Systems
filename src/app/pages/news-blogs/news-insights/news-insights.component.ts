import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsCardComponent } from '@components/news-card/news-card.component';
import { NewsComponent } from '@components/news/news.component';
import { BlogItem, blogList } from '../blogs/blogList';

interface CarouselSlide {
  imgUrl: string;
  date: string;
  tags: string[];
  title: string;
  description: string;
  link: string;
}

interface SeriesFeaturedBlog extends BlogItem {
  description: string;
}

@Component({
  selector: 'app-news-insights',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    BlogTagComponent,
    RouterLink,
    NewsCardComponent,
    NewsComponent,
  ],
  templateUrl: './news-insights.component.html',
  styleUrl: './news-insights.component.scss',
})
export class NewsInsightsComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  intervalId: any;

  seriesFeatured: SeriesFeaturedBlog = {
    imgUrl: 'assets/news/news-insights/next-1.png',
    date: 'March 13, 2026',
    tags: ['Article', 'High-Speed AI Design', 'Signal Integrity'],
    title: 'High-Speed AI Design Challenges & Robust SI Techniques',
    link: '/insights/high-speed-ai-design-si-techniques',
    description:
      'Advanced signal integrity techniques for high-speed AI hardware design',
  };

  seriesSideBlogs: BlogItem[] = [
    {
      imgUrl: 'assets/news/news-insights/next-2.png',
      date: 'March 2, 2026',
      tags: ['Article', 'Interconnect Architecture', 'OCP Compliance'],
      title:
        'Enhancing Performance with Innovative Interconnect Topologies and Custom Solutions',
      link: '/insights/high-throughput-interconnect-topologies',
    },
    {
      imgUrl: 'assets/news/news-insights/next-3.png',
      date: 'July 22, 2025',
      tags: ['AI Hardware', 'Obsolescence Management'],
      title:
        'Future-Proof Architecture and Performance in Next-Generation Systems',
      link: '/insights/future-proof-ai-hardware-architecture',
    },
  ];

  latestBlogs: BlogItem[] = blogList;

  caseStudies: BlogItem[] = [
    {
      imgUrl: 'assets/news/product-3.png',
      date: 'March 13, 2026',
      tags: ['Case Study'],
      title:
        'AMD VPK180 Evaluation Board — Versal Premium Adaptive SoC Platform',
      link: '/case-studies/amd-vpk180',
    },
    {
      imgUrl: 'assets/news/news-insights/case-2.png',
      date: 'July 9, 2024',
      tags: ['Case Study', 'Medical Devices'],
      title:
        'Whizz Systems & Invensify: Engineering a Smart, Reliable, and Efficient Medical Refrigeration System',
      link: '/insights/whitepaper-invensify',
    },
    {
      imgUrl: 'assets/news/news-insights/case-3.png',
      date: 'May 29, 2024',
      tags: ['Case Study', 'Hardware Design'],
      title:
        'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
      link: '/insights/5g-oru-development',
    },
    {
      imgUrl: 'assets/news/blog-3.png',
      date: 'July 9, 2024',
      tags: ['Whitepaper', 'Thermal Management'],
      title:
        'Heatsinks Uncovered: Best Practices for Optimized Thermal Management',
      link: '/insights/heatsink-design-guide',
    },
  ];

  featuredWhitepapers: BlogItem[] = [
    {
      imgUrl: 'assets/news/news-insights/white-1.png',
      date: 'July 9, 2024',
      tags: ['Whitepaper', 'Thermal Management'],
      title:
        'Heatsinks Uncovered: Best Practices for Optimized Thermal Management',
      link: '/insights/heatsink-design-guide',
    },
    {
      imgUrl: 'assets/news/news-insights/white-2.png',
      date: 'May 29, 2024',
      tags: ['Whitepaper', 'High Speed Connectivity'],
      title: 'PCIe-6: Everything You Need to Know',
      link: '/insights/pcie-gen-6-design-guide',
    },
  ];

  /** Latest News carousel — order matches Figma featured set */
  latestNewsBlogs: BlogItem[] = [
    {
        imgUrl: 'assets/news/news-insights/latest-1.png',
        date: 'May 14, 2025',
        tags: ['Article','AI Hardware Design',],
        title: 'NextGen Hardware Design for High-Density, High-Complexity Systems',
        link: '/insights/high-density-ai-hardware-design',
    },
    {
        imgUrl: 'assets/news/news-insights/latest-2.png',
        date: 'March 2, 2026',
        tags: ['Article', 'Interconnect Architecture'],
        title: 'Enhancing Performance with Innovative Interconnect Topologies and Custom Solutions',
        link: '/insights/high-throughput-interconnect-topologies',
    },
    {
        imgUrl: 'assets/news/news-insights/latest-3.png',
        date: 'March 13, 2026',
        tags: ['Article','High-Pin Count Chips'],
        title: 'High-Speed AI Design Challenges & Robust SI Techniques',
        link: '/insights/high-speed-ai-design-si-techniques',
    },
    {
        imgUrl: 'assets/news/news-insights/latest-4.png',
        date: 'May 22, 2026',
        tags: ['Whitepaper','AI Hardware Design'],
        title: 'How Whizz Systems Delivers: End-to-End Product Manufacturing Reliability',
        link: '/insights/end-to-end-product-manufacturing-reliability',
    },
    {
        imgUrl: 'assets/news/product-3.png',
        date: 'Dec 06, 2025',
        tags: ['Case Study'],
        title: 'AMD VPK180 Evaluation Board — Versal Premium Adaptive SoC Platform',
        link: '/case-studies/amd-vpk180',
    },
    {
        imgUrl: 'assets/news/blogs/future-performance/scalability-&-hardware.png',
        date: 'July 22, 2025',
        tags: ['AI Hardware', 'Obsolescence Management'],
        title: 'Future-Proof Architecture and Performance in Next-Generation Systems',
        link: '/insights/future-proof-ai-hardware-architecture',
    },
    {
        imgUrl: 'assets/news/blogs/high-power/key-challenges.png',
        date: 'June 10, 2025',
        tags: ['AI Hardware', 'High Density PCB Design'],
        title: 'Managing High-Power Demands in Next-Generation Hardware',
        link: '/insights/high-power-demand',
    },
    {
        imgUrl: 'assets/news/blog-1.png',
        date: 'May 29, 2024',
        tags: ['Whitepaper', 'High Speed Connectivity'],
        title: 'PCIe-6: Everything You Need to Know',
        link: '/insights/pcie-gen-6-design-guide',
    },
    {
        imgUrl: 'assets/news/blog-2.png',
        date: 'July 9, 2024',
        tags: ['Case Study', 'Hardware Design'],
        title: 'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
        link: '/insights/5g-oru-development',
    },
    {
        imgUrl: 'assets/news/blog-3.png',
        date: 'July 9, 2024',
        tags: ['Whitepaper', 'Thermal Management'],
        title: 'Heatsinks Uncovered: Best Practices for Optimized Thermal Management',
        link: '/insights/heatsink-design-guide',
    },
    {
        imgUrl: 'assets/news/blog-4.png',
        date: 'December 12, 2024',
        tags: ['Case Study', 'Medical Devices'],
        title: 'Engineering Smart Medical Devices: The Invensify Case Study',
        link: '/insights/whitepaper-invensify',
    },
];
  slides: CarouselSlide[] = [
    {
      imgUrl: 'assets/news/news-insights/hero-1.png',
      date: 'May 8, 2026',
      tags: ['Whitepaper', 'Signal Integrity', 'AI Hardware Design'],
      title:
        'How Whizz Systems Delivers: End-to-End Product Manufacturing Reliability',
      description:
        'A comprehensive look at the seven engineering pillars that ensure every product leaving Whizz Systems is built to perform, last and comply.',
      link: '/insights/end-to-end-product-manufacturing-reliability',
    },
    {
      imgUrl: 'assets/news/news-insights/hero-2.png',
      date: 'June 10, 2025',
      tags: ['AI Hardware', 'High Density PCB Design'],
      title: 'Managing High-Power Demands in Next-Generation AI Hardware Design',
      description:
        'Master Power and Performance for AI Hardware Exceeding 1,500 Amps',
      link: '/insights/high-power-demand',
    },
    {
      imgUrl: 'assets/news/news-insights/hero-3.png',
      date: 'May 29, 2024',
      tags: ['Whitepaper', 'High Speed Connectivity'],
      title: 'Whizz Systems Guide to PCIe-6',
      description: 'A comprehensive 101 from our engineering team',
      link: '/insights/pcie-gen-6-design-guide',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.autoSlide();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    const next = (this.currentSlide() + 1) % this.slides.length;
    this.currentSlide.set(next);
    this.resetAutoSlide();
  }

  prevSlide() {
    const prev =
      (this.currentSlide() - 1 + this.slides.length) % this.slides.length;
    this.currentSlide.set(prev);
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    this.resetAutoSlide();
  }

  autoSlide() {
    this.intervalId = setInterval(() => {
      const next = (this.currentSlide() + 1) % this.slides.length;
      this.currentSlide.set(next);
    }, 6000);
  }

  resetAutoSlide() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.autoSlide();
    }
  }
}
