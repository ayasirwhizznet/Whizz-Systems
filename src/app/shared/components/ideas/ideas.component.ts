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
    'assets/home/ideas/14001.svg',
    'assets/home/ideas/13485.svg',
    'assets/home/ideas/9001.svg',
    'assets/home/ideas/27001.svg',
    'assets/home/ideas/itar.svg',
  ];
}
