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
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Productizing Development Kits',
      desc: 'Turn the WS709 into a deployable product with optimized hardware and software.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Complete System Development',
      desc: 'Create an end-to-end system including enclosures, firmware, and thermal solutions.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'FPGA Modifications',
      desc: 'Upgrade or modify the FPGA for specialized processing applications.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Memory Enhancements',
      desc: 'Expand DDR3/DDR4 configurations based on performance needs.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Custom Connectivity',
      desc: 'Modify PCIe lanes, add additional SFP/SFP+ ports, or adjust I/O configurations.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Software & Firmware Customization',
      desc: ' Develop specialized drivers, GUI, or firmware.',
    },
    {
      imgUrl: 'assets/featured-products/products/vhk158/customization.png',
      name: 'Power & Thermal Optimization',
      desc: 'Enhance power delivery and cooling mechanisms.',
    },
  ];
}
