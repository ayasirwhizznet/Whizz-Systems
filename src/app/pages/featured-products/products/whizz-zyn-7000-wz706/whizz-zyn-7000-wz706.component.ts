import { ProductMarketingComponent } from './../../components/product-marketing/product-marketing.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule} from '@angular/common';
import { ProductHeroComponent } from '../../components/product-hero/product-hero.component';
import { ProductOverviewComponent } from '../../components/product-overview/product-overview.component';
import { ProductFeaturesComponent } from '../../components/product-features/product-features.component';
import { ProductCtaComponent } from '../../components/product-cta/product-cta.component';

@Component({
  selector: 'app-whizz-zyn-7000-wz706',
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
  templateUrl: './whizz-zyn-7000-wz706.component.html',
})
export class WhizzZyn7000WZ706Component {
  features = {
  feature1: [
    '<b>FPGA –</b> Zynq-7000 XC7Z100',
    '<b>Memory –</b> 1GB DDR3 (PS), 1GB DDR3 SODIMM (PL), 2x16MB Quad SPI Flash, 1KB IIC EEPROM',
    '<b>PCIe –</b> Gen2x4',
  ],
  feature2: [
    '<b>Clocking</b> GigE RGMII Ethernet, SFP/SFP+ Cage, SMA pairs',
    '<b>Interface –</b> 10/100/1000 Mbps Ethernet, SFP/SFP+ Cage, GTX port with SMA',
    '<b>Configuration –</b> Onboard JTAG, Quad SPI Flash, SDIO Card Interface',
  ],
  feature3: [
    '<b>Expansion –</b>FMC-LPC, FMC-HPC, Dual Pmod, Single Pmod',
    '<b>Control I/O–</b> Push buttons, DIP switches, LEDs, IIC access to GPIO',
    '<b>Power –</b> 12V wall adapter, current measurement capability',
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
    desc: 'Convert the WZ706 into a ready-to-deploy product with tailored hardware and software.',
  },
  {
    imgUrl: 'assets/icons/tool.svg',
    name: '<a href="https://www.whizzsystems.com/services/engineering-design/system-schematic-services" title="Complete System Development">Complete System Development</a>',
    desc: 'Design enclosures, firmware, and thermal solutions around the WZ706.',
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
    imgUrl: 'assets/icons/stick.svg',
    name: 'Custom Connectivity',
    desc: 'Modify PCIe lanes, add extra SFP/SFP+ ports, or customize I/O.',
  },
  {
    imgUrl: 'assets/icons/magic.svg',
    name: 'Software & Firmware Customization',
    desc: 'Develop specialized drivers, GUI, or firmware.',
  },
  {
    imgUrl: 'assets/icons/tool.svg',
    name: 'Power & Thermal Optimization',
    desc: 'Enhance power delivery and cooling mechanisms.',
  },
];

faqs = [
  {
    question: 'What device does the Whizz WZ706 use?',
    answer:
      'The WZ706 is built around the Zynq-7000 XC7Z100, which combines a dual-core Arm processing system with programmable logic on a single device.',
    isOpen: false,
  },
  {
    question: 'How does the WZ706 differ from the AMD ZC706?',
    answer:
      'The WZ706 is a customizable derivative of the ZC706 evaluation kit. It can be modified across FPGA selection, memory, connectivity, firmware and thermal design, and then productized for volume manufacture.',
    isOpen: false,
  },
  {
    question: 'What memory does the WZ706 provide?',
    answer:
      '1GB of DDR3 attached to the processing system, a separate 1GB DDR3 SODIMM on the programmable logic side, two 16MB Quad SPI Flash devices and a 1KB IIC EEPROM.',
    isOpen: false,
  },
  {
    question: 'Does the WZ706 support Pmod expansion?',
    answer:
      'Yes. The board provides both dual and single Pmod headers alongside FMC-LPC and FMC-HPC connectors.',
    isOpen: false,
  },
  {
    question: 'How do we get pricing for the WZ706?',
    answer:
      'Pricing is provided upon application. Request a quote with your required configuration and volume.',
    isOpen: false,
  },
];

toggleFaq(index: number): void {
  this.faqs[index].isOpen = !this.faqs[index].isOpen;
}
}
