import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Whizz Systems | EMS, Design, Engineering & Development Experts',
    data: {
      description: `Silicon Valley EMS partner since 1999. Hardware design, PCB
  layout, FPGA, NPI, advanced manufacturing and lab testing under one roof.`,
      og: {
        type: 'website',
        site_name: 'Whizz Systems',
        title: 'Electronics Design & Manufacturing Services | Whizz Systems',
        description:
          'Silicon Valley EMS partner since 1999. Hardware design, PCB layout, FPGA, NPI, advanced manufacturing and lab testing under one roof.',
        url: 'https://www.whizzsystems.com/',
        image: 'https://www.whizzsystems.com/assets/og/home-1200x630.jpg',
        image_width: '1200',
        image_height: '630',
        image_alt:
          'Whizz Systems engineering and manufacturing facility in Santa Clara, California',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Electronics Design & Manufacturing Services | Whizz Systems',
        description:
          'Silicon Valley EMS partner since 1999. Hardware design, PCB layout, FPGA, NPI, advanced manufacturing and lab testing under one roof.',
        image: 'https://www.whizzsystems.com/assets/og/home-1200x630.jpg',
        image_alt:
          'Whizz Systems engineering and manufacturing facility in Santa Clara, California',
      },
      schema: [
        {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://www.whizzsystems.com/#organization',
              name: 'Whizz Systems',
              legalName: 'Whizz Systems, Inc.',
              url: 'https://www.whizzsystems.com/',
              logo: {
                '@type': 'ImageObject',
                '@id': 'https://www.whizzsystems.com/#logo',
                url: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
                width: 220,
                height: 88,
                caption: 'Whizz Systems',
              },
              image: { '@id': 'https://www.whizzsystems.com/#logo' },
              description: `Whizz Systems is an end-to-end electronics design and manufacturing
        partner providing hardware engineering, PCB design, NPI, advanced manufacturing, lab testing
        and supply chain management.`,
              foundingDate: '1999',
              telephone: '+1-408-980-0400',
              email: 'sales@whizzsystems.com',
              address: [
                {
                  '@type': 'PostalAddress',
                  streetAddress: '3240 Scott Blvd',
                  addressLocality: 'Santa Clara',
                  addressRegion: 'CA',
                  postalCode: '95054',
                  addressCountry: 'US',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress:
                    'Lot 8, SMI Park Phase 2, Jalan Hi-Tech 4 Sambungan, Kulim Hi-Tech Park',
                  addressLocality: 'Kulim',
                  addressRegion: 'Kedah',
                  postalCode: '09000',
                  addressCountry: 'MY',
                },
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'sales',
                  telephone: '+1-408-980-0400',
                  email: 'sales@whizzsystems.com',
                  areaServed: 'Worldwide',
                  availableLanguage: ['English'],
                },
              ],
              sameAs: [
                'https://www.linkedin.com/company/whizz-systems/',
                'https://www.youtube.com/@WhizzSystemsCA',
              ],
            },
            {
              '@type': 'WebSite',
              '@id': 'https://www.whizzsystems.com/#website',
              url: 'https://www.whizzsystems.com/',
              name: 'Whizz Systems',
              inLanguage: 'en-US',
              publisher: {
                '@id': 'https://www.whizzsystems.com/#organization',
              },
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': 'https://www.whizzsystems.com/#webpage',
              url: 'https://www.whizzsystems.com/',
              name: 'Electronics Design & Manufacturing Services | Whizz Systems',
              description: `Silicon Valley EMS partner since 1999. Hardware design, PCB layout,
        FPGA, NPI, advanced manufacturing and lab testing under one roof.`,
              inLanguage: 'en-US',
              isPartOf: {
                '@id': 'https://www.whizzsystems.com/#website',
              },
              publisher: {
                '@id': 'https://www.whizzsystems.com/#organization',
              },
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: 'https://www.whizzsystems.com/assets/og/home-1200x630.jpg',
              },
            },
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://www.whizzsystems.com/#breadcrumb',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.whizzsystems.com/',
                },
              ],
            },
            {
              '@type': 'Service',
              '@id': 'https://www.whizzsystems.com/#service',
              name: 'Electronics Design & Manufacturing Services for Advanced Hardware',
              serviceType: 'Home',
              description: `Silicon Valley EMS partner since 1999. Hardware design, PCB layout,
        FPGA, NPI, advanced manufacturing and lab testing under one roof.`,
              provider: {
                '@id': 'https://www.whizzsystems.com/#organization',
              },
              areaServed: {
                '@type': 'Place',
                name: 'Worldwide',
              },
              audience: {
                '@type': 'BusinessAudience',
                audienceType: 'Hardware and electronics manufacturers',
              },
            },
          ],
        },
      ],
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Whizz Systems | Silicon Valley EMS Since 1999',
    data: {
      description:
        'End-to-end electronics design and manufacturing partner since 1999. In-house engineering, NPI, manufacturing and supply chain across two facilities.',
      keywords:
        'electronics design and manufacturing, end-to-end electronics partner, PCB design, new product introduction, NPI, advanced manufacturing, lab testing solutions, sustainable engineering, supply chain management, Whizz Systems, Silicon Valley electronics',
      og: {
        type: 'website',
        site_name: 'Whizz Systems',
        title: 'About Whizz Systems | Silicon Valley EMS Since 1999',
        description:
          'End-to-end electronics design and manufacturing partner since 1999. In-house engineering, NPI, manufacturing and supply chain across two facilities.',
        url: 'https://www.whizzsystems.com/about',
        image: 'https://www.whizzsystems.com/assets/og/about-1200x630.jpg',
        image_width: '1200',
        image_height: '630',
        image_alt: 'Whizz Systems leadership and engineering team',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'About Whizz Systems | Silicon Valley EMS Since 1999',
        description:
          'End-to-end electronics design and manufacturing partner since 1999. In-house engineering, NPI, manufacturing and supply chain across two facilities.',
        image: 'https://www.whizzsystems.com/assets/og/about-1200x630.jpg',
        image_alt: 'Whizz Systems leadership and engineering team',
      },
      schema: [
        {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AboutPage',
              '@id': 'https://www.whizzsystems.com/about#webpage',
              url: 'https://www.whizzsystems.com/about',
              name: 'About Whizz Systems | Silicon Valley EMS Since 1999',
              description: `"End-to-end electronics design and manufacturing partner since 1999.
        In-house engineering, NPI, manufacturing and supply chain across two facilities.`,
              inLanguage: 'en-US',
              isPartOf: {
                '@id': 'https://www.whizzsystems.com/#website',
              },
              publisher: {
                '@id': 'https://www.whizzsystems.com/#organization',
              },
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: 'https://www.whizzsystems.com/assets/og/about-1200x630.jpg',
              },
            },
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://www.whizzsystems.com/about#breadcrumb',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.whizzsystems.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'About',
                  item: 'https://www.whizzsystems.com/about',
                },
              ],
            },
            {
              '@type': 'Person',
              '@id': 'https://www.whizzsystems.com/about#manny',
              name: 'Manny Karim',
              jobTitle: 'Chief Executive Officer',
              worksFor: {
                '@type': 'Organization',
                '@id': 'https://www.whizzsystems.com/#organization',
              },
            },
            {
              '@type': 'Person',
              '@id': 'https://www.whizzsystems.com/about#muhammad',
              name: 'Muhammad Irfan',
              jobTitle: 'President',
              worksFor: {
                '@type': 'Organization',
                '@id': 'https://www.whizzsystems.com/#organization',
              },
            },
            {
              '@type': 'FAQPage',
              '@id': 'https://www.whizzsystems.com/about#faq',
              url: 'https://www.whizzsystems.com/about',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What does Whizz Systems specialise in?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Whizz Systems specialises in end-to-end electronic product development,
              combining engineering, manufacturing, validation and supply chain expertise. We support every
              stage of the product lifecycle, from concept through production and long-term sustaining
              engineering.`,
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What industries does Whizz Systems serve?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `We work with organisations developing advanced technologies across AI
              compute, networking, telecommunications, semiconductors, aerospace, defense, medical devices
              and industrial electronics.`,
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What makes Whizz Systems different from a traditional EMS provider?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Traditional EMS providers focus primarily on production. Whizz Systems
              combines engineering design, simulation, validation, manufacturing, testing and supply chain
              management in a single organisation, which allows problems to be identified earlier and
              reduces risk in the transition from design to volume.`,
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Where are Whizz Systems facilities located?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Whizz Systems is headquartered at 3240 Scott Blvd, Santa Clara,
              California, with a company-owned manufacturing facility at Kulim Hi-Tech Park, Kedah,
              Malaysia.`,
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long has Whizz Systems been in business?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Whizz Systems was founded in 1999 and has been designing and
              manufacturing advanced electronic hardware for over 25 years.`,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
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
    path: 'insights',
    loadChildren: () =>
      import('./pages/news-blogs/routes').then((m) => m.routes),
  },
  {
    path: 'case-studies',
    loadChildren: () =>
      import('./pages/case-studies/routes').then((m) => m.routes),
  },
  {
    path: 'careers/manufacturing-manager',
    loadComponent: () =>
      import('./pages/careers/careers.component').then(
        (m) => m.CareersComponent,
      ),
    title: 'Careers',
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
