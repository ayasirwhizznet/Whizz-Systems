import { ProductMarketingComponent } from './../../components/product-marketing/product-marketing.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule} from '@angular/common';
import { ProductHeroComponent } from '../../components/product-hero/product-hero.component';
import { ProductOverviewComponent } from '../../components/product-overview/product-overview.component';
import { ProductFeaturesComponent } from '../../components/product-features/product-features.component';
import { ProductCtaComponent } from '../../components/product-cta/product-cta.component';

@Component({
  selector: 'app-whizz-virtex-7-fpga-wh707-a',
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
  templateUrl: './whizz-virtex-7-fpga-wh707-a.component.html',
})
export class WhizzVirtex7FPGAWH707AComponent {
  features = {
    feature1: [
      '<b>FPGA –</b> Virtex-7 XC7VX690T',
      '<b>Memory –</b> 1GB DDR3 SODIMM, 128MB Linear BPI Flash, 16MB Quad SPI Flash, 8Kb IIC EEPROM',
      '<b>PCIe –</b> Gen2x8 (layout for Gen3)',
    ],
    feature2: [
      '<b>Clocking –</b> 200MHz fixed oscillator, 156.250MHz programmable oscillator, SMA clock input',
      '<b>Networking –</b> 10/100/1000 Mbps Ethernet, SFP/SFP+ Cage, GTX port with SMA',
      '<b>Configuration –</b> JTAG over USB, BPI Flash, Quad SPI Flash, SD Card Slot',
    ],
    feature3: [
      '<b>Expansion –</b> FMC1-HPC, FMC2-HPC',
      '<b>Control & I/O –</b> Push buttons, DIP switches, Rotary Encoder, AMS FAN Header',
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
      desc: 'Convert the WS707A into a ready-to-deploy product with tailored hardware and software.',
    },
    {
      imgUrl: 'assets/icons/tool.svg',
      name: 'Complete System Development',
      desc: 'Design enclosures, firmware, and thermal solutions around the WS707A.',
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
      question: 'What FPGA does the WH707A use?',
      answer:
        'The WH707A is built around the Virtex-7 XC7VX690T, paired with 1GB of DDR3 on a SODIMM, 128MB of linear BPI Flash, and 16MB of Quad SPI Flash.',
      isOpen: false,
    },
    {
      question: 'How does the WH707A differ from the AMD VC707?',
      answer:
        'It is a customizable derivative of the VC707 evaluation kit. The board can be modified across FPGA selection, memory, connectivity, firmware, and thermal design, and productized for volume manufacture.',
      isOpen: false,
    },
    {
      question: 'Does the WH707A support PCIe Gen3?',
      answer:
        'The board is fitted for PCIe Gen2x8, and the layout supports Gen3. Confirm the intended operating generation with our engineering team before ordering, because the achievable rate depends on the channel and the endpoint.',
      isOpen: false,
    },
    {
      question: 'What is the difference between the WH707A and the WS707?',
      answer:
        'Both are VC707 derivatives. The WH707A uses the Virtex-7 XC7VX690T; the WS707 uses the larger XC7V2000T. Choose based on logic capacity and transceiver count.',
      isOpen: false,
    },
    {
      question: 'How do we get pricing for the WH707A?',
      answer:
        'Pricing is provided on application. Request a quote with your required configuration and volume.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
