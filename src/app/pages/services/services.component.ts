import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ButtonComponent } from '../../shared/components/button/button.component';

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

  constructor(private route: ActivatedRoute, private router: Router) { }

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

  meaningCards: string[] = [
    'System architecture & requirements definition',
    'ASIC & FPGA development',
    'High-speed PCB design',
    '3D modeling/mechanical engineering',
    'Signal integrity (SI), power integrity (PI), & thermal analysis',
    'Prototype bring-up & validation',
    'Advance manufacturing',
    'Design for manufacturability (DFM) & supply chain alignment'
  ];

  faqs: any[] = [
    {
      question: 'Do you manufacture the hardware you design?',
      answer: 'Yes, Whizz Systems can design and manufacture the hardware we develop, ensuring full accountability from concept through production.',
      isOpen: false
    },
    {
      question: 'Where are your manufacturing facilities located?',
      answer: 'We operate manufacturing facilities in Santa Clara, California, and Malaysia, allowing us to support both rapid prototyping and cost-efficient high-volume production.',
      isOpen: false
    },
    {
      question: 'Can you scale from prototype to volume production?',
      answer: 'Yes. Our design and manufacturing processes are designed to scale products from early prototypes to full production.',
      isOpen: false
    },
    {
      question: 'Why is in-house manufacturing important?',
      answer: 'It reduces risk, shortens iteration cycles, and ensures designs are optimized for yield, cost, and quality.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  serviceCategories: any[] = [
    {
      name: 'Engineering & Design',
      desc: `With all engineering disciplines in-house—hardware, mechanical, thermal, and power—we deeply understand the complexity and requirements of modern electronics. From concept to production, we design high-performance, manufacturable solutions that meet the toughest industry challenges.`,
      services: [
        { name: 'System Design/Schematics', link: '/services/engineering-design/system-schematic-services', icon: 'assets/icons/tailered.svg' },
        { name: 'Signal Integrity Simulation', link: '/services/engineering-design/signal-integrity-simulation-services', icon: 'assets/icons/speed.svg' },
        { name: 'FPGA Design', link: '/services/engineering-design/fpga-design-services', icon: 'assets/icons/excellence.svg' },
        { name: 'Power Delivery Network Simulations', link: '/services/engineering-design/power-delivery-network-simulation', icon: 'assets/icons/signal.svg' },
        { name: 'PCB Layout', link: '/services/engineering-design/pcb-layout', icon: 'assets/icons/pcb.svg' },
        { name: 'Thermal Management/ Thermal Simulation', link: '/services/engineering-design/thermal-management-solutions', icon: 'assets/icons/thermal.svg' },
        { name: '3D Modeling/Mechanical Engineering', link: '/services/engineering-design/3d-modeling-mechanical-design', icon: 'assets/icons/modeling.svg' },
        { name: 'Firmware & Software Development', link: '/services/engineering-design/firmware-software-development', icon: 'assets/icons/code.svg' },
      ],
    },
    {
      name: 'NPI',
      desc: `Bringing innovative hardware to market requires precision, efficiency, and deep technical expertise. We bridge the gap between concept and production with a seamless <a href="https://www.whizzsystems.com/services/npi" class="text-teal1">NPI process</a>, ensuring design readiness, manufacturability, and compliance while accelerating time to market.`,
      services: [
        { name: 'System Design/Schematics', link: '/services/npi', fragment: 'system-level-architecture', icon: 'assets/icons/puzzle.svg' },
        { name: 'Schematic Design', link: '/services/npi', fragment: 'schematic-design', icon: 'assets/icons/excellence.svg' },
        { name: 'Computer Aided Manufacturing', link: '/services/npi', fragment: 'computer-aided-manufacturing', icon: 'assets/icons/industry.svg' },
        { name: 'Prototyping', link: '/services/npi', fragment: 'Prototyping', icon: 'assets/icons/setting.svg' },
        { name: 'Testing', link: '/services/npi', fragment: 'Testing', icon: 'assets/icons/prototype.svg' },
        { name: 'Compliance & Certification', link: '/services/npi', fragment: 'Compliance', icon: 'assets/icons/expert-badge.svg' },
      ],
    },
    {
      name: 'Lab Testing Solutions',
      desc: `Reliability starts with rigorous validation. Our <a href="https://www.whizzsystems.com/services/lab-testing-solutions" class="text-teal1">lab testing solutions</a> ensure every board and system meets industry standards, from initial bring-up to full characterization, so your products perform flawlessly in real-world conditions.`,
      services: [
        { name: 'Board Bring Up', link: '/services/lab-testing-solutions', fragment: 'board-bring-up', icon: 'assets/icons/tailered.svg' },
        { name: 'Validation', link: '/services/lab-testing-solutions', fragment: 'Validation', icon: 'assets/icons/speed.svg' },
        { name: 'Characterization', link: '/services/lab-testing-solutions', fragment: 'Characterization', icon: 'assets/icons/search.svg' },
      ],
    },
    {
      name: 'Advanced Manufacturing',
      desc: `Precision, scalability, and efficiency drive our <a href="https://www.whizzsystems.com/services/advanced-manufacturing" class="text-teal1">advanced manufacturing</a> capabilities. Whether assembling complex electronics, integrating mechanical enclosures, or designing system-level packaging, we ensure the highest quality while offering both local and offshore production flexibility.`,
      services: [
        { name: 'Manufacturing Simulations', link: '/services/advanced-manufacturing', fragment: 'process-engineering', icon: 'assets/icons/industry.svg' },
        { name: 'System Build & Packaging Design', link: '/services/advanced-manufacturing', fragment: 'manufacturing-testing', icon: 'assets/icons/modeling.svg' },
        { name: 'Electronic Manufacturing Assembly', link: '/services/advanced-manufacturing', fragment: 'Locations', icon: 'assets/icons/excellence.svg' },
        { name: 'Local & Offshore Capabilities', link: '/services/advanced-manufacturing', fragment: 'environmental-testing', icon: 'assets/icons/glob.svg' },
        { name: 'Mechanical Assembly', link: '/services/advanced-manufacturing', fragment: 'box-build', icon: 'assets/icons/puzzle.svg' },
      ],
    },
    {
      name: 'Sustaining Engineering & Obsolescence Management',
      desc: `Technology evolves, but your product lifecycle doesn’t have to be a limitation. We proactively <a href="https://www.whizzsystems.com/services/sustainable-engineering" class="text-teal1">manage component lifecycles</a>, mitigate EOL risks, and provide alternative sourcing strategies to keep your products viable and competitive.`,
      services: [
        { name: 'BOM Management', link: '/services/sustainable-engineering', icon: 'assets/icons/tailered.svg' },
        { name: 'EOL Management', link: '/services/sustainable-engineering', icon: 'assets/icons/speed.svg' },
        { name: 'AVL Management', link: '/services/sustainable-engineering', icon: 'assets/icons/excellence.svg' },
        { name: 'Second Sourcing/Risk Buying', link: '/services/sustainable-engineering', icon: 'assets/icons/signal.svg' },
      ],
    },
    {
      name: 'Supply Chain Management',
      desc: `Managing electronic components is more complex than ever. Our <a href="https://www.whizzsystems.com/services/supply-chain-management" class="text-teal1">supply chain solutions</a> provide strategic sourcing, compliance oversight, and procurement expertise to mitigate risk, ensure availability, and keep your production on track.`,
      services: [
        { name: 'Component Engineering', link: '/services/supply-chain-management', fragment: 'components-procurement-and-planning', icon: 'assets/icons/puzzle.svg' },
        { name: 'Compliance Engineering', link: '/services/supply-chain-management', fragment: 'prototype-build-coordination', icon: 'assets/icons/expert-badge.svg' },
        { name: 'Procurement Engineering', link: '/services/supply-chain-management', fragment: 'global-sourcing-and-broker-ecosystem', icon: 'assets/icons/excellence.svg' },
      ],
    },
  ];
}
