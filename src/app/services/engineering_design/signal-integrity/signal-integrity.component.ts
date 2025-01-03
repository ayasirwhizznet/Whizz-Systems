import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../../components/services-intro/services-intro.component';
import { ServicesCoreServicesComponent } from '../../../components/services-core-services/services-core-services.component';
import { ServicesBenefitsComponent } from '../../../components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from "../../../components/services-contact-experts/services-contact-experts.component";

@Component({
  selector: 'app-signal-integrity',
  standalone: true,
  imports: [ServicesHeroComponent, ServicesIntroComponent, ServicesCoreServicesComponent, ServicesBenefitsComponent, ServicesContactExpertsComponent],
  templateUrl: './signal-integrity.component.html',
  styleUrl: './signal-integrity.component.scss'
})
export class SignalIntegrityComponent {

  pcbPerformance:any = [
    {imgUrl:'../../../assets/signalIntegrity/pcb.png', title: 'Stack-Up Recommendations', desc: 'Selection of suitable dielectric materials and layer configurations for impedance control and signal isolation.'},
    {imgUrl:'../../../assets/signalIntegrity/pcb.png', title: '3D Via Design & Optimization', desc: 'Minimized crosstalk and reflections for enhanced signal integrity.'},
    {imgUrl:'../../../assets/signalIntegrity/pcb.png', title: 'Maximum Trace Length Analysis', desc: 'Determining allowable trace lengths for high-speed nets (e.g., DDR, PCIe, SerDes) based on rise times, propagation delays, and potential signal degradation.'}
  ];

  coreServices:any = [
    {imgUrl: '../../../assets/signalIntegrity/core-services.png', title: 'DDR Parallel Bus Analysis', desc: 'valuates timing, Simultaneous Switching Noise (SSN), voltage margins, and signal behavior for stable memory communication.'},
    {imgUrl: '../../../assets/signalIntegrity/core-services.png', title: 'S-Parameter Simulations', desc: 'nalyze high-speed interfaces for insertion loss, return loss, and TDR, identifying signal path discontinuities and crosstalk.'},
    {imgUrl: '../../../assets/signalIntegrity/core-services.png', title: 'Length and Delay Matching', desc: 'Ensures proper matching to prevent timing mismatches in high-speed signals.'},
    {imgUrl: '../../../assets/signalIntegrity/core-services.png', title: 'System-Level Simulations', desc: 'Addresses bottlenecks across the design for seamless operation.'},
  ];

  benefits:any = [
    {imgUrl: '../../../assets/signalIntegrity/benefits.png', title: 'Lorem Ipsum', desc: 'Comprehensive pre- and post-layout services tailored to modern electronics.'},
    {imgUrl: '../../../assets/signalIntegrity/benefits.png', title: 'Lorem Ipsum', desc: 'Reduction in design risks and iterations, accelerating time-to-market.'},
    {imgUrl: '../../../assets/signalIntegrity/benefits.png', title: 'Lorem Ipsum', desc: 'Cost-efficient, manufacturable designs with enhanced reliability.'},
    {imgUrl: '../../../assets/signalIntegrity/benefits.png', title: 'Lorem Ipsum', desc: 'Full design expertise throughout the entire process.'},
  ];
}
