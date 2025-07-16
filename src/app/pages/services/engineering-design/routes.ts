import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'system-schematic-services',
        loadComponent: () =>
          import('./system-design-schematics/system-design.component').then(
            (m) => m.SystemDesignComponent
          ),
        title:
          'System Design & Schematic Services | Hardware Design Company - Whizz Systems',
        data: {
          description: `Whizz Systems offers industry-leading system architecture and schematic design
services, from FPGA customization to power budgeting and compliance engineering.`,
        },
      },
      {
        path: 'fpga-design-services',
        loadComponent: () =>
          import('./fpga/fpga.component').then((m) => m.FpgaComponent),
        title:
          'FPGA Design &amp; Development Services | Custom RTL Coding &amp; IP Integration - Whizz Systems',
        data: {
          description: `FPGA Design &amp; Development Services | Custom RTL Coding &amp; IP Integration - Whizz
Systems`,
        },
      },
      {
        path: 'pcb-layout',
        loadComponent: () =>
          import('./pcb-layout/pcb-layout.component').then(
            (m) => m.PcbLayoutComponent
          ),
        title:
          'PCB Layout Services | High-Speed &amp; High-Density PCB Design – Whizz Systems',
        data: {
          description: `Whizz Systems delivers expert PCB layout services with high-speed routing, signal
integrity optimization, power plane planning, and DFM/DFT for flawless fabrication and
performance.`,
        },
      },
      {
        path: '3d-modeling-mechanical-design',
        loadComponent: () =>
          import('./modeling/modeling.component').then(
            (m) => m.ModelingComponent
          ),
        title:
          '3D Modeling &amp; Mechanical Design Services | Enclosure Design for Electronics – Whizz Systems',
        data: {
          description: `Whizz Systems offers expert 3D modeling and mechanical design for electronic
products. From CAD drawings to thermal enclosures and FEA analysis, we deliver
production-ready designs that perform.`,
        },
      },
      {
        path: 'signal-integrity-simulation-services',
        loadComponent: () =>
          import('./signal-integrity/signal-integrity.component').then(
            (m) => m.SignalIntegrityComponent
          ),
        title:
          'Signal Integrity Simulation Services for High-Speed PCB Design | Whizz Systems',
        data: {
          description: `Whizz Systems provides advanced pre- and post-layout signal integrity simulation services for high-speed
PCB designs. Get reliable, optimized performance with DDR, PCIe, and SerDes simulation expertise.`,
        },
      },
      {
        path: 'power-delivery-network-simulation',
        loadComponent: () =>
          import('./power-delivery/power-delivery.component').then(
            (m) => m.PowerDeliveryComponent
          ),
        title:
          'Power Delivery Network (PDN) Simulation Services | Whizz Systems',
        data: {
          description: `Whizz Systems offers advanced PDN simulation services for efficient, stable, and cost-effective
power delivery in high-performance PCBs. Get IR drop, current density, and AC impedance
analysis.`,
        },
      },
      {
        path: 'thermal-management-solutions',
        loadComponent: () =>
          import('./thermal-management/thermal-management.component').then(
            (m) => m.ThermalManagementComponent
          ),
        title: 'Thermal Management Solutions for Electronics | Whizz Systems',
        data: {
          description: `Boost performance and reliability with Whizz Systems&#39; thermal management services. We
specialize in CFD thermal analysis, vapor chamber cooling, and custom thermal design for high-
performance electronics.`,
        },
      },
      {
        path: 'firmware-software-development',
        loadComponent: () =>
          import(
            './firmware-software-development/firmware-software-development.component'
          ).then((m) => m.FirmwareSoftwareDevelopmentComponent),
        title:
          'Firmware &amp; Embedded Software Development Services | IoT &amp; RTOS Experts - Whizz Systems',
        data: {
          description: `Whizz Systems offers expert firmware and software development services for
embedded systems, IoT, and cloud integration. From RTOS to UI apps, we build
complete system solutions.`,
        },
      },
    ],
  },
];
