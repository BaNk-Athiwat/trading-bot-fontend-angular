import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/layout-main/layout-main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RunBotComponent } from './pages/run-bot/run-bot.component';
import { authGuard, signGuard } from './auth/auth.guard';
import { ExchangeConfigSelectorComponent } from './pages/exchange-config-selector/exchange-config-selector.component';
import { ApiKeyConfigComponent } from './pages/api-key-config/api-key-config.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
    },
    {
        path: 'signin',
        component: SigninComponent,
        canActivate: [signGuard],
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuard],
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
                path: 'key-config',
                component: ExchangeConfigSelectorComponent,
            },
            {
                path: 'key-config/:id',
                component: ApiKeyConfigComponent,
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'signin',
    },
];
