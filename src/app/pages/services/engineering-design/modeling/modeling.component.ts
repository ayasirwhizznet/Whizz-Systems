import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { Component } from '@angular/core';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';

@Component({
  selector: 'app-modeling',
  standalone: true,
  imports: [
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
}
