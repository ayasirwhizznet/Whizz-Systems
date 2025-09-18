import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-future-proof-architecture',
  standalone: true,
  imports: [
    CommonModule,
    BlogTagComponent,
    ButtonComponent,
    NewsComponent,
    AnimatedButton,
    RouterLink,
  ],
  templateUrl: './future-proof-architecture.component.html',
})
export class FutureProofArchitectureComponent implements OnInit, AfterViewInit, OnDestroy {
  tags = ['AI Hardware', 'Modular Systems', 'Obsolescence Management'];

  blogs: any[] = [
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
  ];

  designConsiderations: string[] = [
    'Ensure hardware architecture scalability to meet future demands, prioritizing designs that allow for incremental expansions (e.g., processing power, memory).',
    'Embrace modularity to create reusable, adaptable architectures, facilitating quick adaptation to new applications and reducing long-term costs.',
    'Select high-performance, power-efficient components that ensure future compatibility, supporting system evolution with emerging technologies.',
    'Adhere to industry standards for interoperability, enabling easier future upgrades, replacements, and broader system integration.',
    'Collaborate with partners who specialize in modular, scalable systems to reduce long-term costs by enabling upgrades without full redesigns.',
  ];

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  currentFragment: string | null = null;

  isSticky = true;
  lastScrollTop = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Update meta tag with current URL (browser only)
      this.route.data.subscribe(() => {
        const url = encodeURIComponent(window.location.href);
        this.meta.updateTag({ property: 'og:url', content: url });
      });
    }

    // Fragment scroll handling
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (isPlatformBrowser(this.platformId) && fragment) {
        this.currentFragment = fragment;
        this.scrollToCategory(fragment);
      }
    });

    // Navigation change handling
    this.navigationSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
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
      links.forEach((link) => {
        link.addEventListener('click', () => {
          this.router.navigate([
            '/services/engineering-design/power-delivery-network-simulation',
          ]);
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

    const sections = ['section1', 'section2', 'section3', 'section4'];
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
      const top = el.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  isActive(id: string): boolean {
    return this.currentFragment === id;
  }

  shareOnFacebook(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const url = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookShareUrl, '_blank');
  }

  shareOnTwitter(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const pageUrl = window.location.href;

    const text = encodeURIComponent(
      `🚀 Discover Future-Proof Architecture and Performance in Next-Generation Systems!\n\n` +
        `Scalable, Adaptable Hardware Designs for Evolving AI Applications.\n\n` +
        `Proudly built by @whizzsystems.\n\n` +
        `${pageUrl}\n\n`
    );

    const hashtags = encodeURIComponent(
      'whizzsystems,AIHardwareDesign,ModularSystems'
    );

    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}`;
    window.open(twitterUrl, '_blank');
  }

  shareOnLinkedIn(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const url = encodeURIComponent(window.location.href);
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInShareUrl, '_blank');
  }
}
