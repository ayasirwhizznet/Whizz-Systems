import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../../../components/services-hero/services-hero.component';
import { ServicesCoreServicesComponent } from '../../../components/services-core-services/services-core-services.component';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fpga',
  standalone: true,
  imports: [ServicesHeroComponent, ServicesCoreServicesComponent, CommonModule, RouterLink],
  templateUrl: './fpga.component.html',
  styleUrl: './fpga.component.scss'
})
export class FpgaComponent {
  coreServices:any[] = [
    {imgUrl: '../../../assets/fpga/core-services.png', title: 'FPGA Design Services', desc: 'Architecture design, RTL coding, functional verification, and system integration for FPGA/ASICs. Expertise with standard buses (AXI, Avalon), third-party IPs, and SERDES interfaces.'},
    {imgUrl: '../../../assets/fpga/core-services.png', title: 'Firmware Development', desc: 'Kernel and device driver development for Linux and Windows. Bare-metal and Linux-based embedded applications supporting wireless (BLE, Zigbee, LoRaWAN) and wired (USB, UART, Ethernet) protocols.'},
    {imgUrl: '../../../assets/fpga/core-services.png', title: 'Software Development', desc: 'Custom UI and networking applications. Cloud integration with AWS, Google, and Azure IoT for end-to-end connectivity.'},
  ];
}
