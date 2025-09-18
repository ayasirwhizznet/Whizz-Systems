import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./services.component').then((m) => m.ServicesComponent),
        title: 'Services',
      },
      {
        path: 'engineering-design',
        loadChildren: () =>
          import('./engineering-design/routes').then((m) => m.routes),
      },
      {
        path: 'npi',
        loadComponent: () =>
          import('./npi/npi.component').then((m) => m.NpiComponent),
        title:
          'NPI Services in Electronics | Prototyping, Testing & Manufacturing',
        data: {
          description: `Whizz Systems offers NPI services in electronics, including prototyping, testing, design, compliance, and manufacturing solutions for complex hardware.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'NPI Services in Electronics',
              provider: {
                '@type': 'Organization',
                name: 'Whizz Systems',
                url: 'https://www.whizzsystems.com/',
                logo: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
                sameAs: [
                  'https://www.linkedin.com/company/whizz-systems/',
                  'https://www.youtube.com/@WhizzSystemsCA',
                ],
              },
              url: 'https://www.whizzsystems.com/services/npi',
              description:
                'Whizz Systems provides NPI services in electronics including system-level architecture, prototyping, compliance, testing, and manufacturing solutions for next-generation hardware.',
              areaServed: { '@type': 'Place', name: 'Worldwide' },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'NPI Services Catalog',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'System Level Architecture NPI Services',
                      description:
                        'Building strong foundations for next-generation hardware with system-level architecture design.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'NPI Prototyping Solutions',
                      description:
                        'Rapid prototyping and refinement for electronic product development.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'NPI Testing Services',
                      description:
                        'Comprehensive testing for quality, performance, and reliability.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'NPI Compliance',
                      description:
                        'Ensuring adherence to industry standards and regulations for electronics manufacturing.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'NPI Manufacturing Service',
                      description:
                        'Advanced assembly and manufacturing solutions for scalable electronics production.',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        path: 'advanced-manufacturing',
        loadComponent: () =>
          import('./advanced-manufacturing/adv-manufacturing.component').then(
            (m) => m.AdvManufacturingComponent
          ),
        title:
          'Advanced Electronic Manufacturing Services | Prototyping to Box Build | Whizz Systems',
        data: {
          description: `Whizz Systems offers integrated electronic manufacturing services, including process
engineering, prototyping, box build assembly, and environmental testing for complex
products.`,
        },
      },
      {
        path: 'lab-testing-solutions',
        loadComponent: () =>
          import(
            './lab-testing-solutions/lab-testing-solutions.component'
          ).then((m) => m.LabTestingSolutionsComponent),
        title:
          'Electronics Lab Testing Solutions | Component & Manufacturing Testing',
        data: {
          description:
            'Whizz Systems provides advanced electronics lab testing solutions for components and manufacturing. Our testing services ensure quality, reliability, and compliance for complex electronic systems.',
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Electronics Lab Testing Solutions',
              provider: {
                '@type': 'Organization',
                name: 'Whizz Systems',
                url: 'https://www.whizzsystems.com/',
                logo: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
                sameAs: [
                  'https://www.linkedin.com/company/whizz-systems/',
                  'https://www.youtube.com/@WhizzSystemsCA',
                ],
              },
              url: 'https://www.whizzsystems.com/services/lab-testing-solutions',
              description:
                'Whizz Systems offers electronics lab testing services including electronic component testing, electronics manufacturing testing solutions, and compliance verification for high-reliability products.',
              areaServed: {
                '@type': 'Place',
                name: 'Worldwide',
              },
              offers: {
                '@type': 'Offer',
                name: 'Electronics Lab Testing Solutions',
                description:
                  'Advanced electronics lab testing, component testing, and manufacturing validation services to ensure quality, compliance, and reliability.',
                url: 'https://www.whizzsystems.com/services/lab-testing-solutions',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
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
                  name: 'Services',
                  item: 'https://www.whizzsystems.com/services/',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Lab Testing Solutions',
                  item: 'https://www.whizzsystems.com/services/lab-testing-solutions',
                },
              ],
            },
          ],
        },
      },
      {
        path: 'supply-chain-management',
        loadComponent: () =>
          import(
            './supply-chain-management/supply-chain-management.component'
          ).then((m) => m.SupplyChainManagementComponent),
        title:
          'Global Electronics Supply Chain Management Services | Whizz Systems',
        data: {
          description: `Accelerate your electronics product development with Whizz Systems’ proactive
sourcing, inventory control, and global component procurement. Integrated with design,
our SCM solutions ensure speed, reliability, and reduced risk`,
        },
      },
      {
        path: 'sustainable_engineering',
        loadComponent: () =>
          import(
            './sustainable-engineering/sustainable-engineering.component'
          ).then((m) => m.SustainableEngineeringComponent),
        title:
          'Sustaining Engineering & Obsolescence Management | Whizz Systems',
        data: {
          description:
            'Extend product lifecycles with Whizz Systems Sustaining Engineering & Obsolescence Management. We mitigate risks, manage EOL components, and optimize AVL strategies for uninterrupted production.',
        },
      },
    ],
  },
];
