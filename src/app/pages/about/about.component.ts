import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
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

  i = 0;

  certifications = [
    { imgUrl: 'assets/about/itar.png', name: 'ITAR', alt: 'ITAR Certification' },
    { imgUrl: 'assets/about/9001.png', name: 'ISO 9001: 2015 RevD', alt: 'ISO 9001: 2015 RevD Certification' },
    { imgUrl: 'assets/about/13485.png', name: 'ISO 13485:2016', alt: 'ISO 13485:2016 Certification' },
    { imgUrl: 'assets/about/27001.png', name: 'ISO-27001', alt: 'ISO-27001 Certification' },
    { imgUrl: 'assets/about/14001.png', name: 'ISO-14001', alt: 'ISO-14001 Certification' },
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
    { imgUrl: 'assets/about/altera.png', alt: 'Altera Logo' },
    { imgUrl: 'assets/about/amd.png', alt: 'AMD Logo' },
    { imgUrl: 'assets/about/nvidia.png', alt: 'NVIDIA Logo' },
    { imgUrl: 'assets/about/amazon.png', alt: 'Amazon Logo' },
    { imgUrl: 'assets/about/microsoft.png', alt: 'Microsoft Logo' },
    { imgUrl: 'assets/about/keysight.png', alt: 'Keysight Logo' },
    { imgUrl: 'assets/about/google.png', alt: 'Google Logo' },
    { imgUrl: 'assets/about/advantest.png', alt: 'Advantest Logo' },
    { imgUrl: 'assets/about/paypal.png', alt: 'PayPal Logo' },
    { imgUrl: 'assets/about/broadcom.png', alt: 'Broadcom Logo' },
  ];
  

  passionate = [
    {
      imgUrl: 'assets/about/mannyKarim.png',
      name: 'Manny Karim',
      designation: 'CEO',
      desc: 'Manny’s expertise in operations, finance, and manufacturing has been instrumental in Whizz Systems’ success. Starting his career at Pentagon Systems in 1989, Manny co-founded Whizz Systems and developed a robust team and processes ensuring maximum efficiency without compromising quality. He oversees 4 state-of-the-art assembly lines in Santa Clara and 2 facilities in Malaysia.',
    },
    {
      imgUrl: 'assets/about/muhammadIrfan.png',
      name: '<a href="https://www.linkedin.com/in/muhammad-irfan-6616621" target="_blank">Muhammad Irfan</a>',
      designation: 'President',
      desc: `With a background in product development and manufacturing services, Muhammad co-founded Whizz Systems in 1999. His leadership has driven Whizz Systems' global presence across 3 continents, serving industries like computing, networking, medical, and defense.`,
    },
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
