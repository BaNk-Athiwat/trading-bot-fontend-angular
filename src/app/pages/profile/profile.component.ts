import { Component, inject, OnInit } from '@angular/core';
import { BitkubApiService } from '../../services/bitkub-api.service';
import { lastValueFrom } from 'rxjs';
import { BitkubApiSecureService } from '../../services/bitkub-api-secure.service';
import {
	BalancesInterface,
	CoinData,
} from '../../interfaces/balances-interface';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	standalone: true,
	imports: [],
})
export class ProfileComponent implements OnInit {
	balanceTHB: CoinData = {
		available: 0,
		reserved: 0,
	};
	bitkubApiService = inject(BitkubApiService);
	bitkubApiSecureService = inject(BitkubApiSecureService);

	constructor() {}

	async ngOnInit() {
		console.log('start >>');
		let ts = await lastValueFrom(
			this.bitkubApiService.getServerTimestamp()
		);
		let timestamp = ts.toString();
		this.getBalances(timestamp);
		console.log('end >>');
	}

	async getServerTimestamp() {
		return (
			await lastValueFrom(this.bitkubApiService.getServerTimestamp())
		).toString();
	}

	getBalances(timestamp: string) {
		return this.bitkubApiSecureService
			.getBalances(timestamp)
			.subscribe((data: BalancesInterface) => {
				this.balanceTHB = data.result['THB'];
				console.log('balanceTHB :: ', this.balanceTHB);
			});
	}
}
