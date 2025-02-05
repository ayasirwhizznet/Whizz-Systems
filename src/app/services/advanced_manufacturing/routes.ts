import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./advanced-manufacturing.component').then(m => m.AdvancedManufacturingComponent),
                title: "Advanced Munfacturing"
            },
        ]
    }
];


