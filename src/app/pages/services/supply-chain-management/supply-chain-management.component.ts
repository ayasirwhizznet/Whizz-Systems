import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';

@Component({
  selector: 'app-supply-chain-management',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesBenefitsComponent,
    ServicesContactExpertsComponent,
  ],
  templateUrl: './supply-chain-management.component.html',
})
export class SupplyChainManagementComponent implements OnInit, OnDestroy {
  supplyChainServices = [
    'Proactive Sourcing',
    'Prototype Build Coordination',
    'Global Sourcing',
    'Inventory & Storage',
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/icons/puzzle.svg',
      name: 'Design-Integrated Sourcing',
      desc: 'Early collaboration with engineering allows us to secure parts in sync with your evolving BoM.',
    },
    {
      imgUrl: 'assets/icons/circular-arrow.svg',
      name: 'Risk Mitigation & Lifecycle Management',
      desc: 'Ongoing BoM reviews and proactive alerts protect your production from EOL, allocation, and obsolescence.',
    },
    {
      imgUrl: 'assets/icons/glob.svg',
      name: 'Inventory Control & Global Reach',
      desc: 'Robotic inventory systems, combined with global sourcing partners, allow for speed, reliability, and cost-efficiency.',
    },
  ];

  isSticky: boolean = true;
  lastScrollTop: number = 0;

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  private currentFragment: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const currentScroll = window.scrollY;
    this.isSticky = currentScroll <= this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
        if (fragment) {
          this.currentFragment = fragment;
          this.scrollToService(fragment);
        }
      });

      this.navigationSubscription = this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          const fragment = this.route.snapshot.fragment;
          if (fragment && fragment !== this.currentFragment) {
            this.currentFragment = fragment;
            this.scrollToService(fragment);
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.fragmentSubscription?.unsubscribe();
    this.navigationSubscription?.unsubscribe();
  }

  scrollToService(fragment: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      const element = document.getElementById(fragment.replace(/\s/g, ''));
      if (element) {
        const offset = (window.innerHeight * 35) / 100;
        const topPosition = element.offsetTop - offset;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
      }
    }, 1);
  }

  faqs: any[] = [
    {
      question: 'What Does Supply Chain Management Include for Electronic Hardware Manufacturing?',
      answer: 'Supply chain management encompasses the planning, sourcing, procurement, inventory coordination, supplier management, and logistics activities required to support electronic product development and manufacturing. An integrated supply chain strategy helps ensure component availability, reduce production delays, manage costs, and maintain consistent product quality throughout the manufacturing lifecycle.',
      isOpen: false
    },
    {
      question: 'How Does Strategic Sourcing Improve Supply Chain Performance?',
      answer: 'Strategic sourcing goes beyond purchasing components by focusing on supplier relationships, component availability, cost optimization, and long-term supply continuity. By evaluating qualified suppliers and proactively managing sourcing risks, organizations can improve procurement efficiency, reduce lead-time challenges, and build a more resilient supply chain.',
      isOpen: false
    },
    {
      question: 'Why Is Inventory Planning Important for Electronics Manufacturing?',
      answer: 'Effective inventory planning helps manufacturers balance component availability with production demand while minimizing excess inventory and supply shortages. Coordinating inventory with procurement and production schedules improves operational efficiency, reduces manufacturing interruptions, and supports on-time product delivery.',
      isOpen: false
    },
    {
      question: 'How Does Collaboration Between Engineering and Supply Chain Teams Improve Product Development?',
      answer: 'Close collaboration between engineering and supply chain teams helps identify component availability, sourcing risks, lifecycle concerns, and alternative parts early in the design process. This integrated approach supports better design decisions, reduces redesigns caused by component shortages, and enables a smoother transition from product development to manufacturing.',
      isOpen: false
    },
    {
      question: 'How Does Effective Supply Chain Management Reduce Manufacturing Risk?',
      answer: 'A proactive supply chain strategy helps organizations mitigate risks associated with component shortages, supplier disruptions, extended lead times, and market fluctuations. Through supplier diversification, demand planning, procurement coordination, and ongoing supply chain monitoring, manufacturers can improve production continuity and maintain reliable delivery schedules.',
      isOpen: false
    },
    {
      question: 'Why Is Supply Chain Resilience Important for Electronics Manufacturing?',
      answer: 'Electronics supply chains are increasingly affected by component shortages, changing market conditions, and global logistics challenges. Building a resilient supply chain through supplier diversification, proactive sourcing, inventory planning, and continuous supplier management helps organizations reduce disruptions, maintain production schedules, and deliver products more reliably.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
