import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./npi.component').then((m) => m.NpiComponent),
        data: {title: 'NPI Solutions for Fast New Product Introduction',description: 'Speed up new product introduction with expert NPI solutions. From concept to launch, ensure smooth development and market success.' }
      },
    ],
  },
];
