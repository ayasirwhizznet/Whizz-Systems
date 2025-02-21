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
  templateUrl: './mobile_header.component.html',
})
export class MobileHeaderComponent {
  activeMenuItem: string | null = null;
  menuSectionVisible: boolean = true;

  @Output() menuLinkClicked = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    { label: 'About', link: '/about', open: false },
    { label: 'Services', dropdown: 'service', open: false },
    { label: 'Featured Products', link: '/featured-products', open: false },
    { label: 'Resources', dropdown: 'resources', open: false },
  ];

  serviceSections: ServiceSection[] = [
    {
      title: 'Engineering & Design',
      items: [
        {
          label: 'System Design/Schematics',
          link: '/services/engineering_&_design/system_design_&_schematics',
        },
        { label: 'FPGA Design', link: '/services/engineering_&_design/fpga' },
        {
          label: 'PCB Layout',
          link: '/services/engineering_&_design/pcb_layout',
        },
        {
          label: '3D Modeling/Mechanical Engineering',
          link: '/services/engineering_&_design/3D_modeling',
        },
        {
          label: 'Signal Integrity Simulations',
          link: '/services/engineering_&_design/signal_integrity_simulations',
        },
        {
          label: 'Power Delivery Network Simulations',
          link: '/services/engineering_&_design/power_delivery',
        },
        {
          label: 'Thermal Management/Thermal Simulation',
          link: '/services/engineering_&_design/thermal_management',
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
          fragment: 'SystemLevelArchitecture',
        },
        {
          label: 'Schematic Design',
          link: '/services/npi',
          fragment: 'SchematicDesign',
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
        {
          label: 'Computer ided Design',
          link: '/services/npi',
          fragment: 'ComputerAidedDesign',
        },
      ],
      open: false,
    },
    {
      title: 'Advanced Manufacturing',
      link: '/services/advanced_manufacturing',
      items: [
        {
          label: 'Manufacturing Simulations',
          link: '/services/advanced_manufacturing',
        },
        {
          label: 'Electronic Manufacturing Assembly',
          link: '/services/advanced_manufacturing',
        },
        {
          label: 'Mechanical Assembly',
          link: '/services/advanced_manufacturing',
        },
        {
          label: 'System Build & Packaging Design',
          link: '/services/advanced_manufacturing',
        },
        {
          label: 'Local & Offshore Capabilities',
          link: '/services/advanced_manufacturing',
        },
      ],
      open: false, // Track the open state for each service section
    },
    {
      title: 'Lab Testing Solutions',
      link: '/services/lab_testing_solutions',
      items: [
        {
          label: 'Board Bring Up',
          link: '/services/lab_testing_solutions',
          fragment: 'BoardBringUp',
        },
        {
          label: 'Validation',
          link: '/services/lab_testing_solutions',
          fragment: 'Validation',
        },
        {
          label: 'Characterization',
          link: '/services/lab_testing_solutions',
          fragment: 'Characterization',
        },
      ],
      open: false, // Track the open state for each service section
    },
    {
      title: 'Supply Chain Management',
      link: '/services/supply_chain_management',
      items: [
        {
          label: 'Component Engineering',
          link: '/services/supply_chain_management',
          fragment: 'ComponentEngineering',
        },
        {
          label: 'Compliance Engineering',
          link: '/services/supply_chain_management',
          fragment: 'ComplianceEngineering',
        },
        {
          label: 'Procurement Engineering',
          link: '/services/supply_chain_management',
          fragment: 'ProcurementEngineering',
        },
      ],
      open: false, // Track the open state for each service section
    },

    {
      title: 'Sustainable Engineering & Obsolescence Management',
      items: [
        { label: 'BOM Management', link: '/404' },
        { label: 'EOL Management', link: '/404' },
        { label: 'AVL Management', link: '/404' },
        { label: 'Second Sourcing / Risk Buying', link: '/404' },
      ],
      open: false, // Track the open state for each service section
    },
  ];

  featuredProductItems: MenuItem[] = [
    { label: '5G ORU Open Radio Unit', link: '/featured-products/5g-oru' },
    { label: 'Loopback Cards', link: '/featured-products/loopback-cards' },
    {
      label: 'Xilinx Evaluation Kit',
      link: '/featured-products/xilinix-evaluation-kit',
    },
    { label: 'USB 3/2', link: '/featured-products/usb-3/2' },
  ];

  blogItems: MenuItem[] = [
    { label: 'News & Events', link: '/404' },
    { label: 'Whitepapers', link: '/404' },
    { label: 'Customer Stories', link: '/404' },
    { label: 'FAQ', link: '/404' },
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
