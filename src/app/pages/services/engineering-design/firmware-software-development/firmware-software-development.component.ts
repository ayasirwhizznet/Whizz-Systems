import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';

@Component({
  selector: 'app-firmware-software-development',
  standalone: true,
  imports: [ServicesHeroComponent, ServicesIntroComponent, CommonModule, ServicesBenefitsComponent, ServicesContactExpertsComponent],
  templateUrl: './firmware-software-development.component.html',
})
export class FirmwareSoftwareDevelopmentComponent {
  coreServices: any[] = [
    { 
      imgUrl: 'assets/services/engg&design/firmware-software/core-1.png',
      name: 'Embedded Firmware Development',
      desc: ['Custom firmware for <b>MCUs, SoCs, and FPGAs</b>','<b>Bare-metal & RTOS-based</b> firmware development','Low-power firmware optimization for IoT devices'],
    },
    {
      imgUrl:
        'assets/services/engg&design/firmware-software/core-2.png',
      name: 'Device Driver & Kernel Development',
      desc: ['Development across <b>Linux (Debian, PetaLinux), Windows, Fedora</b>','Driver development for custom hardware peripherals'],
    },
    {
      imgUrl:
        'assets/services/engg&design/firmware-software/core-3.png',
      name: 'Hardware-Software Integration',
      desc: ['Enabling seamless <b>communication between embedded systems & external interfaces</b>','<b>SPI, I2C, UART, USB, Ethernet</b> protocol support'],
    },
    {
      imgUrl:
        'assets/services/engg&design/firmware-software/core-4.png',
      name: 'Wireless & IoT Connectivity',
      desc: ['Embedded solutions for <b>BLE, Zigbee, LoRaWAN</b>','Cloud integration with <b>AWS, Google Cloud, Azure IoT</b>'],
    },
    {
      imgUrl:
        'assets/services/engg&design/firmware-software/core-5.png',
      name: 'User Interface & Application Software',
      desc: ['UI development for <b>device control & monitoring</b>','Embedded Linux & cross-platform networking applications'],
    },
    {
      imgUrl:
        'assets/services/engg&design/firmware-software/core-6.png',
      name: 'Microcontroller & Processor Expertise',
      desc: ['Development on <b>STM32, Raspberry Pi, Arduino, Silicon Labs, NXP</b>','Performance optimization for <b>AI, industrial, and consumer electronics</b>'],
    },
  ];

  benefits: any = [
    {
      imgUrl: 'assets/icons/expert-badge.svg',
      name: 'Hardware & Software Expertise',
      desc: 'Unlike traditional firmware developers, we design and manufacture the hardware itself, ensuring deeper integration and reliability.',
    },
    {
      imgUrl: 'assets/icons/performance.svg',
      name: 'Seamless System Optimization',
      desc: 'We fine-tune firmware to maximize performance, power efficiency, and communication between electronic components.',
    },
    {
      imgUrl: 'assets/icons/support.svg',
      name: 'End-to-End Manufacturing Support',
      desc: 'From <a href="https://www.whizzsystems.com/services/npi" class="text-teal">prototyping to production</a>, we deliver fully integrated electronic systems.',
    },
    {
      imgUrl: 'assets/icons/industry.svg',
      name: 'Cross-Industry Experience',
      desc: 'Supporting AI, automotive, industrial, medical, IoT, and consumer electronics.',
    },
  ];
}
