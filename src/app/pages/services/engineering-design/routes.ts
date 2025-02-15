import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'system_design_&_schematics',
        loadComponent: () =>
          import('./system-design-schematics/system-design.component').then(
            (m) => m.SystemDesignComponent
          ),
        title: 'System Design/Schematics',
      },
      {
        path: 'fpga',
        loadComponent: () =>
          import('./fpga/fpga.component').then((m) => m.FpgaComponent),
        title: 'FPGA',
      },
      {
        path: 'pcb_layout',
        loadComponent: () =>
          import('./pcb-layout/pcb-layout.component').then(
            (m) => m.PcbLayoutComponent
          ),
        title: 'PCB Layout',
      },
      {
        path: '3D_modeling',
        loadComponent: () =>
          import('./modeling/modeling.component').then(
            (m) => m.ModelingComponent
          ),
        title: '3D Modeling/Mechanical Engineering',
      },
      {
        path: 'signal_integrity_simulations',
        loadComponent: () =>
          import('./signal-integrity/signal-integrity.component').then(
            (m) => m.SignalIntegrityComponent
          ),
        title: 'Signal Integrity Simulations',
      },
      {
        path: 'power_delivery',
        loadComponent: () =>
          import('./power-delivery/power-delivery.component').then(
            (m) => m.PowerDeliveryComponent
          ),
        title: 'Power Delivery Network Simulations',
      },
      {
        path: 'thermal_management',
        loadComponent: () =>
          import('./thermal-management/thermal-management.component').then(
            (m) => m.ThermalManagementComponent
          ),
        title: 'Thermal Management/Thermal Simulation',
      },
    ],
  },
];
