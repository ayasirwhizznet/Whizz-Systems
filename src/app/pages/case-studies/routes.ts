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
                title:
                    'AMD VPK180 Evaluation Board | Versal Premium Adaptive SoC | Whizz Systems',
                data: {
                    description:
                        'Explore the AMD VPK180 evaluation board designed by Whizz Systems, featuring the Versal Premium VP1802 Adaptive SoC for high-performance FPGA applications.',
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
                                'https://www.whizzsystems.com/news-&-insights/amd-vpk180',
                            datePublished: '2025-12-06',
                            dateModified: '2025-12-06',
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
                                    name: 'AMD VPK180 Evaluation Board',
                                    item: 'https://www.whizzsystems.com/news-&-insights/amd-vpk180',
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
                        title:
                            'AMD VPK180 Evaluation Board — Versal Premium Adaptive SoC Platform',
                        description:
                            'A versatile evaluation board engineered by Whizz Systems showcasing AMD Versal™ Premium capabilities for next-gen FPGA development.',
                        url: 'https://www.whizzsystems.com/news-&-insights/amd-vpk180',
                        site_name: 'Whizz Systems',
                        image:
                            'https://www.whizzsystems.com/assets/news/blogs/amd-vpk180/hero.png',
                        image_alt: 'AMD VPK180 Evaluation Board by Whizz Systems',
                        publisher: 'https://www.linkedin.com/company/whizz-systems/',
                        section: 'FPGA Development',
                        tag: 'AMD, Versal Premium, FPGA, Evaluation Board, Hardware Design',
                    },
                    twitter: {
                        card: 'summary_large_image',
                        title:
                            'AMD VPK180 Evaluation Board — Versal Premium Adaptive SoC Platform',
                        description:
                            'Whizz Systems delivers a powerful evaluation board for AMD Versal™ Premium FPGA development.',
                        image:
                            'https://www.whizzsystems.com/assets/news/blogs/amd-vpk180/hero.png',
                        image_alt: 'AMD VPK180 Evaluation Board by Whizz Systems',
                        site: '@WhizzSystems',
                    },
                },
            },
        ],
    },
];