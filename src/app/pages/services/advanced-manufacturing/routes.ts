import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./advanced-manufacturing.component').then(
            (m) => m.AdvancedManufacturingComponent
          ),
        title: 'Advanced Manufacturing for High-Quality Electronics',
        data: { description: 'Optimize production with advanced manufacturing, supply chain solutions, and cutting-edge technology for efficient electronics manufacturing.' },
      },
      {
        path: 'dfx-analysis',
        loadComponent: () =>
          import('./advanced-manufacturing.component').then(
            (m) => m.AdvancedManufacturingComponent
          ),
        title: 'Smart Manufacturing Simulations for Accuracy',
        data: { description: 'Reduce errors and improve efficiency with advanced electronic manufacturing simulations for precise, high-quality production.' },
      },
      {
        path: 'fame',
        loadComponent: () =>
          import('./advanced-manufacturing.component').then(
            (m) => m.AdvancedManufacturingComponent
          ),
        title: 'Reliable Electronic Manufacturing & PCB Assembly',
        data: { description: 'Get expert PCB assembly services, from prototypes to full production, ensuring high-quality electronic assembly and performance.' },
      },
      {
        path: 'thermal-profiling',
        loadComponent: () =>
          import('./advanced-manufacturing.component').then(
            (m) => m.AdvancedManufacturingComponent
          ),
        title: 'Accurate Mechanical & Electro-Mechanical Assembly',
        data: { description: 'Build strong products with expert mechanical and electro-mechanical assembly, including modern thermal management solutions.' },
      },
      {
        path: 'mechanical-system-build',
        loadComponent: () =>
          import('./advanced-manufacturing.component').then(
            (m) => m.AdvancedManufacturingComponent
          ),
        title: 'Custom System Build & Product Packaging Solutions',
        data: { description: 'Secure, functional, and visually appealing product packaging with smart design and complete system build services.' },
      },
      {
        path: 'packaging-design',
        loadComponent: () =>
          import('./advanced-manufacturing.component').then(
            (m) => m.AdvancedManufacturingComponent
          ),
        title: 'Flexible Local & Offshore Manufacturing Solutions',
        data: { description: 'Scalable small-batch and offshore manufacturing solutions with strict quality control for cost-effective, efficient production.' },
      },
    ],
  },
];
