import { Component } from '@angular/core';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesIndustryComponent } from '@components/services-industry/services-industry.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';

@Component({
  selector: 'app-pcb-layout',
  standalone: true,
  imports: [
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesContactExpertsComponent,
    ServicesCoreServicesComponent,
    ServicesIndustryComponent,
    ServicesBenefitsComponent,
  ],
  templateUrl: './pcb-layout.component.html',
})
export class PcbLayoutComponent {
  coreServices: any[] = [
    {
      imgUrl: 'assets/services/engg&design/pcb/footprint.png',
      name: 'PCB Footprint Design',
      desc: 'Development, verification, and maintenance of 2D/3D footprints following IPC standards.',
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/constraint.png',
      name: 'Signal Integrity & Constraint Management',
      desc: 'Optimization of SI and DFx rules to ensure manufacturability and performance.',
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/bom.png',
      name: 'BOM Preparation & Verification',
      desc: 'Accurate and validated BOMs for procurement and assembly.',
    },
  ];

  industryStandards: any[] = [
    {
      imgUrl: 'assets/services/engg&design/pcb/high-density.png',
      name: 'High-Density Component Placement',
      description: [
        'Expertise in placing components in complex, mixed-technology designs within constrained form factors',
        'Focus on signal integrity, thermal management, and adherence to Mechanical Outline Control (MOC).',
      ],
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/routing.png',
      name: 'Advanced Signal Routing',
      description: [
        '100% hand routing of high-speed signals using techniques like ARC, snake, tabbed, and fiber wave routing.',
        'Enhanced signal integrity and transmission reliability in complex PCB designs',
      ],
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/power-plane.png',
      name: 'Power Plane Planning',
      description: [
        'Drafting power planes to ensure reliable power distribution, minimize voltage drops, and enhance signal integrity.',
        'Effective heat dissipation and low-impedance paths for optimal performance.',
      ],
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/manufacturing.png',
      name: 'Manufacturing File Generation',
      description: [
        'Preparation of accurate Gerber files, drill files, BOMs, and pick-and-place files.',
        'Seamless communication with manufacturing and assembly teams to streamline production and minimize errors.',
      ],
    },
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/services/engg&design/pcb/benefits.png',
      name: 'Expertise in High-Density Designs',
      desc: 'Specialized in complex layouts for constrained spaces and mixed-technology designs.',
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/benefits.png',
      name: 'Signal Integrity Optimization',
      desc: 'Ensuring high-speed performance and reliable signal transmission.',
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/benefits.png',
      name: 'Design for Excellence (DFx)',
      desc: 'Optimized layouts for manufacturability, assembly, and testability.',
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/benefits.png',
      name: 'Power Distribution Mastery',
      desc: 'Efficient power plane planning for improved performance and thermal management.',
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/benefits.png',
      name: 'Accurate Manufacturing Files',
      desc: 'Properly prepared documentation for error-free fabrication and assembly.',
    },
    {
      imgUrl: 'assets/services/engg&design/pcb/benefits.png',
      name: 'Close Collaboration with Manufacturing Teams',
      desc: 'Ensuring your design intent translates seamlessly into production.',
    },
  ];
}
