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
export class HighPowerDemandComponent {
  tags = ['AI Hardware', 'High Density PCB Design', 'High-Pin Count Chips'];

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

  optimized: any[] = [
    'Minimize IR drops',
    'Ensure consistent, stable power delivery across the board',
  ];
  layout: any[] = [
    'Trace widths',
    'Via placements',
    'Power distribution planes',
  ];
  robust: any[] = [
    'Heat sinks',
    'Thermal vias',
    'Vapor chambers',
    'Liquid cooling systems',
  ];
  advanced: any[] = [
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

  partner: any[] = [
    'Optimize your next board',
    'Solve your power delivery challenges',
    'Help you hit performance, thermal, and compliance targets faster'
  ]

  ngAfterViewInit() {
    const links = document.querySelectorAll('.link-to-power');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        this.router.navigate(['/services/engineering-&-design/power-delivery']);
      });
    });
  }

  navigateToPowerDelivery() {
    this.router.navigate(['/services/engineering-&-design/power-delivery']);
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
      'section6',
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
      `🚀 Discover Next-Generation Hardware Design by Whizz Systems!\n\n` +
        `Managing High-Power Demands in Next-Generation Hardware.\n\n` +
        `Proudly built by @whizzsystems.\n\n` +
        `${pageUrl}\n\n`
    );

    const hashtags = encodeURIComponent(
      'whizzsystems,AIHardware,HighDensityPCBDesign'
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
