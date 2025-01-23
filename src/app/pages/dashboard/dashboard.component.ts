import { Component, OnInit } from '@angular/core';
import { BitkubService } from '../../services/bitkub.service';
import { CoinViewModel } from '../../models/coin-view-model';
import { ComponentsModule } from '../../components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Exchange } from '../../enums/exchange.enum';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	imports: [ComponentsModule, FontAwesomeModule],
	standalone: true,
})
export class DashboardComponent implements OnInit {
	private coinsViewModel: CoinViewModel[] = new Array<CoinViewModel>();
	public bitkubEnum: string = Exchange.BITKUB;
	public binanceEnum: string = Exchange.BINANCE;
	public okxEnum: string = Exchange.OKX;

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
