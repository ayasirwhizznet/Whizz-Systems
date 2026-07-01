import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';

@Component({
  selector: 'app-signal-integrity',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesCoreServicesComponent,
    ServicesBenefitsComponent,
    ServicesContactExpertsComponent,
  ],
  templateUrl: './signal-integrity.component.html',
})
export class SignalIntegrityComponent {
  pcbPerformance: any = [
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/stack-up.png',
      name: 'Stack-Up Recommendations',
      desc: 'Selection of suitable dielectric materials and layer configurations for impedance control and signal isolation.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/design-optimization.png',
      name: '3D Via Design & Optimization',
      desc: 'Minimized crosstalk and reflections for enhanced signal integrity.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/mtla.png',
      name: 'Maximum Trace Length Analysis',
      desc: 'Determining allowable trace lengths for high-speed nets (e.g., DDR, PCIe, SerDes) based on rise times, propagation delays, and potential signal degradation.',
    },
  ];

  coreServices: any = [
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/ddr.png',
      name: 'DDR Parallel Bus Analysis',
      desc: 'Evaluates timing, Simultaneous Switching Noise (SSN), voltage margins, and signal behavior for stable memory communication.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/s-parameter.png',
      name: 'S-Parameter Simulations',
      desc: 'Analyze high-speed interfaces for insertion loss, return loss, and TDR, identifying signal path discontinuities and crosstalk.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/length.png',
      name: 'Length and Delay Matching',
      desc: 'Ensures proper matching to prevent timing mismatches in high-speed signals.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/system.png',
      name: 'System-Level Simulations',
      desc: 'Addresses bottlenecks across the design for seamless operation.',
    },
  ];

  benefits: any = [
    {
      imgUrl: 'assets/icons/support.svg',
      name: 'End-to-End Support ',
      desc: 'Comprehensive <b>pre- and post-layout services</b> tailored to modern electronics.',
    },
    {
      imgUrl: 'assets/icons/speed.svg',
      name: 'High Speed Interface Expertise',
      desc: 'Mastery of DDR, PCIe, SerDes, and other critical high-speed technologies',
    },
    {
      imgUrl: 'assets/icons/clock.svg',
      name: 'Accelerated Time-to-Market',
      desc: 'Reduction in design risks and iterations for faster product launches.',
    },
    {
      imgUrl: 'assets/icons/cost.svg',
      name: 'Cost Optimized & Reliable Designs',
      desc: 'Manufacturable solutions that enhance reliability while controlling costs.',
    },
  ];

  faqs: any[] = [
    {
      question: 'What Is Signal Integrity Simulation?',
      answer: 'Signal integrity simulation evaluates how high-speed electrical signals behave throughout a PCB and electronic system before hardware is manufactured. By analyzing impedance, reflections, crosstalk, insertion loss, and timing characteristics, engineers can identify potential performance issues early and optimize designs for reliable high-speed operation.',
      isOpen: false
    },
    {
      question: 'Why Is Signal Integrity Analysis Important For High-Speed PCB Designs?',
      answer: 'As interface speeds continue to increase, maintaining signal integrity becomes essential for reliable communication between devices. Signal integrity analysis helps engineers verify routing strategies, optimize PCB stack-ups, control impedance, and reduce signal degradation, ensuring that complex electronic systems perform as intended under demanding operating conditions.',
      isOpen: false
    },
    {
      question: 'What Causes Signal Integrity Issues In Electronic Systems?',
      answer: 'Signal integrity problems commonly result from impedance discontinuities, excessive trace lengths, poor PCB stack-up design, crosstalk, reflections, inadequate grounding, and improper component placement. Addressing these factors during design and simulation helps minimize performance issues before fabrication and reduces the need for costly hardware revisions.',
      isOpen: false
    },
    {
      question: 'When Should Signal Integrity Simulations Be Performed?',
      answer: 'Signal integrity simulations should be incorporated early in the hardware development process—before PCB fabrication begins. Performing simulation during schematic review, stack-up definition, and PCB layout allows engineers to validate design decisions, identify risks early, and optimize performance before manufacturing.',
      isOpen: false
    },
    {
      question: 'How Does Simulation Reduce PCB Redesigns?',
      answer: 'Simulation allows engineers to evaluate critical electrical performance before physical prototypes are built. By identifying signal quality issues early, teams can make informed design improvements, reduce prototype iterations, shorten development cycles, and improve first-pass success during manufacturing.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
