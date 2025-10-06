import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'system-schematic-services',
        loadComponent: () =>
          import('./system-design-schematics/system-design.component').then(
            (m) => m.SystemDesignComponent
          ),
        title:
          'Schematic Design & Hardware Development Solutions | Whizz Systems',
        data: {
          description: `Whizz Systems provides professional hardware schematic design, PCB schematic design, and electrical schematic services. From concept to schematic design phase, we deliver reliable and scalable solutions.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Schematic Design Services',
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
              url: 'https://www.whizzsystems.com/services/engineering-design/system-schematic-services',
              description:
                'Whizz Systems offers schematic design services including hardware schematic design, PCB schematic design, electrical schematics, and schematic design phase services for complex electronic systems.',
              areaServed: {
                '@type': 'Place',
                name: 'Worldwide',
              },
              offers: {
                '@type': 'Offer',
                name: 'System Schematic Design Services',
                description:
                  'Professional hardware, electrical, and PCB schematic design services to ensure reliable, scalable, and efficient electronic product development.',
                url: 'https://www.whizzsystems.com/services/engineering-design/system-schematic-services',
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
                  name: 'Engineering & Design',
                  item: 'https://www.whizzsystems.com/services/engineering-design/',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'System Schematic Services',
                  item: 'https://www.whizzsystems.com/services/engineering-design/system-schematic-services',
                },
              ],
            },
          ],
        },
      },
      {
        path: 'fpga-design-services',
        loadComponent: () =>
          import('./fpga/fpga.component').then((m) => m.FpgaComponent),
        title: 'FPGA Design & Development Services | Whizz Systems',
        data: {
          description: `Whizz Systems offers FPGA design and development services including architecture, RTL coding, verification, system integration, and support for major FPGA families.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'FPGA Design and Development Services',
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
              url: 'https://www.whizzsystems.com/services/engineering-design/fpga-design-services',
              description:
                'Whizz Systems provides FPGA design and development services including architecture design, RTL coding, verification, system integration, IP connectivity, and support for major FPGA families.',
              areaServed: {
                '@type': 'Place',
                name: 'Worldwide',
              },
              offers: {
                '@type': 'Offer',
                name: 'FPGA Engineering Services',
                description:
                  'Comprehensive FPGA engineering services covering design, development, testing, and production.',
                url: 'https://www.whizzsystems.com/services/engineering-design/fpga-design-services',
              },
            },
          ],
        },
      },
      {
        path: 'pcb-layout',
        loadComponent: () =>
          import('./pcb-layout/pcb-layout.component').then(
            (m) => m.PcbLayoutComponent
          ),
        title: 'PCB Layout & Design Services | High-Density & HDI PCB Experts',
        data: {
          description: `Whizz Systems provides PCB layout and design services including high-density PCB layouts, HDI design, DfX PCB development, and advanced electronic product engineering.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'PCB Layout and Design Services',
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
              url: 'https://www.whizzsystems.com/services/engineering-design/pcb-layout-services',
              description:
                'Whizz Systems offers professional PCB layout and design services, including high-density PCB layouts, HDI PCB design, DfX optimization, and advanced PCB development solutions.',
              areaServed: {
                '@type': 'Place',
                name: 'Worldwide',
              },
              offers: {
                '@type': 'Offer',
                name: 'PCB Layout Services',
                description:
                  'High-density, HDI, and DfX-focused PCB layout and design services for complex electronic systems.',
                url: 'https://www.whizzsystems.com/services/engineering-design/pcb-layout-services',
              },
            },
          ],
        },
      },
      {
        path: '3d-modeling-mechanical-design',
        loadComponent: () =>
          import('./modeling/modeling.component').then(
            (m) => m.ModelingComponent
          ),
        title: 'Mechanical 3D Modeling & Design Services | Whizz Systems',
        data: {
          description: `Mechanical 3D modeling and design services, including 3D parts modeling, FEA, and 2D assembly drawings. Optimize performance, manufacturability, and reliability with end-to-end support.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Whizz Systems',
                  url: 'https://www.whizzsystems.com/',
                  logo: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
                  sameAs: [
                    'https://www.linkedin.com/company/whizz-systems/',
                    'https://www.youtube.com/@WhizzSystemsCA',
                  ],
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '3240 Scott Blvd',
                    addressLocality: 'Santa Clara',
                    addressRegion: 'CA',
                    postalCode: '95054',
                    addressCountry: 'US',
                  },
                },
                {
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
                      name: 'Engineering & Design',
                      item: 'https://www.whizzsystems.com/services/engineering-design/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: '3D Modeling & Mechanical Design',
                      item: 'https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  name: 'Mechanical 3D Modeling & Mechanical Design Services',
                  url: 'https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design',
                  description:
                    'Whizz Systems provides 3D mechanical modeling and design services, including electronics packaging, finite element analysis (FEA), and 2D assembly drawings for optimized performance and manufacturability.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Whizz Systems',
                    url: 'https://www.whizzsystems.com/',
                  },
                  serviceType: [
                    'Mechanical 3D Modeling Services',
                    'Mechanical 3D Parts Modeling Services',
                    '3D Mechanical Modeling Services',
                    'Mechanical 3D Design Services',
                    'Electronics Packaging Mechanical Design',
                    'Hardware 3D Modeling',
                    '2D Assembly Drawings',
                  ],
                  areaServed: {
                    '@type': 'Place',
                    name: 'Global',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        path: 'signal-integrity-simulation-services',
        loadComponent: () =>
          import('./signal-integrity/signal-integrity.component').then(
            (m) => m.SignalIntegrityComponent
          ),
        title:
          'Signal Integrity Simulation & Analysis Services | Whizz Systems',
        data: {
          description: `Whizz Systems provides advanced signal integrity analysis, simulation, and testing services. Our expert consultants ensure extreme performance, compliance, and reliability for high-speed electronic designs.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Signal Integrity Simulation and Analysis Services',
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
              url: 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services',
              description:
                'Whizz Systems delivers professional signal integrity analysis, simulation, verification, and testing services to ensure extreme performance and reliability in high-speed electronic systems.',
              areaServed: {
                '@type': 'Place',
                name: 'Worldwide',
              },
              offers: {
                '@type': 'Offer',
                name: 'Signal Integrity Simulation Services',
                description:
                  'Comprehensive signal integrity analysis, consulting, testing, and verification services for advanced hardware design.',
                url: 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services',
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
                  name: 'Engineering & Design',
                  item: 'https://www.whizzsystems.com/services/engineering-design/',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Signal Integrity Simulation Services',
                  item: 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services',
                },
              ],
            },
          ],
        },
      },

      {
        path: 'power-delivery-network-simulation',
        loadComponent: () =>
          import('./power-delivery/power-delivery.component').then(
            (m) => m.PowerDeliveryComponent
          ),
        title:
          'Power Delivery Network Simulation (PDN) Services | Whizz Systems',
        data: {
          description: `Advanced Power Delivery Network (PDN) simulations for reliable PCB performance. Ensure efficient, first-time-right designs with DC/AC power analysis and layout optimization.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Whizz Systems',
                  url: 'https://www.whizzsystems.com/',
                  logo: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
                  sameAs: [
                    'https://www.linkedin.com/company/whizz-systems/',
                    'https://www.youtube.com/@WhizzSystemsCA',
                  ],
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '3240 Scott Blvd',
                    addressLocality: 'Santa Clara',
                    addressRegion: 'CA',
                    postalCode: '95054',
                    addressCountry: 'US',
                  },
                },
                {
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
                      name: 'Engineering & Design',
                      item: 'https://www.whizzsystems.com/services/engineering-design/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Power Delivery Network Simulation',
                      item: 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  name: 'Power Delivery Network Simulation (PDN) Services',
                  url: 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation',
                  description:
                    'Whizz Systems provides advanced Power Delivery Network (PDN) simulations and power integrity analysis to ensure reliable PCB performance, covering DC/AC analysis and layout optimization.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Whizz Systems',
                    url: 'https://www.whizzsystems.com/',
                  },
                  serviceType: [
                    'Power Delivery Network Simulation',
                    'PDN Simulation Services',
                    'PCB Power Integrity Analysis',
                    'DC Power Analysis',
                    'AC Power Analysis',
                    'End-to-End Layout Optimization',
                  ],
                  areaServed: {
                    '@type': 'Place',
                    name: 'Global',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        path: 'thermal-management-solutions',
        loadComponent: () =>
          import('./thermal-management/thermal-management.component').then(
            (m) => m.ThermalManagementComponent
          ),
        title: 'Heatsink and Thermal Management Solutions | Whizz Systems',
        data: {
          description: `Thermal management solutions including heatsink design, CFD analysis, and cooling systems for reliable electronics performance. Optimal regulation with thermal design and manufacturing services.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Whizz Systems',
                  url: 'https://www.whizzsystems.com/',
                  logo: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
                  sameAs: [
                    'https://www.linkedin.com/company/whizz-systems/',
                    'https://www.youtube.com/@WhizzSystemsCA',
                  ],
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '3240 Scott Blvd',
                    addressLocality: 'Santa Clara',
                    addressRegion: 'CA',
                    postalCode: '95054',
                    addressCountry: 'US',
                  },
                },
                {
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
                      name: 'Engineering & Design',
                      item: 'https://www.whizzsystems.com/services/engineering-design/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Thermal Management Solutions',
                      item: 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  name: 'Thermal Management Solutions for Electronics',
                  url: 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions',
                  description:
                    'Whizz Systems provides advanced thermal management solutions including heatsink design, thermal CFD analysis, cooling systems, and thermal design manufacturing to ensure optimal electronic equipment performance.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Whizz Systems',
                    url: 'https://www.whizzsystems.com/',
                  },
                  serviceType: [
                    'Thermal Management Solutions',
                    'Thermal Design Services',
                    'Heatsink Thermal Management',
                    'CFD Thermal Analysis',
                    'Custom Thermal Design',
                    'Electronics Cooling Systems',
                  ],
                  areaServed: {
                    '@type': 'Place',
                    name: 'Global',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        path: 'firmware-software-development',
        loadComponent: () =>
          import(
            './firmware-software-development/firmware-software-development.component'
          ).then((m) => m.FirmwareSoftwareDevelopmentComponent),
        title: 'Firmware & Software Development Services | Whizz Systems',
        data: {
          description: `Whizz Systems provides firmware and software development services, including bare-metal firmware, embedded systems, device drivers, IoT connectivity, and software-firmware integration. Trusted partner for end-to-end product development.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Whizz Systems',
                  url: 'https://www.whizzsystems.com/',
                  logo: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
                  sameAs: [
                    'https://www.linkedin.com/company/whizz-systems/',
                    'https://www.youtube.com/@WhizzSystemsCA',
                  ],
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '3240 Scott Blvd',
                    addressLocality: 'Santa Clara',
                    addressRegion: 'CA',
                    postalCode: '95054',
                    addressCountry: 'US',
                  },
                },
                {
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
                      name: 'Engineering & Design',
                      item: 'https://www.whizzsystems.com/services/engineering-design/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Firmware & Software Development',
                      item: 'https://www.whizzsystems.com/services/engineering-design/firmware-software-development',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  name: 'Firmware & Embedded Software Development Services',
                  url: 'https://www.whizzsystems.com/services/engineering-design/firmware-software-development',
                  description:
                    'Whizz Systems provides firmware and software development services, including embedded systems, bare-metal firmware, kernel and driver development, IoT connectivity, UI applications, and system integration.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Whizz Systems',
                    url: 'https://www.whizzsystems.com/',
                  },
                  serviceType: [
                    'Firmware Design Service',
                    'Firmware Testing Services',
                    'Firmware Consultancy',
                    'Embedded Firmware Design Services',
                    'Embedded Systems Development',
                    'Bare-Metal Firmware Development',
                    'Firmware & Embedded Software Development',
                    'Firmware and Software Solutions',
                  ],
                  areaServed: {
                    '@type': 'Place',
                    name: 'Global',
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
];
