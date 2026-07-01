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
  selector: 'app-enhance-performance',
  imports: [
    CommonModule,
    AnimatedButton,
    BlogTagComponent,
    ButtonComponent,
    RouterLink,
    NewsComponent,
  ],
  templateUrl: './enhance-performance.component.html',
})
export class EnhancePerformanceComponent implements OnInit, AfterViewInit, OnDestroy {
  tags = ['Interconnect Architecture', 'OCP Compliance', 'High-Throughput System'];

  blogs = getOtherBlogs('/news-&-insights/high-throughput-interconnect-topologies');

  optimized = ['Minimize IR drops', 'Ensure consistent, stable power delivery across the board'];
  layout = ['Trace widths', 'Via placements', 'Power distribution planes'];
  robust = ['Heat sinks', 'Thermal vias', 'Vapor chambers', 'Liquid cooling systems'];

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
      'section16',
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

  navigateToPowerDelivery(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.router.navigate(['/services/engineering-design/power-delivery-network-simulation']);
  }

  faqs: any[] = [
    {
      question: 'What Are High-Throughput Interconnect Topologies and Why Are They Important?',
      answer: 'High-throughput interconnect topologies define how modules within a system communicate and exchange data. In AI, HPC, and data infrastructure applications, interconnect architecture directly impacts latency, bandwidth, and overall system performance. As compute density increases, inefficient communication pathways can become a significant bottleneck, limiting the effectiveness of otherwise powerful hardware platforms. Selecting the right topology helps ensure efficient data movement and consistent system-level performance.',
      isOpen: false
    },
    {
      question: 'How Do Advanced Interconnect Topologies Improve AI and HPC Performance?',
      answer: 'Advanced interconnect topologies create multiple communication pathways between system modules, reducing latency and improving data flow. Architectures such as folded torus topologies help minimize communication delays by shortening data paths and distributing traffic more efficiently across the system. This enables AI accelerators and high-performance computing platforms to process large volumes of data while maintaining high throughput and scalability.',
      isOpen: false
    },
    {
      question: 'What Factors Should Engineers Consider When Designing High-Speed Interconnect Architectures?',
      answer: 'Successful high-speed interconnect design requires careful attention to latency, bandwidth, routing complexity, signal integrity, electromagnetic interference (EMI), impedance control, and thermal constraints. Engineers must also consider system scalability and future expansion requirements. A well-designed architecture balances these factors to deliver reliable communication and long-term performance.',
      isOpen: false
    },
    {
      question: "How Does Signal Integrity Affect High-Performance Interconnect Systems?",
      answer: 'Signal integrity plays a critical role in maintaining reliable communication between modules in dense computing environments. Poor signal quality can lead to data corruption, increased latency, and reduced system performance. Techniques such as impedance-controlled routing, optimized grounding strategies, precision trace placement, and noise reduction measures help preserve data fidelity and minimize crosstalk in high-speed designs.',
      isOpen: false
    },
    {
      question: "How Can Organizations Balance OCP Compliance with Custom Interconnect Requirements?",
      answer: 'Many high-performance systems must comply with Open Compute Project (OCP) standards to ensure interoperability and ecosystem compatibility. However, some applications require customized architectures to meet unique performance objectives. The most effective approach balances compliance requirements with design flexibility, allowing organizations to leverage industry standards while optimizing interconnect performance for specific workloads.',
      isOpen: false
    },
    {
      question: "Why Is Scalability Important in Interconnect Architecture Design?",
      answer: 'Scalable interconnect architectures enable systems to grow as processing requirements increase. By designing communication pathways that support future module additions and evolving workloads, organizations can extend the lifespan of their hardware investments and reduce the need for major redesigns. Scalable architectures also help maintain performance as AI and HPC environments continue to expand.',
      isOpen: false
    },
    {
      question: "How Do Interconnect Topologies Influence System Scalability?",
      answer: 'Interconnect topology determines how efficiently processors, accelerators, memory, and networking resources communicate as systems grow. A scalable topology minimizes communication bottlenecks, maintains low latency, and supports increasing bandwidth demands, enabling AI and high-performance computing platforms to expand without sacrificing overall performance.',
      isOpen: false
    },
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}

