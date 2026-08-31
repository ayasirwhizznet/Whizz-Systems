import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './featured-products.component.html',
})
export class FeaturedProductsComponent {
  isSticky = true;
  lastScrollTop = 0;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.isBrowser) return; // ✅ Safe for SSR

    const currentScroll = window.scrollY;
    this.isSticky = currentScroll <= this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  scrollToFragment(fragment: string): void {
    if (!this.isBrowser) return; // ✅ Safe for SSR

    // Delay to allow DOM to render before scrolling
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (element) {
        const viewportHeight = window.innerHeight;
        const offsetPercentage = 40; // 40% offset from top
        const offset = (viewportHeight * offsetPercentage) / 100;
        const topPosition = element.offsetTop - offset;

        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      }
    }, 1);
  }

  isEven(arr: any[]): boolean {
    return arr.length % 2 === 0;
  }

  boards = [
    {
      title: 'Evaluations Kit',
      products: [
        {
          name: 'Whizz Kintex 7 FPGA WH 705',
          imgUrl: 'assets/featured-products/eva-1.png', // ✅ Relative path works with Angular SSR
          link: '/featured-products/whizz-kintex-7-fpga-wh705',
        },
        {
          name: 'Whizz Kintex 7 FPGA WS 707A',
          imgUrl: 'assets/featured-products/eva-2.png',
          link: '/featured-products/whizz-virtex-7-fpga-wh707-a',
        },
        {
          name: 'Whizz Zyn SoC WZ 706',
          imgUrl: 'assets/featured-products/eva-3.png',
          link: '/featured-products/whizz-zyn-7000-wz706',
        },
        {
          name: 'Whizz Virtex-7 FPGA WS707',
          imgUrl: 'assets/featured-products/eva-4.png',
          link: '/featured-products/whizz-virtex-7-fpga-ws707',
        },
      ],
    },
    {
      title: 'Connectivity Kits',
      products: [
        {
          name: 'Whizz Virtex 7 FPGA WS 709',
          imgUrl: 'assets/featured-products/con-1.png',
          link: '/featured-products/whizz-virtex-7-fpga-ws709',
        },
        {
          name: 'Whizz Virtex 7 FPGA WS 7203A',
          imgUrl: 'assets/featured-products/con-2.png',
          link: '/featured-products/xilinx-virtex-7-fpga-ws7203-a',
        },
      ],
    },
    {
      title: 'Characterization Kits',
      products: [
        {
          name: 'Xilinx Kintex 7 FPGA KC724',
          imgUrl: 'assets/featured-products/cha-1.png',
          link: '/featured-products/xilinx-kintex-7-fpga-kc724',
        },
        {
          name: 'Xilinx Virtex-7 FPGA WS7203B',
          imgUrl: 'assets/featured-products/cha-2.png',
          link: '/featured-products/xilinx-virtex-7-fpga-ws7203-b',
        },
      ],
    },
  ];

  miscellaneous = [
    {
      title: 'Medical Devices',
      name: 'Invensify Insuridge',
      imgUrl: 'assets/featured-products/mi-1.png',
      desc: '',
      link: '/insights/whitepaper-invensify',
    },
    {
      title: 'Telecommunication',
      name: '5G ORU',
      imgUrl: 'assets/featured-products/mi-2.png',
      desc: '',
      link: '/insights/5g-oru-development',
    },
  ];

  faqs = [
    {
      question: 'What types of FPGA boards does Whizz Systems offer?',
      answer:
        'Three categories. Evaluation kits for general development on Kintex-7, Virtex-7, and Zynq-7000 devices; a connectivity kit configured for high-bandwidth data movement; and characterization kits for measuring high-speed transceiver performance.',
      isOpen: false,
    },
    {
      question: 'How do these differ from the standard AMD evaluation kits?',
      answer:
        'Each board is a customizable derivative of an AMD reference platform. A standard evaluation kit cannot be modified or taken to volume production. These can be modified: FPGA selection, memory, connectors, firmware, power, and thermal design can all be changed, and the resulting design can be productized and manufactured.',
      isOpen: false,
    },
    {
      question: 'Which board should we choose?',
      answer:
        'Choose based on the constraint that matters most. Logic capacity points to the WS707 with the XC7V2000T. Transceiver count and high-speed I/O point to the WH707A or the WS709—embedded processing alongside programmable logic points to the WZ706 with the Zynq-7000. Transceiver characterization points to the WS7203 or KC724 kits.',
      isOpen: false,
    },
    {
      question: 'Can these boards be productized for volume manufacture?',
      answer:
        'Yes. That is the primary reason customers choose them over a standard evaluation kit. Whizz Systems designs the modifications and manufactures the resulting product in its own facilities.',
      isOpen: false,
    },
    {
      question: 'How do we get pricing?',
      answer:
        'Pricing is provided on application. Request a quote with the board, the configuration you need, and your expected volume.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
