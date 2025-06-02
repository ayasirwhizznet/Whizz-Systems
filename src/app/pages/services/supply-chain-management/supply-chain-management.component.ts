import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { filter, Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    }
  ];

  isSticky: boolean = true;
  lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScrollTop) {
      this.isSticky = false;
    } else {
      this.isSticky = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  private currentFragment: string | null = null;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
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

  ngOnDestroy(): void {
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  scrollToService(fragment: string): void {
    setTimeout(() => {
      const element = document.getElementById(fragment?.replace(/\s/g, ''));
      if (element) {
        const viewportHeight = window.innerHeight;
        const offsetPercentage = 35;
        const offset = (window.innerHeight * offsetPercentage) / 100;
        const topPosition = element.offsetTop - offset;
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      }
    }, 1);
  }
}
