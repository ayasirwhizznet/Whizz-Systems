import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
        const offsetPercentage = 30;
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
          name: 'Whizz Kintex 7 FPGA WH705',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
        {
          name: 'Whizz Virtex- 7 FPGA WS707A',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
        {
          name: 'Whizz Zyn- 7000 SoC WZ 706',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
        {
          name: 'Whizz Virtex- 7 FPGA VS 707 B',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
      ],
    },
    {
      title: 'Connectivity Kits',
      products: [
        {
          name: 'Whizz Virtex- 7 FPGA WS709',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
        {
          name: 'Whizz Virtex- 7 FPGA WS 7203A',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
      ],
    },
    {
      title: 'Characterization Kits',
      products: [
        {
          name: 'Xilinx Kintex- 7 FPGA KC724',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
        {
          name: 'Xilinx Virtex- 7 FPGA WS 7203',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
      ],
    },
    {
      title: 'Kit Accessories',
      products: [
        {
          name: 'Balun Transformer',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
        {
          name: 'FMC Loopback Card',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
        {
          name: 'PCIe loopback Card',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
        {
          name: 'PCIe loopback Card',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
        {
          name: 'USB3 Micro B Plug Adapter',
          imgUrl: '../../assets/featured-products/featured-product.png',
          link: '/404',
        },
      ],
    },
  ];

  evaluationKit: any[] = [
    {
      name: 'Whizz Kintex 7 FPGA WH705',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
    {
      name: 'Whizz Virtex- 7 FPGA WS707A',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
    {
      name: 'Whizz Zyn- 7000 SoC WZ 706',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
    {
      name: 'Whizz Virtex- 7 FPGA VS 707 B',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
  ];

  connectivityKit: any[] = [
    {
      name: 'Whizz Virtex- 7 FPGA WS709',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
    {
      name: 'Whizz Virtex- 7 FPGA WS 7203A',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
  ];

  characterizationKit: any[] = [
    {
      name: 'Xilinx Kintex- 7 FPGA KC724',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
    {
      name: 'Xilinx Virtex- 7 FPGA WS 7203',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
  ];

  kitAccessories: any[] = [
    {
      name: 'Balun Transformer',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
    {
      name: 'FMC Loopback Card',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
    {
      name: 'PCIe loopback Card',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
    {
      name: 'PCIe loopback Card',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
    {
      name: 'USB3 Micro B Plug Adapter',
      imgUrl: '../../assets/featured-products/featured-product.png',
      link: '/404',
    },
  ];

  miscellaneous: any[] = [
    {
      title: 'Medical Devices',
      name: 'Invensify Insuridge',
      imgUrl: '../../assets/featured-products/featured-product.png',
      desc: '',
      link: '/404',
    },
    {
      title: 'Telecommunication',
      name: '5G ORU',
      imgUrl: '../../assets/featured-products/featured-product.png',
      desc: '',
      link: '/404',
    },
  ];
}
