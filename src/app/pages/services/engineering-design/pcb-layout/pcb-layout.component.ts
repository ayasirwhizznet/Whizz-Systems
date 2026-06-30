import { Component } from '@angular/core';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesIndustryComponent } from '@components/services-industry/services-industry.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  templateUrl: './pcb-layout.component.html',
})
export class PcbLayoutComponent {
  coreServices = [
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
      imgUrl: 'assets/icons/expert-badge.svg',
      name: 'Expertise in High-Density Designs',
      desc: 'Specialized in complex layouts for constrained spaces and mixed-technology designs.',
    },
    {
      imgUrl: 'assets/icons/signal.svg',
      name: 'Signal Integrity Optimization',
      desc: 'Ensuring high-speed performance and reliable signal transmission.',
    },
    {
      imgUrl: 'assets/icons/excellence.svg',
      name: 'Design for Excellence (DFx)',
      desc: 'Optimized layouts for manufacturability, assembly, and testability.',
    },
    {
      imgUrl: 'assets/icons/leaf.svg',
      name: 'Power Distribution Mastery',
      desc: 'Efficient power plane planning for improved performance and thermal management.',
    },
    {
      imgUrl: 'assets/icons/file.svg',
      name: 'Accurate Manufacturing Files',
      desc: 'Properly prepared documentation for error-free fabrication and assembly.',
    },
    {
      imgUrl: 'assets/icons/handshake.svg',
      name: 'Close Collaboration with Manufacturing Teams',
      desc: 'Ensuring your design intent translates seamlessly into production.',
    },
  ];

  faqs: any[] = [
    {
      question: 'What Is PCB Layout Design?',
      answer: 'PCB layout design is the process of translating an electrical schematic into a manufacturable printed circuit board by determining component placement, routing signal and power traces, defining layer stack-ups, and optimizing the design for performance and reliability. For high-speed and high-density systems, PCB layout goes beyond routing—it requires careful consideration of signal integrity, power integrity, thermal performance, EMI mitigation, and manufacturability to ensure the final product performs as intended.',
      isOpen: false
    },
    {
      question: 'Why Is PCB Layout Critical for High-Speed and High-Density Electronic Systems?',
      answer: 'As data rates, component densities, and power requirements continue to increase, PCB layout has become a key factor in overall system performance. A well-engineered layout minimizes signal degradation, reduces electromagnetic interference (EMI), supports effective thermal management, and improves manufacturability. Addressing these challenges early in the layout process helps reduce design iterations and enables reliable performance in AI, networking, semiconductor, and other advanced electronic applications.',
      isOpen: false
    },
    {
      question: 'What Should You Look for in a PCB Layout Engineering Partner?',
      answer: 'For complex hardware projects, its important to choose a partner with expertise in high-speed PCB design, signal and power integrity, DFM/DFX practices, and cross-disciplinary engineering. An experienced engineering team should work closely with hardware, mechanical, manufacturing, and supply chain specialists to identify potential issues early, optimize the layout for production, and accelerate time to market.',
      isOpen: false
    },
    {
      question: "How Do Design for Manufacturability (DFM) and Design for Excellence (DFX) Improve PCB Layouts?",
      answer: 'DFM and DFX ensure that a PCB layout is not only electrically functional but also optimized for manufacturing, assembly, testing, cost, and long-term reliability. By considering fabrication capabilities, assembly constraints, component availability, and testing requirements during the layout phase, engineers can reduce production risks, improve yields, and shorten product development cycles.',
      isOpen: false
    },
    {
      question: "How Does Early Engineering Collaboration Improve PCB Layout Success?",
      answer: 'Successful PCB layouts result from collaboration across multiple engineering disciplines. Integrating hardware design, mechanical engineering, signal integrity analysis, thermal design, manufacturing, and supply chain expertise early in the development process helps identify risks before fabrication. This collaborative approach minimizes redesigns, improves product quality, and enables a smoother transition from concept to production.',
      isOpen: false
    },
    {
      question: "How Does PCB Stack-Up Design Impact High-Speed PCB Performance?",
      answer: 'PCB stack-up design directly influences signal integrity, power integrity, electromagnetic interference (EMI), and overall board reliability. Selecting the appropriate layer configuration, dielectric materials, and reference planes helps control impedance, minimize signal loss, and support reliable high-speed communication. A well-planned stack-up also improves manufacturability and reduces design iterations during product development.',
      isOpen: false
    },
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
