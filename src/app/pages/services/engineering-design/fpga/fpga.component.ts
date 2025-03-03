import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesBenefits1Component } from "../../../../shared/components/services-benefits1/services-benefits1.component";

@Component({
  selector: 'app-fpga',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesContactExpertsComponent,
    ServicesCoreServicesComponent,
    ServicesIntroComponent,
    ServicesBenefits1Component
],
  templateUrl: './fpga.component.html',
})
export class FpgaComponent {
  coreServices: any[] = [
    {
      imgUrl: 'assets/services/engg&design/fpga/architecture.png',
      name: 'Architecture Design & RTL Coding',
      desc: 'Develop scalable FPGA architectures with optimized RTL coding to meet your system requirements',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/verification.png',
      name: 'Functional Verification & Simulation',
      desc: 'Rigorous verification processes ensure FPGA/ASIC designs perform flawlessly under real-world conditions.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/system.png',
      name: 'System Integration & IP Connectivity',
      desc: 'Seamlessly integrate third-party IP and standard buses (AXI, Avalon) to enable efficient PS-PL data exchange and high-speed SERDES interfaces',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/tool.png',
      name: 'Tool Expertise',
      desc: 'Utilize industry-leading tools like Vivado, Quartus Prime, and Lattice Diamond for best-in-class design performance.',
    },
  ];

  expertise:any[] = [
    {
      heading: 'Supported FPGA Families',
      title: 'Diverse FPGA Families for Every Need',
      subTitle: 'Our expertise spans a wide range of FPGA families, including:',
      desc: ['Versal', 'Zynx', 'Virtex Ultrascale ', 'Agilex', 'Stratix']
    },
    {
      heading: 'Communication & Connectivity',
      title: 'Seamless IP Integration and High-Speed Connectivity',
      subTitle: 'Industry Standards',
      desc: ['UART', 'I2C', 'SPI', 'Ethernet']
    }
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'Proven Expertise',
      desc: 'Our team has a strong track record in delivering high-performance FPGA designs across diverse industries.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'End-to-End Solutions',
      desc: 'We provide comprehensive services—ensuring a seamless design-to-production workflow.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'Robust Connectivity',
      desc: 'We specialize in integrating standard buses l, and support high-speed SERDES interfaces along with protocols such as UART, I2C, SPI, and Ethernet.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'Rigorous Verification',
      desc: 'Our thorough functional verification and simulation processes ensure that every design meets the highest standards of reliability and performance.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'Client-Centric Approach',
      desc: 'We collaborate closely with our clients to turn complex ideas into market-ready solutions quickly, reducing time-to-market and overall costs.',
    },
  ];
}
