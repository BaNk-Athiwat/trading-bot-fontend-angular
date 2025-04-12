import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/api-response-model';
import { KeyConfigModel } from '../models/key-config-model';

@Injectable({
    providedIn: 'root',
})
export class KeyService {
    private http: HttpClient = inject(HttpClient);
    private cookieService: CookieService = inject(CookieService);

    constructor() {}

    checkKeyExist(exchangeUuid: string): Observable<ApiResponseModel> {
        console.log('checkKeyExist', exchangeUuid);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.cookieService.get('access_token')}`,
        });

        return this.http.get<ApiResponseModel>(
            `${environment.apiUrlV1}/key/api-key/${exchangeUuid}`,
            { headers }
        );
    }

    saveKey(keyConfigModel: KeyConfigModel): Observable<ApiResponseModel> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.cookieService.get('access_token')}`,
        });

        return this.http.post<ApiResponseModel>(
            `${environment.apiUrlV1}/key/api-key`,
            keyConfigModel,
            { headers }
        );
    }

    updateKey(keyConfigModel: KeyConfigModel): Observable<ApiResponseModel> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.cookieService.get('access_token')}`,
        });
        return this.http.put<ApiResponseModel>(
            `${environment.apiUrlV1}/key/api-key`,
            keyConfigModel,
            { headers }
        );
    }
}
