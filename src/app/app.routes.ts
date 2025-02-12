import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Page404Component } from './page404/page404.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

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
    loadChildren: () => import('./news_&_blogs/routes').then((m) => m.routes),
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
    title: 'Contact Us',
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
