import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { CbuttonComponent } from '../cbutton/cbutton.component';
import { Cbutton3Component } from '../cbutton3/cbutton3.component';
import { Cbutton4Component } from '../cbutton4/cbutton4.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, NgClass, HeaderSectionComponent, AccordionComponent, CbuttonComponent, Cbutton3Component,Cbutton4Component],
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
    { label: 'About', link: '/about', dropdown: '' },
    { label: 'Services', dropdown: 'service' },
    { label: 'Featured Products', dropdown: 'featured', link: '/' },
    { label: 'Resources', dropdown: 'resources', link: '/' },
  ];

  serviceSections = [
    {
      title: 'Engineering & Design',
      items: [
        { label: 'System Design/Schematics', link: 'System Design/Schematics' },
        { label: 'FPGA Design', link: '/' },
        { label: 'PCB Layout', link: '/' },
        { label: '3D Modeling/Mechanical Engineering', link: '3D Modeling/Mechanical Engineering' },
        { label: 'Signal Integrity Simulations', link: '/' },
        { label: 'Power Delivery Network Simulations', link: '/' },
        { label: 'Thermal Management/Thermal Simulation', link: 'Thermal Management/Thermal Simulation' },
      ],
    },
    {
      title: 'NPI',
      items: [
        { label: 'System Level Architecture', link: '/' },
        { label: 'Engineering & Design', link: '/' },
        { label: 'Prototyping', link: '/' },
        { label: 'Testing', link: '/' },
        { label: 'Compliance and Certification', link: '/' },
      ],
    },
    {
      title: 'Advanced Manufacturing',
      items: [
        { label: 'DFX Analysis', link: '/' },
        { label: 'FMEA (Failure Mode & Effects Analysis)', link: '/' },
        { label: 'Thermal Profiling and Reflow Soldering Optimization', link: '/' },
        { label: 'Mechanical System Build', link: '/' },
        { label: 'Packaging Design', link: '/' },
      ],
    },
    {
      title: 'Lab Testing Solutions',
      items: [
        { label: 'Board Bring Up', link: '/' },
        { label: 'Validation', link: '/' },
        { label: 'Characterization', link: '/' },
      ],
    },
    {
      title: 'Supply Chain Management',
      items: [
        { label: 'Component Engineering', link: '/' },
        { label: 'Compliance Engineering', link: '/' },
        { label: 'Procurement Engineering', link: '/' },
      ],
    },
    {
      title: 'Sustainable Engineering & Obsolescence Management',
      items: [
        { label: 'BOM Management', link: '/' },
        { label: 'EOL Management', link: '/' },
        { label: 'AVL Management', link: '/' },
        { label: 'Second Sourcing/Risk Buying', link: '/' },
      ],
    },
  ];


  featuredProductItems = [
    { label: '5G ORU Open Radio Unit', link: '/' },
    { label: 'Loopback Cards', link: '/' },
    { label: 'Xilinx Evaluation Kit', link: '/' },
    { label: 'USB 3/2', link: '/' },
  ];

  resourceItems = [
    { label: 'Whitepapers', link: '/' },
    { label: 'Case Studies', link: '/' },
    { label: 'News', link: '/' },
    { label: 'FAQ', link: '/' },
  ];

  industryItems = [
    { label: 'Aerospace', link: '/' },
    { label: 'Software', link: '/' },
    { label: 'AI', link: '/' },
    { label: 'Defence', link: '/' },
    { label: 'Automotive', link: '/' },
    { label: 'Medical', link: '/' },
    { label: 'Consumer', link: '/' },
    { label: 'Media', link: '/' },
    { label: 'Storage', link: '/' },
    { label: 'Compute', link: '/' },
    { label: 'Network', link: '/' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isHeaderVisible = true;
      }
    });
  }

  titleSlug: string = '';
  categorySlug: string = '';

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

    const title = this.route.snapshot.paramMap.get('title');
    const category = this.route.snapshot.paramMap.get('category');
    if (title) {
      this.titleSlug = decodeURIComponent(title);
      document.title = this.titleSlug;
    }
    if (category) {
      this.categorySlug = decodeURIComponent(category);
    }

   
  }

  updateActiveMenuItem(): void {
    if (this.currentRoute === '/about') {
      this.activeMenuItem = 'About';
    } else if (this.currentRoute === '/services') {
      this.activeMenuItem = 'Services';
    } else if (this.currentRoute === '/featured') {
      this.activeMenuItem = 'Featured Products';
    } else if (this.currentRoute === '/resources') {
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

  toggleMenu() {
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
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.isHeaderVisible = false; 
    } else if (currentScroll < this.lastScrollTop && currentScroll > 100) {
      this.isHeaderVisible = true; 
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
  }


}
