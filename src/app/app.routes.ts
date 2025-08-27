import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/shared/presentation/main/main.component').then(m => m.MainComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/presentation/home-component').then(m => m.HomeComponent)
            },
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
