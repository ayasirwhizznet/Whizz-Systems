import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./services.component').then((m) => m.ServicesComponent),
        title: 'Hardware Design &amp; Manufacturing Services | Whizz Systems',
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
                    url: 'https://www.whizzsystems.com/assets/og/services-1200x630.jpg',
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
                        text: 'Reducing development risk begins with early engineering collaboration and continues throughout the product lifecycle. By combining design reviews, simulation, validation, manufacturing planning, testing, and supply chain coordination, Whizz Systems helps identify potential issues before production, improving first-pass success and reducing costly design iterations.',
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
            image:
              'https://www.whizzsystems.com/assets/og/services-1200x630.jpg',
            image_width: '1200',
            image_height: '630',
            image_alt: 'Whizz Systems engineering and manufacturing services',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Hardware Design & Manufacturing Services | Whizz Systems',
            description:
              'End-to-end hardware services: system architecture, ASIC and FPGA design, high-speed PCB layout, NPI, advanced manufacturing and lab testing.',
            image:
              'https://www.whizzsystems.com/assets/og/services-1200x630.jpg',
            image_alt: 'Whizz Systems engineering and manufacturing services',
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
                    url: 'https://www.whizzsystems.com/assets/og/npi-1200x630.jpg',
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
            image: 'https://www.whizzsystems.com/assets/og/npi-1200x630.jpg',
            image_width: '1200',
            image_height: '630',
            image_alt:
              'Whizz Systems NPI prototyping and pilot production line',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'NPI Services for Electronics | Whizz Systems',
            description:
              'New product introduction for complex electronics: prototyping, DFM, compliance, pilot builds and transition to volume manufacturing.',
            image: 'https://www.whizzsystems.com/assets/og/npi-1200x630.jpg',
            image_alt:
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
        title:
          'Advanced Electronic Manufacturing & Assembly Services | Whizz Systems',
        data: {
          description: `Whizz Systems provides advanced electronic manufacturing, assembly, and hardware design services. From NPI agility to scalable production, we deliver precision, quality, and speed for complex products.`,
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
                      name: 'Advanced Manufacturing',
                      item: 'https://www.whizzsystems.com/services/advanced-manufacturing',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  name: 'Advanced Electronic Manufacturing Services',
                  url: 'https://www.whizzsystems.com/services/advanced-manufacturing',
                  description:
                    'Whizz Systems provides advanced electronic manufacturing, electronic assembly, and hardware design services, combining NPI agility with scalable production and rigorous testing.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Whizz Systems',
                    url: 'https://www.whizzsystems.com/',
                  },
                  serviceType: [
                    'Advanced Electronic Manufacturing',
                    'Advanced Electronic Assembly',
                    'Advanced EMS Engineering',
                    'End-to-End Hardware Design',
                    'Advanced Hardware Design',
                  ],
                  areaServed: {
                    '@type': 'Place',
                    name: 'Global',
                  },
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id':
                'https://www.whizzsystems.com/services/advanced-manufacturing#faq',
              url: 'https://www.whizzsystems.com/services/advanced-manufacturing',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What Is Advanced Manufacturing for Electronic Hardware Products?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Advanced manufacturing combines engineering expertise, manufacturing processes, supply chain coordination, and quality management to transform a product design into a production-ready solution. By integrating these capabilities throughout the product lifecycle, organizations can improve manufacturability, accelerate time to market, and scale production while maintaining consistent quality and reliability.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What Are the Benefits of an End-to-End Hardware Manufacturing Partner?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Working with an end-to-end manufacturing partner streamlines the transition from design to production by bringing engineering, prototyping, manufacturing, testing, and supply chain management under a unified process. This integrated approach improves collaboration, reduces development risks, minimizes costly design iterations, and enables faster product commercialization while maintaining quality throughout the manufacturing lifecycle.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does Advanced Manufacturing Support New Product Introduction (NPI)?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Successful New Product Introduction (NPI) requires more than building prototypes. It involves validating manufacturability, refining production processes, establishing quality controls, coordinating supply chain readiness, and preparing products for scalable manufacturing. A structured NPI process helps identify potential issues early, reducing delays and ensuring a smoother transition into volume production.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why Is Supply Chain and Component Management Important in Electronics Manufacturing?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Component availability, supplier reliability, and procurement planning play a critical role in manufacturing success. Effective supply chain management helps mitigate sourcing risks, improve production continuity, and ensure that critical components are available when needed. Integrating procurement with engineering and manufacturing planning also supports cost optimization and long-term product reliability.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Can Startups and Technology Companies Accelerate Hardware Product Commercialization?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bringing an innovative hardware product to market requires close coordination between engineering, prototyping, manufacturing, testing, and production scaling. An integrated manufacturing approach helps startups and technology companies reduce development complexity, validate designs earlier, and transition more efficiently from concept to production, allowing them to focus on innovation while preparing for commercial success.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does Design for Manufacturing (DFM) Improve Production Efficiency?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Design for Manufacturing (DFM) evaluates a product during development to ensure it can be manufactured efficiently, consistently, and cost-effectively. By identifying potential production challenges early, DFM helps reduce manufacturing defects, improve production yields, shorten assembly time, and accelerate the transition from prototype to volume manufacturing.',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        path: 'lab-testing-solutions',
        loadComponent: () =>
          import('./lab-testing-solutions/lab-testing-solutions.component').then(
            (m) => m.LabTestingSolutionsComponent,
          ),
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
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id':
                'https://www.whizzsystems.com/services/lab-testing-solutions#faq',
              url: 'https://www.whizzsystems.com/services/lab-testing-solutions',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What Are Lab Testing Solutions for Electronic Products?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Lab testing solutions validate that electronic products meet their functional, performance, reliability, and quality requirements before production or deployment. Through comprehensive testing and verification, engineering teams can identify design issues early, reduce product risk, and ensure systems perform as intended under real-world operating conditions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why Is Functional Testing Important in Electronic Product Development?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Functional testing verifies that a product performs according to its design specifications before it moves into production. By validating hardware functionality, identifying defects early, and confirming system performance, functional testing helps reduce costly redesigns, improve product quality, and increase confidence during manufacturing and deployment.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What Testing Services Should Be Completed Before Bringing an Electronic Product to Market?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Before commercialization, electronic products should undergo a structured verification and validation process that may include functional testing, system validation, reliability assessment, environmental testing, and failure analysis. Performing these evaluations before production helps identify potential issues early, supports regulatory and quality requirements, and improves long-term product reliability.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Do Lab Testing Solutions Improve Product Reliability and Manufacturing Readiness?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Lab testing provides valuable insight into how a product performs under expected operating conditions. By validating functionality, analyzing failures, and verifying design performance before manufacturing, organizations can improve product reliability, reduce production risks, and accelerate the transition from development to volume manufacturing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Can Specialized Testing Support High-Performance Electronics and AI Hardware?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'High-performance computing, AI systems, and other advanced electronic platforms require rigorous testing to validate power delivery, thermal performance, signal integrity, and overall system reliability. A comprehensive testing strategy helps engineering teams identify potential performance limitations early, ensuring complex hardware platforms are ready for production and long-term operation.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What Is the Difference Between Verification and Validation in Hardware Testing?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Verification confirms that a product has been designed according to its specifications, while validation ensures it performs as intended in its real-world application. Together, these processes help identify defects early, improve product quality, and reduce the risk of failures after deployment. A comprehensive testing strategy incorporates both verification and validation to support reliable product development.',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        path: 'supply-chain-management',
        loadComponent: () =>
          import('./supply-chain-management/supply-chain-management.component').then(
            (m) => m.SupplyChainManagementComponent,
          ),
        title: 'Electronics Supply Chain Management Solutions | Whizz Systems',
        data: {
          description: `Hi-tech supply chain management solutions for electronics, including early procurement, obsolescence management, inventory control, and global sourcing.`,
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
                      name: 'Supply Chain Management',
                      item: 'https://www.whizzsystems.com/services/supply-chain-management',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  name: 'Electronics Supply Chain Management Solutions',
                  url: 'https://www.whizzsystems.com/services/supply-chain-management',
                  description:
                    'Whizz Systems delivers hi-tech electronics supply chain management solutions including obsolescence management, global sourcing, inventory control, and lifecycle risk mitigation to accelerate builds and ensure reliability.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Whizz Systems',
                    url: 'https://www.whizzsystems.com/',
                  },
                  serviceType: [
                    'Hi-Tech Supply Chain Solutions',
                    'Electronic Supply Chain Solutions',
                    'Obsolescence Supply Chain',
                    'Electronics Supply Chain Management',
                  ],
                  areaServed: {
                    '@type': 'Place',
                    name: 'Global',
                  },
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id':
                'https://www.whizzsystems.com/services/supply-chain-management#faq',
              url: 'https://www.whizzsystems.com/services/supply-chain-management',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What Does Supply Chain Management Include for Electronic Hardware Manufacturing?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Supply chain management encompasses the planning, sourcing, procurement, inventory coordination, supplier management, and logistics activities required to support electronic product development and manufacturing. An integrated supply chain strategy helps ensure component availability, reduce production delays, manage costs, and maintain consistent product quality throughout the manufacturing lifecycle.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does Strategic Sourcing Improve Supply Chain Performance?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Strategic sourcing goes beyond purchasing components by focusing on supplier relationships, component availability, cost optimization, and long-term supply continuity. By evaluating qualified suppliers and proactively managing sourcing risks, organizations can improve procurement efficiency, reduce lead-time challenges, and build a more resilient supply chain.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why Is Inventory Planning Important for Electronics Manufacturing?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Effective inventory planning helps manufacturers balance component availability with production demand while minimizing excess inventory and supply shortages. Coordinating inventory with procurement and production schedules improves operational efficiency, reduces manufacturing interruptions, and supports on-time product delivery.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does Collaboration Between Engineering and Supply Chain Teams Improve Product Development?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Close collaboration between engineering and supply chain teams helps identify component availability, sourcing risks, lifecycle concerns, and alternative parts early in the design process. This integrated approach supports better design decisions, reduces redesigns caused by component shortages, and enables a smoother transition from product development to manufacturing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does Effective Supply Chain Management Reduce Manufacturing Risk?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A proactive supply chain strategy helps organizations mitigate risks associated with component shortages, supplier disruptions, extended lead times, and market fluctuations. Through supplier diversification, demand planning, procurement coordination, and ongoing supply chain monitoring, manufacturers can improve production continuity and maintain reliable delivery schedules.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why Is Supply Chain Resilience Important for Electronics Manufacturing?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Electronics supply chains are increasingly affected by component shortages, changing market conditions, and global logistics challenges. Building a resilient supply chain through supplier diversification, proactive sourcing, inventory planning, and continuous supplier management helps organizations reduce disruptions, maintain production schedules, and deliver products more reliably.',
                  },
                },
              ],
            },
          ],
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
