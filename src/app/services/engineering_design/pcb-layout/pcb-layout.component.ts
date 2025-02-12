import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../../components/services-intro/services-intro.component';
import { ServicesCaseStudyComponent } from '../../../components/services-case-study/services-case-study.component';
import { ServicesContactExpertsComponent } from '../../../components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '../../../components/services-core-services/services-core-services.component';
import { ServicesIndustryComponent } from '../../../components/services-industry/services-industry.component';
import { ServicesBenefitsComponent } from '../../../components/services-benefits/services-benefits.component';

@Component({
  selector: 'app-pcb-layout',
  standalone: true,
  imports: [
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesCaseStudyComponent,
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
      imgUrl: '../../../../assets/pcb/pcb.png',
      title: 'PCB Footprint Design',
      desc: 'Development, verification, and maintenance of 2D/3D footprints following IPC standards.',
    },
    {
      imgUrl: '../../../../assets/pcb/signal-integrity.png',
      title: 'Signal Integrity & Constraint Management',
      desc: 'Optimization of SI and DFx rules to ensure manufacturability and performance.',
    },
    {
      imgUrl: '../../../../assets/pcb/bom.png',
      title: 'BOM Preparation & Verification',
      desc: 'Accurate and validated BOMs for procurement and assembly.',
    },
  ];

  industryStandards: any[] = [
    {
      imgUrl: '../../../../assets/pcb/high-density.png',
      title: 'High-Density Component Placement',
      type1:
        'Expertise in placing components in complex, mixed-technology designs within constrained form factors.',
      type2:
        'Focus on signal integrity, thermal management, and adherence to Mechanical Outline Control (MOC).',
    },
    {
      imgUrl: '../../../../assets/pcb/advanced.png',
      title: 'Advanced Signal Routing',
      type1:
        '100% hand routing of high-speed signals using techniques like ARC, snake, tabbed, and fiber wave routing.',
      type2:
        'Enhanced signal integrity and transmission reliability in complex PCB designs',
    },
    {
      imgUrl: '../../../../assets/pcb/power-plane.png',
      title: 'Power Plane Planning',
      type1:
        'Drafting power planes to ensure reliable power distribution, minimize voltage drops, and enhance signal integrity.',
      type2:
        'Effective heat dissipation and low-impedance paths for optimal performance.',
    },
    {
      imgUrl: '../../../../assets/pcb/manufacturing.png',
      title: 'Manufacturing File Generation',
      type1:
        'Preparation of accurate Gerber files, drill files, BOMs, and pick-and-place files.',
      type2:
        'Seamless communication with manufacturing and assembly teams to streamline production and minimize errors.',
    },
  ];

  benefits: any[] = [
    {
      imgUrl: '../../../../assets/pcb/benefits.png',
      title: 'Expertise in High-Density Designs',
      desc: 'Specialized in complex layouts for constrained spaces and mixed-technology designs.',
    },
    {
      imgUrl: '../../../../assets/pcb/benefits.png',
      title: 'Signal Integrity Optimization',
      desc: 'Ensuring high-speed performance and reliable signal transmission.',
    },
    {
      imgUrl: '../../../../assets/pcb/benefits.png',
      title: 'Design for Excellence (DFx)',
      desc: 'Optimized layouts for manufacturability, assembly, and testability.',
    },
    {
      imgUrl: '../../../../assets/pcb/benefits.png',
      title: 'Power Distribution Mastery',
      desc: 'Efficient power plane planning for improved performance and thermal management.',
    },
    {
      imgUrl: '../../../../assets/pcb/benefits.png',
      title: 'Accurate Manufacturing Files',
      desc: 'Properly prepared documentation for error-free fabrication and assembly.',
    },
    {
      imgUrl: '../../../../assets/pcb/benefits.png',
      title: 'Close Collaboration with Manufacturing Teams',
      desc: 'Ensuring your design intent translates seamlessly into production.',
    },
  ];
}
