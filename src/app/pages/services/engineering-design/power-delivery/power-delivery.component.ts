import { Component } from '@angular/core';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';

@Component({
  selector: 'app-power-delivery',
  standalone: true,
  imports: [
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
      desc: 'Enhancing reliability by embedding simulation insights into PCB designs.',
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
}
