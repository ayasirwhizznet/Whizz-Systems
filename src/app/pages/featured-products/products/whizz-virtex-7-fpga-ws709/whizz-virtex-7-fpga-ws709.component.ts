import { ProductMarketingComponent } from './../../components/product-marketing/product-marketing.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule} from '@angular/common';
import { ProductHeroComponent } from '../../components/product-hero/product-hero.component';
import { ProductOverviewComponent } from '../../components/product-overview/product-overview.component';
import { ProductFeaturesComponent } from '../../components/product-features/product-features.component';
import { ProductCtaComponent } from '../../components/product-cta/product-cta.component';

@Component({
  selector: 'app-whizz-virtex-7-fpga-ws709',
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
  templateUrl: './whizz-virtex-7-fpga-ws709.component.html',
})
export class WhizzVirtex7FPGAWS709Component {
  features = {
    feature1: [
      '<b>FPGA –</b> Virtex-7 VX690T (XC7VX2000T)',
      '<b>Memory –</b> 2 x 4GB DDR3 SODIMM (933MHz / 1866Mbps), 32MB BPI Parallel NOR Flash, 1KB IIC EEPROM',
      '<b>PCIe –</b> Gen3 8-lane edge connector',
    ],
    feature2: [
      '<b>Clocking</b> 200MHz fixed oscillator, 233.33MHz fixed oscillator, User Programmable Oscillator, SMA clock inputs',
      '<b>Networking –</b> 4x SFP/SFP+ cages, 10x GTH ports to FMC, UART to USB Bridge',
      '<b>Configuration –</b> JTAG over USB, BPI Parallel NOR Flash',
    ],
    feature3: [
      '<b>Expansion –</b> FMC-HPC, GTH transceivers',
      '<b>Control I/O–</b>  Push buttons, DIP switches, User LEDs',
      '<b>Power –</b> 12V AC adapter or ATX',
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
      desc: 'Turn the WS709 into a deployable product with optimized hardware and software.',
    },
    {
      imgUrl: 'assets/icons/tool.svg',
      name: 'Complete System Development',
      desc: 'Create an end-to-end system including enclosures, firmware, and thermal solutions.',
    },
    {
      imgUrl: 'assets/icons/pcb.svg',
      name: 'FPGA Modifications',
      desc: 'Upgrade or modify the FPGA for specialized processing applications.',
    },
    {
      imgUrl: 'assets/icons/stick.svg',
      name: 'Memory Enhancements',
      desc: 'Expand DDR3/DDR4 configurations based on performance needs.',
    },
    {
      imgUrl: 'assets/icons/signal.svg',
      name: 'Custom Connectivity',
      desc: 'Modify PCIe lanes, add additional SFP/SFP+ ports, or adjust I/O configurations.',
    },
    {
      imgUrl: 'assets/icons/magic.svg',
      name: 'Software & Firmware Customization',
      desc: ' Develop specialized drivers, GUI, or firmware.',
    },
    {
      imgUrl: 'assets/icons/thermal.svg',
      name: 'Power & Thermal Optimization',
      desc: 'Enhance power delivery and cooling mechanisms.',
    },
  ];

  faqs = [
    {
      question: 'What makes the WS709 a connectivity kit rather than an evaluation kit?',
      answer:
        'The WS709 is configured for high-bandwidth data movement: four SFP/SFP+ cages, ten GTH transceiver ports routed to FMC, a PCIe Gen3 eight-lane edge connector, and 8GB of DDR3 across two SODIMMs. It is intended for network and data-path development rather than general logic evaluation.',
      isOpen: false,
    },
    {
      question: 'How much memory does the WS709 carry?',
      answer:
        'Two 4GB DDR3 SODIMMs running at 933MHz (1866Mbps), giving 8GB total, plus 32MB of BPI parallel NOR Flash and a 1KB IIC EEPROM.',
      isOpen: false,
    },
    {
      question: 'Does the WS709 support PCIe Gen3?',
      answer:
        'Yes. The board provides a PCIe Gen3 eight-lane edge connector.',
      isOpen: false,
    },
    {
      question: 'Can the WS709 be customized?',
      answer:
        'Yes. FPGA selection, memory configuration, connector complement, firmware and thermal design can all be modified, and the resulting design can be productized for volume manufacture.',
      isOpen: false,
    },
    {
      question: 'How do we get pricing for the WS709?',
      answer:
        'Pricing is provided on application. Request a quote with your required configuration and volume.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
