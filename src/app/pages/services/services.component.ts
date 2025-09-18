import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
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

  isSticky: boolean = true;
  lastScrollTop: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to URL fragment changes
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.currentFragment = fragment;
        this.scrollToCategory(fragment);
      }
    });

    // Subscribe to navigation events
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
    this.fragmentSubscription?.unsubscribe();
    this.navigationSubscription?.unsubscribe();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY;
    this.isSticky = currentScroll <= this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  scrollToCategory(id: string): void {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = (window.innerHeight * 42) / 100; // 42% of viewport height
    const topPosition = element.offsetTop - offset;

    window.scrollTo({ top: topPosition, behavior: 'smooth' });
  }

  serviceCategories: any[] = [
    {
      name: 'Engineering & Design',
      desc: `With all engineering disciplines in-house—hardware, mechanical, thermal, and power—we deeply understand the complexity and requirements of modern electronics. From concept to production, we design high-performance, manufacturable solutions that meet the toughest industry challenges.`,
      services: [
        { name: 'System Design/Schematics', link: '/services/engineering-design/system-schematic-services' },
        { name: 'FPGA Design', link: '/services/engineering-design/fpga-design-services' },
        { name: 'Firmware & Software Development', link: '/services/engineering-design/firmware-software-development' },
        { name: 'PCB Layout', link: '/services/engineering-design/pcb-layout' },
        { name: '3D Modeling/Mechanical Engineering', link: '/services/engineering-design/3d-modeling-mechanical-design' },
        { name: 'Signal Integrity Simulations', link: '/services/engineering-design/signal-integrity-simulation-services' },
        { name: 'Power Delivery Network Simulations', link: '/services/engineering-design/power-delivery-network-simulation' },
        { name: 'Thermal Management/Thermal Simulation', link: '/services/engineering-design/thermal-management-solutions' },
      ],
    },
    {
      name: 'NPI',
      desc: `Bringing innovative hardware to market requires precision, efficiency, and deep technical expertise. We bridge the gap between concept and production with a seamless NPI process, ensuring design readiness, manufacturability, and compliance while accelerating time to market.`,
      services: [
        { name: 'System Level Architecture', link: '/services/npi', fragment: 'system-level-architecture' },
        { name: 'Schematic Design', link: '/services/npi', fragment: 'schematic-design' },
        { name: 'Computer Aided Manufacturing', link: '/services/npi', fragment: 'computer-aided-manufacturing' },
        { name: 'Prototyping', link: '/services/npi', fragment: 'Prototyping' },
        { name: 'Testing', link: '/services/npi', fragment: 'Testing' },
        { name: 'Compliance and Certification', link: '/services/npi', fragment: 'Compliance' },
      ],
    },
    {
      name: 'Advanced Manufacturing',
      desc: `Precision, scalability, and efficiency drive our advanced manufacturing capabilities. Whether assembling complex electronics, integrating mechanical enclosures, or designing system-level packaging, we ensure the highest quality while offering both local and offshore production flexibility.`,
      services: [
        { name: 'Process Engineering', link: '/services/advanced-manufacturing', fragment: 'process-engineering' },
        { name: 'Manufacturing Testing', link: '/services/advanced-manufacturing', fragment: 'manufacturing-testing' },
        { name: 'Locations', link: '/services/advanced-manufacturing', fragment: 'Locations' },
        { name: 'Environmental Testing', link: '/services/advanced-manufacturing', fragment: 'environmental-testing' },
        { name: 'Fix Spacing', link: '/services/advanced-manufacturing', fragment: 'fix-spacing' },
        { name: 'Box Build', link: '/services/advanced-manufacturing', fragment: 'box-build' },
      ],
    },
    {
      name: 'Lab Testing Solutions',
      desc: `Reliability starts with rigorous validation. Our lab testing solutions ensure every board and system meets industry standards, from initial bring-up to full characterization, so your products perform flawlessly in real-world conditions.`,
      services: [
        { name: 'Board Bring Up', link: '/services/lab-testing-solutions', fragment: 'board-bring-up' },
        { name: 'Validation', link: '/services/lab-testing-solutions', fragment: 'Validation' },
        { name: 'Characterization', link: '/services/lab-testing-solutions', fragment: 'Characterization' },
      ],
    },
    {
      name: 'Supply Chain Management',
      desc: `Managing electronic components is more complex than ever. Our supply chain solutions provide strategic sourcing, compliance oversight, and procurement expertise to mitigate risk, ensure availability, and keep your production on track.`,
      services: [
        { name: 'Components Procurement & Planning', link: '/services/supply-chain-management', fragment: 'components-procurement-and-planning' },
        { name: 'Prototype Build Coordination', link: '/services/supply-chain-management', fragment: 'prototype-build-coordination' },
        { name: 'Global Sourcing & Broker Ecosystem', link: '/services/supply-chain-management', fragment: 'global-sourcing-and-broker-ecosystem' },
        { name: 'Inventory & Storage', link: '/services/supply-chain-management', fragment: 'inventory-and-storage' },
      ],
    },
    {
      name: 'Sustaining Engineering & Obsolescence Management',
      desc: `Technology evolves, but your product lifecycle doesn’t have to be a limitation. We proactively manage component lifecycles, mitigate EOL risks, and provide alternative sourcing strategies to keep your products viable and competitive.`,
      services: [
        { name: 'BOM Management', link: '/services/sustainable_engineering' },
        { name: 'EOL Management', link: '/services/sustainable_engineering' },
        { name: 'AVL Management', link: '/services/sustainable_engineering' },
        { name: 'Second Sourcing/Risk Buying', link: '/services/sustainable_engineering' },
      ],
    },
  ];
}
