import { Component, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesBenefits1Component } from '../../../../shared/components/services-benefits1/services-benefits1.component';

@Component({
  selector: 'app-fpga-design-services',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesContactExpertsComponent,
    ServicesCoreServicesComponent,
    ServicesIntroComponent,
    ServicesBenefits1Component,
  ],
  templateUrl: './fpga.component.html',
})
export class FpgaComponent {
  coreServices: any[] = [
    {
      imgUrl:
        'assets/services/engg&design/fpga-design-services/architecture.png',
      name: 'Architecture Design & RTL Coding',
      desc: 'Develop scalable FPGA architectures with optimized RTL coding to meet your system requirements',
    },
    {
      imgUrl:
        'assets/services/engg&design/fpga-design-services/verification.png',
      name: 'Functional Verification & Simulation',
      desc: 'Rigorous verification processes ensure FPGA/ASIC designs perform flawlessly under real-world conditions.',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga-design-services/system.png',
      name: 'System Integration & IP Connectivity',
      desc: 'Seamlessly integrate third-party IP and standard buses (AXI, Avalon) to enable efficient PS-PL data exchange and high-speed SERDES interfaces',
    },
    {
      imgUrl: 'assets/services/engg&design/fpga-design-services/tool.png',
      name: 'Tool Expertise',
      desc: 'Utilize industry-leading tools like Vivado, Quartus Prime, and Lattice Diamond for best-in-class design performance.',
    },
  ];

  expertise: any[] = [
    {
      heading: 'Supported FPGA Families',
      title: 'Diverse FPGA Families for Every Need',
      subTitle: 'Our expertise spans a wide range of FPGA families, including:',
      desc: ['Versal', 'Zynx', 'Virtex Ultrascale ', 'Agilex', 'Stratix'],
    },
    {
      heading: 'Communication & Connectivity',
      title: 'Seamless IP Integration and High-Speed Connectivity',
      subTitle: 'Industry Standards',
      desc: ['UART', 'I2C', 'SPI', 'Ethernet'],
    },
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/icons/expert-badge.svg',
      name: 'Proven Expertise',
      desc: 'Our team has a strong track record in delivering high-performance FPGA designs across diverse industries.',
    },
    {
      imgUrl: 'assets/icons/solution.svg',
      name: 'End-to-End Solutions',
      desc: 'We provide comprehensive services—ensuring a seamless design-to-production workflow.',
    },
    {
      imgUrl: 'assets/icons/connectivity.svg',
      name: 'Robust Connectivity',
      desc: 'We specialize in integrating standard buses l, and support high-speed SERDES interfaces along with protocols such as UART, I2C, SPI, and Ethernet.',
    },
    {
      imgUrl: 'assets/icons/search.svg',
      name: 'Rigorous Verification',
      desc: 'Our thorough functional verification and simulation processes ensure that every design meets the highest standards of reliability and performance.',
    },
    {
      imgUrl: 'assets/icons/client.svg',
      name: 'Client-Centric Approach',
      desc: 'We collaborate closely with our clients to turn complex ideas into market-ready solutions quickly, reducing time-to-market and overall costs.',
    },
  ];

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const jsonLdData = [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'FPGA Design and Development Services',
        provider: {
          '@type': 'Organization',
          name: 'Whizz Systems',
          url: 'https://www.whizzsystems.com/',
          logo: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
          sameAs: [
            'https://www.linkedin.com/company/whizz-systems/',
            'https://www.youtube.com/@WhizzSystemsCA',
          ],
        },
        url: 'https://www.whizzsystems.com/services/engineering-design/fpga-design-services',
        description:
          'Whizz Systems provides FPGA design and development services including architecture design, RTL coding, verification, system integration, IP connectivity, and support for major FPGA families.',
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide',
        },
        offers: {
          '@type': 'Offer',
          name: 'FPGA Engineering Services',
          description:
            'Comprehensive FPGA engineering services covering design, development, testing, and production.',
          url: 'https://www.whizzsystems.com/services/engineering-design/fpga-design-services',
        },
      },
    ];

    jsonLdData.forEach((entry) => {
      const script = this.renderer.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(entry);
      this.renderer.appendChild(this.document.body, script); // Or use this.document.body
    });
  }
}
