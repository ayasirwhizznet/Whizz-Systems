export interface BlogItem {
    imgUrl: string;
    date: string;
    tags: string[];
    title: string;
    link: string;
}

export const blogList: BlogItem[] = [
    {
        imgUrl: 'assets/news/product-1.png',
        date: 'March 13, 2026',
        tags: ['Article', 'High-Speed AI Design'],
        title: 'High-Speed AI Design Challenges & Robust SI Techniques',
        link: '/insights/high-speed-ai-design-si-techniques',
    },
    {
        imgUrl: 'assets/news/product-2.png',
        date: 'March 2, 2026',
        tags: ['Article', 'Interconnect Architecture'],
        title: 'Enhancing Performance with Innovative Interconnect Topologies and Custom Solutions',
        link: '/insights/high-throughput-interconnect-topologies',
    },
    {
        imgUrl: 'assets/news/product-3.png',
        date: 'Dec 06, 2025',
        tags: ['Case Study'],
        title: 'AMD VPK180 Evaluation Board — Versal Premium Adaptive SoC Platform',
        link: '/case-studies/amd-vpk180',
    },
    {
        imgUrl: 'assets/news/blogs/future-performance/scalability-&-hardware.png',
        date: 'July 22, 2025',
        tags: ['AI Hardware', 'Obsolescence Management'],
        title: 'Future-Proof Architecture and Performance in Next-Generation Systems',
        link: '/insights/future-proof-ai-hardware-architecture',
    },
    {
        imgUrl: 'assets/news/blogs/high-power/key-challenges.png',
        date: 'June 10, 2025',
        tags: ['AI Hardware', 'High Density PCB Design'],
        title: 'Managing High-Power Demands in Next-Generation Hardware',
        link: '/insights/high-power-demand',
    },
    {
        imgUrl: 'assets/news/blog-6.png',
        date: 'May 14, 2025',
        tags: ['AI Hardware Design', 'High-density PCB design'],
        title: 'NextGen Hardware Design for High-Density, High-Complexity Systems',
        link: '/insights/high-density-ai-hardware-design',
    },
    {
        imgUrl: 'assets/news/blog-1.png',
        date: 'May 29, 2024',
        tags: ['Whitepaper', 'High Speed Connectivity'],
        title: 'PCIe-6: Everything You Need to Know',
        link: '/insights/pcie-gen-6-design-guide',
    },
    {
        imgUrl: 'assets/news/blog-2.png',
        date: 'July 9, 2024',
        tags: ['Case Study', 'Hardware Design'],
        title: 'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
        link: '/insights/5g-oru-development',
    },
    {
        imgUrl: 'assets/news/blog-3.png',
        date: 'July 9, 2024',
        tags: ['Whitepaper', 'Thermal Management'],
        title: 'Heatsinks Uncovered: Best Practices for Optimized Thermal Management',
        link: '/insights/heatsink-design-guide',
    },
    {
        imgUrl: 'assets/news/blog-4.png',
        date: 'December 12, 2024',
        tags: ['Case Study', 'Medical Devices'],
        title: 'Engineering Smart Medical Devices: The Invensify Case Study',
        link: '/insights/whitepaper-invensify',
    },
    {
        imgUrl: 'assets/news/blogs/product-manufacturing/hero.png',
        date: 'May 22, 2026',
        tags: ['Manufacturing Quality', 'PCBA'],
        title: 'How Whizz Systems Delivers: End-to-End Product Manufacturing Reliability',
        link: '/insights/end-to-end-product-manufacturing-reliability',
    },
];

export const getOtherBlogs = (currentLink: string): BlogItem[] =>
    blogList.filter((blog) => blog.link !== currentLink);
