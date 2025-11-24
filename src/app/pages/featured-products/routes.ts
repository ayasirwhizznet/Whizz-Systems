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
        title: 'Whizz Virtex-7 FPGA WH707A | Customizable AMD Virtex-7 VC707 Kit',
        data: {
          description:
            'Explore the Whizz Virtex-7 FPGA WH707A— a customizable AMD Virtex-7 VC707 evaluation kit optimized for high-speed, scalable prototyping. Request pricing today.',
          keywords:
            'whizz virtex-7 fpga wh707a, amd virtex-7 vc707 evaluation kit, virtex-7 fpga evaluation kit, virtex-7 fpga, fpga virtex-7, xilinx fpga, evaluation kit, high-speed fpga board, wh707a, whizz systems',
          og: {
            type: 'product',
            title: 'Whizz Virtex-7 FPGA WH707A | Customizable AMD Virtex-7 VC707 Evaluation Kit',
            description:
              'A high-performance, customizable AMD Virtex-7 VC707 derivative for advanced prototyping and high-speed FPGA applications.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a',
            image: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
            site_name: 'Whizz Systems',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Virtex-7 FPGA WH707A | Customizable AMD Virtex-7 VC707 Kit',
            description:
              'High-performance Virtex-7 FPGA WH707A evaluation kit engineered for scalable prototyping. Request a quote.',
            image: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
          },
          schema: [
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a",
                  "name": "Whizz Virtex-7 FPGA WH707A",
                  "description": "A customizable AMD Virtex-7 FPGA VC707 derivative optimized for high-speed prototyping.",
                  "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a"
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Featured Products",
                      "item": "https://www.whizzsystems.com/featured-products"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Whizz Virtex-7 FPGA WH707A",
                      "item": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a"
                    }
                  ]
                },
                {
                  "@type": "Product",
                  "@id": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a#product",
                  "name": "Whizz Virtex-7 FPGA WH707A",
                  "brand": {
                    "@type": "Brand",
                    "name": "Whizz Systems"
                  },
                  "description": "A customizable AMD Virtex 7 FPGA VC707 evaluation kit optimized for high-speed applications.",
                  "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "sku": "WH707A",
                  "mpn": "WH707A",
                  "productID": "WH707A",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "ratingCount": "12"
                  }
                },
                {
                  "@type": "VideoObject",
                  "name": "Whizz Virtex-7 FPGA WH707A Overview",
                  "description": "Overview video of the Virtex 7 WH707A FPGA evaluation kit.",
                  "thumbnailUrl": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "uploadDate": "2024-01-01",
                  "contentUrl": "https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4",
                  "embedUrl": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a"
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Is the Whizz Virtex-7 FPGA WH707A customizable?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The WH707A is a fully customizable derivative of the AMD Virtex-7 VC707 Evaluation Kit and can be modified for connectivity, memory, thermal, and system-level needs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is the Virtex-7 FPGA WH707A suitable for high-speed applications?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The WH707A is optimized for high-speed serial transceiver evaluation and complex FPGA prototyping, making it ideal for networking, telecom, and compute-intensive systems."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I get the price for the WH707A kit?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pricing is available upon request. Contact Whizz Systems to get a customized quote for the WH707A evaluation kit."
                      }
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "name": "Whizz Systems",
                  "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "url": "https://www.whizzsystems.com"
                }
              ]
            }
          ],
        },
      },
      {
        path: 'whizz-virtex-7-fpga-ws707',
        loadComponent: () =>
          import(
            './products/whizz-virtex-7-fpga-ws707/whizz-virtex-7-fpga-ws707.component'
          ).then((m) => m.WhizzVirtex7FPGAWS707Component),
        title: 'Whizz Virtex-7 FPGA WS707 | Customizable Virtex-7 Evaluation Kit',
        data: {
          description:
            'Whizz Virtex-7 FPGA WS707— a customizable high-speed AMD Virtex-7 VC707 derivative evaluation kit engineered for advanced prototyping, serial connectivity, and scalable system development.',
          keywords:
            'Whizz Virtex 7 FPGA WS 707, Whizz Virtex-7 FPGA WS707 price, customizable Virtex 7 FPGA WS707 evaluation kit, Virtex 7 FPGA WS707 for sale, Virtex 7 FPGA WS707 evaluation kit price, AMD Virtex 7 FPGA board, FPGA evaluation kit',
          og: {
            type: 'product',
            title: 'Whizz Virtex-7 FPGA WS707 | Customizable Virtex-7 Evaluation Kit',
            description:
              'A high-performance, customizable AMD Virtex-7 VC707 derivative evaluation kit for next-generation prototyping and high-speed FPGA development.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707',
            image: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
            site_name: 'Whizz Systems',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Virtex-7 FPGA WS707 | Customizable High-Speed Evaluation Kit',
            description:
              'High-performance Virtex-7 WS707 FPGA evaluation kit engineered for advanced prototyping and connectivity applications.',
            image: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
          },
          schema: [
            {
              "@context": "https://schema.org",
              "@graph": [

                {
                  "@type": "Product",
                  "name": "Whizz Featured FPGA Products",
                  "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "description": "Whizz Systems provides a range of high-performance FPGA evaluation kits including Virtex-7, Kintex-7, and Zynq-7000 based development boards.",
                  "brand": { "@type": "Brand", "name": "Whizz Systems" },
                  "url": "https://www.whizzsystems.com/featured-products",
                  "category": "FPGA Evaluation Kits",
                  "sku": "MULTI-FPGA-LINEUP",
                  "mpn": "WS-FPGA-SERIES",
                  "offers": {
                    "@type": "Offer",
                    "price": "0.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": "https://www.whizzsystems.com/contact"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "114"
                  },
                  "hasPart": {
                    "@type": "ItemList",
                    "name": "Whizz Featured Products List",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Whizz Kintex-7 FPGA WH705",
                        "url": "https://www.whizzsystems.com/featured-products/whizz-kintex-7FPGA-WH705"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Whizz Zynq-7000 WZ706",
                        "url": "https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Whizz Virtex-7 FPGA WH707-A",
                        "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a"
                      },
                      {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "Whizz Virtex-7 FPGA WS707",
                        "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707"
                      },
                      {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "Whizz Virtex-7 FPGA WS709",
                        "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709"
                      },
                      {
                        "@type": "ListItem",
                        "position": 6,
                        "name": "Xilinx Virtex-7 FPGA WS7203-A",
                        "url": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a"
                      },
                      {
                        "@type": "ListItem",
                        "position": 7,
                        "name": "Xilinx Kintex-7 FPGA KC724",
                        "url": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724"
                      },
                      {
                        "@type": "ListItem",
                        "position": 8,
                        "name": "Xilinx Virtex-7 FPGA WS7203-B",
                        "url": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b"
                      }
                    ]
                  }
                },

                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.whizzsystems.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Featured Products", "item": "https://www.whizzsystems.com/featured-products" }
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
                  "@type": "WebPage",
                  "name": "Featured FPGA Development Boards & Evaluation Kits",
                  "url": "https://www.whizzsystems.com/featured-products",
                  "description": "High-performance FPGA evaluation boards including Virtex-7, Kintex-7, and Zynq-based platforms by Whizz Systems.",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Whizz Systems",
                    "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png"
                  }
                },

                {
                  "@type": "VideoObject",
                  "name": "Whizz Systems Featured FPGA Products",
                  "description": "Overview video showcasing Whizz Systems’ lineup of FPGA development boards and high-speed evaluation kits.",
                  "thumbnailUrl": "https://www.whizzsystems.com/assets/featured-products/og-featured-products.jpg",
                  "contentUrl": "https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4",
                  "embedUrl": "https://www.whizzsystems.com/featured-products",
                  "uploadDate": "2025-02-15",
                  "duration": "PT2M30S",
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
                      "name": "What FPGA boards are included in Whizz Systems' featured lineup?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The lineup includes Virtex-7, Kintex-7, and Zynq-7000 based evaluation kits designed for high-speed prototyping and embedded development."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can these boards be customized?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Whizz Systems provides complete hardware, software, and firmware customization services."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I request a quote or buy a kit?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can request a quote via the Whizz Systems contact page or visit each product's page for more details."
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
        path: 'whizz-virtex-7-fpga-ws709',
        loadComponent: () =>
          import(
            './products/whizz-virtex-7-fpga-ws709/whizz-virtex-7-fpga-ws709.component'
          ).then((m) => m.WhizzVirtex7FPGAWS709Component),
        title: 'Whizz Virtex-7 FPGA WS709 – Customizable High-Bandwidth Connectivity Kit',
        data: {
          description:
            'Whizz Virtex-7 FPGA WS709, a customizable high-bandwidth platform based on the VC709 Connectivity Kit. Built for high-speed networking, data transfer, AI acceleration, and aerospace applications.',
          keywords:
            'Whizz Virtex 7 FPGA WS709, customizable Virtex 7 FPGA WS709 evaluation kit, Virtex 7 FPGA VC709 connectivity kit, FPGA high-speed connectivity, WS709 price',
          og: {
            type: 'product',
            title: 'Whizz Virtex-7 FPGA WS709 – High-Speed Connectivity Evaluation Kit',
            description:
              'A high-performance, customizable Virtex-7 connectivity platform engineered for next-gen high-bandwidth applications.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709',
            image: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
          },
          schema: [
            {
              "@context": "https://schema.org",
              "@graph": [

                {
                  "@type": "Product",
                  "name": "Whizz Virtex-7 FPGA WS709",
                  "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "description": "The Whizz Virtex-7 FPGA WS709 is a customizable high-bandwidth platform derived from the AMD Xilinx VC709 Connectivity Kit, engineered for 40Gb/s connectivity and high-performance applications.",
                  "brand": { "@type": "Brand", "name": "Whizz Systems" },
                  "sku": "WS709",
                  "mpn": "WS709-FPGA-KIT",
                  "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709",
                  "category": "FPGA Evaluation Kit",
                  "offers": {
                    "@type": "Offer",
                    "price": "0.00",
                    "priceCurrency": "USD",
                    "url": "https://www.whizzsystems.com/contact",
                    "availability": "https://schema.org/InStock"
                  }
                },

                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.whizzsystems.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Featured Products", "item": "https://www.whizzsystems.com/featured-products" },
                    { "@type": "ListItem", "position": 3, "name": "Whizz Virtex-7 FPGA WS709", "item": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709" }
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
                  "@type": "WebPage",
                  "name": "Whizz Virtex-7 FPGA WS709 – High-Bandwidth Connectivity Kit",
                  "description": "A customizable 40Gb/s Virtex-7 connectivity platform designed for next-gen high-speed networking and computing applications.",
                  "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709"
                },

                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is the Whizz Virtex-7 FPGA WS709?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The WS709 is a high-speed connectivity platform based on the AMD Xilinx VC709 Connectivity Kit, supporting the XC7VX2000T FPGA."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can the WS709 be customized?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Whizz Systems offers complete hardware, firmware, and FPGA customization for the WS709 to match specific application needs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I get pricing for the WS709 kit?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pricing can be requested directly through the Whizz Systems contact page."
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
        title: 'Whizz Xilinx Kintex-7 FPGA KC724 | Kintex-7 KC724 Characterization Kit',
        data: {
          description:
            'Whizz Xilinx Kintex-7 FPGA KC724 — a customizable Kintex-7 KC724 characterization kit for 12.5Gbps GTX transceiver testing, IBERT, Samtec BullsEye connectivity and full customization services.',
          keywords:
            'AMD Kintex 7 FPGA KC724 Characterization Kit, customizeable Kintex 7 FPGA KC724 Characterization Kit, customizebale Xilinx Kintex-7 FPGA KC724, Whizz Xilinx Kintex-7 FPGA KC724, KC724 evaluation kit',
          og: {
            title: "Whizz Xilinx Kintex-7 FPGA KC724 | Transceiver Characterization Kit",
            description:
              "High-speed transceiver characterization platform supporting 16 GTX transceivers at 12.5Gbps. Contact Whizz Systems for customization and pricing.",
            image: "https://www.whizzsystems.com/assets/featured-products/products/KC724/hero.png",
            url: "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724",
            type: "product"
          },

          twitter: {
            card: "summary_large_image",
            title: "Whizz Xilinx Kintex-7 FPGA KC724",
            description:
              "Customizable Kintex-7 KC724 characterization kit for GTX transceiver evaluation and signal integrity testing.",
            image: "https://www.whizzsystems.com/assets/featured-products/products/KC724/hero.png"
          },
          schema: [
            {
              "@context": "https://schema.org",
              "@graph": [

                {
                  "@type": "WebSite",
                  "@id": "https://www.whizzsystems.com/#website",
                  "url": "https://www.whizzsystems.com/",
                  "name": "Whizz Systems",
                  "publisher": { "@id": "https://www.whizzsystems.com/#organization" }
                },

                {
                  "@type": "Organization",
                  "@id": "https://www.whizzsystems.com/#organization",
                  "name": "Whizz Systems",
                  "url": "https://www.whizzsystems.com",
                  "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "sameAs": [
                    "https://www.linkedin.com/company/whizz-systems",
                    "https://twitter.com/whizzsystems"
                  ]
                },

                {
                  "@type": "WebPage",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#webpage",
                  "url": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724",
                  "name": "High-Speed Transceiver Characterization with the Xilinx Kintex-7 FPGA KC724",
                  "description": "The Whizz Xilinx Kintex-7 FPGA KC724 is a comprehensive characterization kit for evaluating 12.5Gbps GTX transceivers and signal integrity testing.",
                  "isPartOf": { "@id": "https://www.whizzsystems.com/#website" },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.whizzsystems.com/assets/featured-products/products/KC724/hero.png"
                  },
                  "breadcrumb": { "@id": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#breadcrumb" }
                },

                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.whizzsystems.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Featured Products", "item": "https://www.whizzsystems.com/featured-products" },
                    { "@type": "ListItem", "position": 3, "name": "Xilinx Kintex-7 FPGA KC724" }
                  ]
                },

                {
                  "@type": "Product",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#product",
                  "name": "Whizz Xilinx Kintex-7 FPGA KC724",
                  "description": "A Kintex-7 KC724 characterization kit supporting 16 GTX transceivers at 12.5Gbps, Samtec BullsEye connectivity, IBERT demo compatibility, and full customization services.",
                  "image": "https://www.whizzsystems.com/assets/featured-products/products/KC724/hero.png",
                  "sku": "KC724",
                  "mpn": "KC724-WHIZZ",
                  "brand": { "@type": "Brand", "name": "Whizz Systems" },
                  "url": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724",
                  "category": "FPGA Characterization Kit",
                  "offers": {
                    "@type": "Offer",
                    "price": "0.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": "https://www.whizzsystems.com/contact"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "19"
                  },
                  "isAccessoryOrSparePartFor": {
                    "@type": "Product",
                    "name": "AMD Kintex™ 7 FPGA Platform"
                  },
                  "hasPart": {
                    "@type": "ItemList",
                    "itemListElement": [
                      { "@type": "ListItem", "position": 1, "name": "Samtec BullsEye connector pads" },
                      { "@type": "ListItem", "position": 2, "name": "FMC-HPC expansion connectors" },
                      { "@type": "ListItem", "position": 3, "name": "IBERT demonstration compatibility" }
                    ]
                  }
                },

                {
                  "@type": "VideoObject",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#video",
                  "name": "Whizz Xilinx Kintex-7 FPGA KC724 Overview",
                  "description": "Overview of the KC724 characterization kit, its GTX transceiver testing capabilities and customization options.",
                  "thumbnailUrl": "https://www.whizzsystems.com/assets/featured-products/products/KC724/hero.png",
                  "contentUrl": "https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4",
                  "uploadDate": "2025-01-01",
                  "duration": "PT2M00S",
                  "publisher": { "@type": "Organization", "name": "Whizz Systems", "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png" }
                },

                {
                  "@type": "SiteNavigationElement",
                  "name": ["Featured Products", "Services", "Blog", "Contact"],
                  "url": [
                    "https://www.whizzsystems.com/featured-products",
                    "https://www.whizzsystems.com/services",
                    "https://www.whizzsystems.com/news-&-insights",
                    "https://www.whizzsystems.com/contact"
                  ]
                },

                {
                  "@type": "FAQPage",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What FPGA does the KC724 support?",
                      "acceptedAnswer": { "@type": "Answer", "text": "The Whizz Xilinx Kintex-7 FPGA KC724 supports the XC7K410T Kintex-7 FPGA." }
                    },
                    {
                      "@type": "Question",
                      "name": "How many GTX transceivers does the KC724 support?",
                      "acceptedAnswer": { "@type": "Answer", "text": "The KC724 supports 16 GTX transceivers at 12.5Gbps for transceiver characterization and signal integrity testing." }
                    },
                    {
                      "@type": "Question",
                      "name": "Can Whizz Systems customize the KC724 kit?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Yes — Whizz Systems provides full customization services including clocking, FMC expansion, firmware, and thermal solutions." }
                    }
                  ]
                },

                {
                  "@type": "ItemList",
                  "name": "Related Featured Products",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws7203-a", "name": "Xilinx Virtex-7 FPGA WS7203A" },
                    { "@type": "ListItem", "position": 2, "url": "https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709", "name": "Whizz Virtex-7 FPGA WS709" },
                    { "@type": "ListItem", "position": 3, "url": "https://www.whizzsystems.com/featured-products/whizz-kintex-7FPGA-WH705", "name": "Whizz Kintex-7 FPGA WH705" }
                  ]
                }

              ]
            },
          ],
        },
      },
      {
        path: 'xilinx-virtex-7-fpga-ws7203-a',
        loadComponent: () =>
          import(
            './products/xilinx-virtex-7-fpga-ws7203-a/xilinx-virtex-7-fpga-ws7203-a.component'
          ).then((m) => m.XilinxVirtex7FPGAWS7203AComponent),
        title: 'Customizable Xilinx Virtex-7 FPGA WS7203A | High-Speed GTX Evaluation Kit',
        data: {
          description:
            'Customizable Xilinx Virtex-7 FPGA WS7203A, a high-speed GTX transceiver characterization kit designed for 12.5Gbps testing, signal integrity, and custom applications.',
          keywords:
            'Xilinx virtex 7 fpga ws 7203 price, customizable Xilinx virtex 7 FPGA WS7203A, customizable Virtex 7 FPGA VC7203, customizable AMD Virtex 7 FPGA VC7203 Characterization Kit, customizable Xilinx virtex 7 fpga ws 7203 evaluation kit, customizebale virtex 7 fpga ws 7203',
          og: {
            title: "Customizable Xilinx Virtex-7 FPGA WS7203A",
            description:
              "High-speed GTX transceiver characterization platform optimized for 12.5Gbps testing and advanced customization.",
            image: "https://www.whizzsystems.com/assets/header/teal-logo.png",
            url: "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a",
            type: "product"
          },
          schema: [
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.whizzsystems.com/#website",
                  "url": "https://www.whizzsystems.com/",
                  "name": "Whizz Systems",
                  "publisher": {
                    "@id": "https://www.whizzsystems.com/#organization"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a#webpage",
                  "url": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a",
                  "name": "Xilinx Virtex-7 FPGA WS7203A",
                  "isPartOf": { "@id": "https://www.whizzsystems.com/#website" },
                  "description": "The customizable Xilinx Virtex-7 FPGA WS7203A is a high-speed GTX transceiver characterization and connectivity platform with 12.5Gbps GTX support, Samtec BullsEye connectors, and full customization options.",
                  "breadcrumb": {
                    "@id": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a#breadcrumb"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a#breadcrumb",
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
                      "item": "https://www.whizzsystems.com/featured-products/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Xilinx Virtex-7 FPGA WS7203A"
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.whizzsystems.com/#organization",
                  "name": "Whizz Systems",
                  "url": "https://www.whizzsystems.com",
                  "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png"
                },
                {
                  "@type": "Product",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a#product",
                  "name": "Xilinx Virtex-7 FPGA WS7203A",
                  "description": "High-speed transceiver characterization platform with 12.5Gbps GTX transceivers, Samtec BullsEye connectors, and customizable FPGA features.",
                  "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "sku": "WS7203A",
                  "brand": {
                    "@type": "Brand",
                    "name": "Whizz Systems"
                  }
                },
                {
                  "@type": "VideoObject",
                  "@id": "https://www.whizzsystems.com/#ws7203-video",
                  "name": "Whizz Systems Featured Products Video",
                  "description": "An overview of Whizz Systems’ FPGA connectivity platforms and featured products.",
                  "thumbnailUrl": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "contentUrl": "https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4",
                  "uploadDate": "2024-01-01"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": [
                    "Services",
                    "Blog",
                    "Social Media",
                    "Featured Products"
                  ],
                  "url": [
                    "https://www.whizzsystems.com/services",
                    "https://www.whizzsystems.com/blog",
                    "https://www.whizzsystems.com/social-media",
                    "https://www.whizzsystems.com/featured-products"
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is the Xilinx Virtex-7 FPGA WS7203A used for?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The WS7203A is used for high-speed 12.5Gbps GTX transceiver characterization, signal integrity analysis, and customizable FPGA development."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does the WS7203A support customization?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Whizz Systems provides full customization for the WS7203A, including firmware, clocking, expansion I/O, and thermal optimization."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Which FPGA device does WS7203A support?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The WS7203A supports the Xilinx Virtex-7 XC7VX690T FPGA."
                      }
                    }
                  ]
                }
              ]
            },
          ],
        },
      },
      {
        path: 'xilinx-virtex-7-fpga-ws7203-b',
        loadComponent: () =>
          import(
            './products/xilinx-virtex-7-fpga-ws7203-b/xilinx-virtex-7-fpga-ws7203-b.component'
          ).then((m) => m.XilinxVirtex7FPGAWS7203BComponent),
        title: 'Xilinx Virtex-7 FPGA WS7203B | High-Speed GTX Transceiver Characterization Kit',
        data: {
          description:
            'Explore the Xilinx Virtex-7 FPGA WS7203B, a customizable 12.5Gbps GTX transceiver characterization kit optimized for high-speed evaluation and signal integrity testing. Fully customizable by Whizz Systems.',
          keywords:
            'Xilinx Virtex 7 FPGA WS7203B, Whizz Virtex 7 FPGA WS7203B, Xilinx Virtex 7 FPGA WS7203B specs, Xilinx virtex 7 fpga ws 7203 b price, Customizable Virtex 7 FPGA WS7203B, AMD Virtex 7 FPGA WS7203B',
          schema: [
            {
              "@context": "https://schema.org",
              "@graph": [

                {
                  "@type": "Organization",
                  "@id": "https://www.whizzsystems.com#organization",
                  "name": "Whizz Systems",
                  "url": "https://www.whizzsystems.com",
                  "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-408-988-1849",
                    "contactType": "technical support",
                    "areaServed": "Worldwide"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/whizz-systems-inc/",
                    "https://www.facebook.com/whizzsystems",
                    "https://twitter.com/whizzsystems"
                  ]
                },

                {
                  "@type": "WebSite",
                  "@id": "https://www.whizzsystems.com#website",
                  "url": "https://www.whizzsystems.com",
                  "name": "Whizz Systems",
                  "publisher": {
                    "@id": "https://www.whizzsystems.com#organization"
                  }
                },

                {
                  "@type": "WebPage",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b#webpage",
                  "url": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b",
                  "name": "Xilinx Virtex-7 FPGA WS7203B | High-Speed Transceiver Characterization Kit",
                  "isPartOf": {
                    "@id": "https://www.whizzsystems.com#website"
                  },
                  "description": "The Xilinx Virtex-7 FPGA WS7203B is a high-performance 12.5Gbps GTX transceiver characterization kit supporting the XC7VX690T FPGA with BullsEye connectors and Vivado/ISE compatibility.",
                  "inLanguage": "en-US"
                },

                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.whizzsystems.com"
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
                      "name": "Xilinx Virtex-7 FPGA WS7203B"
                    }
                  ]
                },

                {
                  "@type": "Product",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b#product",
                  "name": "Xilinx Virtex-7 FPGA WS7203B",
                  "mpn": "WS7203B",
                  "brand": {
                    "@type": "Brand",
                    "name": "Whizz Systems"
                  },
                  "manufacturer": {
                    "@type": "Organization",
                    "name": "Whizz Systems"
                  },
                  "image": "https://www.whizzsystems.com/assets/header/teal-logo.png",
                  "description": "The Xilinx Virtex-7 FPGA WS7203B is a 12.5Gbps GTX transceiver characterization kit supporting the XC7VX690T FPGA with BullsEye connectors and Vivado/ISE compatibility.",
                  "offers": {
                    "@type": "Offer",
                    "url": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b",
                    "price": "Contact for pricing",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  }
                },

                {
                  "@type": "FAQPage",
                  "@id": "https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What FPGA does the WS7203B support?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The WS7203B supports the Virtex-7 XC7VX690T FPGA."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the maximum GTX transceiver speed?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The platform supports 12.5Gbps GTX transceivers."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does the WS7203B support IBERT?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, the WS7203B supports IBERT testing using Vivado or ISE design suites."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can Whizz Systems customize the WS7203B?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Whizz Systems provides full customization options including connectivity, firmware, thermal optimization, and more."
                      }
                    }
                  ]
                }
              ]
            },
          ],
        },
      },
    ],
  },
];
