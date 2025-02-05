import { Component } from '@angular/core';
import { Cbutton1Component } from '../cbutton1/cbutton1.component';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Cbutton1Component, CommonModule,RouterLink],
  templateUrl: './footer.component.html'
})

export class FooterComponent {
  privacyTerms:any[] = [
    {label: 'Privacy', link:'/404'},
    {label: 'Terms', link:'/404'},
    {label: 'Settings', link:'/404'},
  ];

  services:any[] = [
    {label: 'Engineering & Design', link: '/404'},
    {label: 'NPI', link:'/services/npi'},
    {label: 'Advanced Manufacturing', link: '/services/advanced_manufacturing'},
    {label: 'Lab Testing Solutions', link: '/services/lab_testing_solutions'},
    {label: 'Supply Chain Management', link: '/services/supply_chain_management'},
    {label: 'Sustaining Engineering & Obsolescence Management', link: '/404'},
  ];

  blog:any[] = [
    {label: 'White Papers', link: ''},
    {label: 'Case studies', link: ''},
    {label: 'News', link: ''},
    {label: 'FAQ', link: ''},
  ];

  socailMedia:any[] = [
    {label: 'LinkedIn', link: '', icon: 'fa-brands fa-lg 3xl:fa-xl fa-linkedin'},
    {label: 'Youtube', link: '', icon: 'fa-brands fa-lg 3xl:fa-xl fa-youtube'}
  ];

  contacts:any[] = [
    {label: 'Direct: 408-980-0400', link: 'tel:408-980-0400'},
    {label: 'Sales:408-409-6801', link: 'tel:408-409-6801'},
    {label: 'sales@whizzsystems.com', link: 'mailto:sales@whizzsystems.com'},
  ];
}
