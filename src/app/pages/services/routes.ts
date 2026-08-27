import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./services.component').then((m) => m.ServicesComponent),
        title: 'Hardware Design & Manufacturing Services | Whizz Systems',
        data: {
          description: `End-to-end hardware services: system architecture, ASIC and
  FPGA design, high-speed PCB layout, NPI, advanced manufacturing and lab testing.`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/services#webpage',
                  url: 'https://www.whizzsystems.com/services',
                  name: 'Hardware Design & Manufacturing Services | Whizz Systems',
                  description: `End-to-end hardware services: system architecture, ASIC and FPGA design,
        high-speed PCB layout, NPI, advanced manufacturing and lab testing.`,
                  inLanguage: 'en-US',
                  isPartOf: {
                    '@id': 'https://www.whizzsystems.com/#website',
                  },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/services#breadcrumb',
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
                      name: 'Services hub',
                      item: 'https://www.whizzsystems.com/services',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id': 'https://www.whizzsystems.com/services#service',
                  name: 'End-to-End Hardware Development & Manufacturing',
                  serviceType: 'Services hub',
                  description: `End-to-end hardware services: system architecture, ASIC and FPGA design,
        high-speed PCB layout, NPI, advanced manufacturing and lab testing.`,
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
                {
                  '@type': 'ItemList',
                  '@id': 'https://www.whizzsystems.com/services#itemlist',
                  name: 'Hardware Design & Manufacturing Services | Whizz Systems',
                  itemListOrder: 'https://schema.org/ItemListOrderAscending',
                  numberOfItems: '2',
                  itemListElement:
                    'GENERATED FROM ROUTE DATA - do not hardcode',
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/services#faq',
                  url: 'https://www.whizzsystems.com/services',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What Engineering and Manufacturing Services Does Whizz Systems Offer?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Whizz Systems offers comprehensive services spanning the entire hardware development lifecycle, including engineering design, PCB layout, FPGA development, firmware and software engineering, signal integrity and power integrity simulation, thermal management, mechanical design, New Product Introduction (NPI), advanced manufacturing, lab testing, and supply chain management. These integrated capabilities enable customers to develop complex electronic products more efficiently and with greater confidence.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can Whizz Systems Support the Entire Hardware Development Lifecycle?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Whizz Systems provides end-to-end support from concept development and system architecture through engineering design, prototyping, product validation, manufacturing, testing, and production scaling. This integrated development model improves collaboration between engineering disciplines while helping reduce delays, redesigns, and manufacturing risks.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How Does Whizz Systems Help Reduce Product Development Risk?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Reducing development risk begins with early engineering collaboration and continues throughout the product lifecycle. By combining design reviews, simulation, validation, manufacturing
planning, testing, and supply chain coordination, Whizz Systems helps identify potential issues before production, improving first-pass success and reducing costly design iterations.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: "Which Industries Benefit From Whizz Systems' Services?",
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Our engineering and manufacturing services support organizations developing products for artificial intelligence, networking, telecommunications, semiconductors, aerospace, defense, industrial automation, and other technology-driven industries. These sectors require high-performance, reliable hardware that benefits from integrated engineering and manufacturing expertise.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How Does Whizz Systems Ensure Product Quality From Design Through Manufacturing?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Product quality is built into every stage of the development process. By integrating engineering design, simulation, verification, testing, manufacturing readiness, and quality management, Whizz Systems helps ensure products are optimized for performance, manufacturability, and long-term reliability before entering production.',
                      },
                    },
                  ],
                },
              ],
            },
          ],
          keywords: `end-to-end hardware development, hardware design and manufacturing services, ASIC development, FPGA design services, high-speed PCB design, advanced manufacturing services, NPI services, electronic manufacturing assembly`,
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'Hardware Design & Manufacturing Services | Whizz Systems',
            description:
              'End-to-end hardware services: system architecture, ASIC and FPGA design, high-speed PCB layout, NPI, advanced manufacturing and lab testing.',
            url: 'https://www.whizzsystems.com/services',
            image: 'https://www.whizzsystems.com/assets/services/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt': 'Whizz Systems engineering and manufacturing services',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Hardware Design & Manufacturing Services | Whizz Systems',
            description:
              'End-to-end hardware services: system architecture, ASIC and FPGA design, high-speed PCB layout, NPI, advanced manufacturing and lab testing.',
            image:
              'https://www.whizzsystems.com/assets/og/services-1200x630.jpg',
            'image:alt': 'Whizz Systems engineering and manufacturing services',
          },
        },
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
        title: 'NPI Services for Electronics | Whizz Systems',
        data: {
          description: `New product introduction for complex electronics:
  prototyping, DFM, compliance, pilot builds and transition to volume manufacturing.
`,
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/services/npi#webpage',
                  url: 'https://www.whizzsystems.com/services/npi',
                  name: 'NPI Services for Electronics | Whizz Systems',
                  description: `New product introduction for complex electronics: prototyping, DFM,
        compliance, pilot builds and transition to volume manufacturing.`,
                  inLanguage: 'en-US',
                  isPartOf: {
                    '@id': 'https://www.whizzsystems.com/#website',
                  },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/npi/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/services/npi#breadcrumb',
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
                      item: 'https://www.whizzsystems.com/services',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'NPI',
                      item: 'https://www.whizzsystems.com/services/npi',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id': 'https://www.whizzsystems.com/services/npi#service',
                  name: 'New Product Introduction (NPI) Services for Complex Hardware',
                  serviceType: 'NPI',
                  description: `New product introduction for complex electronics: prototyping, DFM,
        compliance, pilot builds and transition to volume manufacturing.`,
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
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/services/npi#faq',
                  url: 'https://www.whizzsystems.com/services/npi',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is new product introduction (NPI)?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `New product introduction is the structured process of turning a validated
              design into a production-ready product. It brings together engineering, prototyping,
              manufacturing, testing, supply chain planning and quality management so that a design is
              proven manufacturable before volume production begins.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What are the stages of an NPI process?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `A typical NPI programme runs through engineering validation test (EVT),
              design validation test (DVT), production validation test (PVT) and mass production (MP). Each
              gate proves a different thing: EVT proves the design works, DVT proves it works reliably, PVT
              proves it can be built repeatedly at rate, and MP is sustained production.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Why Is NPI Important for Electronic Product Development?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Electronic products become increasingly complex as they integrate high-speed interfaces, advanced components, and sophisticated manufacturing requirements. NPI helps engineering teams validate designs early, identify manufacturing challenges, coordinate supply chain readiness, and establish quality processes before production begins. This structured approach minimizes costly redesigns while improving product reliability and production efficiency.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How does NPI reduce manufacturing risk?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `NPI surfaces production issues before they affect volume manufacturing.
              Early collaboration between engineering, manufacturing, test and supply chain teams validates
              manufacturability, verifies component availability and establishes quality controls that
              improve first-pass yield.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How Does Engineering Collaboration Improve NPI Success?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Successful NPI depends on collaboration across multiple engineering disciplines. Electrical, mechanical, firmware, manufacturing, testing, and supply chain teams work together throughout development to resolve issues early, optimize product performance, and ensure a seamless transition from design to manufacturing. This integrated approach shortens development cycles while improving overall product quality.',
                      },
                    },
                  ],
                },
              ],
            },
          ],
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'NPI Services for Electronics | Whizz Systems',
            description:
              'New product introduction for complex electronics: prototyping, DFM, compliance, pilot builds and transition to volume manufacturing.',
            url: 'https://www.whizzsystems.com/services/npi',
            image: 'https://www.whizzsystems.com/assets/services/npi/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Systems NPI prototyping and pilot production line',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'NPI Services for Electronics | Whizz Systems',
            description:
              'New product introduction for complex electronics: prototyping, DFM, compliance, pilot builds and transition to volume manufacturing.',
            image: 'https://www.whizzsystems.com/assets/services/npi/hero.png',
            'image:alt':
              'Whizz Systems NPI prototyping and pilot production line',
          },
        },
      },
      {
        path: 'advanced-manufacturing',
        loadComponent: () =>
          import('./advanced-manufacturing/adv-manufacturing.component').then(
            (m) => m.AdvManufacturingComponent,
          ),
        title: 'Advanced Electronics Manufacturing & PCBA | Whizz Systems',
        data: {
          description:
            'PCB assembly, box build, cable assembly and system integration in Santa Clara and Malaysia. IPC Class 3 capable, ISO 9001 and ISO 13485 certified.',
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.whizzsystems.com/services/advanced-manufacturing#webpage',
                  url: 'https://www.whizzsystems.com/services/advanced-manufacturing',
                  name: 'Advanced Electronics Manufacturing & PCBA | Whizz Systems',
                  description: `PCB assembly, box build, cable assembly and system integration in Santa
        Clara and Malaysia. IPC Class 3 capable, ISO 9001 and ISO 13485 certified.`,
                  inLanguage: 'en-US',
                  isPartOf: {
                    '@id': 'https://www.whizzsystems.com/#website',
                  },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/advanced-manufacturing/adv/hero.pngg',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id':
                    'https://www.whizzsystems.com/services/advanced-manufacturing#breadcrumb',
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
                      item: 'https://www.whizzsystems.com/services',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Advanced Manufacturing',
                      item: 'https://www.whizzsystems.com/services/advanced-manufacturing',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id':
                    'https://www.whizzsystems.com/services/advanced-manufacturing#service',
                  name: 'Advanced Electronics Manufacturing Services',
                  serviceType: 'Advanced Manufacturing',
                  description: `PCB assembly, box build, cable assembly and system integration in Santa
        Clara and Malaysia. IPC Class 3 capable, ISO 9001 and ISO 13485 certified.`,
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
                {
                  '@type': 'FAQPage',
                  '@id':
                    'https://www.whizzsystems.com/services/advanced-manufacturing#faq',
                  url: 'https://www.whizzsystems.com/services/advanced-manufacturing',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What IPC workmanship class does Whizz Systems build to?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `We build to IPC-A-610 Class 2 and Class 3 depending on the application.
              Class 3 applies to high-reliability hardware in medical, defense, aerospace and data-centre
              applications where uninterrupted service is required.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you offer box build and full system integration?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Yes. We assemble complete systems, including enclosure integration,
              internal cabling, labelling, firmware loading, system-level test and packaging.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you manufacture cable and wire harness assemblies in-house?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Yes. Cable and harness assembly is performed in-house, including discrete
              wire, ribbon, coaxial and RF assemblies, with continuity and hipot testing.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What are your minimum order quantities?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `We have no fixed minimum. Our Santa Clara facility is set up for
              low-volume, high-mix and prototype work; Malaysia handles sustained volume production.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can you build to a design we already have?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Yes. We accept complete design packages and begin with a design for
              manufacturability review before quoting, which typically identifies cost and yield
              improvements before the first build.`,
                      },
                    },
                  ],
                },
              ],
            },
          ],
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'Advanced Electronics Manufacturing & PCBA | Whizz Systems',
            description:
              'PCB assembly, box build, cable assembly and system integration in Santa Clara and Malaysia. IPC Class 3 capable, ISO 9001 and ISO 13485 certified.',
            url: 'https://www.whizzsystems.com/services/advanced-manufacturing',
            image:
              'https://www.whizzsystems.com/assets/services/advanced-manufacturing/adv/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'SMT line at the Whizz Systems Santa Clara manufacturing facility',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Advanced Electronics Manufacturing & PCBA | Whizz Systems',
            description:
              'PCB assembly, box build, cable assembly and system integration in Santa Clara and Malaysia. IPC Class 3 capable, ISO 9001 and ISO 13485 certified.',
            image:
              'https://www.whizzsystems.com/assets/og/advanced-manufacturing-1200x630.jpg',
            'image:alt':
              'SMT line at the Whizz Systems Santa Clara manufacturing facility',
          },
        },
      },
      {
        path: 'lab-testing-solutions',
        loadComponent: () =>
          import('./lab-testing-solutions/lab-testing-solutions.component').then(
            (m) => m.LabTestingSolutionsComponent,
          ),
        title: 'Board Bring-Up, Validation & Lab Testing | Whizz Systems',
        data: {
          description:
            'Board bring-up, design validation, characterisation and compliance pre-scan for high-speed hardware. Full lab facilities in Santa Clara.',
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.whizzsystems.com/services/lab-testing-solutions#webpage',
                  url: 'https://www.whizzsystems.com/services/lab-testing-solutions',
                  name: 'Board Bring-Up, Validation & Lab Testing | Whizz Systems',
                  description: `Board bring-up, design validation, characterisation and compliance
        pre-scan for high-speed hardware. Full lab facilities in Santa Clara.`,
                  inLanguage: 'en-US',
                  isPartOf: {
                    '@id': 'https://www.whizzsystems.com/#website',
                  },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/lab-testing/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id':
                    'https://www.whizzsystems.com/services/lab-testing-solutions#breadcrumb',
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
                      item: 'https://www.whizzsystems.com/services',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Lab Testing',
                      item: 'https://www.whizzsystems.com/services/lab-testing-solutions',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id':
                    'https://www.whizzsystems.com/services/lab-testing-solutions#service',
                  name: 'Lab Testing, Board Bring-Up & Design Validation',
                  serviceType: 'Lab Testing',
                  description: `Board bring-up, design validation, characterisation and compliance
        pre-scan for high-speed hardware. Full lab facilities in Santa Clara.`,
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
                {
                  '@type': 'FAQPage',
                  '@id':
                    'https://www.whizzsystems.com/services/lab-testing-solutions#faq',
                  url: 'https://www.whizzsystems.com/services/lab-testing-solutions',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is board bring-up?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Board bring-up is the first structured power-on of a newly built board.
              Engineers verify power rails and sequencing, confirm the processor boots, exercise each
              interface in turn and isolate any faults before the board goes into broader validation.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can we engage Whizz Systems for testing only?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Yes. Customers regularly bring boards designed and built elsewhere to our
              lab for bring-up, validation or signal integrity characterisation.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What test equipment do you have?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Our Santa Clara lab includes high-bandwidth real-time and sampling
              oscilloscopes, vector network analysers, protocol analysers, bit error rate testers, thermal
              imaging and programmable loads. Specific instrument availability can be confirmed for a given
              programme.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you provide compliance pre-scan before formal certification?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Yes. Pre-scan identifies emissions and susceptibility problems before a
              formal certification attempt, which is significantly cheaper than failing at an accredited
              lab.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What documentation do we receive?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `A test report covering methodology, instrument configuration, measured
              results against the specification, and any anomalies with recommended corrective action.`,
                      },
                    },
                  ],
                },
              ],
            },
          ],
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'Board Bring-Up, Validation & Lab Testing | Whizz Systems',
            description:
              'Board bring-up, design validation, characterisation and compliance pre-scan for high-speed hardware. Full lab facilities in Santa Clara.',
            url: 'https://www.whizzsystems.com/services/lab-testing-solutions',
            image:
              'https://www.whizzsystems.com/assets/services/lab-testing/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Systems validation lab with high-speed test equipment',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Board Bring-Up, Validation & Lab Testing | Whizz Systems',
            description:
              'Board bring-up, design validation, characterisation and compliance pre-scan for high-speed hardware. Full lab facilities in Santa Clara.',
            image:
              'https://www.whizzsystems.com/assets/services/lab-testing/hero.png',
            'image:alt':
              'Whizz Systems validation lab with high-speed test equipment',
          },
        },
      },
      {
        path: 'supply-chain-management',
        loadComponent: () =>
          import('./supply-chain-management/supply-chain-management.component').then(
            (m) => m.SupplyChainManagementComponent,
          ),
        title: 'Electronics Supply Chain Management | Whizz Systems',
        data: {
          description:
            'Component sourcing, second-source strategy, counterfeit prevention and dual-region supply across our US and Malaysia facilities.',
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.whizzsystems.com/services/supply-chain-management#webpage',
                  url: 'https://www.whizzsystems.com/services/supply-chain-management',
                  name: 'Electronics Supply Chain Management | Whizz Systems',
                  description:
                    'Component sourcing, second-source strategy, counterfeit prevention and dual-region supply across our US and Malaysia facilities.',
                  inLanguage: 'en-US',
                  isPartOf: {
                    '@id': 'https://www.whizzsystems.com/#website',
                  },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/supply-chain/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id':
                    'https://www.whizzsystems.com/services/supply-chain-management#breadcrumb',
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
                      item: 'https://www.whizzsystems.com/services',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Supply Chain',
                      item: 'https://www.whizzsystems.com/services/supply-chain-management',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id':
                    'https://www.whizzsystems.com/services/supply-chain-management#service',
                  name: 'Supply Chain Management for Electronics Manufacturing',
                  serviceType: 'Supply Chain',
                  description:
                    'Component sourcing, second-source strategy, counterfeit prevention and dual-region supply across our US and Malaysia facilities.',
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
                {
                  '@type': 'FAQPage',
                  '@id':
                    'https://www.whizzsystems.com/services/supply-chain-management#faq',
                  url: 'https://www.whizzsystems.com/services/supply-chain-management',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'How do you protect against counterfeit components?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We buy through franchised distribution wherever possible. Where a broker purchase is unavoidable we apply incoming inspection, documentation review and, where warranted, decapsulation or X-ray verification, following AS6081 principles.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can you help us reduce dependence on a single region?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Whizz Systems operates a company-owned facility in Kulim, Malaysia alongside our Santa Clara headquarters, which allows production to be split or transferred between regions without changing suppliers.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What happens when a component goes end-of-life?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We monitor lifecycle status continuously. When a part is flagged for obsolescence we evaluate last-time-buy quantities, qualify an alternate, or recommend a targeted redesign — whichever carries the lowest total cost and risk.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you offer turnkey and consignment models?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Both. Turnkey means we procure all components; consignment means you supply them. Many programmes run a hybrid, with long-lead or customer-specific parts consigned and the remainder turnkey.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do you handle allocation and long lead times?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We forecast against your build plan, place scheduled orders early for constrained parts, and maintain qualified alternates so that a single allocation event does not stop a line.',
                      },
                    },
                  ],
                },
              ],
            },
          ],
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'Electronics Supply Chain Management | Whizz Systems',
            description:
              'Component sourcing, second-source strategy, counterfeit prevention and dual-region supply across our US and Malaysia facilities.',
            url: 'https://www.whizzsystems.com/services/supply-chain-management',
            image:
              'https://www.whizzsystems.com/assets/services/supply-chain/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt': 'Component stores at the Whizz Systems facility',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Electronics Supply Chain Management | Whizz Systems',
            description:
              'Component sourcing, second-source strategy, counterfeit prevention and dual-region supply across our US and Malaysia facilities.',
            image:
              'https://www.whizzsystems.com/assets/services/supply-chain/hero.png',
            'image:alt': 'Component stores at the Whizz Systems facility',
          },
        },
      },
      {
        path: 'sustainable-engineering',
        loadComponent: () =>
          import('./sustainable-engineering/sustainable-engineering.component').then(
            (m) => m.SustainableEngineeringComponent,
          ),
        title:
          'Sustaining Engineering & Obsolescence Management | Whizz Systems',
        data: {
          description:
            'Sustaining engineering services, obsolescence management, and EOL product lifecycle support. From BoM management to risk mitigation, we keep your electronics reliable and future-ready.',
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
                      name: 'Sustaining Engineering & Obsolescence Management',
                      item: 'https://www.whizzsystems.com/services/sustainable-engineering',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  name: 'Sustaining Engineering & Obsolescence Management',
                  url: 'https://www.whizzsystems.com/services/sustainable-engineering',
                  description:
                    'Whizz Systems offers sustaining engineering solutions, electronic component obsolescence management, and EOL lifecycle support. Services include BoM management, AVL management, second sourcing, and proactive risk mitigation.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Whizz Systems',
                    url: 'https://www.whizzsystems.com/',
                  },
                  serviceType: [
                    'Sustaining Engineering Services',
                    'Electronic Parts Obsolescence Management',
                    'Electronic Component Obsolescence Management',
                    'EOL Product Management',
                    'Obsolescence Management Services',
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
