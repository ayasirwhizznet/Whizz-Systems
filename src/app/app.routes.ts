import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { NewspageComponent } from './pages/newspage/newspage.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { ModelingComponent } from './pages/modeling/modeling.component';
import { ThermalManagementComponent } from './pages/thermal-management/thermal-management.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';

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
    component: ServicesComponent,
    title: 'Services',
  },
  {
    path: 'news',
    component: NewspageComponent,
    title: 'News',
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    title: 'Blogs'
  },
  {
    path: 'service/:title',
    component: ServiceDetailsComponent,

  },
];