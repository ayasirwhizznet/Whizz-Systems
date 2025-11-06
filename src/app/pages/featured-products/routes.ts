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
        title: 'Featured Products',
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
        title: 'whizz zyn-7000 wz706',
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
