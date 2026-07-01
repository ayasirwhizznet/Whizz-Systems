import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';

@Component({
  selector: 'app-thermal-management-solutions',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesContactExpertsComponent,
    ServicesCoreServicesComponent,
    ServicesBenefitsComponent,
  ],
  templateUrl: './thermal-management.component.html',
})
export class ThermalManagementComponent {
  coreServices: any[] = [
    {
      imgUrl: 'assets/services/engg&design/thermal-management-solutions/cfd-analysis.png',
      name: 'Thermal and CFD Analysis',
      desc: 'Simulating airflow and heat distribution to identify hotspots and optimize system performance.',
    },
    {
      imgUrl: 'assets/services/engg&design/thermal-management-solutions/thermal-designs.png',
      name: 'Custom Thermal Designs',
      desc: 'Tailored designs for high-power components and space-limited systems.',
    },
    {
      imgUrl: 'assets/services/engg&design/thermal-management-solutions/cooling-systems.png',
      name: 'Advanced Cooling Systems',
      desc: 'Vapor chambers, cold plates, liquid cooling, and integrated heatsink-enclosure designs for complex needs.',
    },
    {
      imgUrl: 'assets/services/engg&design/thermal-management-solutions/parametric-studies.png',
      name: 'Parametric Studies',
      desc: 'Software-based thermal characterization to ensure optimal performance.',
    },
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/icons/25.svg',
      name: 'Decades of Expertise',
      desc: 'Over 25 years of success in electronic design and optimization.',
    },
    {
      imgUrl: 'assets/icons/puzzle.svg',
      name: 'Tailored Solutions',
      desc: 'Custom thermal strategies for unique product requirements.',
    },
    {
      imgUrl: 'assets/icons/connectivity.svg',
      name: 'Advanced Simulation Tools',
      desc: 'Accurate heat and airflow modeling using CFD analysis.',
    },
    {
      imgUrl: 'assets/icons/cooling.svg',
      name: 'Cutting-Edge Cooling Tech',
      desc: 'Vapor chambers, liquid cooling systems, and integrated designs.',
    },
    {
      imgUrl: 'assets/icons/drop.svg',
      name: 'Reliability in Any Environment',
      desc: 'Designs that meet thermal limits in even the most demanding conditions.',
    },
    {
      imgUrl: 'assets/icons/support.svg',
      name: 'Comprehensive Support',
      desc: 'From concept to optimization, we’re with you every step of the way.',
    },
  ];

  faqs: any[] = [
    {
      question: 'Why Is Thermal Management Important In Electronic Product Design?',
      answer: 'Effective thermal management helps electronic systems maintain safe operating temperatures while delivering consistent performance. As computing power and component densities continue to increase, managing heat becomes essential for protecting sensitive components, extending product lifespan, and ensuring reliable operation in demanding environments.',
      isOpen: false
    },
    {
      question: 'How Is Thermal Analysis Performed During Hardware Development?',
      answer: 'Thermal analysis uses simulation and engineering evaluation to assess heat generation, airflow, component temperatures, and cooling performance before hardware enters production. These insights help engineers optimize component placement, cooling strategies, and mechanical design to improve overall system reliability.',
      isOpen: false
    },
    {
      question: 'What Causes Overheating In High-Performance Electronics?',
      answer: 'Overheating can result from increasing power densities, inadequate cooling, restricted airflow, inefficient enclosure design, or poor thermal interfaces between components and cooling solutions. Identifying these factors early allows engineering teams to implement effective thermal management strategies before manufacturing.',
      isOpen: false
    },
    {
      question: 'How Do Thermal Simulations Improve Product Reliability?',
      answer: 'Thermal simulations predict how heat moves throughout an electronic system under various operating conditions. This enables engineers to identify thermal hotspots, optimize cooling solutions, validate design decisions, and reduce the risk of overheating, helping products achieve greater reliability and long-term performance.',
      isOpen: false
    },
    {
      question: 'When Should Thermal Considerations Be Addressed In Product Development?',
      answer: 'Thermal management should be considered from the earliest stages of product development. Integrating thermal analysis alongside electrical and mechanical design allows engineering teams to optimize system performance, reduce design revisions, and ensure products remain reliable throughout manufacturing and deployment.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
