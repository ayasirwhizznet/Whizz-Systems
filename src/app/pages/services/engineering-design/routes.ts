import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'system-design-&-schematics',
        loadComponent: () =>
          import('./system-design-schematics/system-design.component').then(
            (m) => m.SystemDesignComponent
          ),
        title: 'Expert Hardware Design & Schematics Services',
        data: { description: 'Get expert hardware design & schematics solutions for efficient, high-performance electronics. Precision-driven PCB & circuit design.' }
      },
      {
        path: 'fpga',
        loadComponent: () =>
          import('./fpga/fpga.component').then((m) => m.FpgaComponent),
        title: 'FPGA Design & Development Experts | High-Performance Solutions',
        data: { description: 'Get expert FPGA design & development for high-speed, efficient, and scalable solutions. Custom FPGA programming & optimization.' }
      },
      {
        path: 'pcb-layout',
        loadComponent: () =>
          import('./pcb-layout/pcb-layout.component').then(
            (m) => m.PcbLayoutComponent
          ),
        title: 'PCB Layout & Design Services | Precision Engineering',
        data: { description: 'Get expert PCB layout & design for high-performance circuits. Precision-driven PCB solutions for efficient and reliable electronics.' }

      },
      {
        path: '3D-modeling',
        loadComponent: () =>
          import('./modeling/modeling.component').then(
            (m) => m.ModelingComponent
          ),
        title: '3D Modeling Services with Expert Mechanical Engineering Solutions',
        data: { description: 'Get precise 3D modeling services for mechanical engineering, prototyping, and product design. High-quality CAD models for innovation.' }
      },
      {
        path: 'signal-integrity-simulations',
        loadComponent: () =>
          import('./signal-integrity/signal-integrity.component').then(
            (m) => m.SignalIntegrityComponent
          ),
        title: 'Signal Integrity Simulations Optimized PCB Performance',
        data: { description: 'Ensure reliable high-speed designs with expert signal integrity simulations. Reduce noise, EMI, and optimize PCB performance efficiently.' }

      },
      {
        path: 'power-delivery',
        loadComponent: () =>
          import('./power-delivery/power-delivery.component').then(
            (m) => m.PowerDeliveryComponent
          ),
        title: 'Power Delivery Network Simulations for Reliable Designs',
        data: { description: 'Optimize power integrity with expert Power Delivery Network Simulations. Ensure stable voltage, reduce noise, and enhance PCB performance.' }

      },
      {
        path: 'thermal-management',
        loadComponent: () =>
          import('./thermal-management/thermal-management.component').then(
            (m) => m.ThermalManagementComponent
          ),
        title: 'Thermal Management Solutions for Efficient Heat Control',
        data: { description: 'Optimize device performance with expert thermal management solutions. Advanced thermal simulation for heat dissipation and reliability.' },
      },
      {
        path: 'firmware-software-development',
        loadComponent: () =>
          import('./firmware-software-development/firmware-software-development.component').then(
            (m) => m.FirmwareSoftwareDevelopmentComponent
          ),
        title: 'Firmware Solutions & Software Development Experts',
        data: { description: 'Get reliable firmware & software solutions for seamless device performance. Expert software & embedded system development for efficiency & security.' }

      },
    ],
  },
];
