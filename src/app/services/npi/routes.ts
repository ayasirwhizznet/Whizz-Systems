import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./npi.component').then(m => m.NpiComponent),
                title: "NPI"
            },
        ]
    }
];


