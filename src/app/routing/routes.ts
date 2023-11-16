import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { AboutComponent } from '../about/about.component';
import { CareerComponent } from '../career/career.component';
import { ContactComponent } from '../contact/contact.component';
import { OutServiceComponent } from '../out-service/out-service.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'our-service',
    component: OutServiceComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
