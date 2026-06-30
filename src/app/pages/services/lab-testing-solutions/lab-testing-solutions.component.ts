import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
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
  ],
  templateUrl: './lab-testing-solutions.component.html',
})
export class LabTestingSolutionsComponent implements OnInit, OnDestroy {
  labTestingServices: string[] = ['Board Bring Up', 'Validation', 'Characterization'];

  benefits: any[] = [
    {
      imgUrl: 'assets/icons/lab.svg',
      name: 'All-In-One Lab Services',
      desc: 'Comprehensive solutions for bring-up, validation, and characterization under one roof.',
    },
    {
      imgUrl: 'assets/icons/tool.svg',
      name: 'Advanced Tools & Facilities',
      desc: 'Industry-grade equipment for precise diagnostics.',
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
        if (fragment) this.scrollToService(fragment);
      });

      this.navigationSubscription = this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          const fragment = this.route.snapshot.fragment;
          if (fragment) this.scrollToService(fragment);
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

  faqs: any[] = [
    {
      question: 'What Are Lab Testing Solutions for Electronic Products?',
      answer: 'Lab testing solutions validate that electronic products meet their functional, performance, reliability, and quality requirements before production or deployment. Through comprehensive testing and verification, engineering teams can identify design issues early, reduce product risk, and ensure systems perform as intended under real-world operating conditions.',
      isOpen: false
    },
    {
      question: 'Why Is Functional Testing Important in Electronic Product Development?',
      answer: 'Functional testing verifies that a product performs according to its design specifications before it moves into production. By validating hardware functionality, identifying defects early, and confirming system performance, functional testing helps reduce costly redesigns, improve product quality, and increase confidence during manufacturing and deployment.',
      isOpen: false
    },
    {
      question: 'What Testing Services Should Be Completed Before Bringing an Electronic Product to Market?',
      answer: 'Before commercialization, electronic products should undergo a structured verification and validation process that may include functional testing, system validation, reliability assessment, environmental testing, and failure analysis. Performing these evaluations before production helps identify potential issues early, supports regulatory and quality requirements, and improves long-term product reliability.',
      isOpen: false
    },
    {
      question: "How Do Lab Testing Solutions Improve Product Reliability and Manufacturing Readiness?",
      answer: 'Lab testing provides valuable insight into how a product performs under expected operating conditions. By validating functionality, analyzing failures, and verifying design performance before manufacturing, organizations can improve product reliability, reduce production risks, and accelerate the transition from development to volume manufacturing.',
      isOpen: false
    },
    {
      question: "How Can Specialized Testing Support High-Performance Electronics and AI Hardware?",
      answer: 'High-performance computing, AI systems, and other advanced electronic platforms require rigorous testing to validate power delivery, thermal performance, signal integrity, and overall system reliability. A comprehensive testing strategy helps engineering teams identify potential performance limitations early, ensuring complex hardware platforms are ready for production and long-term operation.',
      isOpen: false
    },
    {
      question: "What Is the Difference Between Verification and Validation in Hardware Testing?",
      answer: 'Verification confirms that a product has been designed according to its specifications, while validation ensures it performs as intended in its real-world application. Together, these processes help identify defects early, improve product quality, and reduce the risk of failures after deployment. A comprehensive testing strategy incorporates both verification and validation to support reliable product development.',
      isOpen: false
    },
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
