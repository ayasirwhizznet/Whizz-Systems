import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./supply-chain-management.component').then(m => m.SupplyChainManagementComponent),
                title: "Supply Chain Management"
            },
        ]
    }
];


