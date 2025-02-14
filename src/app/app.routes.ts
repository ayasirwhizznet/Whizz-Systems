import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Page404Component } from './404/page404.component';

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
    loadChildren: () => import('./services/routes').then((m) => m.routes),
  },
  {
    path: 'featured-products',
    loadChildren: () =>
      import('./featured-products/routes').then((m) => m.routes),
  },
  {
    path: 'news_&_insights',
    loadChildren: () => import('./news-blogs/routes').then((m) => m.routes),
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
