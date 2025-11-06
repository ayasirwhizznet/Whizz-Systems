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
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Productizing Development Kits',
      desc: 'Convert the WH705 into a ready-to-deploy product with tailored hardware and software.',
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
      name: '<a href="https://www.whizzsystems.com/news-&-insights/whitepaper-heatsink" title="Power & Thermal Optimization">Power & Thermal Optimization</a>',
      desc: 'Enhance power delivery and cooling mechanisms.',
    },
  ];
}
