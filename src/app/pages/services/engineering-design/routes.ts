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
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id': 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services#faq',
              url: 'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What Is Signal Integrity Simulation?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Signal integrity simulation evaluates how high-speed electrical signals behave throughout a PCB and electronic system before hardware is manufactured. By analyzing impedance, reflections, crosstalk, insertion loss, and timing characteristics, engineers can identify potential performance issues early and optimize designs for reliable high-speed operation.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why Is Signal Integrity Analysis Important For High-Speed PCB Designs?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'As interface speeds continue to increase, maintaining signal integrity becomes essential for reliable communication between devices. Signal integrity analysis helps engineers verify routing strategies, optimize PCB stack-ups, control impedance, and reduce signal degradation, ensuring that complex electronic systems perform as intended under demanding operating conditions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What Causes Signal Integrity Issues In Electronic Systems?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Signal integrity problems commonly result from impedance discontinuities, excessive trace lengths, poor PCB stack-up design, crosstalk, reflections, inadequate grounding, and improper component placement. Addressing these factors during design and simulation helps minimize performance issues before fabrication and reduces the need for costly hardware revisions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'When Should Signal Integrity Simulations Be Performed?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Signal integrity simulations should be incorporated early in the hardware development process—before PCB fabrication begins. Performing simulation during schematic review, stack-up definition, and PCB layout allows engineers to validate design decisions, identify risks early, and optimize performance before manufacturing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does Simulation Reduce PCB Redesigns?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simulation allows engineers to evaluate critical electrical performance before physical prototypes are built. By identifying signal quality issues early, teams can make informed design improvements, reduce prototype iterations, shorten development cycles, and improve first-pass success during manufacturing.',
                  },
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
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id': 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation#faq',
              url: 'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What Is A Power Delivery Network (PDN) Simulation?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Power Delivery Network (PDN) simulation analyzes how electrical power is distributed throughout a PCB to ensure components receive stable, reliable voltage under all operating conditions. Evaluating the power network during design helps engineers optimize power integrity, minimize voltage fluctuations, and support consistent system performance.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why Is Power Integrity Critical For Modern Electronics?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Today\'s high-performance electronic systems require clean and stable power to operate reliably. Insufficient power integrity can lead to voltage ripple, excessive noise, timing instability, and degraded system performance. Careful power delivery planning helps ensure processors, FPGAs, memory, and other high-speed devices receive the power they need to perform consistently.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Does PDN Simulation Improve System Reliability?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'PDN simulation identifies potential power distribution issues before manufacturing by evaluating current flow, voltage stability, decoupling effectiveness, and power plane performance. Addressing these issues early reduces hardware failures, improves electrical stability, and supports reliable operation throughout the product lifecycle.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What Causes Voltage Drop And Power Integrity Issues?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Voltage drop and power integrity problems may result from insufficient power plane design, excessive current demand, inadequate decoupling, poor PCB layout, or inefficient component placement. Evaluating these factors through simulation enables engineers to optimize power distribution and improve overall system performance.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'When Should Engineers Perform PDN Analysis?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'PDN analysis should begin during the PCB design process before manufacturing. Evaluating power distribution early enables engineering teams to optimize board architecture, verify power delivery strategies, and minimize costly design changes later in development.',
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
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              '@id': 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions#faq',
              url: 'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Why Is Thermal Management Important In Electronic Product Design?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Effective thermal management helps electronic systems maintain safe operating temperatures while delivering consistent performance. As computing power and component densities continue to increase, managing heat becomes essential for protecting sensitive components, extending product lifespan, and ensuring reliable operation in demanding environments.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Is Thermal Analysis Performed During Hardware Development?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Thermal analysis uses simulation and engineering evaluation to assess heat generation, airflow, component temperatures, and cooling performance before hardware enters production. These insights help engineers optimize component placement, cooling strategies, and mechanical design to improve overall system reliability.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What Causes Overheating In High-Performance Electronics?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Overheating can result from increasing power densities, inadequate cooling, restricted airflow, inefficient enclosure design, or poor thermal interfaces between components and cooling solutions. Identifying these factors early allows engineering teams to implement effective thermal management strategies before manufacturing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How Do Thermal Simulations Improve Product Reliability?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Thermal simulations predict how heat moves throughout an electronic system under various operating conditions. This enables engineers to identify thermal hotspots, optimize cooling solutions, validate design decisions, and reduce the risk of overheating, helping products achieve greater reliability and long-term performance.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'When Should Thermal Considerations Be Addressed In Product Development?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Thermal management should be considered from the earliest stages of product development. Integrating thermal analysis alongside electrical and mechanical design allows engineering teams to optimize system performance, reduce design revisions, and ensure products remain reliable throughout manufacturing and deployment.',
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
