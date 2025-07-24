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
        title: 'Advanced Electronic Manufacturing Services | Prototyping to Box Build | Whizz Systems',
        data: { description: `Whizz Systems offers integrated electronic manufacturing services, including process
engineering, prototyping, box build assembly, and environmental testing for complex
products.` },
      }
    ],
  },
];
