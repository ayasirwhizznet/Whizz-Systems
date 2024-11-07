import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  link: string;
  dropdown?: string;
  open?: boolean;
}

interface ServiceSection {
  title: string;
  items: MenuItem[];
  open?: boolean; // Add this to track open state
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})

export class AccordionComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', link: '/', open: false },
    { label: 'About Us', link: '/', open: false },
    { label: 'Services', dropdown: 'service', link: '/', open: false },
    { label: 'Featured Products', dropdown: 'featured', link: '/', open: false },
    { label: 'Blog', dropdown: 'blog', link: '/', open: false },
  ];

  serviceSections: ServiceSection[] = [
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
      open: false // Track the open state for each service section
    },
    {
      title: 'NPI',
      items: [
        { label: 'System Level Architecture', link: '/' },
        { label: 'Engineering & Design', link: '/' },
        { label: 'Prototyping', link: '/' },
        { label: 'Testing', link: '/' },
        { label: 'Compliance and Certification', link: '/' }
      ],
      open: false // Track the open state for each service section
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
      open: false // Track the open state for each service section
    },
    {
      title: 'Lab Testing Solutions',
      items: [
        { label: 'Board Bring Up', link: '/' },
        { label: 'Validation', link: '/' },
        { label: 'Characterization', link: '/' },
      ],
      open: false // Track the open state for each service section
    },
    {
      title: 'Supply Chain Management',
      items: [
        { label: 'Component Engineering', link: '/' },
        { label: 'Compliance Engineering', link: '/' },
        { label: 'Procurement Engineering', link: '/' },
      ],
      open: false // Track the open state for each service section
    },
    
    {
      title: 'Sustainable Engineering & Obsolescence Management',
      items: [
        { label: 'BOM Management', link: '/' },
        { label: 'EOL Management', link: '/' },
        { label: 'AVL Management', link: '/' },
        { label: 'Second Sourcing / Risk Buying', link: '/' },
      ],
      open: false // Track the open state for each service section
    },
  ];

  featuredProductItems: MenuItem[] = [
    { label: '5G ORU Open Radio Unit', link: '/' },
    { label: 'Loopback Cards', link: '/' },
    { label: 'Xilinx Evaluation Kit', link: '/' },
    { label: 'USB 3/2', link: '/' },
  ];

  blogItems: MenuItem[] = [
    { label: 'News & Events', link: '/' },
    { label: 'Whitepapers', link: '/' },
    { label: 'Customer Stories', link: '/' },
    { label: 'FAQ', link: '/' },
  ];

  toggleMenu(item: MenuItem) {
    // If the item is already open, close it
    if (item.open) {
      item.open = false;
    } else {
      // Close all other menus and their dropdowns
      this.menuItems.forEach(i => {
        i.open = false; // Close all other menu items
      });
      item.open = true; // Open the selected menu item
    }
  }
  
  toggleSection(section: ServiceSection) {
    // If the section is already open, close it
    if (section.open) {
      section.open = false;
    } else {
      // Close all other sections
      this.serviceSections.forEach(s => {
        s.open = false; // Close all other sections
      });
      section.open = true; // Open the selected section
    }
  }  
}
