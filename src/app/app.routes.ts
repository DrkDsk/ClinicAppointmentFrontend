import {Routes} from '@angular/router';
import {NoDrawerLayoutComponent} from './core/shared/presentation/no-drawer-layout/no-drawer-layout.component';
import {DrawerComponent} from './core/shared/presentation/drawer/drawer.component';
import {authGuard} from './core/guards/auth.guard';
import {roleGuard} from './core/guards/role.guard';
import {noAuthGuard} from './core/guards/no.auth.guard';
import {AppPaths} from './core/constants/path.constants';

export const routes: Routes = [
  {
    path: '',
    component: NoDrawerLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/presentation/home-component')
            .then(m => m.HomeComponent)
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
        path: AppPaths.dashboard,
        loadComponent: () =>
          import('./features/dashboard/presentation/dashboard-component')
            .then(m => m.DashboardComponent)
      },
      {
        path: AppPaths.users,
        children: [
          {
            path: AppPaths.profile,
            loadComponent: () =>
              import('./features/users/profile/presentation/profile.component')
                .then(m => m.ProfileComponent),
          },
          {
            path: AppPaths.createProfile,
            loadComponent: () =>
              import('./features/users/profile/presentation/create-profile.component/create-profile.component')
                .then(m => m.CreateProfileComponent),
          }
        ]
      }
    ]
  },
  {
    path: AppPaths.login,
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import('./features/auth/login/presentation/login.component')
        .then(m => m.LoginComponent)
  }
];
