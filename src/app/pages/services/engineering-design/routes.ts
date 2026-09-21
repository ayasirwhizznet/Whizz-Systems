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
        title: 'System Architecture & Schematic Design Services',
        data: {
          description:
            'System architecture, block-level design, component selection and schematic capture for complex electronic hardware programmes.',
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'System Architecture & Schematic Design Services',
            description:
              'System architecture, block-level design, component selection and schematic capture for complex electronic hardware programmes.',
            url: 'https://www.whizzsystems.com/services/engineering-design/system-schematic-services',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/system-design/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt': 'System architecture block diagram under review',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'System Architecture & Schematic Design Services',
            description:
              'System architecture, block-level design, component selection and schematic capture for complex electronic hardware programmes.',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/system-design/hero.png',
            'image:alt': 'System architecture block diagram under review',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/system-schematic-services#webpage',
                  url: 'https://www.whizzsystems.com/services/engineering-design/system-schematic-services',
                  name: 'System Architecture & Schematic Design Services',
                  description:
                    'System architecture, block-level design, component selection and schematic capture for complex electronic hardware programmes.',
                  inLanguage: 'en-US',
                  isPartOf: {
                    '@id': 'https://www.whizzsystems.com/#website',
                  },
                  publisher: {
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/services/engg&design/system-design/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/system-schematic-services#breadcrumb',
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
                      name: 'System Design & Schematics',
                      item: 'https://www.whizzsystems.com/services/engineering-design/system-schematic-services',
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/system-schematic-services#service',
                  name: 'System Architecture & Schematic Design Services',
                  serviceType: 'System Design & Schematics',
                  description:
                    'System architecture, block-level design, component selection and schematic capture for complex electronic hardware programmes.',
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
                    'https://www.whizzsystems.com/services/engineering-design/system-schematic-services#faq',
                  url: 'https://www.whizzsystems.com/services/engineering-design/system-schematic-services',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What happens in a system architecture engagement?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We work from your requirements to a block-level architecture: what processing is needed, how blocks interconnect, which interfaces and standards apply, and what the power and thermal budgets are. The output is an architecture document and a trade study explaining why each major decision was made.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you consider component availability during design?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, from the start. Lifecycle status, lead time and second-source availability are assessed at selection rather than discovered at procurement, which is where most schedule risk originates.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which schematic tools do you use?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: "Cadence Allegro and Altium Designer, matching the customer's environment where required so the design package remains usable in house.",
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can you review an architecture we have already defined?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. An independent architecture review before layout begins is one of the cheapest risk reductions available on a hardware programme.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How is the design package handed over?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'You receive the schematic source, a released BOM with approved vendor list, the architecture document and the design review record. The package is yours.',
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
        path: 'fpga-design-services',
        loadComponent: () =>
          import('./fpga/fpga.component').then((m) => m.FpgaComponent),
        title: 'FPGA Design & Development Services | Whizz Systems',
        data: {
          description:
            'FPGA architecture, RTL design, verification and board integration for AMD Versal, Xilinx and Intel devices — designed and built in house.',
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'FPGA Design & Development Services | Whizz Systems',
            description:
              'FPGA architecture, RTL design, verification and board integration for AMD Versal, Xilinx and Intel devices — designed and built in house.',
            url: 'https://www.whizzsystems.com/services/engineering-design/fpga-design-services',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/fpga-design-services/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'AMD Versal FPGA on a Whizz Systems evaluation board',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'FPGA Design & Development Services | Whizz Systems',
            description:
              'FPGA architecture, RTL design, verification and board integration for AMD Versal, Xilinx and Intel devices — designed and built in house.',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/fpga-design-services/hero.png',
            'image:alt':
              'AMD Versal FPGA on a Whizz Systems evaluation board',
          },
          schema: [
            {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.whizzsystems.com/services/engineering-design/fpga-design-services#webpage",
      "url": "https://www.whizzsystems.com/services/engineering-design/fpga-design-services",
      "name": "FPGA Design & Development Services | Whizz Systems",
      "description": "FPGA architecture, RTL design, verification and board integration for AMD Versal, Xilinx and Intel devices — designed and built in house.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.whizzsystems.com/#website"
      },
      "publisher": {
        "@id": "https://www.whizzsystems.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.whizzsystems.com/assets/services/engg&design/fpga-design-services/hero.png"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.whizzsystems.com/services/engineering-design/fpga-design-services#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.whizzsystems.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.whizzsystems.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Engineering & Design",
          "item": "https://www.whizzsystems.com/services/engineering-design"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "FPGA Design",
          "item": "https://www.whizzsystems.com/services/engineering-design/fpga-design-services"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.whizzsystems.com/services/engineering-design/fpga-design-services#service",
      "name": "FPGA Design & Development Services",
      "serviceType": "FPGA Design",
      "description": "FPGA architecture, RTL design, verification and board integration for AMD Versal, Xilinx and Intel devices — designed and built in house.",
      "provider": {
        "@id": "https://www.whizzsystems.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Hardware and electronics manufacturers"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.whizzsystems.com/services/engineering-design/fpga-design-services#faq",
      "url": "https://www.whizzsystems.com/services/engineering-design/fpga-design-services",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you design the FPGA logic, the board, or both?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. Whizz Systems designs the FPGA implementation and the hardware it runs on, and manufactures the board in house. That combination is unusual and it removes the interface between two suppliers where most integration problems occur."
          }
        },
        {
          "@type": "Question",
          "name": "Which FPGA families do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Primarily AMD devices including Versal Premium and Prime, Virtex, Kintex and Zynq, and Intel Agilex and Stratix families."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build a custom FPGA development board?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We design and manufacture custom FPGA platforms, and we also offer a range of existing development and characterisation boards that can be modified rather than designed from scratch."
          }
        },
        {
          "@type": "Question",
          "name": "What is the hardest part of a high-density FPGA board design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Power delivery and transceiver channel design. A large device can draw hundreds of amps across many rails with tight sequencing, and the transceiver channels have almost no loss budget to spare. Both need simulation before layout, not after."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide verification as a separate service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Verification, timing closure and hardware bring-up are each available as standalone engagements on a design produced elsewhere."
          }
        }
      ]
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
        title: 'Mechanical Design & 3D Modelling Services',
        data: {
          description:
            'Enclosure design, thermal-mechanical integration, tolerance analysis and manufacturing drawings for electronic products.',
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'Mechanical Design & 3D Modelling Services',
            description:
              'Enclosure design, thermal-mechanical integration, tolerance analysis and manufacturing drawings for electronic products.',
            url: 'https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/3d-modeling-mechanical-design/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt': '3D model of an electronics enclosure assembly',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Mechanical Design & 3D Modelling Services',
            description:
              'Enclosure design, thermal-mechanical integration, tolerance analysis and manufacturing drawings for electronic products.',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/3d-modeling-mechanical-design/hero.png',
            'image:alt': '3D model of an electronics enclosure assembly',
          },
          schema: [
            {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design#webpage",
      "url": "https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design",
      "name": "Mechanical Design & 3D Modelling Services",
      "description": "Enclosure design, thermal-mechanical integration, tolerance analysis and manufacturing drawings for electronic products.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.whizzsystems.com/#website"
      },
      "publisher": {
        "@id": "https://www.whizzsystems.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.whizzsystems.com/assets/services/engg&design/3d-modeling-mechanical-design/hero.png"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.whizzsystems.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.whizzsystems.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Engineering & Design",
          "item": "https://www.whizzsystems.com/services/engineering-design"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Mechanical Design",
          "item": "https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design#service",
      "name": "Mechanical Design & 3D Modelling Services",
      "serviceType": "Mechanical Design",
      "description": "Enclosure design, thermal-mechanical integration, tolerance analysis and manufacturing drawings for electronic products.",
      "provider": {
        "@id": "https://www.whizzsystems.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Hardware and electronics manufacturers"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design#faq",
      "url": "https://www.whizzsystems.com/services/engineering-design/3d-modeling-mechanical-design",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you design enclosures as well as the electronics inside them?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Enclosure design, thermal-mechanical integration and the manufacturing drawing package are all handled in house, alongside the board design."
          }
        },
        {
          "@type": "Question",
          "name": "What CAD tools do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SolidWorks for mechanical design, with direct exchange of board outlines and component heights between the mechanical and PCB environments so that clashes are found in CAD rather than at first assembly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you perform tolerance stack-up analysis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tolerance stack-up is checked before drawings are released, particularly on connector alignment, thermal interface compression and any press-fit or board-to-board interface."
          }
        },
        {
          "@type": "Question",
          "name": "Can you design for a specific manufacturing process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Designs are developed for the intended process — sheet metal, CNC machining, die casting or injection moulding — because the process constrains geometry far more than most requirements documents acknowledge."
          }
        },
        {
          "@type": "Question",
          "name": "Do you produce the manufacturing drawing package?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You receive fully dimensioned drawings with GD&T, material and finish specifications, and an assembly drawing suitable for quoting and production."
          }
        }
      ]
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services#webpage',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services#breadcrumb',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services#service',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/signal-integrity-simulation-services#faq',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation#webpage',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation#breadcrumb',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation#service',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/power-delivery-network-simulation#faq',
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
            'image:alt': 'CFD thermal simulation of a high-power circuit board',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Thermal Simulation & CFD Analysis Services | Whizz Systems',
            description:
              'Thermal modelling and CFD analysis for high-power electronics: heatsink design, airflow, cold plates and liquid cooling for AI hardware.',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/thermal-management-solutions/hero.png',
            'image:alt': 'CFD thermal simulation of a high-power circuit board',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions#webpage',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions#breadcrumb',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions#service',
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
                  '@id':
                    'https://www.whizzsystems.com/services/engineering-design/thermal-management-solutions#faq',
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
        title: 'Embedded Firmware & Board Bring-Up Software',
        data: {
          description:
            'Board support packages, device drivers, bootloaders, diagnostics and production test firmware for hardware we design and build.',
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'Embedded Firmware & Board Bring-Up Software',
            description:
              'Board support packages, device drivers, bootloaders, diagnostics and production test firmware for hardware we design and build.',
            url: 'https://www.whizzsystems.com/services/engineering-design/firmware-software-development',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/firmware-software/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Engineer debugging bootloader firmware on a development board',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Embedded Firmware & Board Bring-Up Software',
            description:
              'Board support packages, device drivers, bootloaders, diagnostics and production test firmware for hardware we design and build.',
            image:
              'https://www.whizzsystems.com/assets/services/engg&design/firmware-software/hero.png',
            'image:alt':
              'Engineer debugging bootloader firmware on a development board',
          },
          schema: [
            {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.whizzsystems.com/services/engineering-design/firmware-software-development#webpage",
      "url": "https://www.whizzsystems.com/services/engineering-design/firmware-software-development",
      "name": "Embedded Firmware & Board Bring-Up Software",
      "description": "Board support packages, device drivers, bootloaders, diagnostics and production test firmware for hardware we design and build.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.whizzsystems.com/#website"
      },
      "publisher": {
        "@id": "https://www.whizzsystems.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.whizzsystems.com/assets/services/engg&design/firmware-software/hero.png"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.whizzsystems.com/services/engineering-design/firmware-software-development#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.whizzsystems.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.whizzsystems.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Engineering & Design",
          "item": "https://www.whizzsystems.com/services/engineering-design"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Firmware & Software",
          "item": "https://www.whizzsystems.com/services/engineering-design/firmware-software-development"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.whizzsystems.com/services/engineering-design/firmware-software-development#service",
      "name": "Embedded Firmware & Low-Level Software Development",
      "serviceType": "Firmware & Software",
      "description": "Board support packages, device drivers, bootloaders, diagnostics and production test firmware for hardware we design and build.",
      "provider": {
        "@id": "https://www.whizzsystems.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Hardware and electronics manufacturers"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.whizzsystems.com/services/engineering-design/firmware-software-development#faq",
      "url": "https://www.whizzsystems.com/services/engineering-design/firmware-software-development",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What kind of firmware does Whizz Systems write?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Low-level, hardware-adjacent firmware: board support packages, bootloaders, device drivers, power sequencing, diagnostics and production test software. We do not build application software."
          }
        },
        {
          "@type": "Question",
          "name": "Why does firmware belong with the hardware team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bring-up problems are rarely purely hardware or purely software. When the same team owns the schematic, the layout and the boot code, a failure that looks like a driver bug and is actually a power sequencing error gets found in hours rather than weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Do you develop production test firmware?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Production test firmware exercises each interface, records results against limits, and handles programming, calibration and serialisation on the line. It is developed alongside the hardware, not after it."
          }
        },
        {
          "@type": "Question",
          "name": "Which operating systems and environments do you support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Embedded Linux including Yocto-based builds, common real-time operating systems, and bare-metal implementations where determinism or footprint requires it."
          }
        },
        {
          "@type": "Question",
          "name": "Can you take over firmware for an existing product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, provided the source and toolchain are available. We start with a build and boot reproduction before making any changes."
          }
        }
      ]
    }
  ]
}

          ],
        },
      },
    ],
  },
];
