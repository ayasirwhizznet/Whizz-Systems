import { Component } from '@angular/core';
import { CbuttonComponent } from '../../../components/cbutton/cbutton.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-vhk158',
  standalone: true,
  imports: [CbuttonComponent, CommonModule, NgFor],
  templateUrl: './vhk158.component.html',
})
export class VHK158Component {
  keyFeatures = {
    feature1: [
      '<b>Clocking –</b> Programmable DDR4 Clocks (x2), PCIe Reference Clock (x1), Programmable GT Clocks (x12)',
      '<b>Memory –</b> DDR4 DIMM: 32GB (2x 16GB, 72-bit @ 3200 Mb/s)',
      '<b>PCIe Slots –</b> PCIe Gen5 x8, Gen3/4 x16',
    ],
    feature2: [
      '<b>Configuration–</b> JTAG, OSPI, MicroSD',
      '<b>Networking–</b> USB JTAG, USB-C, RJ-45 Ethernet (x2), QSFP28 (x4), QSFP-DD (x2)',
      '<b>Expansion –</b> VITA 57.4 FMC+ (8 GTYPs, 68 User-Defined Signals)',
    ],
    feature3: [
      '<b>Power Supply –</b> 180W (12V) Power Supply, Power-on Reset',
      '<b>Control I/O–</b> 2 User Pushbuttons, 4 User LEDs, DIP Switches, SYSMON, System Controller',
      '<b>Customization –</b> FPGA selection, memory expansion, custom I/O configurations',
    ],
  };

  customization: any[] = [
    {
      imgUrl:
        'assets/featured-products/products/vhk158/customization.png',
      title: 'Full System Development',
      desc: 'Productize the VHK158 into a deployable solution, including custom enclosures, firmware, and regulatory compliance.',
    },
    {
      imgUrl:
        'assets/featured-products/products/vhk158/customization.png',
      title: 'Custom I/O & Connectivity',
      desc: 'Modify PCIe lanes, QSFP28/QSFP-DD configurations, or expand I/O options.',
    },
    {
      imgUrl:
        'assets/featured-products/products/vhk158/customization.png',
      title: 'FPGA & Memory Modifications',
      desc: 'Expand HBM/DDR4 capabilities based on workload needs.',
    },
    {
      imgUrl:
        'assets/featured-products/products/vhk158/customization.png',
      title: 'Software & Firmware Customization',
      desc: 'Optimize drivers, software environments, and application-layer software.',
    },
    {
      imgUrl:
        'assets/featured-products/products/vhk158/customization.png',
      title: 'Power Distribution Optimization',
      desc: ' Improve power management and efficiency to meet system power constraints.',
    },
    {
      imgUrl:
        'assets/featured-products/products/vhk158/customization.png',
      title: 'Cooling Enhancements',
      desc: 'Implement advanced thermal solutions such as custom heatsinks, active cooling, or liquid-cooled enclosures for optimal performance.',
    },
  ];

  applications: string[] = [
    'Defense & Aerospace',
    'High Speed Network',
    'Telecommunications & 5G',
    'AI Acceleration',
    'Data Centers',
    'Test & Measurement',
  ];
}
