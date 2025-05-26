import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-invensify',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, AnimatedButton, BlogTagComponent, NewsComponent],
  templateUrl: './invensify.component.html'
})
export class InvensifyComponent {
  blogs: any[] = [
    {
      imgUrl: 'assets/news/blogs/hardwareDesign/key-challenges.png',
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
    }
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
        `🚀 Discover NextGen Hardware Design by Whizz Systems!\n\n` +
          `High-density, high-complexity systems engineered for performance and scalability.\n\n` +
          `Proudly built by @whizzsystems.\n\n` +
          `${pageUrl}\n\n`
      );
  
      const hashtags = encodeURIComponent(
        'whizzsystems,HighDensityHardwareDesign,AISystemThermal,SignalManagement'
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
