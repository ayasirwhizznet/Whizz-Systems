import { Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Whizz Systems',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Services',
  },
  {
    path: 'news',
    component: NewsComponent,
    title: 'News',
  },

];
