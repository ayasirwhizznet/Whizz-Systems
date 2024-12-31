import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '5g-oru',
                loadComponent: () => import('./oru/oru.component').then(m => m.OruComponent),
                title: "5G ORU Open Radio Unit"
            },
            {
                path: 'loopback-cards',
                loadComponent: () => import('./loopback-cards/loopback-cards.component').then(m => m.LoopbackCardsComponent),
                title: "Loopback Cards"
            },
            {
                path: 'xilinix-evaluation-kit',
                loadComponent: () => import('./xilinix-evaluation-kit/xilinix-evaluation-kit.component').then(m => m.XilinixEvaluationKitComponent),
                title: "Xilinix Evaluation Kit"
            },
            {
                path: 'usb-3/2',
                loadComponent: () => import('./usb/usb.component').then(m => m.UsbComponent),
                title: "USB 3/2"
            },
        ]
    }
];


