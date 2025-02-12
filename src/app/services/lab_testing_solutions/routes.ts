import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./lab-testing-solutions.component').then(
            (m) => m.LabTestingSolutionsComponent
          ),
        title: 'Lab Testing Solutions',
      },
    ],
  },
];
