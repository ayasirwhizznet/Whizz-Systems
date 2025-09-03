import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Whizz Systems | EMS, Design, Engineering & Development Experts',
    data: {
      description: `Whizz Systems provides EMS, advanced electronic design, engineering, and product development services with 25+ years of expertise in hi-tech industries.`},
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us',
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/routes').then((m) => m.routes),
  },
  {
    path: 'featured-products',
    loadChildren: () =>
      import('./pages/featured-products/routes').then((m) => m.routes),
  },
  {
    path: 'news-&-insights',
    loadChildren: () =>
      import('./pages/news-blogs/routes').then((m) => m.routes),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/error/404/404.component').then((m) => m.Page404Component),
    title: '404 Not Found',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
