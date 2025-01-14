import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import crypto from 'crypto-js';
import { BalancesInterface } from '../interfaces/balances-interface';

@Injectable({
	providedIn: 'root',
})
export class BitkubApiSecureService {
	private apiBaseUrl = 'https://api.bitkub.com';
	private apiKey = '';
	private apiSecret = '';

	constructor(private http: HttpClient) {}

	createSignature(message: string) {
		return crypto
			.HmacSHA256(message, this.apiSecret)
			.toString(crypto.enc.Hex);
	}

	createHeaders(timestamp: string, sig: string) {
		return {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'X-BTK-TIMESTAMP': timestamp,
			'X-BTK-SIGN': sig,
			'X-BTK-APIKEY': this.apiKey,
		};
	}

	getMyOpenOrder(timestamp: string) {
		let endpoint: string = '/api/v3/market/my-open-orders';
		let message: string = timestamp + 'GET' + endpoint + '?sym=BTC_THB';
		let sig: any = this.createSignature(message);
		let headers: any = this.createHeaders(timestamp, sig);
		return this.http.get(`${this.apiBaseUrl}${endpoint}?sym=BTC_THB`, {
			headers,
		});
	}

	getWallet(timestamp: string) {
		let endpoint: string = '/api/v3/market/wallet';
		let message: string = timestamp + 'POST' + endpoint;
		let sig: any = this.createSignature(message);
		let headers: any = this.createHeaders(timestamp, sig);
		return this.http.post(`${this.apiBaseUrl}${endpoint}`, null, {
			headers,
		});
	}

	getBalances(timestamp: string) {
		let endpoint: string = '/api/v3/market/balances';
		let message: string = timestamp + 'POST' + endpoint;
		let sig: any = this.createSignature(message);
		let headers: any = this.createHeaders(timestamp, sig);
		return this.http.post<BalancesInterface>(`${endpoint}`, null, {
			headers,
		});
	}
}
