import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { MobileHeaderComponent } from '../mobile-header/mobile_header.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    HeaderSectionComponent,
    MobileHeaderComponent,
    ButtonComponent,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeBottomSection: string | null = null;
  activeMenuItem: string | null = null;
  currentRoute: string = '';

  isSearchbaropen: any = false;
  isMenuOpen: boolean = false;
  isAccordionOpen = false;
  searchText: boolean = false;

  lastScrollTop: number = 0;
  isHeaderVisible: boolean = true;

  currentScroll: any;

  menuItems = [
    { label: 'About', link: '/about' },
    { label: 'Services', dropdown: 'service' },
    { label: 'Featured Products', link: '/featured-products' },
    { label: 'Blog', link: '/news-&-insights' },
  ];

  featuredProductItems = [
    { label: '5G ORU Open Radio Unit', link: '/' },
    { label: 'Loopback Cards', link: '/' },
    { label: 'Xilinx Evaluation Kit', link: '/' },
    { label: 'USB 3/2', link: '/' },
  ];

  serviceSections = [
      [
        {
          title: 'Engineering & Design',
          items: [
            {
              label: 'System Design/Schematics',
              link: '/services/engineering-design/system-schematic-services',
            },
            { label: 'FPGA Design', link: '/services/engineering-design/fpga-design-services' },
            {
              label: 'Firmware & Software Development',
              link: '/services/engineering-design/firmware-software-development',
            },
            {
              label: 'PCB Layout',
              link: '/services/engineering-design/pcb-layout',
            },
            {
              label: '3D Modeling/Mechanical Engineering',
              link: '/services/engineering-design/3d-modeling-mechanical-design',
            },
            {
              label: 'Signal Integrity Simulations',
              link: '/services/engineering-design/signal-integrity-simulation-services',
            },
            {
              label: 'Power Delivery Network Simulations',
              link: '/services/engineering-design/power-delivery-network-simulation',
            },
            {
              label: 'Thermal Management/Thermal Simulation',
              link: '/services/engineering-design/thermal-management-solutions',
            },
          ],
        },
        {
          title: 'Lab Testing Solutions',
          link: '/services/lab-testing-solutions',
          items: [
            {
              label: 'Board Bring Up',
              link: '/services/lab-testing-solutions',
              fragment: 'board-bring-up',
            },
            {
              label: 'Validation',
              link: '/services/lab-testing-solutions',
              fragment: 'Validation',
            },
            {
              label: 'Characterization',
              link: '/services/lab-testing-solutions',
              fragment: 'Characterization',
            },
          ],
        },
      ],
      [
        {
          title: 'NPI',
          link: '/services/npi',
          items: [
            {
              label: 'System Level Architecture',
              link: '/services/npi',
              fragment: 'system-level-architecture',
            },
            {
              label: 'Schematic Design',
              link: '/services/npi',
              fragment: 'schematic-design',
            },
            {
              label: 'Computer Aided Manufacturing',
              link: '/services/npi',
              fragment: 'computer-aided-manufacturing',
            },
            {
              label: 'Prototyping',
              link: '/services/npi',
              fragment: 'Prototyping',
            },
            { label: 'Testing', link: '/services/npi', fragment: 'Testing' },
            {
              label: 'Compliance and Certification',
              link: '/services/npi',
              fragment: 'Compliance',
            },
          ],
        },
        {
          title: 'Supply Chain Management',
          link: '/services/supply-chain-management',
          items: [
            {
              label: 'Components Procurement & Planning',
              link: '/services/supply-chain-management',
              fragment: 'components-procurement-and-planning',
            },
            {
              label: 'Prototype Build Coordination',
              link: '/services/supply-chain-management',
              fragment: 'prototype-build-coordination',
            },
            {
              label: 'Global Sourcing & Broker Ecosystem',
              link: '/services/supply-chain-management',
              fragment: 'global-sourcing-and-broker-ecosystem',
            },
            {
              label: 'Inventory & Storage',
              link: '/services/supply-chain-management',
              fragment: 'inventory-and-storage',
            },
          ],
        },
      ],
      [
        {
          title: 'Advanced Manufacturing',
          link: '/services/advanced-manufacturing',
          items: [
            {
              label: 'Process Engineering',
              link: '/services/advanced-manufacturing',
              fragment: 'process-engineering'
            },
            {
              label: 'Manufacturing Testing',
              link: '/services/advanced-manufacturing',
              fragment: 'manufacturing-testing'
            },
            {
              label: 'Locations',
              link: '/services/advanced-manufacturing',
              fragment: 'Locations'
            },
            {
              label: 'Environmental Testing',
              link: '/services/advanced-manufacturing',
              fragment: 'environmental-testing'
            },
            {
              label: 'Fix Spacing',
              link: '/services/advanced-manufacturing',
              fragment: 'fix-spacing'
            },
            {
              label: 'Box Build',
              link: '/services/advanced-manufacturing',
              fragment: 'box-build'
            },
          ],
        },
        {
          title: 'Sustainable Engineering & Obsolescence Management',
          link: '/services/sustainable_engineering',
          items: [
            {
              label: 'BOM Management',
              link: '/services/sustainable_engineering',
            },
            {
              label: 'EOL Management',
              link: '/services/sustainable_engineering',
            },
            {
              label: 'AVL Management',
              link: '/services/sustainable_engineering',
            },
            {
              label: 'Second Sourcing/Risk Buying',
              link: '/services/sustainable_engineering',
            },
          ],
        },
      ],
    ];

  constructor(private router: Router, private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isHeaderVisible = true;
        }
      });
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.urlAfterRedirects;
          this.updateActiveMenuItem();
          this.activeBottomSection = '';
          this.activeMenuItem = '';
          this.isSearchbaropen = '';
        }
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    this.isHeaderVisible = currentScroll <= this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    if (this.activeBottomSection || this.isSearchbaropen) {
      this.closeMenu();
    }
  }

  updateActiveMenuItem(): void {
    if (this.currentRoute.includes('/about')) this.activeMenuItem = 'About';
    else if (this.currentRoute.includes('/services')) this.activeMenuItem = 'Services';
    else if (this.currentRoute.includes('/featured-products')) this.activeMenuItem = 'Featured Products';
    else if (this.currentRoute.includes('/resources')) this.activeMenuItem = 'Resources';
    else this.activeMenuItem = null;
  }

  menu(menuItemLabel: string) {
    this.isSearchbaropen = false;
    this.activeMenuItem = menuItemLabel;
    this.activeBottomSection = null;
  }

  toggleBottomSection(type: string | null, menuItemLabel: string) {
    this.isSearchbaropen = false;
    this.activeBottomSection = this.activeBottomSection === type ? null : type;
    this.activeMenuItem = this.activeBottomSection ? menuItemLabel : null;
  }

  toggleSearchbar() {
    this.activeBottomSection = '';
    this.activeMenuItem = '';
    this.isSearchbaropen = !this.isSearchbaropen;
    this.isAccordionOpen = false;
    this.isMenuOpen = false;
  }

  focusin() { this.searchText = true; }
  focusout() { this.searchText = false; }

  toggleMenuSection() {
    this.isSearchbaropen = false;
    this.isMenuOpen = !this.isMenuOpen;
    this.isAccordionOpen = this.isMenuOpen;
  }

  isClickedMobileLogo() {
    this.isSearchbaropen = false;
    this.isMenuOpen = false;
    this.isAccordionOpen = false;
  }

  closeMenu() {
    this.activeBottomSection = '';
    this.activeMenuItem = '';
    this.isSearchbaropen = '';
  }
}
