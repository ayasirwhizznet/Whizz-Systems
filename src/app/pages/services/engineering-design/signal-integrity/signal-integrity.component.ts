import { Component } from '@angular/core';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';

@Component({
  selector: 'app-signal-integrity',
  standalone: true,
  imports: [
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
      imgUrl: 'assets/services/engg&design/signal-integrity/simulations.png',
      name: 'DDR Parallel Bus Analysis',
      desc: 'Evaluates timing, Simultaneous Switching Noise (SSN), voltage margins, and signal behavior for stable memory communication.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/simulations.png',
      name: 'S-Parameter Simulations',
      desc: 'Analyze high-speed interfaces for insertion loss, return loss, and TDR, identifying signal path discontinuities and crosstalk.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/simulations.png',
      name: 'Length and Delay Matching',
      desc: 'Ensures proper matching to prevent timing mismatches in high-speed signals.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/simulations.png',
      name: 'System-Level Simulations',
      desc: 'Addresses bottlenecks across the design for seamless operation.',
    },
  ];

  benefits: any = [
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/benefits.png',
      name: 'End-to-End Support ',
      desc: 'Comprehensive <b>pre- and post-layout services</b> tailored to modern electronics.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/benefits.png',
      name: 'High Speed Interface Expertise',
      desc: 'Mastery of DDR, PCIe, SerDes, and other critical high-speed technologies',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/benefits.png',
      name: 'Accelerated Time-to-Market',
      desc: 'Reduction in design risks and iterations for faster product launches.',
    },
    {
      imgUrl: 'assets/services/engg&design/signal-integrity/benefits.png',
      name: 'Cost Optimized & Reliable Designs',
      desc: 'Manufacturable solutions that enhance reliability while controlling costs.',
    },
  ];
}
