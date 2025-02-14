import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CbuttonComponent } from '../cbutton/cbutton.component';

@Component({
  selector: 'app-ideas',
  standalone: true,
  imports: [NgFor, CbuttonComponent],
  templateUrl: './ideas.component.html',
})
export class IdeasComponent {
  achievemnets = [
    { quantity: '25', desc: 'Years of building growth' },
    { quantity: '10', desc: 'Industries served' },
    { quantity: '10K', desc: 'Projects completed' },
  ];

  certifications = [
    'assets/ideas/certification1.svg',
    'assets/ideas/certification2.svg',
    'assets/ideas/certification3.svg',
    'assets/ideas/certification4.svg',
    'assets/ideas/certification5.svg',
  ];
}
