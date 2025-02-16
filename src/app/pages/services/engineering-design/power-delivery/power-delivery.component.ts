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
      imgUrl: 'assets/power-delivery/core-services.png',
      title: 'DC Power Analysis',
      desc: 'IR Drop Analysis, Current Density Analysis, Joule Heating Simulations.',
    },
    {
      imgUrl: 'assets/power-delivery/core-services.png',
      title: 'AC Power Analysis',
      desc: 'Capacitor Optimization & Impedance Reduction.',
    },
    {
      imgUrl: 'assets/power-delivery/core-services.png',
      title: 'End-to-End Layout Optimization',
      desc: 'Enhancing reliability by embedding simulation insights into PCB designs.',
    },
  ];

  benefits: any = [
    {
      imgUrl: 'assets/power-delivery/benefits.png',
      name: 'Lorem Ipsum',
      desc: 'Advanced DC and AC simulation capabilities tailored to your design needs.',
    },
    {
      imgUrl: 'assets/power-delivery/benefits.png',
      name: 'Lorem Ipsum',
      desc: 'Expertise in high-performance PCB layouts for modern electronics.',
    },
    {
      imgUrl: 'assets/power-delivery/benefits.png',
      name: 'Lorem Ipsum',
      desc: 'Reduction of design risks and iterations, ensuring faster time-to-market.',
    },
    {
      imgUrl: 'assets/power-delivery/benefits.png',
      name: 'Lorem Ipsum',
      desc: 'Proven reliability and efficiency across industries.',
    },
  ];
}
