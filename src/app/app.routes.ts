import { Routes } from '@angular/router';
import { NoDrawerLayoutComponent } from './core/shared/presentation/no-drawer-layout/no-drawer-layout.component';
import { DrawerComponent } from './core/shared/presentation/drawer/drawer.component';

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
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/presentation/dashboard-component').then(m => m.DashboardComponent)
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/presentation/login.component').then(m => m.LoginComponent)
    }
];
