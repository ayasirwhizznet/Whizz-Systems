import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  constructor(private router: Router) { }

  toTop(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 170;
      const topPosition = element.offsetTop - offset;
  
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }

  servicesTab: any = [
    {
      title: "Engineering & Design",
      description: `At Whizz Systems, we deliver end-to-end engineering and design solutions with multidomain expertise and world-class manufacturing—all in-house. Our flexible approach allows you to engage with us at any stage of product development, from concept through production and beyond. We take full ownership of the process, providing sustaining engineering support to ensure your product's performance and reliability throughout its entire lifecycle.`,
      items: [
        { label: 'System Design/Schematics', link: '/services/engineering_&_design/system_design_&_schematics' },
        { label: 'FPGA Design', link: '/services/engineering_&_design/fpga' },
        { label: 'PCB Layout', link: '/services/engineering_&_design/pcb_layout' },
        { label: '3D Modeling/Mechanical Engineering', link: '/services/engineering_&_design/3D_modeling' },
        { label: 'Signal Integrity Simulations', link: '/services/engineering_&_design/signal_integrity_simulations' },
        { label: 'Power Delivery Network Simulations', link: '/services/engineering_&_design/power_delivery' },
        { label: 'Thermal Management/Thermal Simulation', link: '/services/engineering_&_design/thermal_management' },
      ]
    },

    {
      title: "NPI",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'System Level Architecture', link: '/services/npi', fragment: "SystemLevelArchitecture" },
        { label: 'Engineering & Design', link: '/services/npi', fragment: "Engineering&Design"  },
        { label: 'Prototyping', link: '/services/npi', fragment: "Prototyping"  },
        { label: 'Testing', link: '/services/npi', fragment: "Testing"  },
        { label: 'Compliance and Certification', link: '/services/npi', fragment: "Compliance"  },
      ],
    },
    {
      title: "Advanced Manufacturing",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'DFX Analysis', link: '/404' },
        { label: 'FMEA (Failure Mode & Effects Analysis)', link: '/404' },
        { label: 'Thermal Profiling and Reflow Soldering Optimization', link: '/404' },
        { label: 'Mechanical System Build', link: '/404' },
        { label: 'Packaging Design', link: '/404' },
      ],
    },
    {
      title: "Lab Testing Solutions",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'Board Bring Up', link: '/404' },
        { label: 'Validation', link: '/404' },
        { label: 'Characterization', link: '/404' },
      ],
    },
    {
      title: "Supply Chain Management",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'Component Engineering', link: '/404' },
        { label: 'Compliance Engineering', link: '/404' },
        { label: 'Procurement Engineering', link: '/404' },
      ],
    },
    {
      title: "Sustaining Engineering & Obsolescence Management",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'BOM Management', link: '/404' },
        { label: 'EOL Management', link: '/404' },
        { label: 'AVL Management', link: '/404' },
        { label: 'Second Sourcing/Risk Buying', link: '/404' },
      ],
    },
  ]
}
