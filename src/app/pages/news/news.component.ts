import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgFor],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  servicesNavbar = [
    { title: 'Engineering & Design', url: '' },
    { title: 'NPI', imgUrl: '' },
    { title: 'Advanced Manufacturing', url: '' },
    { title: 'Lab Testing Solutions', url: '' },
    { title: 'Supply Chain Management', url: '' },
    { title: 'Sustaining Engineering & Obsolescence Management', url: '' },
  ];

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