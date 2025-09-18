import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Whizz Systems | EMS, Design, Engineering & Development Experts',
    data: {
      description: `Whizz Systems provides EMS, advanced electronic design, engineering, and product development services with 25+ years of expertise in hi-tech industries.`,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Whizz Systems',
          url: 'https://www.whizzsystems.com/',
          logo: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
          description:
            'Whizz Systems is a leading EMS and electronic product design company offering advanced design, engineering, development, and manufacturing services.',
          foundingDate: '1999',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Santa Clara, CA',
            addressLocality: 'Silicon Valley',
            addressRegion: 'CA',
            postalCode: '95054',
            addressCountry: 'USA',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-408-XXXXXXX',
            contactType: 'sales',
            areaServed: 'Worldwide',
          },
          sameAs: [
            'https://www.linkedin.com/company/whizz-systems/',
            'https://www.youtube.com/@WhizzSystemsCA',
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'EMS (Electronics Manufacturing Services)',
          provider: {
            '@type': 'Organization',
            name: 'Whizz Systems',
            url: 'https://www.whizzsystems.com/',
          },
          description:
            'Full-service EMS provider delivering advanced electronics design, development, and manufacturing solutions.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Electronic Product Design',
          provider: {
            '@type': 'Organization',
            name: 'Whizz Systems',
            url: 'https://www.whizzsystems.com/',
          },
          description:
            'Innovative electronic product design and engineering services for hi-tech industries.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Electronic Product Development',
          provider: {
            '@type': 'Organization',
            name: 'Whizz Systems',
            url: 'https://www.whizzsystems.com/',
          },
          description:
            'End-to-end electronic product development services from concept to market.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Electronic Manufacturing',
          provider: {
            '@type': 'Organization',
            name: 'Whizz Systems',
            url: 'https://www.whizzsystems.com/',
          },
          description:
            'High-quality electronics manufacturing services with global supply chain support.',
        },
      ],
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us',
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/routes').then((m) => m.routes),
  },
  {
    path: 'featured-products',
    loadChildren: () =>
      import('./pages/featured-products/routes').then((m) => m.routes),
  },
  {
    path: 'news-&-insights',
    loadChildren: () =>
      import('./pages/news-blogs/routes').then((m) => m.routes),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/error/404/404.component').then((m) => m.Page404Component),
    title: '404 Not Found',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
