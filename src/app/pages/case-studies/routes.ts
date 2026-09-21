import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/',
                pathMatch: 'full',
            },
            {
                path: 'amd-vpk180',
                loadComponent: () =>
                    import('../case-studies/amd-vpk180/amd-vpk180.component').then(
                        (m) => m.AmdVpk180Component
                    ),
                title: 'AMD VPK180 Versal Premium Evaluation Board',
                data: {
                    description:
                        'How Whizz Systems designed and built the AMD VPK180 evaluation platform for Versal Premium, supporting 112G PAM4, DDR4 and QSFP-DD.',
                    keywords:
                        'AMD VPK180, Versal Premium, Adaptive SoC, FPGA Evaluation Board, Whizz Systems, VP1802, High-Speed Design, SerDes, GTY Transceivers',
                    schema: [
                        {
                            '@context': 'https://schema.org',
                            '@type': 'Article',
                            headline:
                                'AMD VPK180 Evaluation Board — Versal Premium Adaptive SoC Platform',
                            description:
                                'A single, versatile evaluation board engineered by Whizz Systems to demonstrate AMD Versal™ Premium capabilities across optical communications, data center acceleration, aerospace, and testing/measurement.',
                            image:
                                'https://www.whizzsystems.com/assets/news/blogs/amd-vpk180/hero.png',
                            author: {
                                '@type': 'Organization',
                                name: 'Whizz Systems',
                                url: 'https://www.whizzsystems.com/',
                            },
                            publisher: {
                                '@type': 'Organization',
                                name: 'Whizz Systems',
                                logo: {
                                    '@type': 'ImageObject',
                                    url: 'https://www.whizzsystems.com/assets/header/teal-logo.png',
                                },
                            },
                            mainEntityOfPage:
                                'https://www.whizzsystems.com/case-studies/amd-vpk180',
                            datePublished: '2025-12-06',
                            dateModified: '2026-08-17',
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
                                    name: 'Case Studies',
                                    item: 'https://www.whizzsystems.com/case-studies',
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 3,
                                    name: 'AMD VPK180 Evaluation Board',
                                    item: 'https://www.whizzsystems.com/case-studies/amd-vpk180',
                                },
                            ],
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: [
                                {
                                    '@type': 'Question',
                                    name: 'What is the AMD VPK180 Evaluation Board?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'The AMD VPK180 is a comprehensive evaluation board featuring the Versal Premium VP1802 Adaptive SoC, designed for high-performance applications in data centers, optical communications, aerospace, and test equipment.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Who designed the VPK180 evaluation board?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'The VPK180 evaluation board was designed and manufactured by Whizz Systems in collaboration with AMD, leveraging over 25 years of expertise in high-complexity FPGA design.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'What high-speed interfaces does VPK180 support?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'The VPK180 supports GTY transceivers with 112G PAM4 and 56G NRZ SerDes, DDR4 and LPDDR4 memory interfaces, QSFP-DD and QSFP28 optical modules, and FMC+ expansion connectivity.',
                                    },
                                },
                            ],
                        },
                    ],
                    og: {
                        type: 'article',
                        site_name: 'Whizz Systems',
                        title: 'AMD VPK180 Versal Premium Evaluation Board',
                        description:
                            'How Whizz Systems designed and built the AMD VPK180 evaluation platform for Versal Premium, supporting 112G PAM4, DDR4 and QSFP-DD.',
                        url: 'https://www.whizzsystems.com/case-studies/amd-vpk180',
                        image:
                            'https://www.whizzsystems.com/assets/news/blogs/amd-vpk180/hero.png',
                        'image:width': '1200',
                        'image:height': '630',
                        'image:alt':
                            'AMD VPK180 Versal Premium evaluation board designed by Whizz Systems',
                        locale: 'en_US',
                    },
                    article: {
                        published_time: '2025-12-06',
                        modified_time: '2026-08-17',
                    },
                    twitter: {
                        card: 'summary_large_image',
                        title: 'AMD VPK180 Versal Premium Evaluation Board',
                        description:
                            'How Whizz Systems designed and built the AMD VPK180 evaluation platform for Versal Premium, supporting 112G PAM4, DDR4 and QSFP-DD.',
                        image:
                            'https://www.whizzsystems.com/assets/news/blogs/amd-vpk180/hero.png',
                        'image:alt':
                            'AMD VPK180 Versal Premium evaluation board designed by Whizz Systems',
                    },
                },
            },
            {
                path: 'invensify-medical-device',
                loadComponent: () =>
                    import('../news-blogs/blogs/invensify/invensify.component').then(
                        (m) => m.InvensifyComponent
                    ),
                title: 'Medical Device Case Study: Invensify | Whizz Systems',
                data: {
                    description:
                        'How Whizz Systems designed and manufactured a smart, reliable medical refrigeration system for Invensify, from concept to production.',
                    og: {
                        type: 'article',
                        site_name: 'Whizz Systems',
                        title: 'Medical Device Case Study: Invensify | Whizz Systems',
                        description:
                            'How Whizz Systems designed and manufactured a smart, reliable medical refrigeration system for Invensify, from concept to production.',
                        url: 'https://www.whizzsystems.com/case-studies/invensify-medical-device',
                        image:
                            'https://www.whizzsystems.com/assets/news/blogs/invensify/hero.png',
                        'image:width': '1200',
                        'image:height': '630',
                        'image:alt':
                            'Invensify smart medical refrigeration system',
                        locale: 'en_US',
                    },
                    article: {
                        published_time: '2024-12-12',
                        modified_time: '2026-08-17',
                    },
                    twitter: {
                        card: 'summary_large_image',
                        title: 'Medical Device Case Study: Invensify | Whizz Systems',
                        description:
                            'How Whizz Systems designed and manufactured a smart, reliable medical refrigeration system for Invensify, from concept to production.',
                        image:
                            'https://www.whizzsystems.com/assets/news/blogs/invensify/hero.png',
                        'image:alt':
                            'Invensify smart medical refrigeration system',
                    },
                },
            },
        ],
    },
];
