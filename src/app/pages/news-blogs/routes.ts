import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./featured-blogs/blogs.component').then(
            (m) => m.BlogsComponent
          ),
        title: 'News & Insights',
      },
      {
        path: 'whitepaper-5g-oru',
        loadComponent: () =>
          import('./blogs/5G-ORU/5g-oru.component').then((m) => m.ORUComponent),
        title: 'Whitepaper/5G ORU',
      },
      {
        path: 'whitepaper-heatsink',
        loadComponent: () =>
          import('./blogs/heatsink/heatsink.component').then(
            (m) => m.HeatsinkComponent
          ),
        title: 'Whitepaper/HeatSink',
      },
      {
        path: 'whitepaper-invensify',
        loadComponent: () =>
          import('./blogs/invensify/invensify.component').then(
            (m) => m.InvensifyComponent
          ),
        title:
          'Medical Device Development | Invensify & Whizz Systems Whitepaper',
        data: {
          description:
            'Whizz Systems partnered with Invensify to develop Insuridge — a next-gen medical device featuring advanced PCB design, liquid cooling, and thermal management for medical logistics.',
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
                      name: 'News & Insights',
                      item: 'https://www.whizzsystems.com/news-&-insights/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Whitepaper: Invensify',
                      item: 'https://www.whizzsystems.com/news-&-insights/whitepaper-invensify',
                    },
                  ],
                },
                {
                  '@type': 'TechArticle',
                  headline:
                    'Building the Future of Medical Logistics with Invensify',
                  alternativeHeadline:
                    'Next-Generation Medical Device Development by Whizz Systems and Invensify',
                  description:
                    "A whitepaper on Whizz Systems' collaboration with Invensify to develop Insuridge — a smart cold chain medical refrigeration system for biopharma logistics, featuring advanced PCB design, thermal management, and component engineering.",
                  author: {
                    '@type': 'Organization',
                    name: 'Whizz Systems',
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: 'Whizz Systems',
                    logo: {
                      '@type': 'ImageObject',
                      url: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
                    },
                  },
                  datePublished: '2025-09-20',
                  mainEntityOfPage:
                    'https://www.whizzsystems.com/news-&-insights/whitepaper-invensify',
                  about: [
                    'Medical Device Development',
                    'Medical Device Hardware Design',
                    'Medical Device Thermal Management',
                    'Medical Device Supply Chain Management',
                    'Smart Medical Refrigeration',
                  ],
                },
              ],
            },
          ],
          og: {
            type: 'article',
            title:
              'Building the Future of Medical Logistics with Invensify | Whizz Systems Whitepaper',
            description:
              'Read how Whizz Systems collaborated with Invensify to design Insuridge — an advanced, energy-efficient medical refrigeration system featuring precision PCB design, thermal management, and component engineering.',
            url: 'https://www.whizzsystems.com/news-&-insights/whitepaper-invensify',
            site_name: 'Whizz Systems',
            image:
              'https://www.whizzsystems.com/assets/images/whitepapers/invensify-insuridge-banner.jpg',
            image_alt:
              'Insuridge Smart Medical Device by Whizz Systems and Invensify',
            publisher: 'https://www.linkedin.com/company/whizz-systems/',
            section: 'Medical Device Development',
            tag: 'Medical Device, PCB Design, Thermal Management, Supply Chain',
          },
          twitter: {
            card: 'summary_large_image',
            title:
              'Building the Future of Medical Logistics with Invensify | Whizz Systems Whitepaper',
            description:
              'Discover how Whizz Systems collaborated with Invensify to build Insuridge — a next-gen medical device featuring liquid cooling, thermal optimization, and precision hardware design.',
            image:
              'https://www.whizzsystems.com/assets/images/whitepapers/invensify-insuridge-banner.jpg',
            image_alt: 'Whizz Systems & Invensify Smart Medical Device',
            site: '@WhizzSystems',
          },
        },
      },
      {
        path: 'whitepaper-pcle6',
        loadComponent: () =>
          import('./blogs/pcle-6/pcle-6.component').then(
            (m) => m.Pcle6Component
          ),
        title:
          'PCIe Gen 6 Design Guide | Insights on Signal Integrity, Power & Layout',
        data: {
          description:
            'Expert insights on PCIe Gen 6 design — from signal integrity, power stability, and PCB layout to thermal management and component selection.',
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'NewsArticle',
              headline:
                "Whizz Systems' Guide to PCIe Gen 6 Design & Implementation",
              description:
                'Explore PCIe Gen 6 design insights from Whizz Systems — covering signal integrity, power management, PCB layout, and manufacturing best practices for next-gen hardware.',
              image:
                'https://www.whizzsystems.com/assets/news/blogs/pcle6/hero.png',
              author: {
                '@type': 'Organization',
                name: 'Whizz Systems',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Whizz Systems',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.whizzsystems.com/images/logo.png',
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id':
                  'https://www.whizzsystems.com/news-&-insights/whitepaper-pcle6',
              },
              datePublished: '2025-10-07',
              dateModified: '2025-10-07',
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
                  name: 'News & Insights',
                  item: 'https://www.whizzsystems.com/news-&-insights/',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: "Whizz Systems' Guide to PCIe Gen 6",
                  item: 'https://www.whizzsystems.com/news-&-insights/whitepaper-pcle6',
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What are the main design challenges of PCIe Gen 6?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The primary PCIe Gen 6 design challenges include maintaining signal integrity at 64 GT/s, minimizing jitter and loss, managing power delivery for high-speed components, and selecting dielectric materials with low Dk and Df for optimal performance.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How does PCIe Gen 6 differ from PCIe Gen 5?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'PCIe Gen 6 doubles the data rate from 32 GT/s (Gen 5) to 64 GT/s using PAM4 signaling instead of NRZ, which increases bandwidth but introduces new design constraints for signal integrity and PCB layout precision.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What PCB layout practices are critical for PCIe Gen 6?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'For PCIe Gen 6, designers must control trace impedance, minimize via stubs, apply tight length-matching rules, and use GSSG via structures to maintain signal quality. HVLP copper and low-loss materials are recommended.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How can thermal management impact PCIe Gen 6 reliability?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Effective thermal management prevents overheating of high-speed components. Whizz Systems uses advanced heat-sink integration, CFD analysis, and optimized airflow to ensure stable performance under heavy workloads.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does Whizz Systems offer PCIe Gen 6 design and validation services?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Whizz Systems provides full PCIe Gen 6 hardware design, layout, validation, and manufacturing services — including signal integrity analysis, power delivery optimization, and system-level testing for high-speed designs.',
                  },
                },
              ],
            },
          ],
          og: {
            type: 'article',
            title: "Whizz Systems' Guide to PCIe Gen 6 Design & Implementation",
            description:
              "Deep dive into PCIe Gen 6 hardware design — covering signal integrity, power delivery, PCB layout, and thermal management challenges. Learn from Whizz Systems' engineering experts.",
            url: 'https://www.whizzsystems.com/news-&-insights/whitepaper-pcle6',
            site_name: 'Whizz Systems',
            image:
              'https://www.whizzsystems.com/assets/news/blogs/pcle6/hero.png',
            image_alt: 'PCIe Gen 6 Hardware Design Guide by Whizz Systems',
            section: 'High-Speed Design',
            tag: 'PCIe Gen 6, Signal Integrity, PCB Design, Hardware Engineering',
          },
          twitter: {
            card: 'summary_large_image',
            title: "Whizz Systems' PCIe Gen 6 Design Guide",
            description:
              'Explore signal integrity, PCB design, and performance insights for PCIe Gen 6 from Whizz Systems experts.',
            image:
              'https://www.whizzsystems.com/assets/news/blogs/pcle6/hero.png',
            image_alt: 'Whizz Systems PCIe Gen 6 Engineering Guide',
            site: '@WhizzSystems',
          },
        },
      },
      {
        path: 'hardware-design',
        loadComponent: () =>
          import('./blogs/hardware-design/hardware-design.component').then(
            (m) => m.HardwareDesignComponent
          ),
        title: 'High Density Hardware Design',
      },
      {
        path: 'high-power-demand',
        loadComponent: () =>
          import('./blogs/high-power-demand/high-power-demand.component').then(
            (m) => m.HighPowerDemandComponent
          ),
        title: 'High-Power Demands in Next-Generation Hardware',
      },
      {
        path: 'future-architecture-performance',
        loadComponent: () =>
          import(
            './blogs/future-proof-architecture/future-proof-architecture.component'
          ).then((m) => m.FutureProofArchitectureComponent),
        title:
          'Whizz | Future-Proof Architecture and Performance in Next-Generation Systems',
      },
    ],
  },
];
