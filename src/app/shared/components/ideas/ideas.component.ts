import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-ideas',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './ideas.component.html',
})
export class IdeasComponent {
  achievemnets = [
    { quantity: '25', desc: 'Years of building growth' },
    { quantity: '10', desc: 'Industries served' },
    { quantity: '10K', desc: 'Projects completed' },
  ];

  certifications = [
    { imgUrl: 'assets/home/ideas/14001.svg', alt: 'ISO 14001 Environmental Management Certification' },
    { imgUrl: 'assets/home/ideas/13485.svg', alt: 'ISO 13485:2016 Medical Device Quality Management Certification' },
    { imgUrl: 'assets/home/ideas/9001.svg', alt: 'ISO 9001:2015 Quality Management System Certification' },
    { imgUrl: 'assets/home/ideas/27001.svg', alt: 'ISO 27001 Information Security Management Certification' },
    { imgUrl: 'assets/home/ideas/itar.svg', alt: 'ITAR Registered — International Traffic in Arms Regulations Compliance' },
  ];
}
