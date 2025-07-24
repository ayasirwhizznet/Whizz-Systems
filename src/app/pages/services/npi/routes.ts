import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./npi.component').then((m) => m.NpiComponent),
        title:
          'New Product Introduction (NPI) Services | Design to Compliance | Whizz Systems',
        data: {
          description: `Accelerate your product development with Whizz Systems&#39; expert NPI
services—spanning system architecture, schematic design, CAM, prototyping, testing,
and global compliance. Fast-track to scalable and reliable manufacturing.`,
        },
      },
    ],
  },
];
