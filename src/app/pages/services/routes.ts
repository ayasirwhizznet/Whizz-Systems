import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./services.component').then((m) => m.ServicesComponent),
        title: 'Services',
      },
      {
        path: 'engineering-design',
        loadChildren: () =>
          import('./engineering-design/routes').then((m) => m.routes),
      },
      {
        path: 'npi',
        loadChildren: () => import('./npi/routes').then((m) => m.routes),
      },
      {
        path: 'advanced-manufacturing',
        loadChildren: () =>
          import('./advanced-manufacturing/routes').then((m) => m.routes),
      },
      {
        path: 'lab-testing-solutions',
        loadChildren: () =>
          import('./lab-testing-solutions/routes').then((m) => m.routes),
      },
      {
        path: 'supply-chain-management',
        loadChildren: () =>
          import('./supply-chain-management/routes').then((m) => m.routes),
      },
      {
        path: 'sustainable_engineering',
        loadChildren: () =>
          import('./sustainable-engineering/routes').then((m) => m.routes),
      },
    ],
  },
];
