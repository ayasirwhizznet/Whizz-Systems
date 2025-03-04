import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsCardComponent } from '@components/news-card/news-card.component';

@Component({
  selector: 'app-invensify',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, AnimatedButton, BlogTagComponent, NewsCardComponent],
  templateUrl: './invensify.component.html'
})
export class InvensifyComponent {
  links = [
    { img: 'assets/news/whizzicon.svg', imgUrl: '' },
    { img: 'assets/news/whizz.svg', imgUrl: '' },
    { img: 'assets/news/linkedin.svg', imgUrl: '' },
    { img: 'assets/news/youtube.svg', imgUrl: '' },
  ];

  tags = ['Medical Devices','PCB Layout','Hardware Design'];

  overviews = ['<b>Precise Temperature Control:</b> Maintains optimal conditions for pharmaceutical integrity.', '<b>Energy Efficiency:</b> Consumes less than 0.24 kWh per day.', '<b>Robust Construction:</b> A 12-liter payload capacity in a single, durable enclosure.', '<b>Advanced Connectivity:</b> Integrated LTE, GPS, and Bluetooth for real-time monitoring.', '<b>Rapid Cooling & Charging:</b> Incorporates a high-performance liquid cooling system and phase change material (PCM) to extend thermal stability.'];

  deliveries:any[] = [
    {
      title: 'Hardware Design Engineering',
      desc: 'We developed an intelligent charging circuit that dynamically balances external power with battery use. A feedback-controlled electronic circuit regulated the peltiers and cooling system with sensor inputs, while integrating GPS and cellular connectivity ensured real-time tracking and secure data transmission—a vital feature for medical logistics'
    },
    {
      title: 'PCB Design & Layout',
      desc: 'Insuridge required a compact, high-density PCB to house multiple functions in a limited space. Our modular design integrated analog, digital, power, and RF circuits with advanced layout and shielding techniques to minimize interference among critical modules such as GPS, LTE, and BLE.'
    },
    {
      title: 'Mechanical Design',
      desc: 'Fitting all essential components within the Insuridge 12L’s form factor was a significant challenge. By leveraging advanced 3D CAD tools and iterative design reviews, we ensured optimal clearances, precise component placement, and seamless assembly—all while maintaining the device’s functionality and aesthetic appeal.'
    },
    {
      title: 'Structural Analysis',
      desc: 'Using Finite Element Analysis (FEA), we reinforced the plastic housing to balance weight constraints with the need for structural integrity. Reinforcement ribs and optimized design features ensured the enclosure could withstand shock and vibration without compromising the device’s overall performance.'
    },
    {
      title: 'Liquid Cooling System & Thermal Management',
      desc: 'The liquid cooling system, featuring a cooling block with internal fins and flow channels, was meticulously designed to maximize cooling efficiency. Extensive lab tests and thermal simulations were conducted to refine the PCM chamber and verify that the device maintained a consistent thermal profile, ensuring reliability in critical medical applications.'
    },
    {
      title: 'Component Engineering & Supply Chain Management',
      desc: 'Whizz Systems provided crucial support in component sourcing and supply chain management, developing an Approved Vendor List (AVL) to ensure the selection of high-quality, reliable parts. This proactive approach ensured continuity and quality across all phases of product development.'
    },
  ];

  cards: any[] = [
    {
      imageUrl: 'assets/news/blog.png',
      date: 'July 9, 2024',
      tags: ['Heatsink', 'Thermal Management'],
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/blog.png',
      date: 'July 9, 2024',
      tags: ['Heatsink', 'Thermal Management'],
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/blog.png',
      date: 'July 9, 2024',
      tags: ['Heatsink', 'Thermal Management'],
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    }
  ];
}
