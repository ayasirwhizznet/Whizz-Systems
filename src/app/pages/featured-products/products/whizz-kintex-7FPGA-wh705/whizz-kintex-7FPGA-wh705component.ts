import { ProductMarketingComponent } from '../../components/product-marketing/product-marketing.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule} from '@angular/common';
import { ProductHeroComponent } from '../../components/product-hero/product-hero.component';
import { ProductOverviewComponent } from '../../components/product-overview/product-overview.component';
import { ProductFeaturesComponent } from '../../components/product-features/product-features.component';
import { ProductCtaComponent } from '../../components/product-cta/product-cta.component';

@Component({
  selector: 'app-vhk158',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule,
    ProductHeroComponent,
    ProductOverviewComponent,
    ProductMarketingComponent,
    ProductFeaturesComponent,
    ProductCtaComponent
  ],
  templateUrl: './whizz-kintex-7FPGA-wh705.component.html',
})
export class VHK158Component {
  features = {
    feature1: [
      '<b>FPGA –</b> Kintex-7 XC7K410T',
      '<b>Memory –</b> 1GB DDR3 SODIMM, 128MB Linear BPI Flash, 16MB Quad SPI Flash, 8Kb IIC EEPROM',
      '<b>PCIe –</b>  Gen2x4 (5 Gb/s) or Gen1x8 (2.5 Gb/s)',
    ],
    feature2: [
      '<b>Networking–</b> 10/100/1000 Mbps Ethernet, SFP/SFP+ Cage, GTX port with SMA',
      '<b>Expansion –</b> FMC-HPC, FMC-LPC',
      '<b>Power Supply –</b> 12V wall adapter or ATX',
    ],
    feature3: [
      '<b>Control I/O–</b> Push buttons, DIP switches, SMA I/O pairs, AMS FAN Header',
      '<b>Customization –</b>  FPGA selection, memory expansion, custom I/O configurations',
      '<b>Configuration –</b> JTAG over USB, BPI Flash, Quad SPI Flash, SD Card Slot',
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
      imgUrl: 'assets/icons/code.svg',
      name: 'Productizing Development Kits',
      desc: 'Convert the WH705 into a ready-to-deploy product with tailored hardware and software.',
    },
    {
      imgUrl: 'assets/icons/tool.svg',
      name: 'Complete System Development',
      desc: 'Design enclosures, firmware, and thermal solutions around the WH705.',
    },
    {
      imgUrl: 'assets/icons/pcb.svg',
      name: 'FPGA Modifications',
      desc: 'Upgrade or modify the FPGA for application-specific needs.',
    },
    {
      imgUrl: 'assets/icons/stick.svg',
      name: 'Memory Enhancements',
      desc: 'Expand DDR3/DDR4 configurations as per performance requirements.',
    },
    {
      imgUrl: 'assets/icons/signal.svg',
      name: 'Custom Connectivity',
      desc: 'Modify PCIe lanes, add extra SFP/SFP+ ports, or customize I/O.',
    },
    {
      imgUrl: 'assets/icons/magic.svg',
      name: 'Software & Firmware Customization',
      desc: 'Develop specialized drivers, GUI, or firmware.',
    },
    {
      imgUrl: 'assets/icons/thermal.svg',
      name: '<a href="https://www.whizzsystems.com/insights/heatsink-design-guide" title="Power & Thermal Optimization">Power & Thermal Optimization</a>',
      desc: 'Enhance power delivery and cooling mechanisms.',
    },
  ];

  faqs = [
    {
      question: 'What FPGA does the Whizz WH705 use?',
      answer:
        'The WH705 is built around the Kintex-7 XC7K410T. The FPGA can be changed as part of a customization engagement if a different device in the family better suits the application.',
      isOpen: false,
    },
    {
      question: 'How does the WH705 differ from the AMD KC705?',
      answer:
        'The WH705 is a customizable derivative of the KC705 evaluation kit. The reference design is retained where it is useful, but the board can be modified — FPGA selection, memory configuration, connector complement, power and thermal design — and then productized for volume manufacture, which a standard evaluation kit cannot be.',
      isOpen: false,
    },
    {
      question: 'Can the WH705 be customized for our application?',
      answer:
        'Yes. Common changes include FPGA substitution, memory expansion, custom I/O and connector configurations, firmware and software development, and power or thermal optimization for a target enclosure.',
      isOpen: false,
    },
    {
      question: 'What expansion interfaces does the WH705 provide?',
      answer:
        'The board provides FMC-HPC and FMC-LPC connectors, an SFP/SFP+ cage, a GTX port with SMA access, and SMA I/O pairs.',
      isOpen: false,
    },
    {
      question: 'How do we get pricing for the WH705?',
      answer:
        'Pricing is provided on application. Request a quote with your required configuration and volume, and we will respond with pricing and lead time.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
