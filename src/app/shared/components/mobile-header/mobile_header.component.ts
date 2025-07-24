import { CommonModule} from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  link?: string;
  dropdown?: string;
  open?: boolean;
  fragment?: string;
}

interface ServiceSection {
  title: string;
  link?: string;
  items: MenuItem[];
  open?: boolean;
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-header.component.html',
})
export class MobileHeaderComponent {
  activeMenuItem: string | null = null;
  menuSectionVisible: boolean = true;

  @Output() menuLinkClicked = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    { label: 'About', link: '/about', open: false },
    { label: 'Services', dropdown: 'service', open: false },
    { label: 'Featured Products', link: '/featured-products', open: false },
    { label: 'Blog', link: '/news-&-insights', open: false },
  ];

  serviceSections: ServiceSection[] = [
    {
      title: 'Engineering & Design',
      items: [
        {
          label: 'System Design/Schematics',
          link: '/services/engineering-design/system-schematic-services',
        },
        { label: 'FPGA Design', link: '/services/engineering-design/fpga-design-services' },
        { label: 'Firmware & Software Development', link: '/services/engineering-design/firmware-software-development' },
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
      open: false,
    },
    {
      title: 'NPI',
      link: 'services/npi',
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
      open: false,
    },
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
      open: false,
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
      open: false,
    },

    {
      title: 'Sustainable Engineering & Obsolescence Management',
      items: [
        { label: 'BOM Management', link: '/services/sustainable_engineering' },
        { label: 'EOL Management', link: '/services/sustainable_engineering' },
        { label: 'AVL Management', link: '/services/sustainable_engineering' },
        { label: 'Second Sourcing / Risk Buying', link: '/services/sustainable_engineering' },
      ],
      open: false,
    },
  ];

  featuredProductItems: MenuItem[] = [
    { label: '5G ORU Open Radio Unit', link: '/' },
    { label: 'Loopback Cards', link: '/' },
    {
      label: 'Xilinx Evaluation Kit',
      link: '/',
    },
    { label: 'USB 3/2', link: '/' },
  ];

  toggleMenuSection(item: MenuItem) {
    // Loop through all menu items and close all except the clicked one
    this.menuItems.forEach((i) => {
      i.open = i === item ? !i.open : false; // Toggle the clicked item and close others
    });
  }

  toggleSection(section: ServiceSection) {
    // If the section is already open, close it
    if (section.open) {
      section.open = false;
    } else {
      // Close all other sections
      this.serviceSections.forEach((s) => {
        s.open = false; // Close all other sections
      });
      section.open = true; // Open the selected section
    }
  }

  // Your existing properties and methods...

  closeMenuSection() {
    this.menuSectionVisible = false; // Hide the header
    this.menuLinkClicked.emit(); // Emit the event to notify the parent
  }

  // Optional: If you want to show the header when navigating to a new route
  // You can use Angular lifecycle hooks to show the header again when the component reloads.
  ngOnInit() {
    this.menuSectionVisible = true; // Ensure header is visible when the page loads
  }
}
