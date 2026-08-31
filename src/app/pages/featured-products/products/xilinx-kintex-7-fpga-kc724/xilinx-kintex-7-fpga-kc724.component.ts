import { ProductMarketingComponent } from './../../components/product-marketing/product-marketing.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule} from '@angular/common';
import { ProductHeroComponent } from '../../components/product-hero/product-hero.component';
import { ProductOverviewComponent } from '../../components/product-overview/product-overview.component';
import { ProductFeaturesComponent } from '../../components/product-features/product-features.component';
import { ProductCtaComponent } from '../../components/product-cta/product-cta.component';

@Component({
  selector: 'app-xilinx-kintex-7-fpga-kc724',
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
  templateUrl: './xilinx-kintex-7-fpga-kc724.component.html',
})
export class XilinxKintex7FPGAKC724Component {
  features = {
  feature1: [
    '<b>FPGA –</b> Kintex-7 XC7K410T',
    '<b>Transceivers –</b> 16 GTX transceivers at 12.5Gbps',
    '<b>Networking & Connectivity –</b> Four Samtec BullsEye connector pads, two differential MRCC SMA inputs, USB-to-UART bridge',
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
    imgUrl: 'assets/icons/Union.svg',
    name: 'Custom Transceiver Testing Configurations',
    desc: 'Modify signal routing for specific test environments.',
  },
  {
    imgUrl: 'assets/icons/target.svg',
    name: 'Integration with High-Speed Optical or Backplane Systems',
    desc: 'Adapt BullsEye connectors to suit proprietary test setups.',
  },
  {
    imgUrl: 'assets/icons/enhance.svg',
    name: 'Enhanced Clocking Solutions',
    desc: ' Implement programmable oscillators for specialized applications.',
  },
  {
    imgUrl: 'assets/icons/firmware.svg',
    name: 'Firmware & Software Customization',
    desc: 'Develop specialized firmware and IBERT enhancements for improved testing.',
  },
  {
    imgUrl: 'assets/icons/excellence.svg',
    name: 'Additional Expansion & I/O Adjustments',
    desc: 'Modify FMC-HPC connections and integrate additional peripherals.',
  },
  {
    imgUrl: 'assets/icons/cooling.svg',
    name: 'Power & Thermal Optimization',
    desc: ' Implement enhanced power monitoring and cooling strategies.',
  },
];

faqs = [
  {
    question: 'What FPGA does the KC724 characterization kit use?',
    answer:
      'The KC724 is built around the Kintex-7 XC7K410T and exposes 16 GTX transceivers rated at 12.5Gbps.',
    isOpen: false,
  },
  {
    question: 'How does the KC724 differ from the Virtex-7 characterization kits?',
    answer:
      'The KC724 exposes 16 transceivers across four BullsEye pads on a Kintex-7 device; the Virtex-7 WS7203 kits expose 28 transceivers across nine pads. Choose based on the number of channels you need to characterize simultaneously.',
    isOpen: false,
  },
  {
    question: 'What is IBERT used for on this kit?',
    answer:
      'IBERT is used to run bit error rate tests across the transceiver channels, sweep equalisation settings and capture eye scans, which is how the achievable channel reach is established.',
    isOpen: false,
  },
  {
    question: 'Can the KC724 be customized?',
    answer:
      'Yes. Transceiver test configurations, clocking, expansion and I/O, firmware, and power and thermal design can all be modified, and the design can be productized.',
    isOpen: false,
  },
  {
    question: 'How do we get pricing for the KC724?',
    answer:
      'Pricing is provided on application. Request a quote with your required configuration and volume.',
    isOpen: false,
  },
];

toggleFaq(index: number): void {
  this.faqs[index].isOpen = !this.faqs[index].isOpen;
}
}
