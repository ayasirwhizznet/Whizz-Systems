import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ButtonComponent } from '@components/button/button.component';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit, OnDestroy {
  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  private currentFragment: string | null = null;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.currentFragment = fragment;
        this.scrollToCategory(fragment);
      }
    });

    this.navigationSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment && fragment !== this.currentFragment) {
          this.currentFragment = fragment;
          this.scrollToCategory(fragment);
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

  scrollToCategory(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const viewportHeight = window.innerHeight;
      const offsetPercentage = 42;
      const offset = (viewportHeight * offsetPercentage) / 100;
      const topPosition = element.offsetTop - offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }

serviceCategories: any = [
    {
      name: 'Engineering & Design',
      desc: `With all engineering disciplines in-house—hardware, mechanical, thermal, and power—we deeply understand the complexity and requirements of modern electronics. From concept to production, we design high-performance, manufacturable solutions that meet the toughest industry challenges.`,
      services: [
        {
          name: 'System Design/Schematics',
          link: '/services/engineering-&-design/system-design-&-schematics',
        },
        { name: 'FPGA Design', link: '/services/engineering-&-design/fpga' },
        {
          name: 'Firmware & Software Development',
          link: '/services/engineering-&-design/firmware-software-development',
        },
        {
          name: 'PCB Layout',
          link: '/services/engineering-&-design/pcb-layout',
        },
        {
          name: '3D Modeling/Mechanical Engineering',
          link: '/services/engineering-&-design/3D-modeling',
        },
        {
          name: 'Signal Integrity Simulations',
          link: '/services/engineering-&-design/signal-integrity-simulations',
        },
        {
          name: 'Power Delivery Network Simulations',
          link: '/services/engineering-&-design/power-delivery',
        },
        {
          name: 'Thermal Management/Thermal Simulation',
          link: '/services/engineering-&-design/thermal-management',
        },
      ],
    },

    {
      name: 'NPI',
      desc: `Bringing innovative hardware to market requires precision, efficiency, and deep technical expertise. We bridge the gap between concept and production with a seamless NPI process, ensuring design readiness, manufacturability, and compliance while accelerating time to market.`,
      services: [
        {
          name: 'System Level Architecture',
          link: '/services/npi',
          fragment: 'SystemLevelArchitecture',
        },
        {
          name: 'Schematic Design',
          link: '/services/npi',
          fragment: 'SchematicDesign',
        },
        {
          name: 'Computer Aided Manufacturing',
          link: '/services/npi',
          fragment: 'ComputerAided<br>Manufacturing',
        },
        {
          name: 'Prototyping',
          link: '/services/npi',
          fragment: 'Prototyping',
        },
        { name: 'Testing', link: '/services/npi', fragment: 'Testing' },
        {
          name: 'Compliance and Certification',
          link: '/services/npi',
          fragment: 'Compliance',
        },
      ],
    },
    {
      name: 'Advanced Manufacturing',
      desc: `Precision, scalability, and efficiency drive our advanced manufacturing capabilities. Whether assembling complex electronics, integrating mechanical enclosures, or designing system-level packaging, we ensure the highest quality while offering both local and offshore production flexibility.`,
      services: [
        {
          name: 'Manufacturing Simulations',
          link: '/services/advanced-manufacturing',
        },
        {
          name: 'Electronic Manufacturing Assembly',
          link: '/services/advanced-manufacturing',
        },
        {
          name: 'Mechanical Assembly',
          link: '/services/advanced-manufacturing',
        },
        {
          name: 'System Build & Packaging Design',
          link: '/services/advanced-manufacturing',
        },
        {
          name: 'Local & Offshore Capabilities',
          link: '/services/advanced-manufacturing',
        },
      ],
    },
    {
      name: 'Lab Testing Solutions',
      desc:
        'Reliability starts with rigorous validation. Our lab testing solutions ensure every board and system meets industry standards, from initial bring-up to full characterization, so your products perform flawlessly in real-world conditions.',
        services: [
        {
          name: 'Board Bring Up',
          link: '/services/lab-testing-solutions',
          fragment: 'BoardBringUp',
        },
        {
          name: 'Validation',
          link: '/services/lab-testing-solutions',
          fragment: 'Validation',
        },
        {
          name: 'Characterization',
          link: '/services/lab-testing-solutions',
          fragment: 'Characterization',
        },
      ],
    },
    {
      name: 'Supply Chain Management',
      desc: `Managing electronic components is more complex than ever. Our supply chain solutions provide strategic sourcing, compliance oversight, and procurement expertise to mitigate risk, ensure availability, and keep your production on track.`,
      services: [
        {
          name: 'Component Engineering',
          link: '/services/supply-chain-management',
          fragment: 'ComponentEngineering',
        },
        {
          name: 'Compliance Engineering',
          link: '/services/supply-chain-management',
          fragment: 'ComplianceEngineering',
        },
        {
          name: 'Procurement Engineering',
          link: '/services/supply-chain-management',
          fragment: 'ProcurementEngineering',
        },
      ],
    },
    {
      name: 'Sustaining Engineering & Obsolescence Management',
      desc: `Technology evolves, but your product lifecycle doesn’t have to be a limitation. We proactively manage component lifecycles, mitigate EOL risks, and provide alternative sourcing strategies to keep your products viable and competitive.`,
      services: [
        { name: 'BOM Management', link: '/404' },
        { name: 'EOL Management', link: '/404' },
        { name: 'AVL Management', link: '/404' },
        { name: 'Second Sourcing/Risk Buying', link: '/404' },
      ],
    },
  ];
}
