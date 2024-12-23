import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '3D_modeling',
                loadComponent: () => import('./modeling/modeling.component').then(m => m.ModelingComponent),
                title: "3D Modeling/Mechanical Engineering"
            },
            {
                path: 'system_design_&_schematics',
                loadComponent: () => import('./system_design_&_schematics/system-design.component').then(m => m.SystemDesignComponent),
                title: "3D Modeling/Mechanical Engineering"
            },
            {
                path: 'thermal_management',
                loadComponent: () => import('./thermal-management/thermal-management.component').then(m => m.ThermalManagementComponent),
                title: "3D Modeling/Mechanical Engineering"
            },
            {
                path: 'signal_integrity_simulations',
                loadComponent: () => import('./signal-integrity/signal-integrity.component').then(m => m.SignalIntegrityComponent),
                title: "Signal Integrity Simulations"
            },

        ]
    }
];


