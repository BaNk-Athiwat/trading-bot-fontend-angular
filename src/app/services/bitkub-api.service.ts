import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BitkubApiService {
	private apiBaseUrl = 'https://api.bitkub.com';

	constructor(private http: HttpClient) {}

	getServerTimestamp() {
		let endpoint: string = '/api/v3/servertime';
		return this.http.get(`${endpoint}`);
	}

	getServerStatus() {
		let endpoint: string = '/api/status';
		return this.http.get(`${endpoint}`);
	}
}
