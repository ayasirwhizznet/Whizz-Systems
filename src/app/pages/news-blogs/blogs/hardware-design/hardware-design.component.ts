import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-hardware-design',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedButton,
    BlogTagComponent,
    ButtonComponent,
    RouterLink,
    NewsComponent,
  ],
  templateUrl: './hardware-design.component.html',
})
export class HardwareDesignComponent {
  tags = [
    'AI Hardware Design',
    'High-density PCB design',
    'High-pin count chips',
  ];

  points: any[] = [
    'The Complexity Behind the AI Hardware',
    'Key Challenges in High-Density Systems',
    'Whizz Systems’s Approach and Expertise',
    'Best Practices in Action',
    'Key Considerations for Customers',
  ];

  blogs: any[] = [
    {
      imgUrl: 'assets/news/blogs/future-performance/scalability-&-hardware.png',
      date: 'July 22, 2025',
      tags: ['AI Hardware', 'Obsolescence Management'],
      title: 'Future-Proof Architecture and Performance in Next-Generation Systems',
      link: '/news-&-insights/future-architecture-performance',
    },
    {
      imgUrl: 'assets/news/blogs/high-power/key-challenges.png',
      date: 'June 10, 2025',
      tags: ['AI Hardware','High Density PCB Design'],
      title: 'Managing High-Power Demands in Next-Generation Hardware',
      link: '/news-&-insights/high-power-demand',
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

  pinCounts: any[] = [
    'Pin configuration,',
    'Signal routing, and',
    'Thermal management',
  ];
  signals1: any[] = ['Data corruption', 'Reduced System Performance.'];
  signals2: any[] = [
    'Impedance-controlled routing',
    'Precisely optimized layouts.',
  ];
  optimized: any[] = [
    'Reduce the risk of signal crosstalk',
    'Enable reliable data transmission.',
  ];
  robust: any[] = [
    '<b>Efficient power delivery</b> across densely populated boards',
    '<b>Mitigating the risk of thermal issues</b>',
  ];
  advanced: any[] = [
    'Run at lower temperatures',
    'Prolong operational  life',
    'Improves overall reliability',
  ];

  considerations: any[] = [
    {
      title: '1. Prioritizing Signal Integrity',
      desc1:
        'Signal integrity remains a primary concern; effective design must <b>minimize interference<b> and <b>maintain data quality across densely packed components</b>, especially during high-speed data transfers. ',
      desc2:
        'A slight disruption in the signal can cause severe performance degradation, so choices must be made wisely.',
    },
    {
      title: '2 . Optimizing Ball Maps and Pin Counts ',
      desc1:
        'Optimizing the ball map and pin configurations is crucial for managing high pin counts. Companies should work with design partners that have a proven track record with <b>complex layouts that minimize crosstalk</b> and <b>improve data transfer reliability</b>. This know-how is necessary in order to maintain system compatibility, with designs growing in complexity.',
    },
    {
      title: '3 . Ensuring Efficient Power Distribution',
      desc1: `Power distribution is another essential factor, particularly as AI hardware becomes more powerful. Efficient power flow across densely populated boards <b>reduces the risk of thermal issues</b> and <b>supports system reliability</b>. Partnering with a design specialist who excels in <span
                        class="text-teal1 cursor-pointer link-to-power font-medium 3xl:font-bold underline underline-offset-2">advanced power management</span> can prevent costly delays and inefficiencies associated with thermal hotspots.`,
    },
    {
      title: '4 . Adhering to Industry Standards',
      desc1:
        'It is extremely important for AI hardware companies to follow the standards of the industry in order to produce compliant and competitive products. There are standards such as the <b>Open Compute Project (OCP)</b> which guarantees interoperability and reliability so that companies can plug their hardware into any system. Collaborating with a specialist like Whizz Systems can help address these considerations effectively, as our team brings both experience and insight into designing solutions that meet these demands with precision.',
    },
  ];
  ngAfterViewInit() {
    const links = document.querySelectorAll('.link-to-power');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        this.router.navigate(['/services/engineering-design/power-delivery-network-simulation']);
      });
    });
  }

  navigateToPowerDelivery() {
    this.router.navigate(['/services/engineering-design/power-delivery-network-simulation']);
  }

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
      `🚀 Discover High-density, high-complexity systems by Whizz Systems!\n\n` +
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
