import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { CbuttonComponent } from '../cbutton/cbutton.component';
import { Cbutton3Component } from '../cbutton3/cbutton3.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, NgClass, HeaderSectionComponent, AccordionComponent, CbuttonComponent, Cbutton3Component],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  activeBottomSection: string | null = null;
  activeMenuItem: string | null = null;

  isSearchbaropen:boolean = false;

  toggleSearchbar() {
        this.activeBottomSection = ''
    this.activeMenuItem = ''
    this.isSearchbaropen = !this.isSearchbaropen;
  }

  isMenuOpen: boolean = false;
  isAccordionOpen = false;
  toggleMenu() {
    this.isSearchbaropen = !this.isSearchbaropen;
    this.isMenuOpen = !this.isMenuOpen;
    this.isAccordionOpen = this.isMenuOpen;
  }

  closeMenu() {
    this.isSearchbaropen = !this.isSearchbaropen;
    this.activeBottomSection = ''
    this.activeMenuItem = ''
  }

  menuItems = [
    { label: 'About', link: '/', dropdown: '' },
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

  toggleBottomSection(type: string | null, menuItemLabel: string) {
    this.isSearchbaropen = false
    this.activeBottomSection = this.activeBottomSection === type ? null : type;
    this.activeMenuItem = this.activeBottomSection ? menuItemLabel : null;
  }
}
