import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { Subscription, filter } from 'rxjs';
import { blogList } from '../blogList';

@Component({
  selector: 'app-hardware-design',
  standalone: true,
  imports: [CommonModule, AnimatedButton, BlogTagComponent, ButtonComponent, RouterLink, NewsComponent],
  templateUrl: './hardware-design.component.html',
})
export class HardwareDesignComponent implements OnInit, AfterViewInit, OnDestroy {
  tags = ['AI Hardware Design', 'High-density PCB design', 'High-pin count chips'];

  points: string[] = [
    'The Complexity Behind the AI Hardware',
    'Key Challenges in High-Density Systems',
    'Whizz Systems’s Approach and Expertise',
    'Best Practices in Action',
    'Key Considerations for Customers',
  ];

  blogs = blogList;

  pinCounts = ['Pin configuration,', 'Signal routing, and', 'Thermal management'];
  signals1 = ['Data corruption', 'Reduced System Performance.'];
  signals2 = ['Impedance-controlled routing', 'Precisely optimized layouts.'];
  optimized = ['Reduce the risk of signal crosstalk', 'Enable reliable data transmission.'];
  robust = ['<b>Efficient power delivery</b> across densely populated boards', '<b>Mitigating the risk of thermal issues</b>'];
  advanced = ['Run at lower temperatures', 'Prolong operational life', 'Improves overall reliability'];

  considerations = [
    {
      title: '1. Prioritizing Signal Integrity in High-Density Systems',
      desc1:
        'Signal integrity remains a primary concern; effective design must <b>minimize interference</b> and <b>maintain data quality across densely packed components</b>, especially during high-speed data transfers.',
      desc2: 'A slight disruption in the signal can cause severe performance degradation, so choices must be made wisely.',
    },
    {
      title: '2. Optimizing Ball Maps and Pin Counts for AI Hardware',
      desc1:
        'Optimizing the ball map and pin configurations is crucial for managing high pin counts. Companies should work with design partners that have a proven track record with <b>complex layouts that minimize crosstalk</b> and <b>improve data transfer reliability</b>. This know-how is necessary to maintain system compatibility as designs grow in complexity.',
    },
    {
      title: '3. Ensuring Efficient Power Distribution in Complex Boards',
      desc1: `Power distribution is another essential factor, particularly as AI hardware becomes more powerful. Efficient power flow across densely populated boards <b>reduces the risk of thermal issues</b> and <b>supports system reliability</b>. Partnering with a design specialist who excels in <span class="text-teal1 cursor-pointer link-to-power font-medium 3xl:font-bold underline underline-offset-2">advanced power management</span> can prevent costly delays and inefficiencies.`,
    },
    {
      title: '4. Adhering to Industry Standards for Hardware Compliance',
      desc1:
        'It is extremely important for AI hardware companies to follow industry standards to produce compliant and competitive products. Standards such as the <b>Open Compute Project (OCP)</b> guarantee interoperability and reliability. Collaborating with specialists like Whizz Systems addresses these considerations effectively.',
    },
  ];

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  currentFragment: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.route.data.subscribe(() => {
        const url = encodeURIComponent(window.location.href);
        this.meta.updateTag({ property: 'og:url', content: url });
      });
    }

    // Fragment Handling
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (isPlatformBrowser(this.platformId) && fragment) {
        this.currentFragment = fragment;
        this.scrollToCategory(fragment);
      }
    });

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

    const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
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
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  }

  shareOnTwitter(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const text = encodeURIComponent(
      `🚀 Discover High-density, high-complexity systems by Whizz Systems!\n\nHigh-density, high-complexity systems engineered for performance and scalability.\n\nProudly built by @whizzsystems.`
    );

    const hashtags = encodeURIComponent('whizzsystems,HighDensityHardwareDesign,AISystemThermal,SignalManagement');
    const pageUrl = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}&url=${encodeURIComponent(pageUrl)}`, '_blank');
  }

  shareOnLinkedIn(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }

  navigateToPowerDelivery(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.router.navigate(['/services/engineering-design/power-delivery-network-simulation']);
  }
}
