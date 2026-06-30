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
  selector: 'app-high-speed-ai-design',
  imports: [
    CommonModule,
    AnimatedButton,
    BlogTagComponent,
    ButtonComponent,
    RouterLink,
    NewsComponent,
  ],
  templateUrl: './high-speed-ai-design.component.html'
})
export class HighSpeedAiDesignComponent implements OnInit, AfterViewInit, OnDestroy {
  tags = ['High-Speed AI Design', 'Signal Integrity', 'AI Hardware Design'];

  blogs = getOtherBlogs('/news-&-insights/high-speed-ai-design-si-techniques');

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

    const sections = [
      'section1',
      'section2',
      'section3',
      'section4',
      'section5',
      'section6',
      'section7',
      'section8',
      'section9',
      'section10',
      'section11',
      'section12',
      'section13',
      'section14',
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
      question: 'Why Is Signal Integrity Critical in High-Speed AI Hardware Design?',
      answer: 'As AI hardware continues to operate at higher data rates and greater processing densities, maintaining signal integrity becomes essential for reliable system performance. Issues such as impedance discontinuities, crosstalk, reflections, and electromagnetic interference (EMI) can degrade signal quality and impact overall system reliability. Applying proven signal integrity techniques throughout the design process helps ensure consistent performance while reducing costly design iterations.',
      isOpen: false
    },
    {
      question: 'What Design Techniques Help Reduce EMI and Noise in High-Speed Electronic Systems?',
      answer: 'Effective EMI and noise mitigation begins during the PCB design phase. Engineers can improve signal quality through controlled impedance routing, optimized layer stack-ups, proper grounding strategies, careful component placement, differential pair routing, and adequate power distribution. Combined with simulation and validation, these techniques help minimize signal degradation and support reliable operation in high-speed AI and embedded systems.',
      isOpen: false
    },
    {
      question: 'How Are High-Speed AI Interfaces Validated for Signal Integrity?',
      answer: 'Signal integrity validation combines simulation, laboratory measurements, and system-level testing to evaluate signal quality before production. Engineers analyze factors such as insertion loss, crosstalk, impedance continuity, and eye diagram performance to identify potential issues early in the design cycle. A comprehensive validation strategy helps ensure that high-speed interfaces meet performance requirements under real-world operating conditions.',
      isOpen: false
    },
    {
      question: 'What Are the Most Common Signal Integrity Challenges in High-Speed AI Systems?',
      answer: 'As AI platforms become more complex, engineers must address challenges such as crosstalk, impedance mismatches, reflections, insertion loss, power integrity issues, and electromagnetic interference (EMI). These problems become more pronounced at higher data rates and can significantly affect system reliability if not addressed early in the design process. A combination of robust PCB layout practices, simulation, and validation helps minimize these risks and ensures consistent high-speed performance.',
      isOpen: false
    },
    {
      question: 'How Does Early Signal Integrity Analysis Improve AI Hardware Development?',
      answer: 'Incorporating signal integrity analysis early in the hardware development process allows engineering teams to identify potential performance issues before fabrication. Early analysis supports better PCB layout decisions, reduces design iterations, shortens development timelines, and lowers overall project costs. By validating critical interfaces before manufacturing, organizations can accelerate product development while improving reliability and first-pass design success.',
      isOpen: false
    },
    {
      question: 'Why Should Signal Integrity Be Considered Early in PCB Design?',
      answer: 'Signal integrity is most effectively addressed during the early stages of PCB design, when routing strategies, layer stack-ups, impedance control, and component placement can still be optimized. Identifying potential issues before fabrication reduces costly redesigns, shortens development cycles, and improves the reliability of high-speed AI hardware.',
      isOpen: false
    },
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}

