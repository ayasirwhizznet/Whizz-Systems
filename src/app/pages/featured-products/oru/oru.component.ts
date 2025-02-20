import { Component } from '@angular/core';
import { ProductHeroComponent } from '../components/product-hero/product-hero.component';
import { ProductOverviewComponent } from '../components/product-overview/product-overview.component';
import { ProductMarketingComponent } from '../components/product-marketing/product-marketing.component';
import { ProductFeaturesComponent } from '../components/product-features/product-features.component';
import { ProductCtaComponent } from '../components/product-cta/product-cta.component';
import { ProductCustomizationComponent } from '../components/product-customization/product-customization.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oru',
  standalone: true,
  imports: [
    ProductHeroComponent,
    ProductOverviewComponent,
    ProductMarketingComponent,
    ProductFeaturesComponent,
    ProductCtaComponent,
    ProductCustomizationComponent,
    CommonModule
  ],
  templateUrl: './oru.component.html',
})
export class OruComponent {
  features = {
    feature1: [
      '<b>Processor –</b> Intel® Arria® 10 SX 320/480 SoC',
      '<b>Memory –</b> 1GB DDR4 HPS, 2GB DDR4 FPGA',
      '<b>Connectivity –</b> 2x QSFP (40Gbps), Ethernet, USB',
    ],
    feature2: [
      '<b>Radio Interface –</b> 4T4R TDD, 600MHz – 6GHz Range',
      '<b>Power Optimization –</b> AC/DC simulations, reduced IR drop',
      '<b>Thermal Management –</b> Custom heat sink & airflow design',
    ],
    feature3: [
      '<b>Embedded Processing –</b> MicroBlaze 32-bit RISC',
      '<b>I/O –</b> SMA pairs, UART, GPIO',
      '<b>Customization –</b> FPGA selection, memory expansion, custom I/O configurations',
    ],
  };

  tags: string[] = [
    'Defense & Aerospace',
    'High Speed Network',
    'Telecommunications & 5G',
    'AI Acceleration',
    'Data Centers',
    'Test & Measurement',
  ];

  customizations: any[] = [
    {
      imgUrl:
        'assets/featured-products/oru/customization.png',
      name: 'Custom frequency configurations',
      desc: 'Adapt the <b>radio range and bandwidth</b> for different network applications.',
    },
    {
      imgUrl:
        'assets/featured-products/oru/customization.png',
      name: 'Flexible board-to-board interface options',
      desc: 'Tailored for <b>various RFFE and adapter cards.</b>',
    },
    {
      imgUrl:
        'assets/featured-products/oru/customization.png',
      name: 'Scalable configurations available',
      desc: 'Future-ready <b>2T2R, 8T8R, and lower-power versions.</b>',
    },
    {
      imgUrl:
        'assets/featured-products/oru/customization.png',
      name: 'Hardware architecture',
      desc: 'Power & clocking optimization',
    },
    {
      imgUrl:
        'assets/featured-products/oru/customization.png',
      name: 'PCB layout & design',
      desc: 'Signal integrity and thermal modeling',
    },
    {
      imgUrl:
        'assets/featured-products/oru/customization.png',
      name: 'Mechanical enclosure design',
      desc: 'Optimized airflow and thermal dissipation',
    },
    {
      imgUrl:
        'assets/featured-products/oru/customization.png',
      name: 'Manufacturing & validation',
      desc: 'Testing for full deployment readiness',
    }
  ];

  partners:any[] = [
    '<b>Intel –</b> Provided Arria® 10 FPGA SoC, powering the signal processing engine.',
    '<b>Analog Devices (ADI) –</b> Supplied Digital Front-End (DFE) and RF Front-End (RFFE) for high-frequency performance',
    '<b>Comcores –</b> Delivered FPGA IP for ORU function implementation.',
    '<b>Radisys –</b> Integrated the ORU software with Intel® FlexRAN server for network compatibility.',
    '<b>Whizz Systems –</b> Led hardware development, mechanical design, manufacturing, and validation, ensuring a fully tested, production-ready ORU solution.'
  ];
}
