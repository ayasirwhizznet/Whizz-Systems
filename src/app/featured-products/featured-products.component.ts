import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {

  constructor(private router: Router) { }
  scrollToCategory(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offsetPercentage = 30;
      const offset = (window.innerHeight * offsetPercentage) / 100;
      const topPosition = element.offsetTop - offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }

  isEven(arr:any) {
    return arr.length % 2 === 0 ? true : false;
  }
  featuredProducts: any[] = [
    {
      title: 'Evaluations Kit',
      products: [
        { name: 'Whizz Kintex', imgUrl: '../../assets/featured-products/featured-product.png', desc: '7 FPGA WH705', link: '/404' },
        { name: 'USB3/2A F to USB3 Micro B M Adapter', imgUrl: '../../assets/featured-products/featured-product.png', desc: '7 FPGA WS707A', link: '/404' },
        { name: 'Whizz Zyn', imgUrl: '../../assets/featured-products/featured-product.png', desc: '7000 All Programmable SoC WZ 706', link: '/404' },
        { name: 'USB3/2A F to USB3 Micro B M Adapter', imgUrl: '../../assets/featured-products/featured-product.png', desc: '7 FPGA VS 707 B', link: '/404' }
      ]
    },
    {
      title: 'Connectivity Kits',
      products: [
        { name: 'Whizz Virtex', imgUrl: '../../assets/featured-products/featured-product.png', desc: '7 FPGA WS709', link: '/404' },
        { name: 'USB3/2A F to USB3 Micro B M Adapter', imgUrl: '../../assets/featured-products/featured-product.png', desc: '7 FPGA WS 7203A', link: '/404' },
      ]
    },
    {
      title: 'Characterization Kits',
      products: [
        { name: 'Xilinx Kintex', imgUrl: '../../assets/featured-products/featured-product.png', desc: '7 FPGA KC724', link: '/404' },
        { name: 'Xilinx Virtex', imgUrl: '../../assets/featured-products/featured-product.png', desc: '7 FPGA WS 7203', link: '/404' },
      ]
    },
    {
      title: 'Kit Accessories',
      products: [
        { name: 'Balun Transformer', imgUrl: '../../assets/featured-products/featured-product.png', desc: '', link: '/404' },
        { name: 'FMC Loopback Card', imgUrl: '../../assets/featured-products/featured-product.png', desc: '', link: '/404' },
        { name: 'PCIe loopback Card', imgUrl: '../../assets/featured-products/featured-product.png', desc: '', link: '/404' },
        { name: 'FMC+ Loopback Card', imgUrl: '../../assets/featured-products/featured-product.png', desc: '', link: '/404' },
        { name: 'USB3/2A F to USB3 Micro B M Adapter', imgUrl: '../../assets/featured-products/featured-product.png', desc: '', link: '/404' },
      ]
    },
    {
      title: 'Medical Devices',
      products: [
        { name: 'Invensify Insuridge', imgUrl: '../../assets/featured-products/featured-product.png', desc: '', link: '/404' }
      ]
    },
    {
      title: 'Telecommunication',
      products: [
        { name: '5G ORU', imgUrl: '../../assets/featured-products/featured-product.png', desc: '', link: '/404' }
      ]
    },
  ];
}
