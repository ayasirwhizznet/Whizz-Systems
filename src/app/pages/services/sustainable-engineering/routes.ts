import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./sustainable-engineering.component').then(
            (m) => m.SustainableEngineeringComponent
          ),
        title: 'Sustainable Engineering & Obsolescence Management',
      },
    ],
  },
];
