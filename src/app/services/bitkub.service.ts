import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class BitkubService {
	constructor(private http: HttpClient) {}

	fetchMarketTicker() {
		return this.http.get(`${environment.apiUrl}/api/v1/market/ticker`);
	}

	getWallet() {
		return this.http.post(`${environment.apiUrl}/api/v1/wallet`, null);
	}
}
