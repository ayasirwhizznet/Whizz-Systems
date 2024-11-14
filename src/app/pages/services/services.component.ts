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
      const offset = 220;  // Adjust this value to match the height of your header
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
        { label: 'System Design/Schematics' },
        { label: 'FPGA Design' },
        { label: 'PCB Layout' },
        { label: '3D Modeling/Mechanical Engineering' },
        { label: 'Signal Integrity Simulation' },
        { label: 'Power Delivery Network Simulations' },
        { label: 'Signal Integrity Simulation' },
      ]
    },

    {
      title: "NPI",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'System Level Architecture' },
        { label: 'Prototyping' },
        { label: 'Signal Integrity Simulation' },
        { label: 'Testing' },
        { label: 'Compliance and Certification' }
      ]
    },
    {
      title: "Advanced Manufacturing",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'DFX Analysis' },
        { label: 'Failure Mode & Effects Analysis (FMEA)' },
        { label: 'Thermal Profiling and Reflow Soldering Optimization' },
        { label: 'Mechanical System Build' },
        { label: 'Packaging Design' },
      ]
    },
    {
      title: "Lab Testing Solutions",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'Board Bring Up' },
        { label: 'Validation' },
        { label: 'Characterization' },
      ]
    },
    {
      title: "Supply Chain Management",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'Component Engineering' },
        { label: 'Compliance Engineering' },
        { label: 'Procurement Engineering' },
      ]
    },
    {
      title: "Sustaining Engineering & Obsolescence Management",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'BOM Management' },
        { label: 'EOL Management' },
        { label: 'AVL Management' },
        { label: 'Second Sourcing/Risk Buying' },
      ]
    },
  ]
  
}
