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
        title: 'Sustaining Engineering & Obsolescence Management | Whizz Systems',
        data: {description: 'Extend product lifecycles with Whizz Systems Sustaining Engineering & Obsolescence Management. We mitigate risks, manage EOL components, and optimize AVL strategies for uninterrupted production.' }
      },
    ],
  },
];
