import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { Subscription, filter } from 'rxjs';
import { getOtherBlogs } from '../blogList';

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

  blogs = getOtherBlogs('/news-&-insights/high-power-demand');

  optimized = ['Minimize IR drops', 'Ensure consistent, stable power delivery across the board'];
  layout = ['Trace widths', 'Via placements', 'Power distribution planes'];
  robust = [ `<a href='https://www.whizzsystems.com/news-&-insights/whitepaper-heatsink' class='text-teal1'>Heat sinks</a>`, 'Thermal vias', 'Vapor chambers', 'Liquid cooling systems'];

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
  lastScrollTop = 0;
  isHeaderVisible = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

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

    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    this.isHeaderVisible = currentScroll <= this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

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

  faqs: any[] = [
    {
      question: 'Why Are Power Demands Increasing in Modern Computing Systems?',
      answer: 'Emerging technologies such as artificial intelligence, machine learning, cloud computing, and high-performance networking require significantly greater processing capability than previous generations. As computing performance increases, electronic systems must deliver higher power levels while maintaining efficiency, reliability, and thermal stability.',
      isOpen: false
    },
    {
      question: 'How Do Engineers Design for Higher Power Densities?',
      answer: 'Designing for high-power systems requires careful consideration of power distribution, thermal management, PCB layout, component selection, and cooling strategies. Integrating these disciplines early in development helps ensure systems can support increasing power requirements while maintaining stable and reliable operation.',
      isOpen: false
    },
    {
      question: 'What Challenges Do High-Power Electronic Systems Create?',
      answer: 'High-power systems introduce challenges such as increased heat generation, power integrity concerns, voltage stability, mechanical constraints, and manufacturing complexity. Successfully managing these challenges requires coordinated electrical, mechanical, and thermal engineering throughout the product development process.',
      isOpen: false
    },
    {
      question: 'How Does Power Delivery Affect AI Hardware Performance?',
      answer: 'AI platforms rely on stable and efficient power delivery to support processors, accelerators, memory, and networking interfaces operating at extremely high performance levels. Optimizing the power delivery network helps minimize voltage fluctuations, improve system stability, and ensure reliable operation under demanding computational workloads.',
      isOpen: false
    },
    {
      question: 'Why Is Power Planning Critical in Next-Generation Hardware?',
      answer: 'Effective power planning helps engineering teams anticipate future performance requirements while balancing efficiency, reliability, thermal performance, and manufacturability. Addressing power requirements early reduces design revisions and helps ensure systems remain scalable as computing demands continue to evolve.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
