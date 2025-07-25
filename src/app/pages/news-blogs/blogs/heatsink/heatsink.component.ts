import { BlogTagComponent } from './../../../../shared/components/blog-tag/blog-tag.component';
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { NewsComponent } from '@components/news/news.component';
import { Meta } from '@angular/platform-browser';
import { Subscription, filter } from 'rxjs';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-heatsink',
  standalone: true,
  imports: [BlogTagComponent,CommonModule, AnimatedButton, RouterLink,NewsComponent, ButtonComponent],
  templateUrl: './heatsink.component.html'
})
export class HeatsinkComponent {
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
      imgUrl: 'assets/news/blog-4.png',
      date: 'December 12, 2024',
      tags: ['Case Study', 'Medical Devices'],
      title: 'Engineering Smart Medical Devices: The Invensify Case Study',
      link: '/news-&-insights/whitepaper-invensify',
    }
  ];

  tags = ['Whitepaper','Thermal Management','Cooling Solutions'];

  factors = ['Surface area', 'Material choice', 'Fin geometry', 'Base dimensions', 'Innovative elements like varying sizes, scales, and protrusions'];

  approaches = [
    {
      number: '01',
      desc: 'Optimal fin spacing and number of fins are crucial for maximum heat transfer. Thinner fins improve performance by allowing more fins per base plate, while fin height and length significantly affect heatsink conductance and temperature regulation. The results indicate that careful consideration of fin dimensions can lead to an efficient heatsink design that meets specific thermal performance requirements [8]'
    },
    {
      number: '02',
      desc: 'Based on the PhD thesis “Design Optimization and Analysis of Heatsinks for Electronic Cooling, Amer Jameel Shareef Al-damook, and Results show that perforated pinned heatsinks improve CPU temperature, fan power consumption, heat transfer rate, and positioning of perforations plays a significant role. The findings suggest that perforated heatsinks are lighter and more efficient for cooling electronic devices and systems [10].'
    }
  ];

  rules = [
    {
      number: '01',
      desc: 'Thermal interface materials (TIMs) play a critical role in efficient heat transfer. TIMs bridge microscopic gaps and imperfections between the mating surfaces, ensuring a low-resistance thermal pathway for heat dissipation. Using TIM enhances thermal conductivity and eliminates air pockets, leading to more efficient heat transfer. All interface surfaces should be smooth and flat. Use heatsink thermal grease or TIM between the heatsink and the device. This will increase the thermal transfer between the two parts; however, excessive quantities of heatsink grease will decrease performance'
    },
    {
      number: '02',
      desc: 'Mount fins in the vertical plane for optimum natural convective cooling. Do not overcrowd or obstruct devices that use heatsinks. Semiconductors should be spaced to obtain a uniform power density. (see Fig. 4)'
    },
    {
      number: '03',
      desc: 'Do not block airflow around heatsinks, particularly directly above and below items that rely on natural convection.'
    },
    {
      number: '04',
      desc: 'If thermal demands are particularly high, consider using forced convection.'
    },
  ];

  selections = [
    {
      number: '01',
      desc: '<b>Determine Heat Generation:</b> Calculate the amount of heat, Q, generated by the device in watts (W). This heat generation is due to electrical resistance and power dissipation within the electronic components.'
    },
    {
      number: '02',
      desc: '<b>Device & Ambient Temperatures:</b> Find out, maximum allowable junction temperature of the device. This is the highest temperature the device can safely operate at, without risking damage or performance degradation. Also, you must know the maximum ambient air temperature of the system.'
    },
    {
      number: '03',
      desc: '<b>Convection Type:</b> Identify whether the cooling method will be natural convection or forced convection. For forced convection, you must know air flow velocity (LFM).'
    },
    {
      number: '04',
      desc: `<b>Calculate Thermal Resistance:</b> The final step is to calculate the required thermal resistance from the device junction to the ambient air using expression: <br>
<span class="mx-auto">Thermal Resistance = (Tj - Ta) / Q</span> <br>
Where, Tj is the maximum allowable junction temperature (°C), Ta is the maximum ambient air temperature (°C), Q is the heat generation of the device (W).`
    }
  ];

  infos = [
    {
      number: '01',
      desc: '<a href="https://scispace.com/papers/heat-generation-by-electrical-current-in-a-quantum-dot-3q31r4apiq" target="_blank" class="underline">Heat Generation by Electrical Current in a Quantum Dot Hybridized to Majorana Nanowires</a>'
    },
    {
      number: '02',
      desc: '<a href="https://scispace.com/papers/synthetic-jet-based-hybrid-heat-sink-for-electronic-cooling-27one3q0tw" target="_blank" class="underline">Synthetic Jet-Based Hybrid Heatsink for Electronic Cooling<a/>'
    },
    {
      number: '03',
      desc: '<a href="https://scispace.com/papers/the-effects-of-heat-on-electronic-components-1xf86liwi2" target="_blank" class="underline">The Effects of Heat on Electronic Components<a/>'
    },
    {
      number: '04',
      desc: '<a href="https://scispace.com/papers/heat-sinks-1a7mwr8x" target="_blank" class="underline">Heatsinks<a/>'
    },
    {
      number: '05',
      desc: '<a href="https://scispace.com/papers/heat-sinks-1a7mwr8x" target="_blank" class="underline">Electronic device with integrated passive and active cooling<a/>'
    },
    {
      number: '06',
      desc: '<a href="https://www.finskiving.com/heat-sink-manufacturing-technologies/heat-sink-design-and-selection" target="_blank" class="underline">https://www.finskiving.com/heat-sink-manufacturing-technologies/heat-sink-design-and-selection<a/>'
    },
    {
      number: '07',
      desc: '<a href="https://info.boydcorp.com/hubfs/Resources/Resource-Center/Boyd-Guide-to-Heat-Sink-Fabrications-2020-Technical-Paper.pdf" target="_blank" class="underline">https://info.boydcorp.com/hubfs/Resources/Resource-Center/Boyd-Guide-to-Heat-Sink-Fabrications-2020-Technical-Paper.pdf<a/>'
    },
    {
      number: '08',
      desc: 'Technology management. Design and manufacture of a heatsink, August 8th, 2022. Received in revised form: January 11th, 2023. Accepted: January 13th, 2023.'
    },
    {
      number: '09',
      desc: 'Thermal management complete guide, CUI devices 2024'
    },
    {
      number: '10',
      desc: 'Design Optimization and Analysis of Heatsinks for Electronic Cooling, PhD thesis - The University of Leeds School of Mechanical Engineering Institute of Thermo Fluids (iTF) April, 2016'
    },
    {
      number: '11',
      desc: '<a href="https://www.boydcorp.com/aavid.html" target="_blank" class="underline">http://www.aavidthermalloy.com/<a/>'
    },
    {
      number: '12',
      desc: 'Advanced Thermal Solutions, Inc'
    },
    {
      number: '13',
      desc: 'Selecting the best type of heat sink for your application | Heat Sink Calculator-Blog: Focused on Heat Sink Analysis, Design and Optimization'
    },
  ];

  cards: any[] = [
    {
      imageUrl: 'assets/news/blogs/blog-bottom/5g.png',
      link: '/news-&-insights/whitepaper-5g-oru',
      tags: ['Case Study','Hardware Design','Telecom Engineering'],
      date: 'September  05, 2020',
      title: 'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
    },
    {
      imageUrl: 'assets/news/blogs/blog-bottom/invensify.png',
      link: '/news-&-insights/whitepaper-invensify',
      tags: ['Case Study','Medical Devices'],
      date: 'December 12, 2024',
      title: 'Developing Smart Medical Devices: The Invensify Case Study',
    },
    {
      imageUrl: 'assets/news/blogs/blog-bottom/pcle6.png',
      link: '/news-&-insights/whitepaper-pcle6',
      tags: ['Heatsink','Thermal Management'],
      date: 'May 29, 2024',
      title: 'PCIe-6: Everything You Need To Know',
    }
  ];

  private fragmentSubscription!: Subscription;
    private navigationSubscription!: Subscription;
    currentFragment: string | null = null;
  
    isSticky = true;
    lastScrollTop = 0;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private meta: Meta
    ) {}
  
    ngOnInit(): void {
      // share on linkdin logic
      this.route.data.subscribe((data) => {
        const url = encodeURIComponent(window.location.href);
        this.meta.updateTag({ property: 'og:url', content: url });
      });
  
      // When the fragment changes (via click or scroll), update the active section
      this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
        if (fragment) {
          this.currentFragment = fragment;
          this.scrollToCategory(fragment);
        }
      });
  
      // Handle navigation changes
      this.navigationSubscription = this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          const fragment = this.route.snapshot.fragment;
          if (fragment && fragment !== this.currentFragment) {
            this.currentFragment = fragment;
            this.scrollToCategory(fragment);
          }
        });
    }
  
    ngOnDestroy(): void {
      this.fragmentSubscription?.unsubscribe();
      this.navigationSubscription?.unsubscribe();
    }
  
    private scrollTimeout: any;
  
    @HostListener('window:scroll', [])
    onScroll(): void {
      const sections = [
        'section1',
        'section2',
        'section3',
        'section4',
        'section5',
        'section6',
        'section7',
        'section8',
        'section9',
        'section10',
        'section11',
        'section12',
        'section13',
        'section14',
      ];
      const headerOffset = 500;
  
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const adjustedTop = rect.top - headerOffset;
  
          if (adjustedTop <= 0 && rect.bottom > headerOffset) {
            this.currentFragment = id;
            break;
          }
        }
      }
    }
  
    scrollToCategory(id: string): void {
      this.currentFragment = id;
      const el = document.getElementById(id);
      if (el) {
        const offset = window.innerHeight * 0.42;
        const top = el.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  
    isActive(id: string): boolean {
      return this.currentFragment === id;
    }
  
    shareOnFacebook() {
      const url = encodeURIComponent(window.location.href);
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      window.open(facebookShareUrl, '_blank');
    }
  
    shareOnTwitter() {
      const pageUrl = window.location.href;
  
      const text = encodeURIComponent(
        `🚀 Discover Heatsink by Whizz Systems!\n\n` +
          `Heatsinks: Considerations, guidance, and best practices.\n\n` +
          `Proudly built by @whizzsystems.\n\n` +
          `${pageUrl}\n\n`
      );
  
      const hashtags = encodeURIComponent(
        'whizzsystems,ThermalManagement,AISystemThermal'
      );
  
      const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}`;
  
      window.open(twitterUrl, '_blank');
    }
  
    shareOnLinkedIn(): void {
      const url = encodeURIComponent(window.location.href);
      const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      window.open(linkedInShareUrl, '_blank');
    }
}
