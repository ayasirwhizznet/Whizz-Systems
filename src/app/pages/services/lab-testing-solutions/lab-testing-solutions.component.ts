import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
} from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ServicesBenefits1Component } from '../../../shared/components/services-benefits1/services-benefits1.component';

@Component({
  selector: 'app-lab-testing-solutions',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesContactExpertsComponent,
    ServicesBenefits1Component,
    ServicesBenefits1Component,
  ],
  templateUrl: './lab-testing-solutions.component.html',
})
export class LabTestingSolutionsComponent implements OnInit, OnDestroy {
  labTestingServices:string[] = ['Board Bring Up', 'Validation', 'Characterization'];

  benefits: any[] = [
    {
      imgUrl: 'assets/icons/lab.svg',
      name: 'All-In-One Lab Services',
      desc: 'Comprehensive solutions for bring-up, validation, and characterization under one roof.',
    },
    {
      imgUrl: 'assets/icons/tool.svg',
      name: 'Advanced Tools & Facilities',
      desc: ' Industry-grade equipment for precise diagnostics.',
    },
    {
      imgUrl: 'assets/icons/glob.svg',
      name: 'Global Compliance Expertise',
      desc: 'Meet rigorous industry and regulatory standards.',
    },
    {
      imgUrl: 'assets/icons/tailered.svg',
      name: 'Tailored Services',
      desc: 'Solutions customized for your product and industry.',
    },
    {
      imgUrl: 'assets/icons/25.svg',
      name: 'Decades of Innovation',
      desc: 'Over 25 years ensuring the success of cutting-edge products.',
    },
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
