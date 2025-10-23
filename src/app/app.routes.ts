import {Routes} from '@angular/router';
import {NoDrawerLayoutComponent} from './core/shared/presentation/no-drawer-layout/no-drawer-layout.component';
import {DrawerComponent} from './core/shared/presentation/drawer/drawer.component';
import {authGuard} from './core/guards/auth.guard';
import {roleGuard} from './core/guards/role.guard';
import {noAuthGuard} from './core/guards/no.auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: NoDrawerLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/presentation/home-component').then(m => m.HomeComponent)
      }
    ]
  },
  {
    path: '',
    component: DrawerComponent,
    canActivate: [authGuard],
    canActivateChild: [roleGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/presentation/dashboard-component').then(m => m.DashboardComponent)
      },
      {
        path: 'users',
        children: [
          {
            path: 'people',
            loadComponent: () => import('./features/users/profile/presentation/profile.component').then(m => m.ProfileComponent)
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    canActivate: [noAuthGuard],
    loadComponent: () => import('./features/auth/login/presentation/login.component').then(m => m.LoginComponent)
  }
];
