import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { NewsComponent } from '@components/news/news.component';
import { Meta } from '@angular/platform-browser';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-5g-oru',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedButton,
    BlogTagComponent,
    ButtonComponent,
    RouterLink,
    NewsComponent,
  ],
  templateUrl: './5g-oru.component.html',
})
export class ORUComponent {
  blogs: any[] = [
    {
      imgUrl: 'assets/news/blogs/future-performance/scalability-&-hardware.png',
      date: 'July 22, 2025',
      tags: ['AI Hardware', 'Obsolescence Management'],
      title:
        'Future-Proof Architecture and Performance in Next-Generation Systems',
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
      title:
        'NextGen Hardware Design for High-Density, High-Complexity Systems',
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
  ];

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  currentFragment: string | null = null;

  isSticky = true;
  lastScrollTop = 0;
  private isBrowser: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // ✅ Only access window on browser
      this.route.data.subscribe(() => {
        const url = encodeURIComponent(window.location.href);
        this.meta.updateTag({ property: 'og:url', content: url });
      });
    }

    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (this.isBrowser && fragment) {
        this.currentFragment = fragment;
        this.scrollToCategory(fragment);
      }
    });

    this.navigationSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.isBrowser) {
          const fragment = this.route.snapshot.fragment;
          if (fragment && fragment !== this.currentFragment) {
            this.currentFragment = fragment;
            this.scrollToCategory(fragment);
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.fragmentSubscription?.unsubscribe();
    this.navigationSubscription?.unsubscribe();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.isBrowser) return;

    const sections = [
      'section1',
      'section2',
      'section3',
      'section4',
      'section5',
      'section6',
      'section7',
    ];
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
    if (!this.isBrowser) return;

    this.currentFragment = id;
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerHeight * 0.42;
      const top = el.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  isActive(id: string): boolean {
    return this.currentFragment === id;
  }

  shareOnFacebook() {
    if (!this.isBrowser) return;

    const url = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookShareUrl, '_blank');
  }

  shareOnTwitter() {
    if (!this.isBrowser) return;

    const pageUrl = window.location.href;
    const text = encodeURIComponent(
      `🚀 Discover 5G Connectivity by Whizz Systems!\n\n` +
        `Building the Future of 5G Connectivity with Open Radio Unit Solutions.\n\n` +
        `Proudly built by @whizzsystems.\n\n` +
        `${pageUrl}\n\n`
    );
    const hashtags = encodeURIComponent(
      'whizzsystems,Heatsink,ThermalManagement,SignalManagement'
    );

    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}`;
    window.open(twitterUrl, '_blank');
  }

  shareOnLinkedIn(): void {
    if (!this.isBrowser) return;

    const url = encodeURIComponent(window.location.href);
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInShareUrl, '_blank');
  }
}
