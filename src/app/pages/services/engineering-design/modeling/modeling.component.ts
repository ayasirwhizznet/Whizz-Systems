import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';

@Component({
  selector: 'app-modeling',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesContactExpertsComponent,
    ServicesCoreServicesComponent,
    ServicesBenefitsComponent,
  ],
  templateUrl: './modeling.component.html',
})
export class ModelingComponent {
  coreServices: any[] = [
    {
      imgUrl: 'assets/services/engg&design/3d-modeling-mechanical-design/assembly-drawings.png',
      name: '3D Models & 2D Assembly Drawings',
      desc: 'Detailed, standards-compliant <a href="https://www.whizzsystems.com/services/engineering-design/pcb-layout" class="text-teal1">PCB component designs</a>. Custom designs ensuring functionality and durability.',
    },
    {
      imgUrl: 'assets/services/engg&design/3d-modeling-mechanical-design/advanced-mechanical.png',
      name: 'Advanced Mechanical Component Design',
      desc: 'Specialized solutions for I/O brackets, trays, and ingress-protected enclosures. Pole-mounted or wall-mounted solutions.',
    },
    {
      imgUrl: 'assets/services/engg&design/3d-modeling-mechanical-design/fea.png',
      name: 'Finite Element Analysis (FEA)',
      desc: 'Structural analysis for longevity and performance. Identifying structural weaknesses before production.',
    },
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/icons/expert-badge.svg',
      name: '25+ Years of Expertise',
      desc: 'Proven success in designing electronic products from concept to production.',
    },
    {
      imgUrl: 'assets/icons/solution.svg',
      name: 'Multidomain Knowledge',
      desc: 'Extensive experience across various industries.',
    },
    {
      imgUrl: 'assets/icons/performance.svg',
      name: 'Optimized for Performance and Manufacturability',
      desc: 'Ensuring products meet and exceed industrial standards.',
    },
    {
      imgUrl: 'assets/icons/support.svg',
      name: 'Comprehensive Support',
      desc: 'Full design expertise throughout the entire process.',
    },
    {
      imgUrl: 'assets/icons/leaf.svg',
      name: 'Sustaining Engineering',
      desc: 'Enhanced product integration and longevity through FEA analysis.',
    },
    {
      imgUrl: 'assets/icons/circular-arrow.svg',
      name: 'Supply Chain Management',
      desc: 'Seamless supply chain handling to ensure efficient production and timely delivery.',
    },
  ];

  faqs: any[] = [
    {
      question: 'Why Is Mechanical Design Important For Electronic Products?',
      answer: 'Mechanical design ensures that electronic systems are structurally sound, manufacturable, and optimized for their intended operating environment. It considers enclosure design, component placement, thermal requirements, manufacturability, and system integration to create products that not only perform reliably but can also be efficiently assembled and deployed. Integrating mechanical engineering early in the design process helps reduce costly redesigns and improves overall product quality.',
      isOpen: false
    },
    {
      question: 'How Does 3d Modeling Improve Hardware Development?',
      answer: '3D modeling enables engineering teams to visualize product assemblies, verify mechanical fit, evaluate clearances, and identify potential integration issues before prototypes are built. By validating designs digitally, organizations can reduce development time, improve collaboration across engineering disciplines, and accelerate the transition from concept to manufacturing.',
      isOpen: false
    },
    {
      question: 'What Factors Influence Enclosure Design For Electronics?',
      answer: 'Electronic enclosure design must balance structural integrity, thermal management, manufacturability, accessibility, and environmental protection. Factors such as component dimensions, airflow, connector placement, serviceability, regulatory requirements, and mechanical constraints all influence enclosure design. Considering these requirements early helps ensure the final product meets both performance and manufacturing objectives.',
      isOpen: false
    },
    {
      question: 'How Does Mechanical Engineering Support Manufacturability?',
      answer: 'Mechanical engineering improves manufacturability by designing products that can be assembled efficiently, manufactured consistently, and maintained throughout their lifecycle. Optimizing part geometry, material selection, assembly methods, and production tolerances helps reduce manufacturing complexity, lower production costs, and improve product reliability.',
      isOpen: false
    },
    {
      question: 'Why Should Electrical And Mechanical Teams Collaborate Early?',
      answer: 'Successful hardware development depends on close collaboration between electrical and mechanical engineering teams. Coordinating enclosure design, PCB placement, connector locations, thermal requirements, and manufacturing constraints early in development helps prevent integration issues, reduce redesigns, and accelerate product delivery while ensuring optimal system performance.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
