import { ServicesIndustryComponent } from '@components/services-industry/services-industry.component';
import { Component } from '@angular/core';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { CommonModule } from '@angular/common';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';

@Component({
  selector: 'app-advanced-manufacturing',
  standalone: true,
  imports: [
    ServicesHeroComponent,
    ServicesIntroComponent,
    CommonModule,
    ServicesIndustryComponent,
    ServicesContactExpertsComponent,
    ServicesBenefitsComponent
  ],
  templateUrl: './advanced-manufacturing.component.html',
})
export class AdvancedManufacturingComponent {
  coreServices: any[] = [
    {
      imgUrl: 'assets/services/advanced-manufacturing/core-1.png',
      name: 'Manufacturing Simulations',
      description: [
        'Advanced process optimization to enhance manufacturability and reliability.',
        '<b>DFX Analysis (DFM, DFA, DFT):</b> Ensuring smooth and cost-efficient production.',
        '<b>Failure Mode & Effects Analysis (FMEA):</b> Identifying and mitigating potential failure risks.',
        '<b>Thermal Profiling & Reflow Optimization:</b> Ensuring optimal soldering and heat dissipation.',
      ],
    },
    {
      imgUrl: 'assets/services/advanced-manufacturing/core-2.png',
      name: 'Electronic Manufacturing Assembly',
      description: [
        'High-precision PCB assembly for complex electronic systems.',
        'Expertise in <b>high-pin-count BGAs, micro-pitch components, and high-speed interconnects</b>.',
        'Flexible production from prototype to high-volume manufacturing.',
      ],
    },
    {
      imgUrl: 'assets/services/advanced-manufacturing/core-3.png',
      name: 'Mechanical Assembly',
      description: [
        'Full electromechanical integration with <b>custom enclosures and robust housing solutions</b>.',
        'Expertise in thermal management, structural integrity, and environmental durability.',
      ],
    },
    {
      imgUrl: 'assets/services/advanced-manufacturing/core-4.png',
      name: 'System Build & Packaging Design',
      description: [
        '<b>Turnkey box builds</b> and final system integration.',
        'Custom <b>packaging solutions</b> for shipping, distribution, and end-user experience.',
        'Ability to ship directly to customers or distribution centers.',
      ],
    },
  ];

  locations: any[] = [
    {
      title: 'Prototyping & Small-Batch Manufacturing ',
      address: 'California, USA',
      desc: [
        'Rapid prototyping and low-to-mid volume assembly',
        'Ideal for complex, high-mix projects requiring hands-on engineering support.',
        'Close collaboration between design and manufacturing teams.',
      ],
    },
    {
      title: 'High-Volume Manufacturing',
      address: 'Malaysia',
      desc: [
        'Cost-effective mass production with high yield rates.',
        'Dedicated offshore QC & technical support to maintain quality.',
        'Early design-phase planning for optimized manufacturability & supply chain efficiency.',
      ],
    },
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/services/advanced-manufacturing/benefits.png',
      name: 'Integrated Workflow',
      desc: 'Real-time collaboration between design, manufacturing, and supply chain teams.',
    },
    {
      imgUrl: 'assets/services/advanced-manufacturing/benefits.png',
      name: 'Parallel Process Optimization',
      desc: 'Simultaneous simulations lead to higher efficiency and better quality.',
    },
    {
      imgUrl: 'assets/services/advanced-manufacturing/benefits.png',
      name: 'Strategic Component Selection',
      desc: 'Ensuring long-term availability, cost efficiency, and supply stability.',
    },
    {
      imgUrl: 'assets/services/advanced-manufacturing/benefits.png',
      name: 'Predictive Problem-Solving',
      desc: 'Early-stage FMEA and DFX analysis reduce risks and improve reliability.',
    },
    {
      imgUrl: 'assets/services/advanced-manufacturing/benefits.png',
      name: 'Optimized Thermal & Mechanical Performance',
      desc: 'Advanced profiling for superior product durability.',
    },
    {
      imgUrl: 'assets/services/advanced-manufacturing/benefits.png',
      name: 'Streamlined Global Manufacturing',
      desc: 'Seamless transition from prototyping to high-volume production.',
    },
  ];
}
