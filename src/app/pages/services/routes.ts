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
        loadComponent: () =>
          import('./npi/npi.component').then((m) => m.NpiComponent),
        title:
          'NPI Services in Electronics | Prototyping, Testing & Manufacturing',
        data: {
          description: `Whizz Systems offers NPI services in electronics, including prototyping, testing, design, compliance, and manufacturing solutions for complex hardware.`,
        },
      },
      {
        path: 'advanced-manufacturing',
        loadComponent: () =>
          import('./advanced-manufacturing/adv-manufacturing.component').then(
            (m) => m.AdvManufacturingComponent
          ),
        title:
          'Advanced Electronic Manufacturing Services | Prototyping to Box Build | Whizz Systems',
        data: {
          description: `Whizz Systems offers integrated electronic manufacturing services, including process
engineering, prototyping, box build assembly, and environmental testing for complex
products.`,
        },
      },
      {
        path: 'lab-testing-solutions',
        loadComponent: () =>
          import(
            './lab-testing-solutions/lab-testing-solutions.component'
          ).then((m) => m.LabTestingSolutionsComponent),
        title:
          'Lab Testing Solutions | Board Bring-Up, Validation & Characterization | Whizz Systems',
        data: {
          description:
            'Discover Whizz Systems advanced lab testing solutions, including board bring-up, validation, and characterization. With 25+ years of experience, we ensure your electronic products meet the highest industry standards.',
        },
      },
      {
        path: 'supply-chain-management',
        loadComponent: () =>
          import(
            './supply-chain-management/supply-chain-management.component'
          ).then((m) => m.SupplyChainManagementComponent),
        title:
          'Global Electronics Supply Chain Management Services | Whizz Systems',
        data: {
          description: `Accelerate your electronics product development with Whizz Systems’ proactive
sourcing, inventory control, and global component procurement. Integrated with design,
our SCM solutions ensure speed, reliability, and reduced risk`,
        },
      },
      {
        path: 'sustainable_engineering',
        loadComponent: () =>
          import(
            './sustainable-engineering/sustainable-engineering.component'
          ).then((m) => m.SustainableEngineeringComponent),
        title:
          'Sustaining Engineering & Obsolescence Management | Whizz Systems',
        data: {
          description:
            'Extend product lifecycles with Whizz Systems Sustaining Engineering & Obsolescence Management. We mitigate risks, manage EOL components, and optimize AVL strategies for uninterrupted production.',
        },
      },
    ],
  },
];
