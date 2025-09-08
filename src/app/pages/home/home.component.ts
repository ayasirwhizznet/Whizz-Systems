import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HeroComponent } from '@components/hero/hero.component';
import { ServicesComponent } from '@components/service/services.component';
import { IdeasComponent } from '@components/ideas/ideas.component';
import { TrustComponent } from '@components/trust/trust.component';
import { TestimonialsComponent } from '@components/testimonials/testimonials.component';
import { NewsComponent } from '@components/news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    IdeasComponent,
    TrustComponent,
    TestimonialsComponent,
    NewsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  blogs: any[] = [
    {
      imgUrl: 'assets/news/blogs/future-performance/scalability-&-hardware.png',
      date: 'July 22, 2025',
      tags: ['AI Hardware', 'Obsolescence Management'],
      title: 'Future-Proof Architecture and Performance in Next-Generation Systems',
      link: '/news-&-insights/future-architecture-performance',
    },
    {
      imgUrl: 'assets/news/blogs/high-power/key-challenges.png',
      date: 'June 10, 2025',
      tags: ['AI Hardware','High Density PCB Design'],
      title: 'Managing High-Power Demands in Next-Generation Hardware',
      link: '/news-&-insights/high-power-demand',
    },
    {
      imgUrl: 'assets/news/blog-6.png',
      date: 'May 14, 2025',
      tags: ['AI Hardware Design','High-density PCB design'],
      title: 'NextGen Hardware Design for High-Density, High-Complexity Systems',
      link: '/news-&-insights/hardware-design',
    },
    {
      imgUrl: 'assets/news/blog-1.png',
      date: 'May 29, 2024',
      tags: ['Whitepaper', 'High Speed Connectivity'],
      title: 'PCIe-6: Everything You Need to Know',
      link: '/news-&-insights/whitepaper-pcle6',
    },
    {
      imgUrl: 'assets/news/blog-2.png',
      date: 'July 9, 2024',
      tags: ['Case Study', 'Hardware Design'],
      title:
        'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
      link: '/news-&-insights/whitepaper-5g-oru',
    },
    {
      imgUrl: 'assets/news/blog-3.png',
      date: 'July 9, 2024',
      tags: ['Whitepaper', 'Thermal Management'],
      title:
        'Heatsinks Uncovered: Best Practices for Optimized Thermal Management',
      link: '/news-&-insights/whitepaper-heatsink',
    },
    {
      imgUrl: 'assets/news/blog-4.png',
      date: 'December 12, 2024',
      tags: ['Case Study', 'Medical Devices'],
      title: 'Engineering Smart Medical Devices: The Invensify Case Study',
      link: '/news-&-insights/whitepaper-invensify',
    }
  ];

  ngOnInit(): void {
    const jsonLdData = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Whizz Systems",
        "url": "https://www.whizzsystems.com/",
        "logo": "https://www.whizzsystems.com/assets/header/teal-logo.png",
        "description": "Whizz Systems is a leading EMS and electronic product design company offering advanced design, engineering, development, and manufacturing services.",
        "foundingDate": "1999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Santa Clara, CA",
          "addressLocality": "Silicon Valley",
          "addressRegion": "CA",
          "postalCode": "95054",
          "addressCountry": "USA"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-408-XXXXXXX",
          "contactType": "sales",
          "areaServed": "Worldwide"
        },
        "sameAs": [
          "https://www.linkedin.com/company/whizz-systems/",
          "https://www.youtube.com/@WhizzSystemsCA"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "EMS (Electronics Manufacturing Services)",
        "provider": {
          "@type": "Organization",
          "name": "Whizz Systems",
          "url": "https://www.whizzsystems.com/"
        },
        "description": "Full-service EMS provider delivering advanced electronics design, development, and manufacturing solutions."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Electronic Product Design",
        "provider": {
          "@type": "Organization",
          "name": "Whizz Systems",
          "url": "https://www.whizzsystems.com/"
        },
        "description": "Innovative electronic product design and engineering services for hi-tech industries."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Electronic Product Development",
        "provider": {
          "@type": "Organization",
          "name": "Whizz Systems",
          "url": "https://www.whizzsystems.com/"
        },
        "description": "End-to-end electronic product development services from concept to market."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Electronic Manufacturing",
        "provider": {
          "@type": "Organization",
          "name": "Whizz Systems",
          "url": "https://www.whizzsystems.com/"
        },
        "description": "High-quality electronics manufacturing services with global supply chain support."
      }
    ];

    jsonLdData.forEach((entry) => {
      const script = this.renderer.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(entry);
      this.renderer.appendChild(this.document.body, script); // Or use this.document.body
    });
  }
}
