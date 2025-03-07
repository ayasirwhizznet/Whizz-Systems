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
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Productizing Development Kits',
      desc: 'Convert the WS707B into a ready-to-deploy product with tailored hardware and software.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Complete System Development',
      desc: 'Design enclosures, firmware, and thermal solutions around the WH705.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'FPGA Modifications',
      desc: 'Upgrade or modify the FPGA for application-specific needs.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Memory Enhancements',
      desc: 'Expand DDR3/DDR4 configurations as per performance requirements.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Custom Connectivity',
      desc: 'Modify PCIe lanes, add extra SFP/SFP+ ports, or customize I/O.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Software & Firmware Customization',
      desc: 'Develop specialized drivers, GUI, or firmware.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Power & Thermal Optimization',
      desc: 'Enhance power delivery and cooling mechanisms.',
    },
  ];
}
