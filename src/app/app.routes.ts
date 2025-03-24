import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/layout-main/layout-main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RunBotComponent } from './pages/run-bot/run-bot.component';
import { SettingApiKeyComponent } from './pages/setting-api-key/setting-api-key.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
    },
    {
        path: 'signin',
        component: SigninComponent,
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
            {
                path: 'run-bot',
                component: RunBotComponent,
            },
            {
                path: 'setting-api-key',
                component: SettingApiKeyComponent,
            },
        ],
    },
    {
        path: '**',
        component: SigninComponent,
    },
];
