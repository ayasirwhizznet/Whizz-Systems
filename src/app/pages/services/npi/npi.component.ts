import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  RouterLink,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
@Component({
  selector: 'app-npi',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesContactExpertsComponent,
  ],
  templateUrl: './npi.component.html',
})
export class NpiComponent implements OnInit, OnDestroy {
  npiServices = [
    'System Level Architecture',
    'Engineering & Design',
    'Prototyping',
    'Testing',
    'Compliance',
  ];

  enggAndDesign = {
    category: 'Engineering and Design',
    subServices: [
      {
        name: 'System Design/Schematics',
        link: '/services/engineering_&_design/system_design_&_schematics',
      },
      { name: 'FPGA Design', link: '/services/engineering_&_design/fpga' },
      {
        name: 'PCB Layout',
        link: '/services/engineering_&_design/pcb_layout',
      },
      {
        name: '3D Modeling/Mechanical Engineering',
        link: '/services/engineering_&_design/3D_modeling',
      },
      {
        name: 'Signal Integrity Simulations',
        link: '/services/engineering_&_design/signal_integrity_simulations',
      },
      {
        name: 'Power Delivery Network Simulations',
        link: '/services/engineering_&_design/power_delivery',
      },
      {
        name: 'Thermal Management/Thermal Simulation',
        link: '/services/engineering_&_design/thermal_management',
      },
    ],
  };

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
