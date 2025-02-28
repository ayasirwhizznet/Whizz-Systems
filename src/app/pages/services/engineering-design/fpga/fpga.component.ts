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
      desc: ['Versal', 'Zynx', 'Virtex Ultrascale ', 'Expertise in high-pin-count BGAs, micro-pitch components, and high-speed interconnects.', 'Expertise in high-pin-count BGAs, micro-pitch components, and high-speed interconnects.', 'Expertise in high-pin-count BGAs, micro-pitch components, and high-speed interconnects.']
    },
    {
      heading: 'Communication & Connectivity',
      title: 'Seamless IP Integration and High-Speed Connectivity',
      subTitle: 'We ensure seamless integration with standard communication protocols, including:',
      desc: ['UART', 'I2C', 'SPI', 'Expertise in high-pin-count BGAs, micro-pitch components, and high-speed interconnects.', 'Expertise in high-pin-count BGAs, micro-pitch components, and high-speed interconnects.', 'Expertise in high-pin-count BGAs, micro-pitch components, and high-speed interconnects.']
    }
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'Extensive Expertise',
      desc: 'Over 30 years of successful FPGA project delivery.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'Comprehensive Services',
      desc: 'End-to-end design, firmware, and software capabilities.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'Cutting-Edge Tools',
      desc: 'Proficiency in Vivado, Quartus Prime, Lattice Diamond, and more.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'Cloud Integration',
      desc: 'Scalable IoT solutions with AWS, Google Cloud, and Azure IoT.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga/benefits.png',
      name: 'Customer-Centric Approach',
      desc: 'Collaborative designs tailored to your requirements.',
    },
  ];
}
