import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Whizz Systems | EMS, Design, Engineering & Development Experts',
    data: {
      description: `Whizz Systems provides EMS, advanced electronic design, engineering, and product development services with 25+ years of expertise in hi-tech industries.`,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Whizz Systems',
          url: 'https://www.whizzsystems.com/',
          logo: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
          description:
            'Whizz Systems is a leading EMS and electronic product design company offering advanced design, engineering, development, and manufacturing services.',
          foundingDate: '1999',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Santa Clara, CA',
            addressLocality: 'Silicon Valley',
            addressRegion: 'CA',
            postalCode: '95054',
            addressCountry: 'USA',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-408-XXXXXXX',
            contactType: 'sales',
            areaServed: 'Worldwide',
          },
          sameAs: [
            'https://www.linkedin.com/company/whizz-systems/',
            'https://www.youtube.com/@WhizzSystemsCA',
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'EMS (Electronics Manufacturing Services)',
          provider: {
            '@type': 'Organization',
            name: 'Whizz Systems',
            url: 'https://www.whizzsystems.com/',
          },
          description:
            'Full-service EMS provider delivering advanced electronics design, development, and manufacturing solutions.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Electronic Product Design',
          provider: {
            '@type': 'Organization',
            name: 'Whizz Systems',
            url: 'https://www.whizzsystems.com/',
          },
          description:
            'Innovative electronic product design and engineering services for hi-tech industries.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Electronic Product Development',
          provider: {
            '@type': 'Organization',
            name: 'Whizz Systems',
            url: 'https://www.whizzsystems.com/',
          },
          description:
            'End-to-end electronic product development services from concept to market.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Electronic Manufacturing',
          provider: {
            '@type': 'Organization',
            name: 'Whizz Systems',
            url: 'https://www.whizzsystems.com/',
          },
          description:
            'High-quality electronics manufacturing services with global supply chain support.',
        },
      ],
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'Whizz Systems - End-to-End Electronics Design & Manufacturing Partner',
    data: {
      description:
        'Whizz Systems is an end-to-end electronics design, development and manufacturing partner. 30+ years of experience in PCB design, NPI, advanced manufacturing, lab testing, sustainable engineering and global supply chain management.',
      keywords:
        'electronics design and manufacturing, end-to-end electronics partner, PCB design, new product introduction, NPI, advanced manufacturing, lab testing solutions, sustainable engineering, supply chain management, Whizz Systems, Silicon Valley electronics',
      og: {
        title: "Whizz Systems — Your End-to-End Electronics Design & Manufacturing Partner",
        description:
          "Delivering advanced electronics solutions & manufacturing since 1999. Expertise across aerospace, medical, automotive, AI, telecom and more.",
        image: "/mnt/data/3916b31f-eb0f-43be-8914-bc587ff9d0de.png",
        url: "https://www.whizzsystems.com/about",
        type: "website"
      },
      twitter: {
        card: "summary_large_image",
        title: "Whizz Systems — Your End-to-End Electronics Design & Manufacturing Partner",
        description:
          "Innovative solutions. Global expertise. Proven excellence — Whizz Systems delivers design, prototyping, manufacturing and compliance under one roof.",
        image: "/mnt/data/3916b31f-eb0f-43be-8914-bc587ff9d0de.png"
      },
      schema: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.whizzsystems.com/#organization",
              "name": "Whizz Systems",
              "url": "https://www.whizzsystems.com",
              "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/whizz-systems",
                "https://twitter.com/whizzsystems",
                "https://www.facebook.com/whizzsystems"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "telephone": "+1-408-988-1849",
                  "areaServed": "Worldwide",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "technical support",
                  "telephone": "+1-408-988-1849",
                  "areaServed": "Worldwide",
                  "availableLanguage": "English"
                }
              ]
            },

            {
              "@type": "WebSite",
              "@id": "https://www.whizzsystems.com/#website",
              "url": "https://www.whizzsystems.com",
              "name": "Whizz Systems",
              "publisher": { "@id": "https://www.whizzsystems.com/#organization" }
            },

            {
              "@type": "WebPage",
              "@id": "https://www.whizzsystems.com/about#webpage",
              "url": "https://www.whizzsystems.com/about",
              "name": "About Whizz Systems",
              "description": "Whizz Systems is an end-to-end electronics design & manufacturing partner. Offering NPI, advanced manufacturing, lab testing, sustainable engineering and supply chain services.",
              "isPartOf": { "@id": "https://www.whizzsystems.com/#website" },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "/mnt/data/3916b31f-eb0f-43be-8914-bc587ff9d0de.png"
              }
            },

            {
              "@type": "BreadcrumbList",
              "@id": "https://www.whizzsystems.com/about#breadcrumb",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.whizzsystems.com/" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.whizzsystems.com/about" }
              ]
            },

            {
              "@type": "Person",
              "@id": "https://www.whizzsystems.com/about#manny",
              "name": "Manny Karim",
              "jobTitle": "CEO",
              "worksFor": { "@id": "https://www.whizzsystems.com/#organization" },
              "description": "Manny Karim co-founded Whizz Systems and leads global operations, manufacturing and finance.",
              "sameAs": []
            },

            {
              "@type": "Person",
              "@id": "https://www.whizzsystems.com/about#muhammad",
              "name": "Muhammad Irfan",
              "jobTitle": "President",
              "worksFor": { "@id": "https://www.whizzsystems.com/#organization" },
              "description": "Muhammad Irfan co-founded Whizz Systems and leads product development and global expansion.",
              "sameAs": []
            },

            {
              "@type": "FAQPage",
              "@id": "https://www.whizzsystems.com/about#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Whizz Systems offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Whizz Systems offers electronics design, NPI, advanced manufacturing, lab testing, sustainable engineering, firmware and supply chain management."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Whizz Systems located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Whizz Systems is located in Silicon Valley with additional global offices and manufacturing facilities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which industries do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve defense & aerospace, medical devices, automotive, consumer electronics, AI computing, telecommunications and more."
                  }
                }
              ]
            }
          ]
        },
      ]
    },
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/routes').then((m) => m.routes),
  },
  {
    path: 'featured-products',
    loadChildren: () =>
      import('./pages/featured-products/routes').then((m) => m.routes),
  },
  {
    path: 'news-&-insights',
    loadChildren: () =>
      import('./pages/news-blogs/routes').then((m) => m.routes),
  },
  {
    path: 'case-studies',
    loadChildren: () =>
      import('./pages/case-studies/routes').then((m) => m.routes),
  },
  {
    path: 'careers/manufacturing-manager',
    loadComponent: () =>
      import('./pages/careers/careers.component').then((m) => m.CareersComponent),
    title: 'Careers',
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/error/404/404.component').then((m) => m.Page404Component),
    title: '404 Not Found',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
