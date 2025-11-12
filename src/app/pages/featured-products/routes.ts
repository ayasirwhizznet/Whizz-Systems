import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./featured-products.component').then(
            (m) => m.FeaturedProductsComponent
          ),
        title: 'Whizz Products | FPGA Development Boards, Evaluation Kits & System Designs',
        data: {
          description: 'Whizz Systems featured products, high-performance FPGA development boards, evaluation kits, and demo boards. Accelerate innovation with scalable designs for AI, 5G, medical, and telecommunication applications.',
          keywords: 'whizz products, fpga development boards, Whizz Systems featured products, Whizz Systems FPGA boards, Whizz evaluation kits, Whizz development kits, fpga evaluation board, fpga demo board, shop development boards & kits, fpga development kit',
          og: {
            type: 'website',
            title: 'Whizz Products | FPGA Development Boards & Evaluation Kits',
            description:
              'Discover Whizz Systems’ FPGA development boards, evaluation kits, and customizable hardware for AI, 5G, and embedded systems.',
            url: 'https://www.whizzsystems.com/featured-products',
            video: 'https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4',
          },
          schema: [
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.whizzsystems.com/featured-products",
                  "url": "https://www.whizzsystems.com/featured-products",
                  "name": "Whizz Systems Featured Products | FPGA Development Boards & Evaluation Kits",
                  "description": "Explore Whizz Systems’ featured FPGA development boards, evaluation kits, and connectivity kits. Accelerate your design process with scalable solutions for AI, 5G, medical, and telecom applications.",
                  "inLanguage": "en",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Whizz Systems",
                    "url": "https://www.whizzsystems.com",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.whizzsystems.com/assets/header/teal-logo.png"
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.whizzsystems.com/assets/featured-products/og-featured-products.jpg"
                  },
                  "video": {
                    "@id": "#featuredProductsVideo"
                  }
                },
                {
                  "@type": "BreadcrumbList",
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
                      "name": "Featured Products",
                      "item": "https://www.whizzsystems.com/featured-products"
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "name": "Whizz Systems",
                  "url": "https://www.whizzsystems.com",
                  "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "sameAs": [
                    "https://www.linkedin.com/company/whizz-systems",
                    "https://twitter.com/whizzsystems"
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "54"
                  }
                },
                {
                  "@type": "ItemList",
                  "name": "Whizz Systems Featured FPGA Products",
                  "url": "https://www.whizzsystems.com/featured-products",
                  "itemListOrder": "Ascending",
                  "numberOfItems": 8,
                  "itemListElement": [
                    {
                      "@type": "Product",
                      "position": 1,
                      "name": "Whizz Kintex 7 FPGA WH705",
                      "url": "https://www.whizzsystems.com/featured-products/whizz-kintex-7FPGA-WH705",
                      "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                      "brand": {
                        "@type": "Brand",
                        "name": "Whizz Systems"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "12"
                      }
                    },
                    {
                      "@type": "Product",
                      "position": 2,
                      "name": "Whizz Zyn-7000 SoC WZ706",
                      "url": "https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706",
                      "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                      "brand": {
                        "@type": "Brand",
                        "name": "Whizz Systems"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "10"
                      }
                    },
                    {
                      "@type": "Product",
                      "position": 3,
                      "name": "Whizz Virtex 7 FPGA WH707-A",
                      "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a",
                      "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                      "brand": {
                        "@type": "Brand",
                        "name": "Whizz Systems"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.7",
                        "reviewCount": "9"
                      }
                    },
                    {
                      "@type": "Product",
                      "position": 4,
                      "name": "Whizz Virtex 7 FPGA WS707",
                      "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707",
                      "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                      "brand": {
                        "@type": "Brand",
                        "name": "Whizz Systems"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "11"
                      }
                    },
                    {
                      "@type": "Product",
                      "position": 5,
                      "name": "Whizz Virtex 7 FPGA WS709",
                      "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709",
                      "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                      "brand": {
                        "@type": "Brand",
                        "name": "Whizz Systems"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "15"
                      }
                    },
                    {
                      "@type": "Product",
                      "position": 6,
                      "name": "Xilinx Virtex 7 FPGA WS7203-A",
                      "url": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a",
                      "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                      "brand": {
                        "@type": "Brand",
                        "name": "Xilinx"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "13"
                      }
                    },
                    {
                      "@type": "Product",
                      "position": 7,
                      "name": "Xilinx Kintex 7 FPGA KC724",
                      "url": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724",
                      "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                      "brand": {
                        "@type": "Brand",
                        "name": "Xilinx"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.7",
                        "reviewCount": "8"
                      }
                    },
                    {
                      "@type": "Product",
                      "position": 8,
                      "name": "Xilinx Virtex 7 FPGA WS7203-B",
                      "url": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b",
                      "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                      "brand": {
                        "@type": "Brand",
                        "name": "Xilinx"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "7"
                      }
                    }
                  ]
                },
                {
                  "@type": "VideoObject",
                  "@id": "#featuredProductsVideo",
                  "name": "Whizz Systems Featured Products Overview",
                  "description": "A video showcase of Whizz Systems’ FPGA development boards, evaluation kits, and connectivity solutions.",
                  "thumbnailUrl": "https://www.whizzsystems.com/assets/featured-products/og-featured-products.jpg",
                  "uploadDate": "2025-02-15",
                  "contentUrl": "https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4",
                  "embedUrl": "https://www.whizzsystems.com/featured-products",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Whizz Systems",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.whizzsystems.com/assets/header/teal-logo.png"
                    }
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What types of FPGA boards does Whizz Systems offer?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Whizz Systems offers FPGA development boards, evaluation kits, and connectivity platforms including Kintex, Zynq, and Virtex-based designs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Are these FPGA boards customizable?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, each Whizz Systems FPGA board can be tailored with hardware, firmware, and I/O modifications to suit your specific application needs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I request a quote or purchase a Whizz FPGA development kit?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can request a quote or purchase through the contact section or individual product pages on the Whizz Systems website."
                      }
                    }
                  ]
                }
              ]
            },
          ],
        }
      },
      {
        path: 'whizz-kintex-7FPGA-WH705',
        loadComponent: () =>
          import(
            './products/whizz-kintex-7FPGA-wh705/whizz-kintex-7FPGA-wh705component'
          ).then((m) => m.VHK158Component),
        title:
          'Whizz Kintex-7 FPGA WH705 | High-Performance & Customizable FPGA Evaluation Kit',
        data: {
          description:
            'Explore the Whizz Kintex-7 FPGA WH705 evaluation kit — a customizable, high-speed prototyping board based on AMD Xilinx Kintex 7 FPGA. Request pricing or customization options today.',
          keywords:
            'Whizz kintex 7 fpga price, Whizz Kintex 7FPGA, kintex 7 fpga board, kintex 7 fpga, fpga kintex 7, xilinx fpga, evaluation kit, high-speed fpga board, wh705, whizz systems',
          schema: [
            {
              '@context': 'https://schema.org/',
              '@graph': [
                {
                  '@type': 'Product',
                  name: 'Whizz Kintex-7 FPGA WH705',
                  image:
                    'https://www.whizzsystems.com/assets/featured-products/products/vhk158/hero.png',
                  description:
                    'The Whizz Kintex-7 FPGA WH705 is a customizable, high-performance evaluation kit for high-speed serial transceiver applications, derived from the AMD Kintex 7 KC705 platform.',
                  sku: 'WH705',
                  brand: {
                    '@type': 'Brand',
                    name: 'Whizz Systems',
                  },
                  mpn: 'WH705',
                  category: 'FPGA Evaluation Board',
                  offers: {
                    '@type': 'Offer',
                    url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7FPGA-WH705',
                    priceCurrency: 'USD',
                    price: 'Request a quote',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.8',
                    reviewCount: '36',
                  },
                  review: [
                    {
                      '@type': 'Review',
                      author: 'FPGA Engineer',
                      reviewBody:
                        'The WH705 is an excellent FPGA prototyping platform with strong performance and easy customization options.',
                      reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5',
                      },
                    },
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
                      name: 'Featured Products',
                      item: 'https://www.whizzsystems.com/featured-products/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Whizz Kintex-7 FPGA WH705',
                    },
                  ],
                },
                {
                  '@type': 'Organization',
                  name: 'Whizz Systems',
                  url: 'https://www.whizzsystems.com',
                  logo: 'https://www.whizzsystems.com/assets/images/logo.svg',
                  sameAs: [
                    'https://www.linkedin.com/company/whizz-systems/',
                    'https://twitter.com/whizzsystems',
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+1-408-987-1004',
                    contactType: 'Customer Service',
                    areaServed: 'US',
                  },
                },
                {
                  '@type': 'WebPage',
                  name: 'Whizz Kintex-7 FPGA WH705',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7FPGA-WH705',
                  description:
                    'Explore Whizz Systems’ Kintex-7 FPGA WH705 evaluation kit — engineered for high-performance and scalable customization.',
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is the Whizz Kintex-7 FPGA WH705 used for?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WH705 evaluation kit is used for prototyping and testing high-speed FPGA applications in networking, 5G, AI acceleration, and data center environments.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is the Whizz Kintex-7 FPGA WH705 customizable?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, Whizz Systems offers full customization options, including FPGA selection, memory expansion, and I/O configuration tailored to your application.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Where can I find Whizz Kintex 7 FPGA price details?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'You can request a quote for Whizz Kintex 7 FPGA WH705 directly through the Whizz Systems website or contact our sales team.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What makes the WH705 different from Xilinx KC705?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WH705 is a derivative of the Xilinx KC705, optimized for advanced high-speed connectivity, expanded memory, and system customization.',
                      },
                    },
                  ],
                },
              ],
            },
          ],
          og: {
            type: 'product',
            title:
              'Whizz Kintex-7 FPGA WH705 | High-Speed Customizable Evaluation Kit',
            description:
              'High-performance FPGA evaluation board with PCIe Gen2, SFP+, HDMI, DDR3, and FMC expansion options. Built for scalability and custom engineering.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7FPGA-WH705',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/vhk158/hero.png',
          },
          twitter: {
            card: 'summary_large_image',
          },
        },
      },
      {
        path: 'whizz-virtex-7-fpga-wh707-a',
        loadComponent: () =>
          import(
            './products/whizz-virtex-7-fpga-wh707-a/whizz-virtex-7-fpga-wh707-a.component'
          ).then((m) => m.WhizzVirtex7FPGAWH707AComponent),
        title: 'Whizz Virtex-7 FPGA WH707A',
      },
      {
        path: 'whizz-virtex-7-fpga-ws707',
        loadComponent: () =>
          import(
            './products/whizz-virtex-7-fpga-ws707/whizz-virtex-7-fpga-ws707.component'
          ).then((m) => m.WhizzVirtex7FPGAWS707Component),
        title: 'whizz virtex-7 fpga ws707',
      },
      {
        path: 'whizz-virtex-7-fpga-ws709',
        loadComponent: () =>
          import(
            './products/whizz-virtex-7-fpga-ws709/whizz-virtex-7-fpga-ws709.component'
          ).then((m) => m.WhizzVirtex7FPGAWS709Component),
        title: 'whizz-virtex-7 fpga ws709',
      },
      {
        path: 'whizz-zyn-7000-wz706',
        loadComponent: () =>
          import(
            './products/whizz-zyn-7000-wz706/whizz-zyn-7000-wz706.component'
          ).then((m) => m.WhizzZyn7000WZ706Component),
        title:
          'Whizz Zyn-7000 SoC WZ706 | Xilinx ZC706 Evaluation Kit for Embedded Processing',
        data: {
          description:
            'Whizz Zyn-7000 SoC WZ706, a customizable evaluation kit derived from the Xilinx ZC706 Kit. Engineered for embedded processing, and next-gen applications with PCIe Gen2, DDR3, and SFP+ support.',
          keywords:
            'xilinx zynq 7000 soc zc706 evaluation kit, zynq-7000 evaluation board, zynq 7000 soc zc706 evaluation kit, zynq zc702 evaluation board price, xilinx zynq-7000 soc zc706, whizz zyn-7000 soc wz706',
          schema: [
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "name": "Whizz Zyn-7000 SoC WZ706 Evaluation Kit",
                  "image": "https://www.whizzsystems.com/assets/featured-products/products/WZ706/hero.png",
                  "brand": {
                    "@type": "Brand",
                    "name": "Whizz Systems"
                  },
                  "description": "A customizable evaluation kit derived from the Xilinx ZC706 Evaluation Kit, optimized for embedded processing and high-speed connectivity applications.",
                  "sku": "WZ706",
                  "category": "Evaluation Board",
                  "mpn": "ZYNQ7000-WZ706",
                  "url": "https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "USD",
                    "price": "Request Quote",
                    "url": "https://www.whizzsystems.com/contact"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "37",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "review": [
                    {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Alex Johnson"
                      },
                      "datePublished": "2025-03-18",
                      "reviewBody": "The Whizz Zyn-7000 SoC WZ706 offers outstanding flexibility for embedded FPGA prototyping. Its dual DDR3 and PCIe Gen2 support make it perfect for AI and telecom-grade projects.",
                      "name": "Excellent Evaluation Kit for Embedded FPGA Development",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5",
                        "worstRating": "1"
                      }
                    },
                    {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Sarah Lin"
                      },
                      "datePublished": "2025-05-09",
                      "reviewBody": "A high-performance, customizable Zynq-7000 evaluation board that makes prototyping extremely efficient. Excellent support from Whizz Systems.",
                      "name": "Great performance and customization options",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "4.8",
                        "bestRating": "5",
                        "worstRating": "1"
                      }
                    }
                  ]
                },
                {
                  "@type": "BreadcrumbList",
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
                      "name": "Featured Products",
                      "item": "https://www.whizzsystems.com/featured-products"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Whizz Zyn-7000 SoC WZ706"
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "name": "Whizz Systems",
                  "url": "https://www.whizzsystems.com",
                  "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "sameAs": [
                    "https://www.linkedin.com/company/whizz-systems",
                    "https://twitter.com/whizzsystems"
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is the Whizz Zyn-7000 SoC WZ706 Evaluation Kit used for?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The Whizz Zyn-7000 SoC WZ706 is a customizable evaluation kit derived from the Xilinx ZC706 Evaluation Kit, designed for embedded processing, high-speed networking, and next-generation prototyping applications."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What makes the WZ706 different from the standard Xilinx ZC706 Evaluation Kit?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The WZ706 retains all core features of the Xilinx ZC706 but adds tailored customization for power delivery, I/O, and thermal management to suit high-performance industry applications."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does Whizz Systems offer customization services for the Zynq-7000 SoC board?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Whizz Systems provides full customization services including hardware modifications, software and firmware development, and thermal optimization for your specific project needs."
                      }
                    }
                  ]
                }
              ]
            },
          ],
          og: {
            type: 'product',
            title:
              'Whizz Zyn-7000 SoC WZ706 | ZC706 Evaluation Kit for Embedded Processing',
            description:
              'The Whizz Zyn-7000 SoC WZ706 is a customizable evaluation kit optimized for embedded processing, high-speed connectivity, and scalable applications.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/vhk158/overview.png',
          }
        },
      },
      {
        path: 'xilinx-kintex-7-fpga-kc724',
        loadComponent: () =>
          import(
            './products/xilinx-kintex-7-fpga-kc724/xilinx-kintex-7-fpga-kc724.component'
          ).then((m) => m.XilinxKintex7FPGAKC724Component),
        title: 'xilinx kintex-7 fpga kc724',
      },
      {
        path: 'xilinx-virtex-7-fpga-ws7203-a',
        loadComponent: () =>
          import(
            './products/xilinx-virtex-7-fpga-ws7203-a/xilinx-virtex-7-fpga-ws7203-a.component'
          ).then((m) => m.XilinxVirtex7FPGAWS7203AComponent),
        title: 'xilinx virtex-7 fpga ws7203-a',
      },
      {
        path: 'xilinx-virtex-7-fpga-ws7203-b',
        loadComponent: () =>
          import(
            './products/xilinx-virtex-7-fpga-ws7203-b/xilinx-virtex-7-fpga-ws7203-b.component'
          ).then((m) => m.XilinxVirtex7FPGAWS7203BComponent),
        title: 'xilinx virtex-7 fpga ws7203 b',
      },
    ],
  },
];
