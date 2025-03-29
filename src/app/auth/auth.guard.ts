import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const router: Router = inject(Router);
    const authService: AuthService = inject(AuthService);

    if (!authService.isAuthenticated()) {
        router.navigateByUrl('signin');
        return false;
    }

    return true;
};
