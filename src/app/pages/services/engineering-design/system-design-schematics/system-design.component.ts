import { Component } from '@angular/core';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesIndustryComponent } from '@components/services-industry/services-industry.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';

@Component({
  selector: 'app-system-design',
  standalone: true,
  imports: [
    ServicesIntroComponent,
    ServicesHeroComponent,
    ServicesContactExpertsComponent,
    ServicesCoreServicesComponent,
    ServicesIndustryComponent,
    ServicesBenefitsComponent,
  ],
  templateUrl: './system-design.component.html',
})
export class SystemDesignComponent {
  coreServices: any[] = [
    {
      imgUrl: 'assets/services/engg&design/system-design/architecture.png',
      name: 'Architecture Definition & Block Diagrams',
      desc: 'Our detailed block diagrams—including functional, power, communication, and synchronization diagrams—serve as blueprints, ensuring subsystem integration and optimal system performance.',
    },
    {
      imgUrl: 'assets/services/engg&design/system-design/symbol.png',
      name: 'Symbol Library Development',
      desc: 'Tailored designs for high-power components and space-limited systems.',
    },
    {
      imgUrl: 'assets/services/engg&design/system-design/schematic.png',
      name: 'Schematic Design & Drafting',
      desc: 'Our experts design <span class = "font-medium">circuit diagrams</span> using industry-leading tools  including: Cadence Concept, OrCAD,  Mentor Graphics, View Draw,and DxDesigner. These tools enable <span class = "font-medium">accurate schematic capture, <a href="https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services" class="text-teal1">simulation, and validation</a>,</span> ensuring first-pass success in complex hardware designs.',
    },
    {
      imgUrl: 'assets/services/engg&design/system-design/power.png',
      name: 'Power Sequencing & Budgeting',
      desc: 'Power delivery is critical. We ensure efficient, reliable power sequencing and budgeting to minimize energy loss, enhance performance, and meet the demands of complex systems.',
    },
    {
      imgUrl: 'assets/services/engg&design/system-design/compliance.png',
      name: 'Compliance & Component Engineering',
      desc: 'Our designs ensure compatibility and regulatory compliance at every step. We select components that enhance the overall performance and reliability of your system.',
    },
    {
      imgUrl: 'assets/services/engg&design/system-design/fpga.png',
      name: 'FPGA-Based Custom Design',
      desc: 'For unique requirements, we deliver <a href="https://www.whizzsystems.com/services/engineering-design/fpga-design-services" class="text-teal1">FPGA-based solutions</a> that offer unparalleled flexibility and high-performance functionality tailored to your specific processing needs.',
    },
  ];

  industryStandards: any[] = [
    {
      imgUrl: 'assets/services/engg&design/system-design/industrial.png',
      name: 'Industry Standards',
      description: ['IPC Standards', 'ISO 9001', 'RoHS Compliance', 'UL Certification']
    },
    {
      imgUrl: 'assets/services/engg&design/system-design/tvc.png',
      name: 'Testing & Validation Compliance',
      description: ['EMC/EMI Testing', 'ESD Standards', 'Thermal Reliability Testing']
    },
    {
      imgUrl: 'assets/services/engg&design/system-design/grc.png',
      name: 'Global Regulatory Compliance',
      description: ['FCC Compliance', 'CE Marking', 'UL and CSA Standards']
    },
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/icons/expert-badge.svg',
      name: 'Comprehensive Expertise',
      desc: 'From architecture to compliance, we cover every aspect of system design under one roof.',
    },
    {
      imgUrl: 'assets/icons/invard-arrow.svg',
      name: 'Error Minimization',
      desc: 'Our precision-driven approach ensures clarity, reducing the risk of costly design errors.',
    },
    {
      imgUrl: 'assets/icons/rocket.svg',
      name: 'Future-Ready Solutions',
      desc: 'Designs are built with scalability and adaptability in mind, keeping pace with evolving technologies.',
    },
    {
      imgUrl: 'assets/icons/confident-badge.svg',
      name: 'Regulatory Confidence',
      desc: 'With compliance engineering, you can trust that your designs meet industry standards and certifications.',
    },
  ];
}
