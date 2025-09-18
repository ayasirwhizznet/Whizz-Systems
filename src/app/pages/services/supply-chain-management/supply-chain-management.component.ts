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
}
