import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { Subscription, filter } from 'rxjs';
import { blogList } from '../blogList';

@Component({
  selector: 'app-product-manufacturing',
  imports: [
    CommonModule,
    BlogTagComponent,
    ButtonComponent,
    AnimatedButton,
    RouterLink,
    NewsComponent,
  ],
  templateUrl: './product-manufacturing.component.html',
  styleUrls: ['./product-manufacturing.component.scss'],
})
export class ProductManufacturingComponent implements OnInit, AfterViewInit, OnDestroy {
  tags = ['Whitepapper', 'Signal Integrity', 'AI Hardware Design'];

  blogs = blogList.filter(
    blog => blog.link !== '/news-&-insights/end-to-end-product-manufacturing-reliability'
  );
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
      'section15',
      'section16',
      'section17',
      'section18',
      'section19',
      'section20',
      'section21',
      'section22',
      'section23',
      'section24',
      'section25',
      'section26',
      'section27',
      'section28',
      'section29',
      'section30',
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

  supplyChainPhases = [
    {
      title: 'Component Engineering',
      content:
        'Approved Vendor List (AVL) management; secondary source qualification; datasheet verification; continuous lifecycle monitoring to prevent obsolescence-driven supply disruptions.',
      isOpen: false,
    },
    {
      title: 'Compliance Engineering',
      content:
        'Full RoHS-3 (2011/65/EU + EU 2015/863) and REACH (EC 1907/2006 + SVHC) compliance reporting; hazardous substance verification for all components and materials used in production.',
      isOpen: false,
    },
    {
      title: 'Commodity Management',
      content:
        'Strategic risk management to identify and prevent supply chain disruptions; lead-time management aligned to production schedules; proactive buffer strategies for at-risk commodities.',
      isOpen: false,
    },
    {
      title: 'Procurement Management',
      content:
        'End-to-end purchasing process from Risk Buy identification to Purchase Order issuance; End-of-Life (EOL) part transition management ensuring smooth migration to qualified alternatives.',
      isOpen: false,
    },
  ];

  designPhases = [
    {
      title: 'Shock & Vibration Absorption',
      content:
        'Custom foam geometries, ESD-safe trays, and structural outer cartons that dissipate mechanical energy from handling drops, conveyor impacts, and transportation vibration.',
      isOpen: false,
    },
    {
      title: 'Environmental Shielding',
      content:
        'Protection against humidity, electrostatic discharge (ESD), contamination, and temperature excursions for sensitive PCB assemblies in transit.',
      isOpen: false,
    },
    {
      title: 'ISTA-Certified Drop Testing',
      content:
        'Every packaging design is validated with drop tests following ISTA (International Safe Transit Association) standards — the global benchmark for transit packaging performance.',
      isOpen: false,
    },
  ];

  toggleDesignPhase(index: number): void {
    this.designPhases[index].isOpen = !this.designPhases[index].isOpen;
  }

  toggleSupplyPhase(index: number): void {
    this.supplyChainPhases[index].isOpen = !this.supplyChainPhases[index].isOpen;
  }

  dfxPhases = [
    {
      title: 'Design for Manufacturability (DFM)',
      content:
        'DFM analysis validates that board designs can be reliably produced at scale. Whizz engineers systematically review drill accuracy and signal layer integrity, power and ground plane distribution, soldermask application accuracy, silk screen label precision, board dimension validation, micro via reliability, and penalization strategies to mitigate production risk.',
      isOpen: false,
    },
    {
      title: 'Design for Assembly (DFA)',
      content:
        'DFA ensures components can be assembled accurately and efficiently. The analysis covers component placement feasibility, padstack design for proper pad placement, solder paste volume and application accuracy, and pin-to-pad alignment to guarantee precise component integration at production speeds.',
      isOpen: false,
    },
    {
      title: 'Design for Test (DFT)',
      content:
        'DFT analysis confirms the assembled product can be tested comprehensively. Whizz engineers conduct test point analysis to ensure strategically positioned access points enable thorough functional verification — reducing the risk of undetected defects shipping to the customer.',
      isOpen: false,
    },
  ];

  toggleDfxPhase(index: number): void {
    this.dfxPhases[index].isOpen = !this.dfxPhases[index].isOpen;
  }

  inspectionPhases = [
    {
      title: 'Solder Paste Inspection (SPI)',
      isOpen: false,
      paragraphs: [
        'Applied immediately after solder paste printing, SPI precisely measures paste volume, area, height, and placement accuracy for every pad on the board. Catching paste defects at this stage — before components are placed and before reflow — is significantly more cost-effective than downstream rework. Insufficient or misplaced paste is a direct predictor of solder joint failure.',
      ],
      images: [
        {
          src: 'assets/news/blogs/product-manufacturing/SPI.png',
          caption: 'Solder Paste Inspection (SPI)',
        },
      ],
    },
    {
      title: 'Automated Optical Inspection (AOI)',
      isOpen: false,
      paragraphs: [
        'AOI is deployed twice in the Whizz production line: pre-reflow (verifying component placement accuracy and polarity) and post-reflow (inspecting solder joint formation and assembly quality). The system automatically detects misaligned components, missing parts, polarity errors, tombstoning, insufficient solder, and bridging — defects that manual inspection routinely misses, especially on fine-pitch components.',
      ],
      images: [
        {
          src: 'assets/news/blogs/product-manufacturing/AOI.png',
          caption: 'Automated Optical Inspection (AOI)',
        },
      ],
    },
    {
      title: '3D X-Ray Inspection',
      isOpen: false,
      paragraphs: [
        'For hidden solder joint structures — such as Ball Grid Array (BGA), QFN, and other bottom-terminated components — Whizz Systems uses cutting-edge 3D X-ray technology (Nordson DAGE XD7600 Ruby X-Plane). X-ray inspection penetrates component bodies to reveal solder voids, bridging, incomplete reflow, and cold joints that no optical inspection method can detect.',
        'This capability is critical for high-density, high-reliability board assemblies where hidden defects carry the highest failure potential — and where traditional inspection tools are completely blind.',
      ],
      images: [
        {
          src: 'assets/news/blogs/product-manufacturing/3D.png',
          caption: '3D X-Ray Machine',
        },
        {
          src: 'assets/news/blogs/product-manufacturing/pcb.png',
          caption: 'PCB X-Ray',
        },
      ],
    },
  ];

  toggleInspectionPhase(index: number): void {
    this.inspectionPhases[index].isOpen = !this.inspectionPhases[index].isOpen;
  }

  shareOnTwitter(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const pageUrl = window.location.href;
    const text = encodeURIComponent(
      `🚀 High-Speed AI Design Challenges & Robust SI Techniques\n\nProudly built by @whizzsystems.\n\n`
    );
    const hashtags = encodeURIComponent('High-Speed AI Design,Signal Integrity,AI Hardware Design');
    window.open(`https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}&url=${encodeURIComponent(pageUrl)}`, '_blank');
  }

  shareOnLinkedIn(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }

  rdtEquipments = [
    {
      title: 'Thermal Shock',
      description: 'Rapid temperature transitions (-65°C cold zone; +200°C hot zone; 7s transfer time; <5 min recovery) expose thermal expansion incompatibilities in solder joints, substrates, and interfaces.',
      image: 'assets/news/blogs/product-manufacturing/rdt-1.png',
      isOpen: false
    },
    {
      title: 'HAST/Autoclave Testing',
      description: 'High-Accelerated Temperature & Humidity Stress (up to 179°C, 30–100% RH, 1–2.5 atm) rapidly accelerates moisture-driven failure mechanisms for evaluation of humidity robustness.',
      image: 'assets/news/blogs/product-manufacturing/rdt-2.png',
      isOpen: false
    },
    {
      title: 'Temperature & Humidity Testing',
      description: 'Sustained exposure (-35°C to +150°C; 10–98% RH; 3°C/min ramp rate) validates product performance across the full spectrum of real-world environmental conditions.',
      image: 'assets/news/blogs/product-manufacturing/rdt-3.png',
      isOpen: false
    },
    {
      title: 'Vibration & Shock Testing',
      description: 'Structural integrity validation (5.1 kN sine / 4.2 kN random; 190 cm/s velocity; 2.54 cm peak-peak displacement) simulates transportation and in-service mechanical stress profiles.',
      image: 'assets/news/blogs/product-manufacturing/rdt-4.png',
      isOpen: false
    }
  ];

  toggleRdt(index: number) {
    this.rdtEquipments[index].isOpen = !this.rdtEquipments[index].isOpen;
  }
}

