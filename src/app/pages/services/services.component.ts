import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
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

  servicesTab = [
    {
      title: "Engineering & Design",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting
                      from a concept or refining a product for the market.`,
      items: [
        { label: 'System Design/Schematics', link: 'System Design/Schematics' },
        { label: 'FPGA Design', link: 'FPGA Design' },
        { label: 'PCB Layout', link: 'PCB Layout' },
        { label: '3D Modeling/Mechanical Engineering', link: '3D Modeling/Mechanical Engineering' },
        { label: 'Signal Integrity Simulation', link: 'Signal Integrity Simulation' },
        { label: 'Power Delivery Network Simulations', link: 'Power Delivery Network Simulations' },
        { label: 'Thermal Management/Thermal Simulation', link: 'Thermal Management/Thermal Simulation' },
      ]
    },

    {
      title: "NPI",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'System Level Architecture', link: 'System Level Architecture' },
        { label: 'Engineering & Design', link: 'Engineering & Design' },
        { label: 'Prototyping', link: 'Prototyping' },
        { label: 'Testing', link: 'Testing' },
        { label: 'Compliance and Certification', link: 'Compliance and Certification' }
      ]
    },
    {
      title: "Advanced Manufacturing",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'DFX Analysis', link: '' },
        { label: 'Failure Mode and Effects Analysis (FMEA)', link: '' },
        { label: 'Thermal Profiling & Reflow Soldering Optimization', link: '' },
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
  
  onGoToPage2(category: string | undefined,title:string | undefined) {
    if (category && title) {
      this.router.navigate(['service',category,title]);
     } 
    else {
      console.error('Route is undefined!');
    }
  }
}
