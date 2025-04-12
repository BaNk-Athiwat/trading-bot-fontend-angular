import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/layout-main/layout-main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RunBotComponent } from './pages/run-bot/run-bot.component';
import { authGuard, signGuard } from './auth/auth.guard';
import { SettingApiKeyExchangeComponent } from './pages/setting-api-key-exchange/setting-api-key-exchange.component';
import { SettingApiKeyFormNewComponent } from './pages/setting-api-key-form-new/setting-api-key-form-new.component';
import { SettingApiKeyFormUpdateComponent } from './pages/setting-api-key-form-update/setting-api-key-form-update.component';

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
                path: 'setting-api-key',
                component: SettingApiKeyExchangeComponent,
            },
            {
                path: 'setting-api-key/:id',
                component: SettingApiKeyFormNewComponent,
            },
            {
                path: 'setting-api-key/:id/update',
                component: SettingApiKeyFormUpdateComponent,
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'signin',
    },
];
