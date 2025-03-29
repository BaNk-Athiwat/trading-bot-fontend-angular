import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { SigninRequestModel } from '../models/signin-request-model';
import { ApiResponseModel } from '../models/api-response-model';
import { JwtResponseModel } from '../models/jwt-response-model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private token: string | null = null;

    private router: Router = inject(Router);
    private cookieService: CookieService = inject(CookieService);
    private http: HttpClient = inject(HttpClient);

    constructor() {}

    setToken(token: string) {
        this.token = token;
    }

    getToken(): string | null {
        return this.token || this.cookieService.get('access_token');
    }

    isAuthenticated(): boolean {
        return this.getToken() !== null;
    }

    signin(signinRequestModel: SigninRequestModel) {
        this.http
            .post<ApiResponseModel>(
                `${environment.apiUrlV1}/auth/signin`,
                signinRequestModel
            )
            .subscribe((res: ApiResponseModel) => {
                let data: JwtResponseModel = res.data;
                if (data.token) {
                    this.cookieService.set('access_token', data.token);
                    this.router.navigateByUrl('dashboard');
                }
                alert('login failed');
            });
    }

    signout() {
        this.token = null;
        this.cookieService.delete('access_token');
        this.router.navigateByUrl('signin');
    }
}
