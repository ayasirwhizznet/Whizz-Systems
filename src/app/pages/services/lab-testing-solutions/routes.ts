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
        title: 'Lab Testing Solutions | Board Bring-Up, Validation & Characterization | Whizz Systems',
        data: { description: 'Discover Whizz Systems advanced lab testing solutions, including board bring-up, validation, and characterization. With 25+ years of experience, we ensure your electronic products meet the highest industry standards.' },
      },
    ],
  },
];
