import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ServicesBenefits1Component } from '@components/services-benefits1/services-benefits1.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-sustainable-engineering',
  standalone: true,
  imports: [ServicesHeroComponent, CommonModule, ServicesBenefits1Component, ServicesContactExpertsComponent, CommonModule],
  templateUrl: './sustainable-engineering.component.html'
})
export class SustainableEngineeringComponent {
  coreServices: any[] = [
    {
      id: "bom-management",
      imgUrl: 'assets/services/sustaining-egineering/core-1.png',
      name: 'BoM Management',
      description: [
        'Pre-screening for obsolete components before production',
        'Identifying 2nd and 3rd sources to reduce supply chain dependency',
        'Analyzing impact of new component revisions on performance and manufacturability',
      ],
    },
    {
      id: "eol-management",
      imgUrl: 'assets/services/sustaining-egineering/core-2.png',
      name: 'EOL Management',
      description: [
        'End-of-life (EOL) tracking and notifications for critical components',
        'Predictive life cycle modeling to anticipate sourcing challenges',
        'Strategic last-time buys and buffer stock management',
      ],
    },
    {
      id: "avl-management",
      imgUrl: 'assets/services/sustaining-egineering/core-3.png',
      name: 'Approved Vendor List (AVL) Management',
      description: [
        'Optimizing AVL to ensure supplier reliability and cost-efficiency',
        'Managing supplier transitions to mitigate risks and reduce cost impact',
        'Establishing on-shore and off-shore supply chain flexibility'
      ],
    },
    {
      id: "second-sourcing",
      imgUrl: 'assets/services/sustaining-egineering/core-4.png',
      name: 'Second Sourcing & Risk Buying',
      description: [
        'Global sourcing of alternative components to maintain production continuity',
        'Identifying 2nd and 3rd sources to reduce supply chain dependency',
        'Creating competitive tension between suppliers to improve lead times and cost efficiency',
      ],
    },
    {
      id: "obsolescence-management",
      imgUrl: 'assets/services/sustaining-egineering/core-5.png',
      name: 'Obsolescence Management',
      description: [
        'Evaluating component life cycle risks to ensure long-term viability',
        'Developing re-design strategies to replace obsolete components with minimal disruption',
        'Expertise in high-pin-count BGAs, micro-pitch components, and high-speed interconnects.',
        'Quality assurance in replacement sourcing to prevent counterfeit components'
      ],
    },
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/icons/circular-arrow.svg',
      name: 'End-to-End Component Lifecycle Management',
      desc: 'We track, predict, and resolve EOL risks before they impact your production.',
    },
    {
      imgUrl: 'assets/icons/glob.svg',
      name: 'Global Network of Suppliers & Distributors',
      desc: 'Immediate access to critical components worldwide, minimizing sourcing delays.',
    },
    {
      imgUrl: 'assets/icons/ambrella.svg',
      name: 'Risk Mitigation & Compliance Assurance',
      desc: ' We help navigate compliance challenges and mitigate supply chain risks with trusted AVL partners.',
    },
    {
      imgUrl: 'assets/icons/plug.svg',
      name: 'Seamless Engineering Integration',
      desc: 'With <a href="https://www.whizzsystems.com/services/advanced-manufacturing" title="in-house hardware design & manufacturing" class="text-teal1">in-house hardware design & manufacturing</a> expertise, we ensure component replacements meet design and performance requirements.',
    },
    {
      imgUrl: 'assets/icons/cost.svg',
      name: 'Cost-Optimized Procurement Strategies',
      desc: 'We balance performance, reliability, and cost-efficiency through competitive sourcing and strategic risk buys.',
    },
  ];

  // Scroll sticky
  isSticky: boolean = true;
  lastScrollTop: number = 0;

  // Fragment subscriptions
  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  private currentFragment: string | null = null;

  // Services
  services: string[] = [
    'BOM Management',
    'EOL Management',
    'AVL Management',
    'Second Sourcing',
    'Obsolescence Management',
  ];

  // Scroll logic
  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY;
    this.isSticky = currentScroll <= this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  ngOnInit(): void {
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (fragment) this.scrollToService(fragment);
    });

    this.navigationSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) this.scrollToService(fragment);
      });
  }

  ngOnDestroy(): void {
    this.fragmentSubscription?.unsubscribe();
    this.navigationSubscription?.unsubscribe();
  }

  scrollToService(fragment: string, attempt: number = 0): void {
    const maxAttempts = 10;
    const delay = 100;

    setTimeout(() => {
      const element = document.getElementById(fragment?.replace(/\s/g, ''));
      if (element) {
        const offset = (window.innerHeight * 10) / 100;
        const topPosition = element.offsetTop - offset;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
      } else if (attempt < maxAttempts) {
        this.scrollToService(fragment, attempt + 1);
      }
    }, delay);
  }

   constructor(private route: ActivatedRoute, private router: Router) {}
}
