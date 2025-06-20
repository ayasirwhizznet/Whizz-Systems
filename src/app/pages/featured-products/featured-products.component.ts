import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './featured-products.component.html',
})
export class FeaturedProductsComponent {
  constructor(private router: Router) {}
  isSticky: boolean = true;
  lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScrollTop) {
      this.isSticky = false;
    } else {
      this.isSticky = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  scrollToFragment(fragment: string): void {
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (element) {
        const viewportHeight = window.innerHeight;
        const offsetPercentage = 40;
        const offset = (window.innerHeight * offsetPercentage) / 100;
        const topPosition = element.offsetTop - offset;
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      }
    }, 1);
  }

  isEven(arr: any) {
    return arr.length % 2 === 0 ? true : false;
  }

  boards: any[] = [
    {
      title: 'Evaluations Kit',
      products: [
        {
          name: 'Whizz Kintex 7 FPGA WH 705',
          imgUrl: 'assets/featured-products/eva-1.png',
          link: '/featured-products/whizz-kintex-7FPGA-WH705',
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
          name: 'Whizz Kintex 7 FPGA WH 707 B',
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
          name: 'Xilinx Virtex 7 FPGA WS 7203',
          imgUrl: 'assets/featured-products/cha-2.png',
          link: '/featured-products/xilinx-virtex-7-fpga-ws7203-b',
        },
      ],
    }
  ];

  miscellaneous: any[] = [
    {
      title: 'Medical Devices',
      name: 'Invensify Insuridge',
      imgUrl: 'assets/featured-products/mi-1.png',
      desc: '',
      link: '/news-&-insights/whitepaper-invensify',
    },
    {
      title: 'Telecommunication',
      name: '5G ORU',
      imgUrl: 'assets/featured-products/mi-2.png',
      desc: '',
      link: '/news-&-insights/whitepaper-5g-oru',
    },
  ];
}
