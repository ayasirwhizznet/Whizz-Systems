import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { Subscription, filter } from 'rxjs';
import { getOtherBlogs } from '../blogList';

@Component({
  selector: 'app-invensify',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonComponent,
    AnimatedButton,
    BlogTagComponent,
    NewsComponent
  ],
  templateUrl: './invensify.component.html'
})
export class InvensifyComponent implements OnInit, OnDestroy {
  blogs = getOtherBlogs('/news-&-insights/whitepaper-invensify');

  tags = ['Medical Devices', 'PCB Layout', 'Hardware Design'];

  overviews = [
    '<b>Precise Temperature Control:</b> Maintains optimal conditions for pharmaceutical integrity.',
    '<b>Energy Efficiency:</b> Consumes less than 0.24 kWh per day.',
    '<b>Robust Construction:</b> A 12-liter payload capacity in a single, durable enclosure.',
    '<b>Advanced Connectivity:</b> Integrated LTE, GPS, and Bluetooth for real-time monitoring.',
    '<b>Rapid Cooling & Charging:</b> Incorporates a high-performance liquid cooling system and phase change material (PCM) to extend thermal stability.'
  ];

  cards = [
    {
      imageUrl: 'assets/news/blogs/blog-bottom/5g.png',
      link: '/news-&-insights/whitepaper-5g-oru',
      tags: ['Case Study', 'Hardware Design', 'Telecom Engineering'],
      date: 'September 05, 2020',
      title: 'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
    },
    {
      imageUrl: 'assets/news/blogs/blog-bottom/heatsink.png',
      link: '/news-&-insights/whitepaper-heatsink',
      tags: ['Heatsink', 'Thermal Management'],
      date: 'July 09, 2024',
      title: 'Heatsinks: Considerations, guidance, and best practices.',
    },
    {
      imageUrl: 'assets/news/blogs/blog-bottom/pcle6.png',
      link: '/news-&-insights/whitepaper-pcle6',
      tags: ['Heatsink', 'Thermal Management'],
      date: 'May 29, 2024',
      title: 'PCIe-6: Everything You Need To Know',
    }
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
      const url = encodeURIComponent(window.location.href);
      this.meta.updateTag({ property: 'og:url', content: url });
    }

    this.fragmentSubscription = this.route.fragment.subscribe(fragment => {
      if (isPlatformBrowser(this.platformId) && fragment) {
        this.currentFragment = fragment;
        this.scrollToCategory(fragment);
      }
    });

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
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }
  }

  isActive(id: string): boolean {
    return this.currentFragment === id;
  }

  faqs: any[] = [
    {
      question: 'What Engineering Challenges Does This Solution Address?',
      answer: 'Modern electronic products require engineering teams to manage increasing complexity across hardware design, manufacturing, system integration, and product validation. This solution focuses on helping organizations streamline development, improve engineering collaboration, and reduce product development risks throughout the lifecycle.',
      isOpen: false
    },
    {
      question: 'How Does System Integration Improve Product Performance?',
      answer: 'System integration ensures that electrical, mechanical, firmware, manufacturing, and testing activities work together as a unified development process. Early integration helps identify compatibility issues, improve overall system performance, and reduce costly redesigns later in the project.',
      isOpen: false
    },
    {
      question: 'Why Is End-to-End Engineering Important for Complex Hardware?',
      answer: 'Complex electronic systems depend on close coordination between multiple engineering disciplines. An end-to-end engineering approach improves communication, accelerates problem resolution, enhances manufacturability, and supports a more efficient transition from concept to production.',
      isOpen: false
    },
    {
      question: 'How Does Design Optimization Improve Manufacturability?',
      answer: 'Design optimization evaluates product architecture, component selection, PCB layout, thermal performance, and manufacturing requirements throughout development. Addressing these considerations early helps reduce production challenges, improve manufacturing efficiency, and increase product reliability.',
      isOpen: false
    },
    {
      question: 'What Best Practices Help Accelerate Hardware Development?',
      answer: 'Successful hardware development combines early planning, cross-functional engineering collaboration, design validation, simulation, prototype verification, and manufacturing readiness. Following these best practices enables organizations to reduce project risk, shorten development cycles, and deliver higher-quality products more efficiently.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
