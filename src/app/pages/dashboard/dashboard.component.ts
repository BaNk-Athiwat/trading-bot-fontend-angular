import { Component, OnInit } from '@angular/core';
import { BitkubService } from '../../services/bitkub.service';
import { CoinViewModel } from '../../models/coin-view-model';
import { ComponentsModule } from '../../components/components.module';
import { Platform } from '../../enums/platform.enum';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	imports: [ComponentsModule, FontAwesomeModule],
	standalone: true,
})
export class DashboardComponent implements OnInit {
	private coinsViewModel: CoinViewModel[] = new Array<CoinViewModel>();
	public readonly platFormEnum: any = Platform;
	public bitkubEnum: string = Platform.BITKUB;
	public binanceEnum: string = Platform.BINANCE;
	public okxEnum: string = Platform.OKX;

	constructor(private bitkubService: BitkubService) {}

	async ngOnInit() {
		this.getWallet();
		this.fetchMarketTicker();
	}

	private async getWallet() {
		this.bitkubService.getWallet().subscribe((res: any) => {
			let jsonData: Record<string, number> = res.result;
			let ArrData = Object.entries(jsonData).filter(
				([key, value]) => value > 0 || key === 'THB'
			);
			for (const [key, value] of ArrData) {
				this.coinsViewModel.push(new CoinViewModel(key, value));
			}
		});
	}

	private async fetchMarketTicker() {
		this.bitkubService.fetchMarketTicker().subscribe((res: any) => {
			console.log(res);
		});
	}
}
