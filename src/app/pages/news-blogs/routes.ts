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
        title: 'Whitepaper/PCLe-6',
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
