import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./supply-chain-management.component').then(
            (m) => m.SupplyChainManagementComponent
          ),
        title:
          'Global Electronics Supply Chain Management Services | Whizz Systems',
        data: {
          description: `Accelerate your electronics product development with Whizz Systems’ proactive
sourcing, inventory control, and global component procurement. Integrated with design,
our SCM solutions ensure speed, reliability, and reduced risk`,
        },
      },
    ],
  },
];
