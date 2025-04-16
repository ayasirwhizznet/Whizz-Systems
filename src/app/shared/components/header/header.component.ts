import { Component, HostListener, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationStart,
  ActivatedRoute,
} from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { MobileHeaderComponent } from '../mobile-header/mobile_header.component';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

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

  menuItems = [
    { label: 'About', link: '/about' },
    { label: 'Services', dropdown: 'service' },
    { label: 'Featured Products', link: '/featured-products' },
    { label: 'Blog', link: '/news-&-insights' },
  ];

  serviceSections = [
    [
      {
        title: 'Engineering & Design',
        items: [
          {
            label: 'System Design/Schematics',
            link: '/services/engineering-&-design/system-design-&-schematics',
          },
          { label: 'FPGA Design', link: '/services/engineering-&-design/fpga' },
          {
            label: 'Firmware & Software Development',
            link: '/services/engineering-&-design/firmware-software-development',
          },
          {
            label: 'PCB Layout',
            link: '/services/engineering-&-design/pcb-layout',
          },
          {
            label: '3D Modeling/Mechanical Engineering',
            link: '/services/engineering-&-design/3D-modeling',
          },
          {
            label: 'Signal Integrity Simulations',
            link: '/services/engineering-&-design/signal-integrity-simulations',
          },
          {
            label: 'Power Delivery Network Simulations',
            link: '/services/engineering-&-design/power-delivery',
          },
          {
            label: 'Thermal Management/Thermal Simulation',
            link: '/services/engineering-&-design/thermal-management',
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
            fragment: 'BoardBringUp',
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
            fragment: 'SystemLevelArchitecture',
          },
          {
            label: 'Schematic Design',
            link: '/services/npi',
            fragment: 'SchematicDesign',
          },
          {
            label: 'Computer Aided Manufacturing',
            link: '/services/npi',
            fragment: 'ComputerAidedManufacturing',
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
            label: 'Component Engineering',
            link: '/services/supply-chain-management',
            fragment: 'ComponentEngineering',
          },
          {
            label: 'Compliance Engineering',
            link: '/services/supply-chain-management',
            fragment: 'ComplianceEngineering',
          },
          {
            label: 'Commodity Management',
            link: '/services/supply-chain-management',
            fragment: 'CommodityManagement',
          },
          {
            label: 'Procurement Management',
            link: '/services/supply-chain-management',
            fragment: 'ProcurementManagement',
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
            label: 'Manufacturing Simulations',
            link: '/services/advanced-manufacturing/manufacturing-simulations',
          },
          {
            label: 'Electronic Manufacturing Assembly',
            link: '/services/advanced-manufacturing/electronic-manufacturing-assembly',
          },
          {
            label: 'Mechanical Assembly',
            link: '/services/advanced-manufacturing/mechanical-assembly',
          },
          {
            label: 'System Build & Packaging Design',
            link: '/services/advanced-manufacturing/system-build-packaging-design',
          },
          {
            label: 'Local & Offshore Capabilities',
            link: '/services/advanced-manufacturing/local-offshore-capabilities',
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

  featuredProductItems = [
    { label: '5G ORU Open Radio Unit', link: '/featured-products/5g-oru' },
    { label: 'Loopback Cards', link: '/featured-products/loopback-cards' },
    {
      label: 'Xilinx Evaluation Kit',
      link: '/featured-products/xilinix-evaluation-kit',
    },
    { label: 'USB 3/2', link: '/featured-products/usb-3/2' },
  ];

  resourceItems = [
    { label: 'Whitepapers', link: '/404' },
    { label: 'Case Studies', link: '/404' },
    { label: 'News', link: '/404' },
    { label: 'FAQ', link: '/404' },
  ];

  industries: any[] = [
    'Aerospace',
    'Software',
    'AI',
    'Defence',
    'Automotive',
    'Medical',
    'Consumer',
    'Media',
    'Storage',
    'Compute',
    'Network',
  ];
  currentScroll: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isHeaderVisible = true;
      }
    });
  }

  ngOnInit(): void {
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

  updateActiveMenuItem(): void {
    if (this.currentRoute.includes('/about')) {
      this.activeMenuItem = 'About';
    } else if (this.currentRoute.includes('/services')) {
      this.activeMenuItem = 'Services';
    } else if (this.currentRoute.includes('/featured-products')) {
      this.activeMenuItem = 'Featured Products';
    } else if (this.currentRoute.includes('/resources')) {
      this.activeMenuItem = 'Resources';
    } else {
      this.activeMenuItem = null;
    }
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

  focusin() {
    this.searchText = true;
  }

  focusout() {
    this.searchText = false;
  }

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

  lastScrollTop: number = 0;
  isHeaderVisible: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop) {
      this.isHeaderVisible = false;
    } else {
      this.isHeaderVisible = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    if (this.activeBottomSection || this.isSearchbaropen) {
      this.closeMenu();
    }
  }
}
