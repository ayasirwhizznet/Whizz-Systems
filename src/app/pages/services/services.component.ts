import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  toTop(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 170;  // Adjust this value to match the height of your header
      const topPosition = element.offsetTop - offset;
  
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }
  
  
 
  servicesTab = [
    {
      title: "Engineering & Design",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting
                      from a concept or refining a product for the market.`,
      items: [
        { label: 'System Design/Schematics', link: '' },
        { label: 'FPGA Design', link: '' },
        { label: 'PCB Layout', link: '' },
        { label: '3D Modeling/Mechanical Engineering', link: '' },
        { label: 'Signal Integrity Simulation', link: '' },
        { label: 'Power Delivery Network Simulations', link: '' },
        { label: 'Signal Integrity Simulation', link: '' },
      ]
    },

    {
      title: "NPI",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'System Level Architecture', link: '' },
        { label: 'Prototyping', link: '' },
        { label: 'Signal Integrity Simulation', link: '' },
        { label: 'Testing' },
        { label: 'Compliance and Certification', link: '' }
      ]
    },
    {
      title: "Advanced Manufacturing",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'DFX Analysis', link: '' },
        { label: 'Failure Mode & Effects Analysis (FMEA)', link: '' },
        { label: 'Thermal Profiling and Reflow Soldering Optimization', link: '' },
        { label: 'Mechanical System Build', link: '' },
        { label: 'Packaging Design', link: '' },
      ]
    },
    {
      title: "Lab Testing Solutions",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'Board Bring Up', link: '' },
        { label: 'Validation', link: '' },
        { label: 'Characterization', link: '' },
      ]
    },
    {
      title: "Supply Chain Management",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'Component Engineering', link: '' },
        { label: 'Compliance Engineering', link: '' },
        { label: 'Procurement Engineering', link: '' },
      ]
    },
    {
      title: "Sustaining Engineering & Obsolescence Management",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'BOM Management', link: '' },
        { label: 'EOL Management', link: '' },
        { label: 'AVL Management', link: '' },
        { label: 'Second Sourcing/Risk Buying', link: '' },
      ]
    },
  ]
  
}
