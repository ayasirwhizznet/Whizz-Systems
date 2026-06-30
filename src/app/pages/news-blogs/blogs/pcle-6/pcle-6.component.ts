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
  selector: 'app-pcle-6',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonComponent,
    AnimatedButton,
    BlogTagComponent,
    NewsComponent
  ],
  templateUrl: './pcle-6.component.html',
})
export class Pcle6Component implements OnInit, OnDestroy {
  tags = ['Whitepapper', 'High-Speed Connectivity', 'Mechanical Design'];

  blogs = getOtherBlogs('/news-&-insights/whitepaper-pcle6');

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

  faqs: any[] = [
    {
      question: 'What Is PCIe 6.0 and Why Is It Important for Next-Generation Systems?',
      answer: 'PCIe 6.0 represents a significant advancement in high-speed connectivity, enabling substantially higher bandwidth to support AI infrastructure, data centers, networking platforms, and high-performance computing systems. As workloads continue to demand faster data movement among processors, accelerators, memory, and storage, PCIe 6.0 provides the performance foundation required for future computing architectures.',
      isOpen: false
    },
    {
      question: 'What Design Challenges Are Associated with PCIe 6.0 Implementation?',
      answer: 'As signaling speeds increase, engineers face tighter margins for signal integrity, channel loss, crosstalk, and power efficiency. PCIe 6.0 implementations require careful attention to PCB design, interconnect selection, validation methodologies, and compliance requirements to ensure reliable high-speed communication.',
      isOpen: false
    },
    {
      question: 'Why Is Signal Integrity Critical for PCIe 6.0 Designs?',
      answer: 'At next-generation data rates, even minor signal quality issues can significantly impact system performance and reliability. Successful PCIe 6.0 implementations depend on controlled impedance, optimized routing, loss management, and comprehensive signal integrity analysis throughout the design process.',
      isOpen: false
    },
    {
      question: "How Are PCIe 6.0 Platforms Validated and Tested?",
      answer: 'Validation involves a combination of simulation, compliance testing, protocol analysis, and signal integrity verification. Engineers evaluate channel performance, interoperability, and overall system behavior to ensure designs meet performance objectives and industry standards before deployment.',
      isOpen: false
    },
    {
      question: "How Do Engineers Determine Which PCIe Generation Is Appropriate for a New Design?",
      answer: 'The choice depends on application bandwidth requirements, scalability objectives, power constraints, and long-term product strategy. While previous PCIe generations remain suitable for many applications, PCIe 6.0 provides the headroom needed for emerging AI, networking, and data-intensive workloads.',
      isOpen: false
    },
    {
      question: "How Is PCIe Used in AI, Networking, and Embedded Systems?",
      answer: 'PCIe serves as a high-bandwidth communication backbone connecting processors, accelerators, memory subsystems, storage devices, and networking hardware. Its scalability and performance make it a critical technology for modern embedded systems, cloud infrastructure, AI platforms, and telecommunications equipment.',
      isOpen: false
    },
    {
      question: "Why Is PCIe 6.0 Important for AI and High-Performance Computing?",
      answer: 'AI training, inference, and high-performance computing workloads depend on moving large volumes of data with minimal latency. PCIe 6.0 delivers significantly higher bandwidth and improved data transfer efficiency, enabling faster communication between processors, accelerators, memory, and storage. This increased performance helps support the growing demands of next-generation computing platforms.',
      isOpen: false
    },
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
