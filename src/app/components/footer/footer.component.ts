import { Component } from '@angular/core';
import { Cbutton1Component } from '../cbutton1/cbutton1.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Cbutton1Component, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  privacyTerms:any[] = [
    {label: 'Privacy', link:''},
    {label: 'Terms', link:''},
    {label: 'Settings', link:''},
  ];

  services:any[] = [
    {label: 'Engineering & Design', link: '/404'},
    {label: 'NPI', link:'/404'},
    {label: 'Advanced Manufacturing', link: '/404'},
    {label: 'Lab Testing Solutions', link: '/404'},
    {label: 'Supply Chain Management', link: '/404'},
    {label: 'Sustaining Engineering & Obsolescence Management', link: '/404'},
  ];

  blog:any[] = [
    {label: 'White Papers', link: ''},
    {label: 'Case studies', link: ''},
    {label: 'News', link: ''},
    {label: 'FAQ', link: ''},
  ];

  socailMedia:any[] = [
    {label: 'Linkedin', link: '', icon: 'fa fa-linkedin-square'},
    {label: 'Youtube', link: '', icon: 'fa fa-youtube'}
  ];

  contacts:any[] = [
    {label: 'Direct: 408-980-0400', link: 'tel:408-980-0400'},
    {label: 'Sales:408-409-6801', link: 'tel:408-409-6801'},
    {label: 'sales@whizzsystems.com', link: 'mailto:sales@whizzsystems.com'},
  ];
}
