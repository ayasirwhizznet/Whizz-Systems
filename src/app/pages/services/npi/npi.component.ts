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
    'Schematic Design',
    'Computer Aided Manufacturing',
    'Prototyping',
    'Testing',
    'Compliance',
  ];

  enggAndDesign = {
    services: [
      {
        name: 'System Design/Schematics',
        link: '/services/engineering-design/system-schematic-services',
      },
      {
        name: 'FPGA Design',
        link: '/services/engineering-design/fpga-design-services',
      },
      {
        name: 'Firmware & Software Development',
        link: '/services/engineering-design/firmware-software-development',
      },
      { name: 'PCB Layout', link: '/services/engineering-design/pcb-layout' },
      {
        name: '3D Modeling/Mechanical Engineering',
        link: '/services/engineering-design/3d-modeling-mechanical-design',
      },
      {
        name: 'Signal Integrity Simulations',
        link: '/services/engineering-design/signal-integrity-simulation-services',
      },
      {
        name: 'Power Delivery Network Simulations',
        link: '/services/engineering-design/power-delivery-network-simulation',
      },
      {
        name: 'Thermal Management/Thermal Simulation',
        link: '/services/engineering-design/thermal-management-solutions',
      },
    ],
  };

  // Sticky header state
  isSticky: boolean = true;
  lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY;
    this.isSticky = currentScroll <= this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  private currentFragment: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to route fragment changes
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.currentFragment = fragment;
        this.scrollToService(fragment);
      }
    });

    // Listen for navigation end events
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
    this.fragmentSubscription?.unsubscribe();
    this.navigationSubscription?.unsubscribe();
  }

  scrollToService(fragment: string): void {
    setTimeout(() => {
      const element = document.getElementById(fragment.replace(/\s/g, ''));
      if (element) {
        const offset = (window.innerHeight * 35) / 100;
        const topPosition = element.offsetTop - offset;
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      }
    }, 1);
  }

  faqs: any[] = [
    {
      question: 'What Is New Product Introduction (NPI)?',
      answer: 'New Product Introduction (NPI) is the structured process of transforming a product concept into a production-ready solution. It brings together engineering, prototyping, manufacturing, testing, supply chain planning, and quality management to validate designs before volume production. A well-executed NPI process helps reduce development risk, improve product quality, and accelerate time-to-market by ensuring products are ready for efficient manufacturing.',
      isOpen: false
    },
    {
      question: 'Why Is NPI Important for Electronic Product Development?',
      answer: 'Electronic products become increasingly complex as they integrate high-speed interfaces, advanced components, and sophisticated manufacturing requirements. NPI helps engineering teams validate designs early, identify manufacturing challenges, coordinate supply chain readiness, and establish quality processes before production begins. This structured approach minimizes costly redesigns while improving product reliability and production efficiency.',
      isOpen: false
    },
    {
      question: 'What Are the Stages of a Successful NPI Process?',
      answer: 'A successful NPI process typically includes product planning, engineering design, prototype development, design verification, manufacturing readiness, process validation, pilot production, and full-scale manufacturing. Each stage builds confidence in the product while reducing technical and manufacturing risks before commercialization.',
      isOpen: false
    },
    {
      question: 'How Does NPI Reduce Manufacturing Risks?',
      answer: 'NPI reduces manufacturing risks by identifying potential production issues before they impact volume manufacturing. Early collaboration between engineering, manufacturing, testing, and supply chain teams allows organizations to validate manufacturability, optimize production processes, verify component availability, and establish quality controls that improve first-pass production success.',
      isOpen: false
    },
    {
      question: 'How Does Engineering Collaboration Improve NPI Success?',
      answer: 'Successful NPI depends on collaboration across multiple engineering disciplines. Electrical, mechanical, firmware, manufacturing, testing, and supply chain teams work together throughout development to resolve issues early, optimize product performance, and ensure a seamless transition from design to manufacturing. This integrated approach shortens development cycles while improving overall product quality.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
