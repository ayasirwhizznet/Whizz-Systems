import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesHeroComponent } from '../../../components/services-hero/services-hero.component';
import { ServicesCoreServicesComponent } from '../../../components/services-core-services/services-core-services.component';
import { ServicesBenefits1Component } from '../../../components/services-benefits1/services-benefits1.component';
import { ServicesContactExpertsComponent } from '../../../components/services-contact-experts/services-contact-experts.component';

@Component({
  selector: 'app-fpga',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesBenefits1Component,
    ServicesContactExpertsComponent,
  ],
  templateUrl: './fpga.component.html',
})
export class FpgaComponent {
  coreServices: any[] = [
    {
      imgUrl: '../../../assets/fpga/core-services.png',
      title: 'FPGA Design Services',
      desc: 'Architecture design, RTL coding, functional verification, and system integration for FPGA/ASICs. Expertise with standard buses (AXI, Avalon), third-party IPs, and SERDES interfaces.',
    },
    {
      imgUrl: '../../../assets/fpga/core-services.png',
      title: 'Firmware Development',
      desc: 'Kernel and device driver development for Linux and Windows. Bare-metal and Linux-based embedded applications supporting wireless (BLE, Zigbee, LoRaWAN) and wired (USB, UART, Ethernet) protocols.',
    },
    {
      imgUrl: '../../../assets/fpga/core-services.png',
      title: 'Software Development',
      desc: 'Custom UI and networking applications. Cloud integration with AWS, Google, and Azure IoT for end-to-end connectivity.',
    },
  ];

  benefits: any[] = [
    {
      imgUrl: '../../../../assets/fpga/benefits.png',
      title: 'Extensive Expertise',
      desc: 'Over 30 years of successful FPGA project delivery.',
    },
    {
      imgUrl: '../../../../assets/fpga/benefits.png',
      title: 'Comprehensive Services',
      desc: 'End-to-end design, firmware, and software capabilities.',
    },
    {
      imgUrl: '../../../../assets/fpga/benefits.png',
      title: 'Cutting-Edge Tools',
      desc: 'Proficiency in Vivado, Quartus Prime, Lattice Diamond, and more.',
    },
    {
      imgUrl: '../../../../assets/fpga/benefits.png',
      title: 'Cloud Integration',
      desc: 'Scalable IoT solutions with AWS, Google Cloud, and Azure IoT.',
    },
    {
      imgUrl: '../../../../assets/fpga/benefits.png',
      title: 'Customer-Centric Approach',
      desc: 'Collaborative designs tailored to your requirements.',
    },
  ];
}
