import { ProductMarketingComponent } from './../../components/product-marketing/product-marketing.component';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule} from '@angular/common';
import { ProductHeroComponent } from '../../components/product-hero/product-hero.component';
import { ProductOverviewComponent } from '../../components/product-overview/product-overview.component';
import { ProductFeaturesComponent } from '../../components/product-features/product-features.component';
import { ProductCtaComponent } from '../../components/product-cta/product-cta.component';

@Component({
  selector: 'app-xilinx-virtex-7-fpga-ws7203-b',
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
  templateUrl: './xilinx-virtex-7-fpga-ws7203-b.component.html',
})
export class XilinxVirtex7FPGAWS7203BComponent {
  features = {
  feature1: [
    '<b>FPGA –</b> Virtex-7 XC7VX690T',
    '<b>Transceivers –</b> 28 GTX transceivers at 12.5Gbps',
    '<b>Networking & Connectivity –</b>  Nine Samtec BullsEye connector pads, two differential MRCC SMA inputs, USB-to-UART bridge',
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
    question: 'What is the difference between the WS7203B and the WS7203A?',
    answer:
      'REPLACE THIS ANSWER. The two pages currently publish identical specifications, so this question cannot be answered from the site as it stands. Whizz engineering needs to state the real difference — channel configuration, supplied accessories, or intended test setup — or the two products should be consolidated onto one page.',
    isOpen: false,
  },
  {
    question: 'How many transceivers does the WS7203B expose?',
    answer:
      '28 GTX transceivers rated at 12.5Gbps, brought out to nine Samtec BullsEye connector pads.',
    isOpen: false,
  },
  {
    question: 'What is included for clocking?',
    answer:
      'A 200MHz fixed LVDS oscillator, a SuperClock-2 module and differential SMA clock inputs, so an external reference clock can be substituted for jitter tolerance testing.',
    isOpen: false,
  },
  {
    question: 'Can the WS7203B be customized?',
    answer:
      'Yes. Transceiver test configurations, optical or backplane integration, clocking, expansion and I/O, firmware and thermal design can all be modified.',
    isOpen: false,
  },
  {
    question: 'How do we get pricing for the WS7203B?',
    answer:
      'Pricing is provided on application. Request a quote with your required configuration and volume.',
    isOpen: false,
  },
];

toggleFaq(index: number): void {
  this.faqs[index].isOpen = !this.faqs[index].isOpen;
}
}
