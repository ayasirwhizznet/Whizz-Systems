import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./blogs/blogs.component').then(m => m.BlogsComponent),
                title: "News & Insights"
              },
            {
                path: 'news',
                loadComponent: () => import('./newspage/newspage.component').then(m => m.NewspageComponent),
                title: "News"
              },
        ]
    }
];


