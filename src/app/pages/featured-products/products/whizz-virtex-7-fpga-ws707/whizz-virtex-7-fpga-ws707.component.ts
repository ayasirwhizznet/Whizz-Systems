import { ProductMarketingComponent } from './../../components/product-marketing/product-marketing.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule} from '@angular/common';
import { ProductHeroComponent } from '../../components/product-hero/product-hero.component';
import { ProductOverviewComponent } from '../../components/product-overview/product-overview.component';
import { ProductFeaturesComponent } from '../../components/product-features/product-features.component';
import { ProductCtaComponent } from '../../components/product-cta/product-cta.component';

@Component({
  selector: 'app-whizz-virtex-7-fpga-ws707',
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
  templateUrl: './whizz-virtex-7-fpga-ws707.component.html',
})
export class WhizzVirtex7FPGAWS707Component {
  features = {
    feature1: [
      '<b>FPGA –</b> Virtex-7 XC7V2000T',
      '<b>Memory –</b> 1GB DDR3 SODIMM, 128MB Linear BPI Flash, 16MB Quad SPI Flash, 8Kb IIC EEPROM',
      '<b>PCIe –</b> Gen2x8 (layout for Gen3)',
    ],
    feature2: [
      '<b>Clocking</b> 200MHz fixed oscillator, 156.250MHz programmable oscillator, SMA clock input',
      '<b>Networking –</b> 10/100/1000 Mbps Ethernet, SFP/SFP+ Cage, GTX port with SMA',
      '<b>Configuration –</b> JTAG over USB, BPI Flash, Quad SPI Flash, SD Card Slot',
    ],
    feature3: [
      '<b>Expansion –</b> FMC1-HPC, FMC2-HPC',
      '<b>Control I/O–</b> Push buttons, DIP switches, Rotary Encoder, AMS FAN Header',
      '<b>Power –</b> 12V wall adapter or ATX',
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
      desc: 'Convert the WS707B into a ready-to-deploy product with tailored hardware and software.',
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
      name: 'Power & Thermal Optimization',
      desc: 'Enhance power delivery and cooling mechanisms.',
    },
  ];

  faqs = [
    {
      question: 'What FPGA does the WS707 use?',
      answer:
        'The WS707 is built around the Virtex-7 XC7V2000T, the largest device in the Virtex-7 family by logic capacity.',
      isOpen: false,
    },
    {
      question: 'How does the WS707 differ from the AMD VC707?',
      answer:
        'It is a customizable derivative of the VC707 evaluation kit, and unlike a standard evaluation kit, it can be modified and productized for volume manufacture.',
      isOpen: false,
    },
    {
      question: 'Should we choose the WS707 or the WH707A?',
      answer:
        'Both are VC707 derivatives. The WS707 carries the XC7V2000T and suits designs limited by logic capacity; the WH707A carries the XC7VX690T and suits designs limited by transceiver count and high-speed I/O.',
      isOpen: false,
    },
    {
      question: 'What expansion does the WS707 provide?',
      answer:
        'Two FMC-HPC connectors, an SFP/SFP+ cage and a GTX port with SMA access.',
      isOpen: false,
    },
    {
      question: 'How do we get pricing for the WS707?',
      answer:
        'Pricing is provided on application. Request a quote with your required configuration and volume.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
