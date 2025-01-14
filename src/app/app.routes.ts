import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
		path: 'profile',
		title: 'Profile',
		component: ProfileComponent,
	},
];
