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
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id': 'https://www.whizzsystems.com/services/engineering-design/system-schematic-services#faq',
              url: 'https://www.whizzsystems.com/services/engineering-design/system-schematic-services',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is a System Schematic in Electronic Product Development?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A system schematic is the foundation of an electronic product, defining how components, interfaces, power distribution, and signal paths work together before PCB layout begins. A well-developed schematic establishes a clear design intent, enables cross-functional collaboration, and helps ensure that downstream activities—including PCB layout, simulation, manufacturing, and testing—are built on a reliable engineering foundation.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why is Schematic Design Important before PCB Layout?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'PCB layout depends on the accuracy and completeness of the system schematic. Decisions made during schematic development influence signal integrity, power delivery, manufacturability, and overall system performance. Investing time in a robust schematic reduces design revisions, minimizes engineering risks, and creates a smoother transition into layout and manufacturing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does Schematic Review Reduce Hardware Design Risks?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Schematic reviews allow engineering teams to identify potential issues before physical design begins. Reviewing component selection, interface connectivity, power architecture, and design requirements early helps prevent costly PCB redesigns, improves first-pass success, and reduces project timelines by resolving problems before fabrication.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What Should Be Included In A High-Quality Electronic Schematic?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A high-quality schematic clearly defines functional blocks, component relationships, power distribution, signal connectivity, design constraints, and interface requirements. It should also support downstream engineering activities such as PCB layout, simulation, firmware development, testing, and manufacturing, ensuring every stakeholder works from a consistent design reference.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does Schematic Design Improve Product Manufacturability?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Good schematic design considers manufacturing requirements from the earliest stages of development. Selecting appropriate components, planning for testability, and coordinating with PCB layout and manufacturing teams help reduce production challenges, improve assembly efficiency, and accelerate the path from concept to production.',
                  },
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
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id': 'https://www.whizzsystems.com/services/engineering-design/fpga-design-services#faq',
              url: 'https://www.whizzsystems.com/services/engineering-design/fpga-design-services',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What Is FPGA Design And When Should It Be Used?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'FPGA design involves developing programmable hardware that can be customized to meet complex processing, connectivity, and control requirements. FPGAs are ideal for applications requiring high performance, parallel processing, rapid development, or evolving functionality, making them well suited for AI, networking, telecommunications, aerospace, defense, and embedded computing applications.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How Does FPGA Development Accelerate Hardware Innovation?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Unlike fixed-function hardware, FPGAs allow engineers to rapidly prototype, validate, and refine hardware designs without manufacturing custom silicon. This flexibility shortens development cycles, enables faster iteration, and allows software and hardware development to progress in parallel, accelerating overall product innovation.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'When Should Engineers Choose an FPGA Instead of an ASIC?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'FPGAs are often the preferred choice when flexibility, faster time-to-market, lower development costs, or design updates are important. They allow engineers to validate system architectures and adapt functionality throughout development, while ASICs are generally better suited for high-volume production where maximum performance and unit cost optimization are the primary objectives.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What Industries Benefit Most From FPGA-Based Solutions?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'FPGA technology supports a wide range of industries, including AI compute, semiconductor testing, telecommunications, 5G infrastructure, medical devices, aerospace, defense, cloud computing, and industrial automation. These applications benefit from the high-speed processing, adaptability, and performance that programmable logic provides.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How Does FPGA Prototyping Reduce Development Risk?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'FPGA prototyping enables engineering teams to verify functionality, validate interfaces, optimize performance, and identify design issues before committing to production hardware. Early validation reduces redesign costs, improves product quality, and provides greater confidence before transitioning into manufacturing.'
                  }
                }
              ]
            }
          ],
        },
      },
      {
        path: 'pcb-layout',
        loadComponent: () =>
          import('./pcb-layout/pcb-layout.component').then(
            (m) => m.PcbLayoutComponent,
          ),
        title: 'High-Speed PCB Design & Layout Services | Whizz Systems',
        data: {
          description:
            'HDI, high-layer-count and controlled-impedance PCB layout for AI, networking and high-speed digital hardware. Design through to build.',
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'High-Speed PCB Design & Layout Services | Whizz Systems',
            description:
              'HDI, high-layer-count and controlled-impedance PCB layout for AI, networking and high-speed digital hardware. Design through to build.',
            url: 'https://www.whizzsystems.com/services/engineering-design/pcb-layout',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/pcb/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt': 'High-density interconnect PCB layout in progress',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'High-Speed PCB Design & Layout Services | Whizz Systems',
            description:
              'HDI, high-layer-count and controlled-impedance PCB layout for AI, networking and high-speed digital hardware. Design through to build.',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/pcb/hero.png',
            'image:alt': 'High-density interconnect PCB layout in progress',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/pcb-layout#webpage',
                  url: 'https://www.whizzsystems.com/services/engineering-design/pcb-layout',
                  name: 'High-Speed PCB Design & Layout Services | Whizz Systems',
                  description:
                    'HDI, high-layer-count and controlled-impedance PCB layout for AI, networking and high-speed digital hardware. Design through to build.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/engg&design/pcb/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/pcb-layout#breadcrumb',
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
                      name: 'Engineering & Design',
                      item: 'https://www.whizzsystems.com/services/engineering-design',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'PCB Layout',
                      item: 'https://www.whizzsystems.com/services/engineering-design/pcb-layout',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/pcb-layout#service',
                  name: 'High-Speed PCB Design & Layout Services',
                  serviceType: 'PCB Layout',
                  description:
                    'HDI, high-layer-count and controlled-impedance PCB layout for AI, networking and high-speed digital hardware. Design through to build.',
                  provider: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  areaServed: { '@type': 'Place', name: 'Worldwide' },
                  audience: {
                    '@type': 'BusinessAudience',
                    audienceType: 'Hardware and electronics manufacturers',
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/pcb-layout#faq',
                  url: 'https://www.whizzsystems.com/services/engineering-design/pcb-layout',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What layer counts and technologies do you support?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We routinely design boards from four layers to more than thirty, including HDI with stacked and staggered microvias, via-in-pad, back-drilling, rigid-flex and mixed-dielectric stackups.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you design to a specific impedance tolerance?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Standard controlled impedance work is to plus or minus ten percent. Tighter tolerances are achievable where the fabricator and stackup support it, and we confirm the target with the fabricator before layout begins.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which EDA tools do you use?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: "Cadence Allegro and Altium Designer for layout, with Cadence Sigrity and Ansys for signal and power integrity analysis. We can work in the customer's tool where required.",
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you also build the boards you lay out?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Assembly is performed in our own facilities, which means DFM feedback comes from the team that will actually build the board rather than from a separate supplier.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can you take over a layout that has already started?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. We begin with a review of the existing constraint set, stackup and routing before recommending whether to continue or restart the critical nets.',
                      },
                    },
                  ],
                },
              ],
            }
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
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id': 'https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design#faq',
              url: 'https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Why Is Mechanical Design Important For Electronic Products?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Mechanical design ensures that electronic systems are structurally sound, manufacturable, and optimized for their intended operating environment. It considers enclosure design, component placement, thermal requirements, manufacturability, and system integration to create products that not only perform reliably but can also be efficiently assembled and deployed. Integrating mechanical engineering early in the design process helps reduce costly redesigns and improves overall product quality.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How Does 3d Modeling Improve Hardware Development?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '3D modeling enables engineering teams to visualize product assemblies, verify mechanical fit, evaluate clearances, and identify potential integration issues before prototypes are built. By validating designs digitally, organizations can reduce development time, improve collaboration across engineering disciplines, and accelerate the transition from concept to manufacturing.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What Factors Influence Enclosure Design For Electronics?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Electronic enclosure design must balance structural integrity, thermal management, manufacturability, accessibility, and environmental protection. Factors such as component dimensions, airflow, connector placement, serviceability, regulatory requirements, and mechanical constraints all influence enclosure design. Considering these requirements early helps ensure the final product meets both performance and manufacturing objectives.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How Does Mechanical Engineering Support Manufacturability?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Mechanical engineering improves manufacturability by designing products that can be assembled efficiently, manufactured consistently, and maintained throughout their lifecycle. Optimizing part geometry, material selection, assembly methods, and production tolerances helps reduce manufacturing complexity, lower production costs, and improve product reliability.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Why Should Electrical And Mechanical Teams Collaborate Early?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Successful hardware development depends on close collaboration between electrical and mechanical engineering teams. Coordinating enclosure design, PCB placement, connector locations, thermal requirements, and manufacturing constraints early in development helps prevent integration issues, reduce redesigns, and accelerate product delivery while ensuring optimal system performance.'
                  }
                }
              ]
            }
          ],
        },
      },
      {
        path: 'signal-integrity-simulation-services',
        loadComponent: () =>
          import('./signal-integrity/signal-integrity.component').then(
            (m) => m.SignalIntegrityComponent,
          ),
        title: 'Signal Integrity Simulation Services | Whizz Systems',
        data: {
          description:
            'Pre- and post-layout SI simulation for high-speed serial links: channel modelling, eye and jitter analysis, crosstalk and loss budgeting.',
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'Signal Integrity Simulation Services | Whizz Systems',
            description:
              'Pre- and post-layout SI simulation for high-speed serial links: channel modelling, eye and jitter analysis, crosstalk and loss budgeting.',
            url: 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/signal-integrity/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt': 'Eye diagram from a signal integrity simulation',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Signal Integrity Simulation Services | Whizz Systems',
            description:
              'Pre- and post-layout SI simulation for high-speed serial links: channel modelling, eye and jitter analysis, crosstalk and loss budgeting.',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/signal-integrity/hero.png',
            'image:alt': 'Eye diagram from a signal integrity simulation',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services#webpage',
                  url: 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services',
                  name: 'Signal Integrity Simulation Services | Whizz Systems',
                  description:
                    'Pre- and post-layout SI simulation for high-speed serial links: channel modelling, eye and jitter analysis, crosstalk and loss budgeting.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/engg&design/signal-integrity/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services#breadcrumb',
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
                      name: 'Engineering & Design',
                      item: 'https://www.whizzsystems.com/services/engineering-design',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Signal Integrity',
                      item: 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services#service',
                  name: 'Signal Integrity Simulation Services',
                  serviceType: 'Signal Integrity',
                  description:
                    'Pre- and post-layout SI simulation for high-speed serial links: channel modelling, eye and jitter analysis, crosstalk and loss budgeting.',
                  provider: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  areaServed: { '@type': 'Place', name: 'Worldwide' },
                  audience: {
                    '@type': 'BusinessAudience',
                    audienceType: 'Hardware and electronics manufacturers',
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services#faq',
                  url: 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is signal integrity simulation?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Signal integrity simulation predicts how a high-speed signal will behave on a real board before the board is built. It models the channel end to end, identifies where the signal degrades, and shows what to change in the stackup or routing to recover margin.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can we hire Whizz Systems for simulation only?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Signal integrity simulation is frequently engaged as a standalone service on a design produced elsewhere. We deliver the analysis and recommendations; you decide whether to implement them in house.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which tools do you use for SI analysis?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Cadence Sigrity, Ansys HFSS and SIwave, and Keysight ADS, selected according to the interface and whether the analysis is pre- or post-layout.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How long does a signal integrity analysis take?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'A focused pre-layout topology study is typically one to two weeks. Full post-layout verification of a complex board with multiple high-speed interfaces is generally three to five weeks.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you correlate simulation against measured results?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, where the hardware exists. Correlating simulated and measured eye diagrams is the only way to establish confidence in the channel model, and our lab performs the measurement.',
                      },
                    },
                  ],
                },
              ],
            }
          ],
        },
      },

      {
        path: 'power-delivery-network-simulation',
        loadComponent: () =>
          import('./power-delivery/power-delivery.component').then(
            (m) => m.PowerDeliveryComponent,
          ),
        title: 'Power Delivery Network (PDN) Simulation Services',
        data: {
          description:
            'DC IR drop, AC impedance and decoupling analysis for high-current AI and networking hardware, correlated against bench measurement.',
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'Power Delivery Network (PDN) Simulation Services',
            description:
              'DC IR drop, AC impedance and decoupling analysis for high-current AI and networking hardware, correlated against bench measurement.',
            url: 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/power-delivery-network-simulation/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt': 'Power delivery network impedance plot',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Power Delivery Network (PDN) Simulation Services',
            description:
              'DC IR drop, AC impedance and decoupling analysis for high-current AI and networking hardware, correlated against bench measurement.',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/power-delivery-network-simulation/hero.png',
            'image:alt': 'Power delivery network impedance plot',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation#webpage',
                  url: 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation',
                  name: 'Power Delivery Network (PDN) Simulation Services',
                  description:
                    'DC IR drop, AC impedance and decoupling analysis for high-current AI and networking hardware, correlated against bench measurement.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/engg&design/power-delivery-network-simulation/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation#breadcrumb',
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
                      name: 'Engineering & Design',
                      item: 'https://www.whizzsystems.com/services/engineering-design',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'PDN Simulation',
                      item: 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation#service',
                  name: 'Power Delivery Network (PDN) Simulation Services',
                  serviceType: 'PDN Simulation',
                  description:
                    'DC IR drop, AC impedance and decoupling analysis for high-current AI and networking hardware, correlated against bench measurement.',
                  provider: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  areaServed: { '@type': 'Place', name: 'Worldwide' },
                  audience: {
                    '@type': 'BusinessAudience',
                    audienceType: 'Hardware and electronics manufacturers',
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation#faq',
                  url: 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is power delivery network simulation?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'PDN simulation analyses how power reaches every load on a board. DC analysis checks that voltage arrives within tolerance and that no copper is over-stressed; AC analysis checks that the impedance seen by each load stays below target across frequency so that switching currents do not cause voltage collapse.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What target impedance should we design to?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Target impedance is derived from the maximum transient current and the allowable ripple: dividing allowable voltage ripple by transient current gives the ceiling. For modern AI accelerators drawing hundreds of amps with tight tolerances, this frequently lands in the low single-digit milliohms.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How many decoupling capacitors do we actually need?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Fewer than most designs use, placed better. Simulation usually shows that a smaller number of correctly chosen values, positioned close to the load with low-inductance mounting, outperforms a larger scattered population — which also reduces BOM cost and assembly time.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can you analyse a board designed elsewhere?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. We work from the layout database and stackup. PDN analysis on an existing design is a common engagement, particularly after a board has shown instability under load.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you verify the simulation against hardware?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. We measure PDN impedance on the physical board and correlate it against the model. Without correlation a PDN simulation is an estimate rather than a verification.',
                      },
                    },
                  ],
                },
              ],
            }
          ],
        },
      },
      {
        path: 'thermal-management-solutions',
        loadComponent: () =>
          import('./thermal-management/thermal-management.component').then(
            (m) => m.ThermalManagementComponent,
          ),
        title: 'Thermal Simulation & CFD Analysis Services | Whizz Systems',
        data: {
          description:
            'Thermal modelling and CFD analysis for high-power electronics: heatsink design, airflow, cold plates and liquid cooling for AI hardware.',
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'Thermal Simulation & CFD Analysis Services | Whizz Systems',
            description:
              'Thermal modelling and CFD analysis for high-power electronics: heatsink design, airflow, cold plates and liquid cooling for AI hardware.',
            url: 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/thermal-management-solutions/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'CFD thermal simulation of a high-power circuit board',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Thermal Simulation & CFD Analysis Services | Whizz Systems',
            description:
              'Thermal modelling and CFD analysis for high-power electronics: heatsink design, airflow, cold plates and liquid cooling for AI hardware.',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/thermal-management-solutions/hero.png',
            'image:alt':
              'CFD thermal simulation of a high-power circuit board',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions#webpage',
                  url: 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions',
                  name: 'Thermal Simulation & CFD Analysis Services | Whizz Systems',
                  description:
                    'Thermal modelling and CFD analysis for high-power electronics: heatsink design, airflow, cold plates and liquid cooling for AI hardware.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/engg&design/thermal-management-solutions/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions#breadcrumb',
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
                      name: 'Engineering & Design',
                      item: 'https://www.whizzsystems.com/services/engineering-design',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Thermal Management',
                      item: 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions#service',
                  name: 'Thermal Management & CFD Simulation Services',
                  serviceType: 'Thermal Management',
                  description:
                    'Thermal modelling and CFD analysis for high-power electronics: heatsink design, airflow, cold plates and liquid cooling for AI hardware.',
                  provider: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  areaServed: { '@type': 'Place', name: 'Worldwide' },
                  audience: {
                    '@type': 'BusinessAudience',
                    audienceType: 'Hardware and electronics manufacturers',
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions#faq',
                  url: 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is CFD analysis in electronics design?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Computational fluid dynamics analysis simulates how air or liquid moves through a system and how heat transfers into it. It predicts component temperatures under real operating conditions before any hardware is built.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which thermal simulation tools do you use?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Ansys Icepak and Siemens Simcenter Flotherm for system and board-level CFD, with Ansys Mechanical for conduction-dominated and structural-thermal problems.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'At what point does a design need liquid cooling?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The practical crossover for forced air in a standard rack is generally in the region of five hundred to seven hundred watts per rack unit, depending on inlet temperature and acoustic limits. Above that, cold plates or immersion become the realistic option. Simulation establishes the crossover for a specific design rather than a rule of thumb.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can you design the heatsink as well as simulate it?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. We design the thermal solution, simulate it, and produce the mechanical drawings for manufacture.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you validate the thermal model against hardware?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. We instrument the board with thermocouples and thermal imaging and correlate measured temperatures against the model.',
                      },
                    },
                  ],
                },
              ],
            }
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
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id': 'https://www.whizzsystems.com/services/engineering-design/firmware-software-development#faq',
              url: 'https://www.whizzsystems.com/services/engineering-design/firmware-software-development',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What Is Embedded Firmware Development?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Embedded firmware development creates the low-level software that controls and manages electronic hardware. Firmware enables processors, microcontrollers, FPGAs, and peripheral devices to communicate, initialize system resources, and execute application-specific functions that allow hardware to operate reliably.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How Does Firmware Interact With Hardware Components?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Firmware acts as the bridge between hardware and higher-level software by controlling processors, memory, communication interfaces, sensors, and peripheral devices. Close integration between firmware and hardware ensures reliable system operation, efficient resource utilization, and optimal overall performance throughout the product lifecycle.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Why Is Firmware Critical For Embedded Electronic Systems?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Modern electronic products rely on firmware to manage device initialization, communication protocols, hardware control, diagnostics, and system monitoring. Well-designed firmware improves product stability, enables new functionality, simplifies updates, and supports long-term reliability in complex embedded systems.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What Should Be Considered During Firmware Architecture Design?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Firmware architecture should be designed with scalability, maintainability, security, performance, and hardware compatibility in mind. Early collaboration between firmware and hardware engineering teams helps ensure efficient system integration, reduces development challenges, and supports future product enhancements.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How Does Firmware Validation Improve Product Reliability?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Firmware validation verifies that software performs correctly under expected operating conditions while interacting reliably with hardware. Comprehensive testing helps identify functional issues, improve system stability, reduce deployment risks, and ensure products perform consistently throughout their operational lifecycle.'
                  }
                }
              ]
            }
          ],
        },
      },
    ],
  },
];
