import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponseModel } from '../models/api-response-model';
import { environment } from '../../environments/environment';
import { KeyConfigModel } from '../models/key-config-model';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ExchangeService {
    private router: Router = inject(Router);
    private http: HttpClient = inject(HttpClient);
    private cookieService: CookieService = inject(CookieService);

    constructor() {}

    getExchangeList(): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.cookieService.get('access_token')}`,
        });

        return this.http.get<ApiResponseModel>(
            `${environment.apiUrlV1}/exchange/exchange-list`,
            {
                headers,
            }
        );
    }

    connectExchange(keyConfigModel: KeyConfigModel) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.cookieService.get('access_token')}`,
        });

        this.http
            .post<ApiResponseModel>(
                `${environment.apiUrlV1}/exchange/connection`,
                keyConfigModel,
                { headers }
            )
            .subscribe((res: ApiResponseModel) => {
                let status: number | null = res.status;
                if (status == 200) {
                    console.log('Exchange connected successfully');
                }
            });
    }
}
