import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingApiKeyComponent } from './pages/setting-api-key/setting-api-key.component';
import { RunBotComponent } from './pages/run-bot/run-bot.component';
import { ApiKeyFormComponent } from './components/api-key-form/api-key-form.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full',
	},
	{
		path: 'dashboard',
		title: 'Dashboard',
		component: DashboardComponent,
	},
	{
		path: 'run-bot',
		title: 'Run Bot',
		component: RunBotComponent,
	},
	{
		path: 'profile',
		title: 'Profile',
		component: ProfileComponent,
	},
	{
		path: 'setting-api-key',
		title: 'Setting API Key',
		component: SettingApiKeyComponent,
		children: [
			{
				path: 'bitkub',
				title: 'Bitkub - Setting API Key',
				component: ApiKeyFormComponent,
			},
			{
				path: 'binance',
				title: 'Binance - Setting API Key',
				component: ApiKeyFormComponent,
			},
			{
				path: 'okx',
				title: 'Okx - Setting API Key',
				component: ApiKeyFormComponent,
			},
		],
	},
];
