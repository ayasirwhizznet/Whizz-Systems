import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./featured-products.component').then(
            (m) => m.FeaturedProductsComponent
          ),
        title: 'Featured Products',
      },
      {
        path: 'whizz-kintex-7FPGA-WH705',
        loadComponent: () =>
          import('./products/whizz-kintex-7FPGA-wh705/whizz-kintex-7FPGA-wh705component').then(
            (m) => m.VHK158Component
          ),
        title: 'Whizz Kintex 7FPGA WH705',
      },
      {
        path: 'whizz-virtex-7-fpga-wh707-a',
        loadComponent: () =>
          import('./products/whizz-virtex-7-fpga-wh707-a/whizz-virtex-7-fpga-wh707-a.component').then(
            (m) => m.WhizzVirtex7FPGAWH707AComponent
          ),
        title: 'Whizz Virtex-7 FPGA WH707A',
      },
      {
        path: 'whizz-virtex-7-fpga-ws707',
        loadComponent: () =>
          import('./products/whizz-virtex-7-fpga-ws707/whizz-virtex-7-fpga-ws707.component').then(
            (m) => m.WhizzVirtex7FPGAWS707Component
          ),
        title: 'whizz virtex-7 fpga ws707',
      },
      {
        path: 'whizz-virtex-7-fpga-ws709',
        loadComponent: () =>
          import('./products/whizz-virtex-7-fpga-ws709/whizz-virtex-7-fpga-ws709.component').then(
            (m) => m.WhizzVirtex7FPGAWS709Component
          ),
        title: 'whizz-virtex-7 fpga ws709',
      },
      {
        path: 'whizz-zyn-7000-wz706',
        loadComponent: () =>
          import('./products/whizz-zyn-7000-wz706/whizz-zyn-7000-wz706.component').then(
            (m) => m.WhizzZyn7000WZ706Component
          ),
        title: 'whizz zyn-7000 wz706',
      },
      {
        path: 'xilinx-kintex-7-fpga-kc724',
        loadComponent: () =>
          import('./products/xilinx-kintex-7-fpga-kc724/xilinx-kintex-7-fpga-kc724.component').then(
            (m) => m.XilinxKintex7FPGAKC724Component
          ),
        title: 'xilinx kintex-7 fpga kc724',
      },
      {
        path: 'xilinx-virtex-7-fpga-ws7203-a',
        loadComponent: () =>
          import('./products/xilinx-virtex-7-fpga-ws7203-a/xilinx-virtex-7-fpga-ws7203-a.component').then(
            (m) => m.XilinxVirtex7FPGAWS7203AComponent
          ),
        title: 'xilinx virtex-7 fpga ws7203-a',
      },
      {
        path: 'xilinx-virtex-7-fpga-ws7203-b',
        loadComponent: () =>
          import('./products/xilinx-virtex-7-fpga-ws7203-b/xilinx-virtex-7-fpga-ws7203-b.component').then(
            (m) => m.XilinxVirtex7FPGAWS7203BComponent
          ),
        title: 'xilinx virtex-7 fpga ws7203 b',
      },
    ],
  },
];
