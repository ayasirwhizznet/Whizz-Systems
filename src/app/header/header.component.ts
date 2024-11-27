import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
  currentRoute: string = ''; // To track the current route

  isSearchbaropen: boolean = false;
  isMenuOpen: boolean = false;
  isAccordionOpen = false;

  // Menu items definition
  menuItems = [
    { label: 'About', link: '/about', dropdown: '' },
    { label: 'Services', dropdown: 'service', link: '/' },
    { label: 'Featured Products', dropdown: 'featured', link: '/' },
    { label: 'Resources', dropdown: 'resources', link: '/' },
  ];

  serviceSections = [
    {
      title: 'Engineering & Design',
      items: [
        { label: 'System Design / Schematics', link: '/' },
        { label: 'FPGA Design', link: '/' },
        { label: 'PCB Layout', link: '/' },
        { label: '3D Modeling / Mechanical Engineering', link: '/' },
        { label: 'Signal Integrity Simulations', link: '/' },
        { label: 'Power Delivery Network Simulations', link: '/' },
        { label: 'Thermal Management / Thermal Simulation', link: '/' },
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
        { label: 'Second Sourcing / Risk Buying', link: '/' },
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Track the current route on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;  // Store the current route
        this.updateActiveMenuItem();  // Update active menu item based on route
      }
    });

     // Listen for scroll events
     window.addEventListener('scroll', this.onScroll.bind(this));
  }

  // Updates the active menu item based on the current route
  updateActiveMenuItem(): void {
    // Set active menu item based on the route
    if (this.currentRoute === '/about') {
      this.activeMenuItem = 'About';
    } else if (this.currentRoute === '/services') {
      this.activeMenuItem = 'Services';
    } else if (this.currentRoute === '/featured') {
      this.activeMenuItem = 'Featured Products';
    } else if (this.currentRoute === '/resources') {
      this.activeMenuItem = 'Resources';
    } else {
      this.activeMenuItem = null;  // Reset if no match
    }
  }

  // Handle menu item click (sets active item and closes dropdowns)
  menu(menuItemLabel: string) {
    this.isSearchbaropen = false;
    this.activeMenuItem = menuItemLabel;
    this.activeBottomSection = null;  // Close the dropdown section
  }

  // Handle dropdown section toggling
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
    // this.isSearchbaropen = !this.isSearchbaropen;
    this.activeBottomSection = '';
    this.activeMenuItem = '';
  }

  lastScrollTop = 0;
  isHeaderVisible = true; 

  ngOnDestroy(): void {
    // Remove event listener when component is destroyed
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If the user scrolls down, hide the header
    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.isHeaderVisible = false;
    } else if (currentScroll < this.lastScrollTop && currentScroll < 100) {
      // If the user scrolls up, show the header
      this.isHeaderVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ensure scroll position doesn’t go negative
  }
}
