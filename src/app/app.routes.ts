import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { Page404Component } from './pages/error/404/404.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Whizz Systems',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
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
    loadChildren: () => import('./pages/news-blogs/routes').then((m) => m.routes),
  },
  {
    path: '404',
    component: Page404Component,
    title: '404 Not Found',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
