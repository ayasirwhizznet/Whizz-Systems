import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'system-schematic-services',
        loadComponent: () =>
          import('./system-design-schematics/system-design.component').then(
            (m) => m.SystemDesignComponent,
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
            (m) => m.PcbLayoutComponent,
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
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id':
                'https://www.whizzsystems.com/services/engineering-design/pcb-layout#faq',
              url: 'https://www.whizzsystems.com/services/engineering-design/pcb-layout',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What Is PCB Layout Design?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'PCB layout design is the process of translating an electrical schematic into a manufacturable printed circuit board by determining component placement, routing signal and power traces, defining layer stack-ups, and optimizing the design for performance and reliability. For high-speed and high-density systems, PCB layout goes beyond routing—it requires careful consideration of signal integrity, power integrity, thermal performance, EMI mitigation, and manufacturability to ensure the final product performs as intended.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why Is PCB Layout Critical for High-Speed and High-Density Electronic Systems?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'As data rates, component densities, and power requirements continue to increase, PCB layout has become a key factor in overall system performance. A well-engineered layout minimizes signal degradation, reduces electromagnetic interference (EMI), supports effective thermal management, and improves manufacturability. Addressing these challenges early in the layout process helps reduce design iterations and enables reliable performance in AI, networking, semiconductor, and other advanced electronic applications.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What Should You Look for in a PCB Layout Engineering Partner?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "For complex hardware projects, it's important to choose a partner with expertise in high-speed PCB design, signal and power integrity, DFM/DFX practices, and cross-disciplinary engineering. An experienced engineering team should work closely with hardware, mechanical, manufacturing, and supply chain specialists to identify potential issues early, optimize the layout for production, and accelerate time to market.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Do Design for Manufacturability (DFM) and Design for Excellence (DFX) Improve PCB Layouts?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'DFM and DFX ensure that a PCB layout is not only electrically functional but also optimized for manufacturing, assembly, testing, cost, and long-term reliability. By considering fabrication capabilities, assembly constraints, component availability, and testing requirements during the layout phase, engineers can reduce production risks, improve yields, and shorten product development cycles.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does Early Engineering Collaboration Improve PCB Layout Success?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Successful PCB layouts result from collaboration across multiple engineering disciplines. Integrating hardware design, mechanical engineering, signal integrity analysis, thermal design, manufacturing, and supply chain expertise early in the development process helps identify risks before fabrication. This collaborative approach minimizes redesigns, improves product quality, and enables a smoother transition from concept to production.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does PCB Stack-Up Design Impact High-Speed PCB Performance?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'PCB stack-up design directly influences signal integrity, power integrity, electromagnetic interference (EMI), and overall board reliability. Selecting the appropriate layer configuration, dielectric materials, and reference planes helps control impedance, minimize signal loss, and support reliable high-speed communication. A well-planned stack-up also improves manufacturability and reduces design iterations during product development.',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        path: '3d-modeling-mechanical-design',
        loadComponent: () =>
          import('./modeling/modeling.component').then(
            (m) => m.ModelingComponent,
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
            (m) => m.SignalIntegrityComponent,
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
            (m) => m.PowerDeliveryComponent,
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
            (m) => m.ThermalManagementComponent,
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
          import('./firmware-software-development/firmware-software-development.component').then(
            (m) => m.FirmwareSoftwareDevelopmentComponent,
          ),
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
