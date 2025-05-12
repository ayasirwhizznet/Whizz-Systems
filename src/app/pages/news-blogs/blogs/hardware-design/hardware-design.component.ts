import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
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
    'Key Considerations for Customers',
  ];

  blogs: any[] = [
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
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
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      const sections = [
        'section1',
        'section2',
        'section3',
        'section4',
        'section5',
      ];
      const scrollTop = window.scrollY;

      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

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
    }, 100);
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
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this blog! ');
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterShareUrl, '_blank');
  }
}
