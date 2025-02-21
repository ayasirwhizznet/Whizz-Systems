import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  experience = [
    {
      quantity: '10',
      sign: '+',
      title: 'industries served',
      desc: 'Automotive, medical, aerospace, consumer electronics, and more',
    },
    {
      quantity: '10K',
      sign: '+',
      title: 'projects completed',
      desc: 'Trusted globally for delivering complex solutions',
    },
    {
      quantity: '140',
      sign: '+',
      title: 'experts',
      desc: `A skilled team driving innovation and excellence`,
    },
    {
      quantity: '450',
      sign: '+',
      title: 'customers worldwide',
      desc: 'Supporting a diverse client base of industry leaders',
    },
  ];

  certifications = [
    { imgUrl: 'assets/about/itar.png', name: 'ITAR' },
    { imgUrl: 'assets/about/9001.png', name: 'ISO 9001: 2015 RevD' },
    { imgUrl: 'assets/about/13485.png', name: 'ISO 13485:2016' },
    { imgUrl: 'assets/about/27001.png', name: 'ISO-27001' },
    { imgUrl: 'assets/about/14001.png', name: 'ISO-14001' },
  ];

  concisely = [
    {
      imgUrl: 'assets/about/one-roof.png',
      title: 'Everything under one roof',
      desc: 'Feasibility studies, design, prototyping, manufacturing, and compliance.',
    },
    {
      imgUrl: 'assets/about/flexible.png',
      title: 'Flexible & scalable',
      desc: 'Whether you need a partner for the entire journey or just one part, we are adaptable.',
    },
    {
      imgUrl: 'assets/about/global.png',
      title: 'Global teams',
      desc: 'Our worldwide teams work in unison to accelerate execution with 24/7 collaboration.',
    },
    {
      imgUrl: 'assets/about/seamless.png',
      title: 'Seamless process',
      desc: 'Streamlined processes across design, testing, manufacturing, and post-delivery support.',
    },
  ];

  collaborations = [
    'assets/about/altera.png',
    'assets/about/amd.png',
    'assets/about/nvidia.png',
    'assets/about/amazon.png',
    'assets/about/microsoft.png',
    'assets/about/keysight.png',
    'assets/about/google.png',
    'assets/about/advantest.png',
    'assets/about/paypal.png',
    'assets/about/broadcom.png',
  ];

  passionate = [
    {
      imgUrl: 'assets/about/manny-karim.png',
      name: 'Manny Karim',
      designation: 'CEO',
      desc: 'Manny’s expertise in operations, finance, and manufacturing has been instrumental in Whizz Systems’ success. Starting his career at Pentagon Systems in 1989, Manny co-founded Whizz Systems and developed a robust team and processes ensuring maximum efficiency without compromising quality. He oversees 4 state-of-the-art assembly lines in Santa Clara and 2 facilities in Malaysia.',
    },
    {
      imgUrl: 'assets/about/muhammad-irfan.png',
      name: 'Muhammad Irfan',
      designation: 'President',
      desc: `With a background in product development and manufacturing services, Muhammad co-founded Whizz Systems in 1999. His leadership has driven Whizz Systems' global presence across 3 continents, serving industries like computing, networking, medical, and defense.`,
    },
  ];

  santaClara = [
    '35,000 Square Foot Facility',
    '95 Employees',
    'SPI, FP, AOI, X-RAY',
    '4 Juki SMT Lines',
    'QMS, ITAR',
  ];

  malaysia = [
    '80,000 Square Foot Facility',
    '100 Employees',
    'SPI, FP, AOI, X-RAY',
    '4 Juki SMT Lines',
    'QMS',
  ];
  services = [
    '',
    'Product Development',
    'Prototyping',
    'NPI/Pilot',
    'Production',
    'Testing',
    'Services & Repair',
  ];

  santaClaraServices = ['Santa Clara', '', '', '', '', '', ''];

  malaysiaServices = ['Malaysia', '', '', '', '', '', ''];
}
