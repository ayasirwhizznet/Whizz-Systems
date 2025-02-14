import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { filter, Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-supply-chain-management',
  standalone: true,
  imports: [
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesBenefitsComponent,
    ServicesContactExpertsComponent,
  ],
  templateUrl: './supply-chain-management.component.html',
})
export class SupplyChainManagementComponent implements OnInit, OnDestroy {
  benefits: any[] = [
    {
      imgUrl: 'assets/supply-chain/benefits.png',
      title: 'Integrated Across Stages',
      desc: 'We address every step in your product’s lifecycle.',
    },
    {
      imgUrl: 'assets/supply-chain/benefits.png',
      title: 'Proactive Risk Mitigation',
      desc: 'We manage risks before they become issues.',
    },
    {
      imgUrl: 'assets/supply-chain/benefits.png',
      title: 'Seamless Transitions',
      desc: 'Agile processes ensure timely delivery at every stage.',
    },
    {
      imgUrl: 'assets/supply-chain/benefits.png',
      title: 'End-to-end Compliance',
      desc: 'Meet global standards with our expert assistance.',
    },
  ];

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  private currentFragment: string | null = null;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.currentFragment = fragment;
        this.scrollToFragment(fragment);
      }
    });

    this.navigationSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment && fragment !== this.currentFragment) {
          this.currentFragment = fragment;
          this.scrollToFragment(fragment);
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

  scrollToFragment(fragment: string): void {
    setTimeout(() => {
      const element = document.getElementById(fragment?.replace(/\s/g, ''));
      if (element) {
        const viewportHeight = window.innerHeight;
        const offsetPercentage = 20;
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
