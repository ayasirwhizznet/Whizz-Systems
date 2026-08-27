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
        title: 'FPGA Development Boards & Evaluation Kits',
        data: {
          description:
            'Customizable FPGA development, connectivity and characterization kits. Kintex-7, Virtex-7 and Zynq-7000 platforms, productized for volume.',
          keywords: 'whizz products, fpga development boards, Whizz Systems featured products, Whizz Systems FPGA boards, Whizz evaluation kits, Whizz development kits, fpga evaluation board, fpga demo board, shop development boards & kits, fpga development kit',
          og: {
            type: 'website',
            site_name: 'Whizz Systems',
            title: 'FPGA Development Boards & Evaluation Kits',
            description:
              'Customizable FPGA development, connectivity and characterization kits. Kintex-7, Virtex-7 and Zynq-7000 platforms, productized for volume.',
            url: 'https://www.whizzsystems.com/featured-products',
            image:
              'https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Systems FPGA development, connectivity and characterization kits',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'FPGA Development Boards & Evaluation Kits',
            description:
              'Customizable FPGA development, connectivity and characterization kits. Kintex-7, Virtex-7 and Zynq-7000 platforms, productized for volume.',
            image:
              'https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4',
            'image:alt':
              'Whizz Systems FPGA development, connectivity and characterization kits',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'CollectionPage',
                  '@id': 'https://www.whizzsystems.com/featured-products#webpage',
                  url: 'https://www.whizzsystems.com/featured-products',
                  name: 'FPGA Development Boards & Evaluation Kits',
                  description:
                    'Customizable FPGA development, connectivity and characterization kits. Kintex-7, Virtex-7 and Zynq-7000 platforms, productized for volume.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/featured-products#breadcrumb',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.whizzsystems.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Featured Products', item: 'https://www.whizzsystems.com/featured-products' },
                  ],
                },
                {
                  '@type': 'ItemList',
                  '@id': 'https://www.whizzsystems.com/featured-products#itemlist',
                  name: 'Whizz Systems FPGA development, connectivity and characterization kits',
                  itemListOrder: 'https://schema.org/ItemListOrderAscending',
                  numberOfItems: 8,
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Whizz Kintex-7 FPGA WH705', url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705' },
                    { '@type': 'ListItem', position: 2, name: 'Whizz Zynq-7000 SoC WZ706', url: 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706' },
                    { '@type': 'ListItem', position: 3, name: 'Whizz Virtex-7 FPGA WH707A', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a' },
                    { '@type': 'ListItem', position: 4, name: 'Whizz Virtex-7 FPGA WS707', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707' },
                    { '@type': 'ListItem', position: 5, name: 'Whizz Virtex-7 FPGA WS709', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709' },
                    { '@type': 'ListItem', position: 6, name: 'Whizz Virtex-7 FPGA WS7203A', url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a' },
                    { '@type': 'ListItem', position: 7, name: 'Whizz Kintex-7 FPGA KC724', url: 'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724' },
                    { '@type': 'ListItem', position: 8, name: 'Whizz Virtex-7 FPGA WS7203B', url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b' },
                  ],
                },
                {
                  '@type': 'VideoObject',
                  '@id': 'https://www.whizzsystems.com/featured-products#video',
                  name: 'Whizz Systems FPGA development boards overview',
                  description:
                    'An overview of the Whizz Systems FPGA development, connectivity and characterization kits.',
                  thumbnailUrl: 'https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4',
                  uploadDate: '2025-02-15T00:00:00-08:00',
                  contentUrl: 'https://www.whizzsystems.com/assets/featured-products/hero-vedio.mp4',
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/featured-products#faq',
                  url: 'https://www.whizzsystems.com/featured-products',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What types of FPGA boards does Whizz Systems offer?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Three categories. Evaluation kits for general development on Kintex-7, Virtex-7 and Zynq-7000 devices; a connectivity kit configured for high-bandwidth data movement; and characterization kits for measuring high-speed transceiver performance.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do these differ from the standard AMD evaluation kits?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Each board is a customizable derivative of an AMD reference platform. A standard evaluation kit cannot be modified or taken to volume production. These can: FPGA selection, memory, connectors, firmware, power and thermal design can all be changed, and the resulting design can be productized and manufactured.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which board should we choose?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Choose on the constraint that matters most. Logic capacity points to the WS707 with the XC7V2000T. Transceiver count and high-speed I/O point to the WH707A or the WS709. Embedded processing alongside programmable logic points to the WZ706 with the Zynq-7000. Transceiver characterization points to the WS7203 or KC724 kits.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can these boards be productized for volume manufacture?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. That is the primary reason customers choose them over a standard evaluation kit. Whizz Systems designs the modifications and manufactures the resulting product in its own facilities.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do we get pricing?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Pricing is provided on application. Request a quote with the board, the configuration you need and your expected volume.',
                      },
                    },
                  ],
                },
              ],
            }
          ],
        }
      },
      {
        path: 'whizz-kintex-7-fpga-wh705',
        loadComponent: () =>
          import(
            './products/whizz-kintex-7FPGA-wh705/whizz-kintex-7FPGA-wh705component'
          ).then((m) => m.VHK158Component),
        title: 'Whizz Kintex-7 FPGA WH705 Evaluation Kit',
        data: {
          description:
            'Customizable Kintex-7 XC7K410T evaluation kit derived from the AMD KC705. FMC-HPC and FMC-LPC expansion, PCIe Gen2x4, SFP/SFP+. Request a quote.',
          keywords:
            'Whizz kintex 7 fpga price, Whizz Kintex 7FPGA, kintex 7 fpga board, kintex 7 fpga, fpga kintex 7, xilinx fpga, evaluation kit, high-speed fpga board, wh705, whizz systems',
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705#webpage',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705',
                  name: 'Whizz Kintex-7 FPGA WH705 Evaluation Kit',
                  description:
                    'Customizable Kintex-7 XC7K410T evaluation kit derived from the AMD KC705. FMC-HPC and FMC-LPC expansion, PCIe Gen2x4, SFP/SFP+. Request a quote.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/featured-products/products/vhk158/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705#breadcrumb',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.whizzsystems.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Featured Products', item: 'https://www.whizzsystems.com/featured-products' },
                    { '@type': 'ListItem', position: 3, name: 'Whizz Kintex-7 FPGA WH705', item: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705' },
                  ],
                },
                {
                  '@type': 'Product',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705#product',
                  name: 'Whizz Kintex-7 FPGA WH705',
                  sku: 'WH705',
                  mpn: 'WH705',
                  category: 'FPGA Evaluation kits',
                  description:
                    'Customizable Kintex-7 XC7K410T evaluation kit derived from the AMD KC705. FMC-HPC and FMC-LPC expansion, PCIe Gen2x4, SFP/SFP+. Request a quote.',
                  image: [
                    'https://www.whizzsystems.com/assets/featured-products/products/vhk158/hero.png',
                  ],
                  brand: { '@type': 'Brand', name: 'Whizz Systems' },
                  manufacturer: { '@type': 'Organization', '@id': 'https://www.whizzsystems.com/#organization' },
                  audience: { '@type': 'BusinessAudience', audienceType: 'Hardware design engineers' },
                  additionalProperty: [
                    { '@type': 'PropertyValue', name: 'Base platform', value: 'AMD Xilinx KC705 Evaluation Kit' },
                    { '@type': 'PropertyValue', name: 'Kit type', value: 'Evaluation kit' },
                    { '@type': 'PropertyValue', name: 'FPGA', value: 'Kintex-7 XC7K410T' },
                    { '@type': 'PropertyValue', name: 'Memory', value: '1GB DDR3 SODIMM, 128MB Linear BPI Flash, 16MB Quad SPI Flash, 8Kb IIC EEPROM' },
                    { '@type': 'PropertyValue', name: 'PCIe', value: 'Gen2x4 (5 Gb/s) or Gen1x8 (2.5 Gb/s)' },
                    { '@type': 'PropertyValue', name: 'Networking', value: '10/100/1000 Mbps Ethernet, SFP/SFP+ cage, GTX port with SMA' },
                    { '@type': 'PropertyValue', name: 'Expansion', value: 'FMC-HPC, FMC-LPC' },
                    { '@type': 'PropertyValue', name: 'Configuration', value: 'JTAG over USB, BPI Flash, Quad SPI Flash, SD card slot' },
                    { '@type': 'PropertyValue', name: 'Control and I/O', value: 'Push buttons, DIP switches, SMA I/O pairs, AMS fan header' },
                    { '@type': 'PropertyValue', name: 'Power', value: '12V wall adapter or ATX' },
                  ],
                  isRelatedTo: [
                    { '@type': 'Product', name: 'Whizz Zynq-7000 SoC WZ706', url: 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WH707A', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS707', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS709', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS7203A', url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a' },
                    { '@type': 'Product', name: 'Whizz Kintex-7 FPGA KC724', url: 'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS7203B', url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b' },
                  ],
                  offers: {
                    '@type': 'Offer',
                    url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                    priceCurrency: 'USD',
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      valueAddedTaxIncluded: false,
                      description: 'Price on application - request a quote',
                    },
                    seller: { '@id': 'https://www.whizzsystems.com/#organization' },
                    areaServed: { '@type': 'Place', name: 'Worldwide' },
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705#faq',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What FPGA does the Whizz WH705 use?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WH705 is built around the Kintex-7 XC7K410T. The FPGA can be changed as part of a customization engagement if a different device in the family better suits the application.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How does the WH705 differ from the AMD KC705?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WH705 is a customizable derivative of the KC705 evaluation kit. The reference design is retained where it is useful, but the board can be modified — FPGA selection, memory configuration, connector complement, power and thermal design — and then productized for volume manufacture, which a standard evaluation kit cannot be.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can the WH705 be customized for our application?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Common changes include FPGA substitution, memory expansion, custom I/O and connector configurations, firmware and software development, and power or thermal optimization for a target enclosure.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What expansion interfaces does the WH705 provide?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The board provides FMC-HPC and FMC-LPC connectors, an SFP/SFP+ cage, a GTX port with SMA access, and SMA I/O pairs.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do we get pricing for the WH705?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Pricing is provided on application. Request a quote with your required configuration and volume, and we will respond with pricing and lead time.',
                      },
                    },
                  ],
                },
              ],
            }
          ],
          og: {
            type: 'product',
            site_name: 'Whizz Systems',
            title: 'Whizz Kintex-7 FPGA WH705 Evaluation Kit',
            description:
              'Customizable Kintex-7 XC7K410T evaluation kit derived from the AMD KC705. FMC-HPC and FMC-LPC expansion, PCIe Gen2x4, SFP/SFP+. Request a quote.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/vhk158/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Kintex-7 FPGA WH705 FPGA evaluation kit',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Kintex-7 FPGA WH705 Evaluation Kit',
            description:
              'Customizable Kintex-7 XC7K410T evaluation kit derived from the AMD KC705. FMC-HPC and FMC-LPC expansion, PCIe Gen2x4, SFP/SFP+. Request a quote.',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/vhk158/hero.png',
            'image:alt':
              'Whizz Kintex-7 FPGA WH705 FPGA evaluation kit',
          },
        },
      },
      {
        path: 'whizz-virtex-7-fpga-wh707-a',
        loadComponent: () =>
          import(
            './products/whizz-virtex-7-fpga-wh707-a/whizz-virtex-7-fpga-wh707-a.component'
          ).then((m) => m.WhizzVirtex7FPGAWH707AComponent),
        title: 'Whizz Virtex-7 FPGA WH707A Evaluation Kit',
        data: {
          description:
            'Customizable Virtex-7 XC7VX690T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
          keywords:
            'whizz virtex-7 fpga wh707a, amd virtex-7 vc707 evaluation kit, virtex-7 fpga evaluation kit, virtex-7 fpga, fpga virtex-7, xilinx fpga, evaluation kit, high-speed fpga board, wh707a, whizz systems',
          og: {
            type: 'product',
            site_name: 'Whizz Systems',
            title: 'Whizz Virtex-7 FPGA WH707A Evaluation Kit',
            description:
              'Customizable Virtex-7 XC7VX690T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS707A/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Virtex-7 FPGA WH707A FPGA evaluation kit',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Virtex-7 FPGA WH707A Evaluation Kit',
            description:
              'Customizable Virtex-7 XC7VX690T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS707A/hero.png',
            'image:alt':
              'Whizz Virtex-7 FPGA WH707A FPGA evaluation kit',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a#webpage',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a',
                  name: 'Whizz Virtex-7 FPGA WH707A Evaluation Kit',
                  description:
                    'Customizable Virtex-7 XC7VX690T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/featured-products/products/WS707A/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a#breadcrumb',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.whizzsystems.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Featured Products', item: 'https://www.whizzsystems.com/featured-products' },
                    { '@type': 'ListItem', position: 3, name: 'Whizz Virtex-7 FPGA WH707A', item: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a' },
                  ],
                },
                {
                  '@type': 'Product',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a#product',
                  name: 'Whizz Virtex-7 FPGA WH707A',
                  sku: 'WH707A',
                  mpn: 'WH707A',
                  category: 'FPGA Evaluation kits',
                  description:
                    'Customizable Virtex-7 XC7VX690T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
                  image: [
                    'https://www.whizzsystems.com/assets/featured-products/products/WS707A/hero.png',
                  ],
                  brand: { '@type': 'Brand', name: 'Whizz Systems' },
                  manufacturer: { '@type': 'Organization', '@id': 'https://www.whizzsystems.com/#organization' },
                  audience: { '@type': 'BusinessAudience', audienceType: 'Hardware design engineers' },
                  additionalProperty: [
                    { '@type': 'PropertyValue', name: 'Base platform', value: 'AMD Virtex-7 VC707 Evaluation Kit' },
                    { '@type': 'PropertyValue', name: 'Kit type', value: 'Evaluation kit' },
                    { '@type': 'PropertyValue', name: 'FPGA', value: 'Virtex-7 XC7VX690T' },
                    { '@type': 'PropertyValue', name: 'Memory', value: '1GB DDR3 SODIMM, 128MB Linear BPI Flash, 16MB Quad SPI Flash, 8Kb IIC EEPROM' },
                    { '@type': 'PropertyValue', name: 'PCIe', value: 'Gen2x8 (layout supports Gen3)' },
                    { '@type': 'PropertyValue', name: 'Clocking', value: '200MHz fixed oscillator, 156.250MHz programmable oscillator, SMA clock input' },
                    { '@type': 'PropertyValue', name: 'Networking', value: '10/100/1000 Mbps Ethernet, SFP/SFP+ cage, GTX port with SMA' },
                    { '@type': 'PropertyValue', name: 'Expansion', value: 'FMC1-HPC, FMC2-HPC' },
                    { '@type': 'PropertyValue', name: 'Configuration', value: 'JTAG over USB, BPI Flash, Quad SPI Flash, SD card slot' },
                    { '@type': 'PropertyValue', name: 'Control and I/O', value: 'Push buttons, DIP switches, rotary encoder, AMS fan header' },
                    { '@type': 'PropertyValue', name: 'Power', value: '12V wall adapter or ATX' },
                  ],
                  isRelatedTo: [
                    { '@type': 'Product', name: 'Whizz Kintex-7 FPGA WH705', url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705' },
                    { '@type': 'Product', name: 'Whizz Zynq-7000 SoC WZ706', url: 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS707', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS709', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS7203A', url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a' },
                    { '@type': 'Product', name: 'Whizz Kintex-7 FPGA KC724', url: 'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS7203B', url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b' },
                  ],
                  offers: {
                    '@type': 'Offer',
                    url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                    priceCurrency: 'USD',
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      valueAddedTaxIncluded: false,
                      description: 'Price on application - request a quote',
                    },
                    seller: { '@id': 'https://www.whizzsystems.com/#organization' },
                    areaServed: { '@type': 'Place', name: 'Worldwide' },
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a#faq',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What FPGA does the WH707A use?',
                      acceptedAnswer: { '@type': 'Answer', text: 'The WH707A is built around the Virtex-7 XC7VX690T.' },
                    },
                    {
                      '@type': 'Question',
                      name: 'How does the WH707A differ from the AMD VC707?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'It is a customizable derivative of the VC707 evaluation kit. The board can be modified across FPGA selection, memory, connectivity, firmware and thermal design, and productized for volume manufacture.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does the WH707A support PCIe Gen3?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The board is fitted for PCIe Gen2x8, and the layout supports Gen3. Confirm the intended operating generation with our engineering team before ordering, because the achievable rate depends on the channel and the endpoint.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the difference between the WH707A and the WS707?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Both are VC707 derivatives. The WH707A uses the Virtex-7 XC7VX690T; the WS707 uses the larger XC7V2000T. Choose on logic capacity and transceiver count.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do we get pricing for the WH707A?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Pricing is provided on application. Request a quote with your required configuration and volume.',
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
        path: 'whizz-virtex-7-fpga-ws707',
        loadComponent: () =>
          import(
            './products/whizz-virtex-7-fpga-ws707/whizz-virtex-7-fpga-ws707.component'
          ).then((m) => m.WhizzVirtex7FPGAWS707Component),
        title: 'Whizz Virtex-7 FPGA WS707 Evaluation Kit',
        data: {
          description:
            'Customizable Virtex-7 XC7V2000T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
          keywords:
            'Whizz Virtex 7 FPGA WS 707, Whizz Virtex-7 FPGA WS707 price, customizable Virtex 7 FPGA WS707 evaluation kit, Virtex 7 FPGA WS707 for sale, Virtex 7 FPGA WS707 evaluation kit price, AMD Virtex 7 FPGA board, FPGA evaluation kit',
          og: {
            type: 'product',
            site_name: 'Whizz Systems',
            title: 'Whizz Virtex-7 FPGA WS707 Evaluation Kit',
            description:
              'Customizable Virtex-7 XC7V2000T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS707/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt': 'Whizz Virtex-7 FPGA WS707 FPGA evaluation kit',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Virtex-7 FPGA WS707 Evaluation Kit',
            description:
              'Customizable Virtex-7 XC7V2000T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS707/hero.png',
            'image:alt': 'Whizz Virtex-7 FPGA WS707 FPGA evaluation kit',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707#webpage',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707',
                  name: 'Whizz Virtex-7 FPGA WS707 Evaluation Kit',
                  description:
                    'Customizable Virtex-7 XC7V2000T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/featured-products/products/WS707/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707#breadcrumb',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.whizzsystems.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Featured Products', item: 'https://www.whizzsystems.com/featured-products' },
                    { '@type': 'ListItem', position: 3, name: 'Whizz Virtex-7 FPGA WS707', item: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707' },
                  ],
                },
                {
                  '@type': 'Product',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707#product',
                  name: 'Whizz Virtex-7 FPGA WS707',
                  sku: 'WS707',
                  mpn: 'WS707',
                  category: 'FPGA Evaluation kits',
                  description:
                    'Customizable Virtex-7 XC7V2000T evaluation kit derived from the AMD VC707. Dual FMC-HPC, PCIe Gen2x8 with Gen3 layout. Request a quote.',
                  image: ['https://www.whizzsystems.com/assets/featured-products/products/WS707/hero.png'],
                  brand: { '@type': 'Brand', name: 'Whizz Systems' },
                  manufacturer: { '@type': 'Organization', '@id': 'https://www.whizzsystems.com/#organization' },
                  audience: { '@type': 'BusinessAudience', audienceType: 'Hardware design engineers' },
                  offers: {
                    '@type': 'Offer',
                    url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                    priceCurrency: 'USD',
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      valueAddedTaxIncluded: false,
                      description: 'Price on application - request a quote',
                    },
                    seller: { '@id': 'https://www.whizzsystems.com/#organization' },
                    areaServed: { '@type': 'Place', name: 'Worldwide' },
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707#faq',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What FPGA does the WS707 use?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WS707 uses the Virtex-7 XC7V2000T.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How does the WS707 differ from the AMD VC707?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WS707 is a customizable derivative of the VC707 that can be modified and productized for volume manufacture.',
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
        path: 'whizz-virtex-7-fpga-ws709',
        loadComponent: () =>
          import(
            './products/whizz-virtex-7-fpga-ws709/whizz-virtex-7-fpga-ws709.component'
          ).then((m) => m.WhizzVirtex7FPGAWS709Component),
        title: 'Whizz Virtex-7 FPGA WS709 Connectivity Kit',
        data: {
          description:
            'Customizable Virtex-7 connectivity kit derived from the AMD VC709. Four SFP/SFP+ cages, PCIe Gen3 x8, 8GB DDR3. Request a quote.',
          keywords:
            'Whizz Virtex 7 FPGA WS709, customizable Virtex 7 FPGA WS709 evaluation kit, Virtex 7 FPGA VC709 connectivity kit, FPGA high-speed connectivity, WS709 price',
          og: {
            type: 'product',
            site_name: 'Whizz Systems',
            title: 'Whizz Virtex-7 FPGA WS709 Connectivity Kit',
            description:
              'Customizable Virtex-7 connectivity kit derived from the AMD VC709. Four SFP/SFP+ cages, PCIe Gen3 x8, 8GB DDR3. Request a quote.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS709/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Virtex-7 FPGA WS709 FPGA connectivity kit',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Virtex-7 FPGA WS709 Connectivity Kit',
            description:
              'Customizable Virtex-7 connectivity kit derived from the AMD VC709. Four SFP/SFP+ cages, PCIe Gen3 x8, 8GB DDR3. Request a quote.',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS709/hero.png',
            'image:alt':
              'Whizz Virtex-7 FPGA WS709 FPGA connectivity kit',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709#webpage',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709',
                  name: 'Whizz Virtex-7 FPGA WS709 Connectivity Kit',
                  description:
                    'Customizable Virtex-7 connectivity kit derived from the AMD VC709. Four SFP/SFP+ cages, PCIe Gen3 x8, 8GB DDR3. Request a quote.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/featured-products/products/WS709/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709#breadcrumb',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.whizzsystems.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Featured Products', item: 'https://www.whizzsystems.com/featured-products' },
                    { '@type': 'ListItem', position: 3, name: 'Whizz Virtex-7 FPGA WS709', item: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709' },
                  ],
                },
                {
                  '@type': 'Product',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709#product',
                  name: 'Whizz Virtex-7 FPGA WS709',
                  sku: 'WS709',
                  mpn: 'WS709',
                  category: 'FPGA Connectivity Kit',
                  description:
                    'Customizable Virtex-7 connectivity kit derived from the AMD VC709. Four SFP/SFP+ cages, PCIe Gen3 x8, 8GB DDR3. Request a quote.',
                  image: ['https://www.whizzsystems.com/assets/featured-products/products/WS709/hero.png'],
                  brand: { '@type': 'Brand', name: 'Whizz Systems' },
                  manufacturer: { '@type': 'Organization', '@id': 'https://www.whizzsystems.com/#organization' },
                  audience: { '@type': 'BusinessAudience', audienceType: 'Hardware design engineers' },
                  additionalProperty: [
                    { '@type': 'PropertyValue', name: 'Base platform', value: 'AMD VC709 Connectivity Kit' },
                    { '@type': 'PropertyValue', name: 'Kit type', value: 'Connectivity kit' },
                    { '@type': 'PropertyValue', name: 'Memory', value: '8GB DDR3' },
                    { '@type': 'PropertyValue', name: 'PCIe', value: 'Gen3 x8' },
                    { '@type': 'PropertyValue', name: 'Networking', value: 'Four SFP/SFP+ cages' },
                  ],
                  offers: {
                    '@type': 'Offer',
                    url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                    priceCurrency: 'USD',
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      valueAddedTaxIncluded: false,
                      description: 'Price on application - request a quote',
                    },
                    seller: { '@id': 'https://www.whizzsystems.com/#organization' },
                    areaServed: { '@type': 'Place', name: 'Worldwide' },
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709#faq',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is the WS709 designed for?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WS709 is designed for high-bandwidth FPGA connectivity and prototyping applications.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How does the WS709 differ from the AMD VC709?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WS709 is a customizable VC709 derivative that can be modified and productized for volume manufacture.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do we get pricing for the WS709?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Pricing is provided on application. Request a quote with your required configuration and volume.',
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
        path: 'whizz-zyn-7000-wz706',
        loadComponent: () =>
          import(
            './products/whizz-zyn-7000-wz706/whizz-zyn-7000-wz706.component'
          ).then((m) => m.WhizzZyn7000WZ706Component),
        title: 'Whizz Zynq-7000 SoC WZ706 Evaluation Kit',
        data: {
          description:
            'Customizable Zynq-7000 XC7Z100 evaluation kit derived from the AMD ZC706. Dual DDR3, PCIe Gen2x4, FMC-HPC and LPC, Pmod. Request a quote.',
          keywords:
            'xilinx zynq 7000 soc zc706 evaluation kit, zynq-7000 evaluation board, zynq 7000 soc zc706 evaluation kit, zynq zc702 evaluation board price, xilinx zynq-7000 soc zc706, whizz zyn-7000 soc wz706',
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706#webpage',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706',
                  name: 'Whizz Zynq-7000 SoC WZ706 Evaluation Kit',
                  description:
                    'Customizable Zynq-7000 XC7Z100 evaluation kit derived from the AMD ZC706. Dual DDR3, PCIe Gen2x4, FMC-HPC and LPC, Pmod. Request a quote.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/featured-products/products/WZ706/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706#breadcrumb',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.whizzsystems.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Featured Products', item: 'https://www.whizzsystems.com/featured-products' },
                    { '@type': 'ListItem', position: 3, name: 'Whizz Zynq-7000 SoC WZ706', item: 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706' },
                  ],
                },
                {
                  '@type': 'Product',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706#product',
                  name: 'Whizz Zynq-7000 SoC WZ706',
                  sku: 'WZ706',
                  mpn: 'WZ706',
                  category: 'FPGA Evaluation kits',
                  description:
                    'Customizable Zynq-7000 XC7Z100 evaluation kit derived from the AMD ZC706. Dual DDR3, PCIe Gen2x4, FMC-HPC and LPC, Pmod. Request a quote.',
                  image: [
                    'https://www.whizzsystems.com/assets/featured-products/products/WZ706/hero.png',
                  ],
                  brand: { '@type': 'Brand', name: 'Whizz Systems' },
                  manufacturer: { '@type': 'Organization', '@id': 'https://www.whizzsystems.com/#organization' },
                  audience: { '@type': 'BusinessAudience', audienceType: 'Hardware design engineers' },
                  additionalProperty: [
                    { '@type': 'PropertyValue', name: 'Base platform', value: 'AMD Xilinx ZC706 Evaluation Kit' },
                    { '@type': 'PropertyValue', name: 'Kit type', value: 'Evaluation kit' },
                    { '@type': 'PropertyValue', name: 'SoC', value: 'Zynq-7000 XC7Z100' },
                    { '@type': 'PropertyValue', name: 'Memory', value: '1GB DDR3 (PS), 1GB DDR3 SODIMM (PL), 2 x 16MB Quad SPI Flash, 1KB IIC EEPROM' },
                    { '@type': 'PropertyValue', name: 'PCIe', value: 'Gen2x4' },
                    { '@type': 'PropertyValue', name: 'Networking', value: '10/100/1000 Mbps Ethernet (GigE RGMII), SFP/SFP+ cage, GTX port with SMA' },
                    { '@type': 'PropertyValue', name: 'Expansion', value: 'FMC-LPC, FMC-HPC, dual Pmod, single Pmod' },
                    { '@type': 'PropertyValue', name: 'Configuration', value: 'Onboard JTAG, Quad SPI Flash, SDIO card interface' },
                    { '@type': 'PropertyValue', name: 'Control and I/O', value: 'Push buttons, DIP switches, LEDs, IIC access to GPIO' },
                    { '@type': 'PropertyValue', name: 'Power', value: '12V wall adapter with current measurement capability' },
                  ],
                  isRelatedTo: [
                    { '@type': 'Product', name: 'Whizz Kintex-7 FPGA WH705', url: 'https://www.whizzsystems.com/featured-products/whizz-kintex-7-fpga-wh705' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WH707A', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-wh707-a' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS707', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws707' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS709', url: 'https://www.whizzsystems.com/featured-products/whizz-virtex-7-fpga-ws709' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS7203A', url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a' },
                    { '@type': 'Product', name: 'Whizz Kintex-7 FPGA KC724', url: 'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724' },
                    { '@type': 'Product', name: 'Whizz Virtex-7 FPGA WS7203B', url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b' },
                  ],
                  offers: {
                    '@type': 'Offer',
                    url: 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                    priceCurrency: 'USD',
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      valueAddedTaxIncluded: false,
                      description: 'Price on application - request a quote',
                    },
                    seller: { '@id': 'https://www.whizzsystems.com/#organization' },
                    areaServed: { '@type': 'Place', name: 'Worldwide' },
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706#faq',
                  url: 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What device does the Whizz WZ706 use?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WZ706 is built around the Zynq-7000 XC7Z100, which combines a dual-core Arm processing system with programmable logic on a single device.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How does the WZ706 differ from the AMD ZC706?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The WZ706 is a customizable derivative of the ZC706 evaluation kit. It can be modified across FPGA selection, memory, connectivity, firmware and thermal design, and then productized for volume manufacture.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What memory does the WZ706 provide?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: '1GB of DDR3 attached to the processing system, a separate 1GB DDR3 SODIMM on the programmable logic side, two 16MB Quad SPI Flash devices and a 1KB IIC EEPROM.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does the WZ706 support Pmod expansion?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. The board provides both dual and single Pmod headers alongside FMC-LPC and FMC-HPC connectors.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do we get pricing for the WZ706?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Pricing is provided on application. Request a quote with your required configuration and volume.',
                      },
                    },
                  ],
                },
              ],
            }
          ],
          og: {
            type: 'product',
            site_name: 'Whizz Systems',
            title: 'Whizz Zynq-7000 SoC WZ706 Evaluation Kit',
            description:
              'Customizable Zynq-7000 XC7Z100 evaluation kit derived from the AMD ZC706. Dual DDR3, PCIe Gen2x4, FMC-HPC and LPC, Pmod. Request a quote.',
            url: 'https://www.whizzsystems.com/featured-products/whizz-zyn-7000-wz706',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WZ706/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Zynq-7000 SoC WZ706 FPGA evaluation kit',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Zynq-7000 SoC WZ706 Evaluation Kit',
            description:
              'Customizable Zynq-7000 XC7Z100 evaluation kit derived from the AMD ZC706. Dual DDR3, PCIe Gen2x4, FMC-HPC and LPC, Pmod. Request a quote.',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WZ706/hero.png',
            'image:alt':
              'Whizz Zynq-7000 SoC WZ706 FPGA evaluation kit',
          },
        },
      },
      {
        path: 'xilinx-kintex-7-fpga-kc724',
        loadComponent: () =>
          import(
            './products/xilinx-kintex-7-fpga-kc724/xilinx-kintex-7-fpga-kc724.component'
          ).then((m) => m.XilinxKintex7FPGAKC724Component),
        title: 'Whizz Kintex-7 FPGA KC724 Characterization Kit',
        data: {
          description:
            'Customizable Kintex-7 characterization kit derived from the AMD KC724. 16 GTX transceivers at 12.5Gbps, four BullsEye pads. Request a quote.',
          keywords:
            'AMD Kintex 7 FPGA KC724 Characterization Kit, customizeable Kintex 7 FPGA KC724 Characterization Kit, customizebale Xilinx Kintex-7 FPGA KC724, Whizz Xilinx Kintex-7 FPGA KC724, KC724 evaluation kit',
          og: {
            type: 'product',
            site_name: 'Whizz Systems',
            title: 'Whizz Kintex-7 FPGA KC724 Characterization Kit',
            description:
              'Customizable Kintex-7 characterization kit derived from the AMD KC724. 16 GTX transceivers at 12.5Gbps, four BullsEye pads. Request a quote.',
            url: 'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/KC724/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Kintex-7 FPGA KC724 FPGA characterization kit',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Kintex-7 FPGA KC724 Characterization Kit',
            description:
              'Customizable Kintex-7 characterization kit derived from the AMD KC724. 16 GTX transceivers at 12.5Gbps, four BullsEye pads. Request a quote.',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/KC724/hero.png',
            'image:alt':
              'Whizz Kintex-7 FPGA KC724 FPGA characterization kit',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#webpage',
                  url: 'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724',
                  name: 'Whizz Kintex-7 FPGA KC724 Characterization Kit',
                  description:
                    'Customizable Kintex-7 characterization kit derived from the AMD KC724. 16 GTX transceivers at 12.5Gbps, four BullsEye pads. Request a quote.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/featured-products/products/KC724/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#breadcrumb',
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
                      item: 'https://www.whizzsystems.com/featured-products',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Whizz Kintex-7 FPGA KC724',
                      item: 'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724',
                    },
                  ],
                },
                {
                  '@type': 'Product',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#product',
                  name: 'Whizz Kintex-7 FPGA KC724',
                  sku: 'KC724',
                  mpn: 'KC724',
                  category: 'FPGA Characterization Kit',
                  description:
                    'Customizable Kintex-7 characterization kit derived from the AMD KC724. 16 GTX transceivers at 12.5Gbps, four BullsEye pads. Request a quote.',
                  image: [
                    'https://www.whizzsystems.com/assets/featured-products/products/KC724/hero.png',
                  ],
                  brand: { '@type': 'Brand', name: 'Whizz Systems' },
                  manufacturer: {
                    '@type': 'Organization',
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  audience: {
                    '@type': 'BusinessAudience',
                    audienceType: 'Hardware design engineers',
                  },
                  additionalProperty: [
                    {
                      '@type': 'PropertyValue',
                      name: 'Base platform',
                      value: 'AMD Xilinx KC724 Characterization Kit',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'FPGA',
                      value: 'Kintex-7 XC7K410T',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Transceivers',
                      value: '16 GTX transceivers at 12.5Gbps',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Connectivity',
                      value:
                        'Four Samtec BullsEye connector pads, two differential MRCC SMA inputs, USB-to-UART bridge',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Clocking',
                      value:
                        '200MHz fixed LVDS oscillator, SuperClock-2 module, differential SMA clock inputs',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Expansion',
                      value: 'Three VITA 57.1 FMC-HPC connectors',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Configuration',
                      value:
                        'Digilent USB JTAG programming port, System ACE SD controller',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Power',
                      value: 'PMBus connectivity for real-time power management',
                    },
                  ],
                  offers: {
                    '@type': 'Offer',
                    url: 'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                    priceCurrency: 'USD',
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      valueAddedTaxIncluded: false,
                      description: 'Price on application - request a quote',
                    },
                    seller: {
                      '@id': 'https://www.whizzsystems.com/#organization',
                    },
                    areaServed: { '@type': 'Place', name: 'Worldwide' },
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724#faq',
                  url: 'https://www.whizzsystems.com/featured-products/xilinx-kintex-7-fpga-kc724',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What FPGA does the KC724 characterization kit use?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The KC724 is built around the Kintex-7 XC7K410T and exposes 16 GTX transceivers rated at 12.5Gbps.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How does the KC724 differ from the Virtex-7 characterization kits?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The KC724 exposes 16 transceivers across four BullsEye pads on a Kintex-7 device; the Virtex-7 WS7203 kits expose 28 transceivers across nine pads. Choose based on the number of channels you need to characterize simultaneously.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is IBERT used for on this kit?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'IBERT runs bit error rate tests across the transceiver channels, sweeps equalization settings, and captures eye scans to establish the achievable channel reach.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can the KC724 be customized?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Transceiver test configurations, clocking, expansion and I/O, firmware, and power and thermal design can all be modified, and the design can be productized.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do we get pricing for the KC724?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Pricing is provided on application. Request a quote with your required configuration and volume.',
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
        path: 'xilinx-virtex-7-fpga-ws7203-a',
        loadComponent: () =>
          import(
            './products/xilinx-virtex-7-fpga-ws7203-a/xilinx-virtex-7-fpga-ws7203-a.component'
          ).then((m) => m.XilinxVirtex7FPGAWS7203AComponent),
        title: 'Whizz Virtex-7 FPGA WS7203A Characterization Kit',
        data: {
          description:
            'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
          keywords:
            'Xilinx virtex 7 fpga ws 7203 price, customizable Xilinx virtex 7 FPGA WS7203A, customizable Virtex 7 FPGA VC7203, customizable AMD Virtex 7 FPGA VC7203 Characterization Kit, customizable Xilinx virtex 7 fpga ws 7203 evaluation kit, customizebale virtex 7 fpga ws 7203',
          og: {
            type: 'product',
            site_name: 'Whizz Systems',
            title: 'Whizz Virtex-7 FPGA WS7203A Characterization Kit',
            description:
              'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
            url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS7203A/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Virtex-7 FPGA WS7203A FPGA characterization kit',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Virtex-7 FPGA WS7203A Characterization Kit',
            description:
              'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS7203A/hero.png',
            'image:alt':
              'Whizz Virtex-7 FPGA WS7203A FPGA characterization kit',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a#webpage',
                  url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a',
                  name: 'Whizz Virtex-7 FPGA WS7203A Characterization Kit',
                  description:
                    'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/featured-products/products/WS7203A/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a#breadcrumb',
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
                      item: 'https://www.whizzsystems.com/featured-products',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Whizz Virtex-7 FPGA WS7203A',
                      item: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a',
                    },
                  ],
                },
                {
                  '@type': 'Product',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a#product',
                  name: 'Whizz Virtex-7 FPGA WS7203A',
                  sku: 'WS7203A',
                  mpn: 'WS7203A',
                  category: 'FPGA Characterization Kit',
                  description:
                    'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
                  image: [
                    'https://www.whizzsystems.com/assets/featured-products/products/WS7203A/hero.png',
                  ],
                  brand: { '@type': 'Brand', name: 'Whizz Systems' },
                  manufacturer: {
                    '@type': 'Organization',
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  audience: {
                    '@type': 'BusinessAudience',
                    audienceType: 'Hardware design engineers',
                  },
                  additionalProperty: [
                    {
                      '@type': 'PropertyValue',
                      name: 'Base platform',
                      value: 'AMD Xilinx VC7203 Characterization Kit',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Kit type',
                      value: 'Characterization kit',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'FPGA',
                      value: 'Virtex-7 XC7VX690T',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Transceivers',
                      value: '28 GTX transceivers at 12.5Gbps',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Connectivity',
                      value:
                        'Nine Samtec BullsEye connector pads, two differential MRCC SMA inputs, USB-to-UART bridge',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Clocking',
                      value:
                        '200MHz fixed LVDS oscillator, SuperClock-2 module, differential SMA clock inputs',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Expansion',
                      value: 'Three VITA 57.1 FMC-HPC connectors',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Configuration',
                      value:
                        'Digilent USB JTAG programming port, System ACE SD controller',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Control and I/O',
                      value:
                        'I2C bus for system control, DIP switches, push buttons, status and general-purpose LEDs',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Power',
                      value: 'PMBus connectivity for real-time power management',
                    },
                  ],
                  offers: {
                    '@type': 'Offer',
                    url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                    priceCurrency: 'USD',
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      valueAddedTaxIncluded: false,
                      description: 'Price on application - request a quote',
                    },
                    seller: {
                      '@id': 'https://www.whizzsystems.com/#organization',
                    },
                    areaServed: { '@type': 'Place', name: 'Worldwide' },
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a#faq',
                  url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-a',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is a transceiver characterization kit used for?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: "It is used to measure the real behaviour of a device's high-speed serial transceivers—including eye height and width, jitter, and bit error rate across various channel conditions—so a channel budget can be established before a product board is designed.",
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How many transceivers does the WS7203A expose?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: '28 GTX transceivers rated at 12.5Gbps, brought out to nine Samtec BullsEye connector pads.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the difference between the WS7203A and the WS7203B?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Both are VC7203 derivatives built on the Virtex-7 XC7VX690T with 28 GTX transceivers. Confirm the intended configuration with our engineering team, because the two are supplied for different test setups.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does the kit include clocking for jitter measurement?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. A 200MHz fixed LVDS oscillator, a SuperClock-2 module, and differential SMA clock inputs are provided so an external reference can be substituted.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do we get pricing for the WS7203A?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Pricing is provided on application. Request a quote with your required configuration and volume.',
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
        path: 'xilinx-virtex-7-fpga-ws7203-b',
        loadComponent: () =>
          import(
            './products/xilinx-virtex-7-fpga-ws7203-b/xilinx-virtex-7-fpga-ws7203-b.component'
          ).then((m) => m.XilinxVirtex7FPGAWS7203BComponent),
        title: 'Whizz Virtex-7 FPGA WS7203B Characterization Kit',
        data: {
          description:
            'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
          keywords:
            'Xilinx Virtex 7 FPGA WS7203B, Whizz Virtex 7 FPGA WS7203B, Xilinx Virtex 7 FPGA WS7203B specs, Xilinx virtex 7 fpga ws 7203 b price, Customizable Virtex 7 FPGA WS7203B, AMD Virtex 7 FPGA WS7203B',
          og: {
            type: 'product',
            site_name: 'Whizz Systems',
            title: 'Whizz Virtex-7 FPGA WS7203B Characterization Kit',
            description:
              'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
            url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS7203B/hero.png',
            'image:width': '1200',
            'image:height': '630',
            'image:alt':
              'Whizz Virtex-7 FPGA WS7203B FPGA characterization kit',
            locale: 'en_US',
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Whizz Virtex-7 FPGA WS7203B Characterization Kit',
            description:
              'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
            image:
              'https://www.whizzsystems.com/assets/featured-products/products/WS7203B/hero.png',
            'image:alt':
              'Whizz Virtex-7 FPGA WS7203B FPGA characterization kit',
          },
          schema: [
            {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b#webpage',
                  url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b',
                  name: 'Whizz Virtex-7 FPGA WS7203B Characterization Kit',
                  description:
                    'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
                  inLanguage: 'en-US',
                  isPartOf: { '@id': 'https://www.whizzsystems.com/#website' },
                  publisher: { '@id': 'https://www.whizzsystems.com/#organization' },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: 'https://www.whizzsystems.com/assets/featured-products/products/WS7203B/hero.png',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b#breadcrumb',
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
                      item: 'https://www.whizzsystems.com/featured-products',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Whizz Virtex-7 FPGA WS7203B',
                      item: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b',
                    },
                  ],
                },
                {
                  '@type': 'Product',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b#product',
                  name: 'Whizz Virtex-7 FPGA WS7203B',
                  sku: 'WS7203B',
                  mpn: 'WS7203B',
                  category: 'FPGA Characterization Kit',
                  description:
                    'Customizable Virtex-7 characterization kit derived from the AMD VC7203. 28 GTX transceivers at 12.5Gbps, nine BullsEye pads. Request a quote.',
                  image: [
                    'https://www.whizzsystems.com/assets/featured-products/products/WS7203B/hero.png',
                  ],
                  brand: { '@type': 'Brand', name: 'Whizz Systems' },
                  manufacturer: {
                    '@type': 'Organization',
                    '@id': 'https://www.whizzsystems.com/#organization',
                  },
                  audience: {
                    '@type': 'BusinessAudience',
                    audienceType: 'Hardware design engineers',
                  },
                  additionalProperty: [
                    {
                      '@type': 'PropertyValue',
                      name: 'Base platform',
                      value: 'AMD Xilinx VC7203 Characterization Kit',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'FPGA',
                      value: 'Virtex-7 XC7VX690T',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Transceivers',
                      value: '28 GTX transceivers at 12.5Gbps',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Connectivity',
                      value:
                        'Nine Samtec BullsEye connector pads, two differential MRCC SMA inputs, USB-to-UART bridge',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Clocking',
                      value:
                        '200MHz fixed LVDS oscillator, SuperClock-2 module, differential SMA clock inputs',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Expansion',
                      value: 'Three VITA 57.1 FMC-HPC connectors',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Configuration',
                      value:
                        'Digilent USB JTAG programming port, System ACE SD controller',
                    },
                    {
                      '@type': 'PropertyValue',
                      name: 'Power',
                      value: 'PMBus connectivity for real-time power management',
                    },
                  ],
                  offers: {
                    '@type': 'Offer',
                    url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                    priceCurrency: 'USD',
                    priceSpecification: {
                      '@type': 'PriceSpecification',
                      valueAddedTaxIncluded: false,
                      description: 'Price on application - request a quote',
                    },
                    seller: {
                      '@id': 'https://www.whizzsystems.com/#organization',
                    },
                    areaServed: { '@type': 'Place', name: 'Worldwide' },
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id':
                    'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b#faq',
                  url: 'https://www.whizzsystems.com/featured-products/xilinx-virtex-7-fpga-ws7203-b',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is the difference between the WS7203B and the WS7203A?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Both are VC7203 derivatives built on the Virtex-7 XC7VX690T with 28 GTX transceivers. Confirm the intended configuration with our engineering team, because the two are supplied for different test setups.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How many transceivers does the WS7203B expose?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: '28 GTX transceivers rated at 12.5Gbps, brought out to nine Samtec BullsEye connector pads.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is included for clocking?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'A 200MHz fixed LVDS oscillator, a SuperClock-2 module, and differential SMA clock inputs are included so an external reference clock can be substituted for jitter tolerance testing.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can the WS7203B be customized?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Transceiver test configurations, optical or backplane integration, clocking, expansion and I/O, firmware, and thermal design can all be modified.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do we get pricing for the WS7203B?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Pricing is provided on application. Request a quote with your required configuration and volume.',
                      },
                    },
                  ],
                },
              ],
            }
          ],
        },
      },
    ],
  },
];
