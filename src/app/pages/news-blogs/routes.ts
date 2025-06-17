import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./featured-blogs/blogs.component').then((m) => m.BlogsComponent),
        title: 'News & Insights',
      },
      {
        path: 'whitepaper-5g-oru',
        loadComponent: () =>
          import('./blogs/5G-ORU/5g-oru.component').then(
            (m) => m.ORUComponent
          ),
        title: 'Whitepaper/5G ORU',
      },
      {
        path: 'whitepaper-heatsink',
        loadComponent: () =>
          import('./blogs/heatsink/heatsink.component').then(
            (m) => m.HeatsinkComponent
          ),
        title: 'Whitepaper/HeatSink',
      },
      {
        path: 'whitepaper-invensify',
        loadComponent: () =>
          import('./blogs/invensify/invensify.component').then(
            (m) => m.InvensifyComponent
          ),
        title: 'Whitepaper/Invensify',
      },
      {
        path: 'whitepaper-pcle6',
        loadComponent: () =>
          import('./blogs/pcle-6/pcle-6.component').then(
            (m) => m.Pcle6Component
          ),
        title: 'Whitepaper/PCLe-6',
      },
      {
        path: 'hardware-design',
        loadComponent: () =>
          import('./blogs/hardware-design/hardware-design.component').then(
            (m) => m.HardwareDesignComponent
          ),
        title: 'High Density Hardware Design',
      },
      {
        path: 'high-power-demand',
        loadComponent: () =>
          import('./blogs/high-power-demand/high-power-demand.component').then(
            (m) => m.HighPowerDemandComponent
          ),
        title: 'High-Power Demands in Next-Generation Hardware',
      },
    ],
  },
];
