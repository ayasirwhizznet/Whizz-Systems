import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimatedButton } from '../animated-button/animated-button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AnimatedButton, CommonModule, RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  privacyTerms: any[] = [
    { label: 'Privacy', link: '/' },
    { label: 'Terms', link: '/' },
    { label: 'Settings', link: '/' },
  ];

  services: any[] = [
    { label: 'Engineering & Design', link: '/services' },
    { label: 'NPI', link: '/services/npi' },
    {
      label: 'Advanced Manufacturing',
      link: '/services/advanced-manufacturing',
    },
    { label: 'Lab Testing Solutions', link: '/services/lab-testing-solutions' },
    {
      label: 'Supply Chain Management',
      link: '/services/supply-chain-management',
    },
    { label: 'Sustaining Engineering & Obsolescence Management', link: '/services/sustainable_engineering' },
  ];

  blog: any[] = [
    { label: 'White Papers', link: '/news-&-insights' },
    { label: 'Case studies', link: '/news-&-insights' },
    { label: 'News', link: '/news-&-insights' },
    { label: 'FAQ', link: '/news-&-insights' },
  ];

  socailMedia: any[] = [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/company/whizz-systems/?viewAsMember=true',
    },
    {
      label: 'Youtube',
      link: 'https://www.youtube.com/@WhizzSystemsCA',
    },
  ];

  contacts: any[] = [
    { label: 'Direct: 408-980-0400', link: 'tel:408-980-0400' },
    { label: 'Sales:408-409-6801', link: 'tel:408-409-6801' },
    { label: 'sales@whizzsystems.com', link: 'mailto:sales@whizzsystems.com' },
  ];
}
