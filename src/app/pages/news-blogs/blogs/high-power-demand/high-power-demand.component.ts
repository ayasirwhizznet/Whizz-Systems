import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-high-power-demand',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedButton,
    BlogTagComponent,
    ButtonComponent,
    RouterLink,
    NewsComponent,
  ],
  templateUrl: './high-power-demand.component.html',
})
export class HighPowerDemandComponent implements OnInit, AfterViewInit, OnDestroy {
  tags = ['AI Hardware', 'High Density PCB Design', 'High-Pin Count Chips'];

  blogs = [
    {
      imgUrl: 'assets/news/blogs/future-performance/scalability-&-hardware.png',
      date: 'July 22, 2025',
      tags: ['AI Hardware', 'Obsolescence Management'],
      title: 'Future-Proof Architecture and Performance in Next-Generation Systems',
      link: '/news-&-insights/future-architecture-performance',
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
    },
    {
      imgUrl: 'assets/news/blog-4.png',
      date: 'December 12, 2024',
      tags: ['Case Study', 'Medical Devices'],
      title: 'Engineering Smart Medical Devices: The Invensify Case Study',
      link: '/news-&-insights/whitepaper-invensify',
    },
  ];

  optimized = ['Minimize IR drops', 'Ensure consistent, stable power delivery across the board'];
  layout = ['Trace widths', 'Via placements', 'Power distribution planes'];
  robust = ['Heat sinks', 'Thermal vias', 'Vapor chambers', 'Liquid cooling systems'];

  advanced = [
    'Ensure a robust power delivery network (PDN) design to <b>minimize voltage drops</b> and maintain stable power across the system.',
    'Design for efficiency to minimize power loss and maximize performance.',
    'Ensure system scalability to accommodate growing power demands over time.',
    'Incorporate fail-safe mechanisms for power regulation and temperature control to enhance reliability.',
    'Utilize advanced thermal management techniques like liquid cooling, thermal vias, and vapor chambers to manage heat in high-power designs.',
    'Choose materials with superior thermal conductivity and implement effective heat dissipation strategies to improve component lifespan and reduce thermal stress.',
    'Assess and test power systems under real-world conditions to identify potential vulnerabilities.',
    'Focus on minimizing electromagnetic interference (EMI) and ensuring electromagnetic compatibility (EMC).',
    'Consider environmental factors such as humidity and temperature variations for more resilient hardware solutions.',
    'Adhere to industry standards for safety, performance, and compatibility to ensure system integration with other platforms.',
    'Collaborate with experts skilled in optimizing layout, component selection, and managing high-current systems to reduce power losses and prevent instability due to voltage fluctuations.',
  ];

  partner = [
    'Optimize your next board',
    'Solve your power delivery challenges',
    'Help you hit performance, thermal, and compliance targets faster'
  ];

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  currentFragment: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Update meta tag for sharing
      const url = encodeURIComponent(window.location.href);
      this.meta.updateTag({ property: 'og:url', content: url });
    }

    // Fragment changes
    this.fragmentSubscription = this.route.fragment.subscribe(fragment => {
      if (isPlatformBrowser(this.platformId) && fragment) {
        this.currentFragment = fragment;
        this.scrollToCategory(fragment);
      }
    });

    // Handle navigation changes
    this.navigationSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          const fragment = this.route.snapshot.fragment;
          if (fragment && fragment !== this.currentFragment) {
            this.currentFragment = fragment;
            this.scrollToCategory(fragment);
          }
        }
      });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const links = document.querySelectorAll('.link-to-power');
      links.forEach(link => {
        link.addEventListener('click', () => {
          this.router.navigate(['/services/engineering-design/power-delivery-network-simulation']);
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.fragmentSubscription?.unsubscribe();
    this.navigationSubscription?.unsubscribe();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'];
    const headerOffset = 500;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const adjustedTop = rect.top - headerOffset;
        if (adjustedTop <= 0 && rect.bottom > headerOffset) {
          this.currentFragment = id;
          break;
        }
      }
    }
  }

  scrollToCategory(id: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.currentFragment = id;
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerHeight * 0.42;
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }
  }

  isActive(id: string): boolean {
    return this.currentFragment === id;
  }

  navigateToPowerDelivery(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.router.navigate(['/services/engineering-design/power-delivery-network-simulation']);
  }

  shareOnFacebook(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  }

  shareOnTwitter(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const pageUrl = window.location.href;
    const text = encodeURIComponent(
      `🚀 Discover Next-Generation Hardware Design by Whizz Systems!\n\nManaging High-Power Demands in Next-Generation Hardware.\n\nProudly built by @whizzsystems.\n\n`
    );
    const hashtags = encodeURIComponent('whizzsystems,AIHardware,HighDensityPCBDesign');
    window.open(`https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}&url=${encodeURIComponent(pageUrl)}`, '_blank');
  }

  shareOnLinkedIn(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }
}
