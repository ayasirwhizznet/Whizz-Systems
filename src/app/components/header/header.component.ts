import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule} from '@angular/common';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { MobileHeaderComponent } from '../mobile_header/mobile_header.component';
import { CbuttonComponent } from '../cbutton/cbutton.component';
import { Cbutton3Component } from '../cbutton3/cbutton3.component';
import { Cbutton4Component } from '../cbutton4/cbutton4.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderSectionComponent, MobileHeaderComponent, CbuttonComponent, Cbutton3Component,Cbutton4Component],
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

  menuItems = [
    { label: 'About', link: '/about'},
    { label: 'Services', dropdown: 'service' },
    { label: 'Featured Products', dropdown: 'featured'},
    { label: 'Resources', dropdown: 'resources'},
  ];

  serviceSections = [
    {
      title: 'Engineering & Design',
      items: [
        { label: 'System Design/Schematics', link: '/services/engineering_&_design/system_design_&_schematics' },
        { label: 'FPGA Design', link: '/services/engineering_&_design/fpga' },
        { label: 'PCB Layout', link: '/services/engineering_&_design/pcb_layout' },
        { label: '3D Modeling/Mechanical Engineering', link: '/services/engineering_&_design/3D_modeling' },
        { label: 'Signal Integrity Simulations', link: '/services/engineering_&_design/signal_integrity_simulations' },
        { label: 'Power Delivery Network Simulations', link: '/services/engineering_&_design/power_delivery' },
        { label: 'Thermal Management/Thermal Simulation', link: '/services/engineering_&_design/thermal_management' },
      ],
    },
    {
      title: 'NPI',
      items: [
        { label: 'System Level Architecture', link: '/services/npi', fragment: "SystemLevelArchitecture"},
        { label: 'Engineering & Design', link: '/services/npi', fragment: "Engineering&Design"  },
        { label: 'Prototyping', link: '/services/npi', fragment: "Prototyping"  },
        { label: 'Testing', link: '/services/npi', fragment: "Testing"},
        { label: 'Compliance and Certification', link: '/services/npi', fragment: "Compliance"  },
      ],
    },
    {
      title: 'Advanced Manufacturing',
      items: [
        { label: 'DFX Analysis', link: '/404' },
        { label: 'FMEA (Failure Mode & Effects Analysis)', link: '/404' },
        { label: 'Thermal Profiling & Reflow Soldering Optimization', link: '/404' },
        { label: 'Mechanical System Build', link: '/404' },
        { label: 'Packaging Design', link: '/404' },
      ],
    },
    {
      title: 'Lab Testing Solutions',
      items: [
        { label: 'Board Bring Up', link: '/services/lab_testing_solutions', fragment: "BoardBringUp"},
        { label: 'Validation', link: '/services/lab_testing_solutions', fragment: "Validation"},
        { label: 'Characterization', link: '/services/lab_testing_solutions', fragment: "Characterization"},
      ],
    },
    {
      title: 'Supply Chain Management',
      items: [
        { label: 'Component Engineering', link: '/404' },
        { label: 'Compliance Engineering', link: '/404' },
        { label: 'Procurement Engineering', link: '/404' },
      ],
    },
    {
      title: 'Sustainable Engineering & Obsolescence Management',
      items: [
        { label: 'BOM Management', link: '/404' },
        { label: 'EOL Management', link: '/404' },
        { label: 'AVL Management', link: '/404' },
        { label: 'Second Sourcing/Risk Buying', link: '/404' },
      ],
    },
  ];


  featuredProductItems = [
    { label: '5G ORU Open Radio Unit', link: '/featured-products/5g-oru' },
    { label: 'Loopback Cards', link: '/featured-products/loopback-cards' },
    { label: 'Xilinx Evaluation Kit', link: '/featured-products/xilinix-evaluation-kit' },
    { label: 'USB 3/2', link: '/featured-products/usb-3/2' },
  ];

  resourceItems = [
    { label: 'Whitepapers', link: '/404' },
    { label: 'Case Studies', link: '/404' },
    { label: 'News', link: '/404' },
    { label: 'FAQ', link: '/404' },
  ];

  industryItems = [
    { label: 'Aerospace', link: '/404' },
    { label: 'Software', link: '/404' },
    { label: 'AI', link: '/404' },
    { label: 'Defence', link: '/404' },
    { label: 'Automotive', link: '/404' },
    { label: 'Medical', link: '/404' },
    { label: 'Consumer', link: '/404' },
    { label: 'Media', link: '/404' },
    { label: 'Storage', link: '/404' },
    { label: 'Compute', link: '/404' },
    { label: 'Network', link: '/404' },
  ];

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
  }

  toggleMenuSection() {
    this.isSearchbaropen = !this.isSearchbaropen;
    this.isMenuOpen = !this.isMenuOpen;
    this.isAccordionOpen = this.isMenuOpen;
  }

  closeMenu() {
    this.activeBottomSection = '';
    this.activeMenuItem = '';
    this.isSearchbaropen = '';
  }

  lastScrollTop = 0;
  isHeaderVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = document.documentElement.scrollTop;
      this.isHeaderVisible = false; 
      this.closeMenu();
      this.isHeaderVisible = true; 
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
  }
}
