import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
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
      imgUrl: 'assets/news/blogs/high-power/key-challenges.png',
      date: 'June 10, 2025',
      tags: ['AI Hardware','High Density PCB Design'],
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    // share on linkdin logic
    this.route.data.subscribe((data) => {
      const url = encodeURIComponent(window.location.href);
      this.meta.updateTag({ property: 'og:url', content: url });
    });

    // When the fragment changes (via click or scroll), update the active section
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.currentFragment = fragment;
        this.scrollToCategory(fragment);
      }
    });

    // Handle navigation changes
    this.navigationSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment && fragment !== this.currentFragment) {
          this.currentFragment = fragment;
          this.scrollToCategory(fragment);
        }
      });
  }

  ngOnDestroy(): void {
    this.fragmentSubscription?.unsubscribe();
    this.navigationSubscription?.unsubscribe();
  }

  private scrollTimeout: any;

  @HostListener('window:scroll', [])
  onScroll(): void {
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
    const url = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookShareUrl, '_blank');
  }

  shareOnTwitter() {
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
    const url = encodeURIComponent(window.location.href);
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInShareUrl, '_blank');
  }
}
