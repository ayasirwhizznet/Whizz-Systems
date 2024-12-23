import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./services.component').then(m => m.ServicesComponent),
                title: 'Services'
            },
            {
                path: 'engineering_&_design',
                loadChildren: () => import('./engineering_&_design/routes').then((m) => m.routes)
            },
            {
                path: 'npi',
                loadChildren: () => import('./npi/routes').then((m) => m.routes)
            },
            {
                path: 'advanced_manufacturing',
                loadChildren: () => import('./advanced_manufacturing/routes').then((m) => m.routes)
            },
            {
                path: 'lab_testing_solutions',
                loadChildren: () => import('./lab_testing_solutions/routes').then((m) => m.routes)
            },
            {
                path: 'supply_chain_management',
                loadChildren: () => import('./supply_chain_management/routes').then((m) => m.routes)
            },
            {
                path: 'sustainable_engineering',
                loadChildren: () => import('./sustainable_engineering/routes').then((m) => m.routes)
            },


        ]
    }
];


