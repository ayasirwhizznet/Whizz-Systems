import { ProductMarketingComponent } from './../../components/product-marketing/product-marketing.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule} from '@angular/common';
import { ProductHeroComponent } from '../../components/product-hero/product-hero.component';
import { ProductOverviewComponent } from '../../components/product-overview/product-overview.component';
import { ProductFeaturesComponent } from '../../components/product-features/product-features.component';
import { ProductCtaComponent } from '../../components/product-cta/product-cta.component';

@Component({
  selector: 'app-xilinx-virtex-7-fpga-ws7203-a',
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
  templateUrl: './xilinx-virtex-7-fpga-ws7203-a.component.html',
})
export class XilinxVirtex7FPGAWS7203AComponent {
  features = {
  feature1: [
    '<b>FPGA –</b> Virtex-7 XC7VX690T',
    '<b>Transceivers –</b> 28 GTX transceivers at 12.5Gbps',
    '<b>Networking & Connectivity –</b> Nine Samtec BullsEye connector pads, two differential MRCC SMA inputs, USB-to-UART bridge',
  ],
  feature2: [
    '<b>Clocking</b> 200MHz fixed LVDS oscillator, SuperClock-2 module, differential SMA clock inputs',
    '<b>Display & Indicators –</b> Power status LEDs, DIP switches, push buttons, general-purpose LEDs',
    '<b>Expansion –</b> Three VITA 57.1 FMC-HPC connectors',
  ],
  feature3: [
    '<b>Configuration –</b>Digilent USB JTAG programming port, System ACE™ SD controller',
    '<b>Control I/O–</b> I2C bus for additional system control',
    '<b>Power –</b> PMBus connectivity for real-time power management',
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
    name: 'Custom Transceiver Testing Configurations',
    desc: 'Modify signal routing for specific test environments.',
  },
  {
    imgUrl: 'assets/featured-products/products/vhk158/customization.png',
    name: 'Integration with High-Speed Optical or Backplane Systems',
    desc: 'Adapt BullsEye connectors to suit proprietary test setups.',
  },
  {
    imgUrl: 'assets/featured-products/products/vhk158/customization.png',
    name: 'Enhanced Clocking Solutions',
    desc: ' Implement programmable oscillators for specialized applications.',
  },
  {
    imgUrl: 'assets/featured-products/products/vhk158/customization.png',
    name: 'Firmware & Software Customization',
    desc: 'Develop specialized firmware and IBERT enhancements for improved testing.',
  },
  {
    imgUrl: 'assets/featured-products/products/vhk158/customization.png',
    name: 'Additional Expansion & I/O Adjustments',
    desc: 'Modify FMC-HPC connections and integrate additional peripherals.',
  },
  {
    imgUrl: 'assets/featured-products/products/vhk158/customization.png',
    name: 'Power & Thermal Optimization',
    desc: ' Implement enhanced power monitoring and cooling strategies.',
  },
];
}