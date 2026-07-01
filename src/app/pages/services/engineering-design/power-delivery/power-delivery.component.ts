import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';

@Component({
  selector: 'app-power-delivery',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesCoreServicesComponent,
    ServicesBenefitsComponent,
    ServicesContactExpertsComponent,
  ],
  templateUrl: './power-delivery.component.html',
})
export class PowerDeliveryComponent {
  coreServices: any = [
    {
      imgUrl: 'assets/services/engg&design/power-delivery-network-simulation/dc.png',
      name: 'DC Power Analysis',
      desc: 'IR Drop Analysis, Current Density Analysis, Joule Heating Simulations.',
    },
    {
      imgUrl: 'assets/services/engg&design/power-delivery-network-simulation/ac.png',
      name: 'AC Power Analysis',
      desc: 'Capacitor Optimization & Impedance Reduction.',
    },
    {
      imgUrl: 'assets/services/engg&design/power-delivery-network-simulation/end.png',
      name: 'End-to-End Layout Optimization',
      desc: 'Enhancing reliability by embedding simulation insights into <a href="https://www.whizzsystems.com/services/engineering-design/pcb-layout" title="PCB designs" class="text-teal1">PCB designs</a>',
    },
  ];

  benefits: any = [
    {
      imgUrl: 'assets/icons/expert-badge.svg',
      name: 'Proven PDN Optimization Expertise',
      desc: '25+ Years of experience ensuring robust power delivery.',
    },
    {
      imgUrl: 'assets/icons/clock.svg',
      name: 'First-Time-Right Designs',
      desc: 'Reduce design iterations and time-to-market.',
    },
    {
      imgUrl: 'assets/icons/support.svg',
      name: 'End-to-End Support',
      desc: 'Seamless integration with SI, PI, and thermal analysis.',
    },
    {
      imgUrl: 'assets/icons/cost.svg',
      name: 'Cost-Effective & Scalable Solutions',
      desc: 'Optimized designs that balance performance and cost.',
    },
  ];

  faqs: any[] = [
    {
      question: 'What Is A Power Delivery Network (PDN) Simulation?',
      answer: 'Power Delivery Network (PDN) simulation analyzes how electrical power is distributed throughout a PCB to ensure components receive stable, reliable voltage under all operating conditions. Evaluating the power network during design helps engineers optimize power integrity, minimize voltage fluctuations, and support consistent system performance.',
      isOpen: false
    },
    {
      question: 'Why Is Power Integrity Critical For Modern Electronics?',
      answer: 'Today\'s high-performance electronic systems require clean and stable power to operate reliably. Insufficient power integrity can lead to voltage ripple, excessive noise, timing instability, and degraded system performance. Careful power delivery planning helps ensure processors, FPGAs, memory, and other high-speed devices receive the power they need to perform consistently.',
      isOpen: false
    },
    {
      question: 'How Does PDN Simulation Improve System Reliability?',
      answer: 'PDN simulation identifies potential power distribution issues before manufacturing by evaluating current flow, voltage stability, decoupling effectiveness, and power plane performance. Addressing these issues early reduces hardware failures, improves electrical stability, and supports reliable operation throughout the product lifecycle.',
      isOpen: false
    },
    {
      question: 'What Causes Voltage Drop And Power Integrity Issues?',
      answer: 'Voltage drop and power integrity problems may result from insufficient power plane design, excessive current demand, inadequate decoupling, poor PCB layout, or inefficient component placement. Evaluating these factors through simulation enables engineers to optimize power distribution and improve overall system performance.',
      isOpen: false
    },
    {
      question: 'When Should Engineers Perform PDN Analysis?',
      answer: 'PDN analysis should begin during the PCB design process before manufacturing. Evaluating power distribution early enables engineering teams to optimize board architecture, verify power delivery strategies, and minimize costly design changes later in development.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
