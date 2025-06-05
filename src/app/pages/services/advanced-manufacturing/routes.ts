import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./adv-manufacturing/adv-manufacturing.component').then(
            (m) => m.AdvManufacturingComponent
          ),
        title: 'Advanced Manufacturing for High-Quality Electronics',
        data: { description: 'Optimize production with advanced manufacturing, supply chain solutions, and cutting-edge technology for efficient electronics manufacturing.' },
      }
    ],
  },
];
