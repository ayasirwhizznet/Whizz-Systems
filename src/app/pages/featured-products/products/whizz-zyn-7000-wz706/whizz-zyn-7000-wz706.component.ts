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
    imgUrl: 'assets/featured-products/products/vhk158/customization.png',
    name: 'Productizing Development Kits',
    desc: 'Convert the WZ706 into a ready-to-deploy product with tailored hardware and software.',
  },
  {
    imgUrl: 'assets/featured-products/products/vhk158/customization.png',
    name: 'Complete System Development',
    desc: 'Design enclosures, firmware, and thermal solutions around the WZ706.',
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