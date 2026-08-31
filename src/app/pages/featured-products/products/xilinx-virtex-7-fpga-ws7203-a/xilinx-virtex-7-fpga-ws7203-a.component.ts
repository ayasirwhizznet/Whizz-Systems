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
    imgUrl: 'assets/icons/code.svg',
    name: 'Custom Transceiver Testing Configurations',
    desc: 'Modify signal routing for specific test environments.',
  },
  {
    imgUrl: 'assets/icons/tool.svg',
    name: 'Integration with High-Speed Optical or Backplane Systems',
    desc: 'Adapt BullsEye connectors to suit proprietary test setups.',
  },
  {
    imgUrl: 'assets/icons/pcb.svg',
    name: 'Enhanced Clocking Solutions',
    desc: ' Implement programmable oscillators for specialized applications.',
  },
  {
    imgUrl: 'assets/icons/stick.svg',
    name: 'Firmware & Software Customization',
    desc: 'Develop specialized firmware and IBERT enhancements for improved testing.',
  },
  {
    imgUrl: 'assets/icons/signal.svg',
    name: 'Additional Expansion & I/O Adjustments',
    desc: 'Modify FMC-HPC connections and integrate additional peripherals.',
  },
  {
    imgUrl: 'assets/icons/magic.svg',
    name: 'Power & Thermal Optimization',
    desc: ' Implement enhanced power monitoring and cooling strategies.',
  },
];

faqs = [
  {
    question: 'What is a transceiver characterization kit used for?',
    answer:
      "It is used to measure the real behaviour of a device's high-speed serial transceivers — eye height and width, jitter, and bit error rate across a range of channel conditions — so that a channel budget can be established before a product board is designed.",
    isOpen: false,
  },
  {
    question: 'How many transceivers does the WS7203A expose?',
    answer:
      '28 GTX transceivers rated at 12.5Gbps, brought out to nine Samtec BullsEye connector pads.',
    isOpen: false,
  },
  {
    question: 'What is the difference between the WS7203A and the WS7203B?',
    answer:
      'Both are VC7203 derivatives built on the Virtex-7 XC7VX690T with 28 GTX transceivers. Confirm the intended configuration with our engineering team, because the two are supplied for different test setups.',
    isOpen: false,
  },
  {
    question: 'Does the kit include clocking for jitter measurement?',
    answer:
      'Yes. A 200MHz fixed LVDS oscillator, a SuperClock-2 module and differential SMA clock inputs are provided so an external reference can be substituted.',
    isOpen: false,
  },
  {
    question: 'How do we get pricing for the WS7203A?',
    answer:
      'Pricing is provided on application. Request a quote with your required configuration and volume.',
    isOpen: false,
  },
];

toggleFaq(index: number): void {
  this.faqs[index].isOpen = !this.faqs[index].isOpen;
}
}
