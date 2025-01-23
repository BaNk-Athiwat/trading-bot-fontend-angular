import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Router, RouterOutlet } from '@angular/router';
import { Exchange } from '../../enums/exchange.enum';

@Component({
	selector: 'app-setting-api-key',
	templateUrl: './setting-api-key.component.html',
	styleUrls: ['./setting-api-key.component.scss'],
	standalone: true,
	imports: [ComponentsModule, RouterOutlet],
})
export class SettingApiKeyComponent implements OnInit {
	public bitkubEnum: string = Exchange.BITKUB;
	public binanceEnum: string = Exchange.BINANCE;
	public okxEnum: string = Exchange.OKX;

	constructor(private router: Router) {}

	ngOnInit() {}

	isMainRoute(): boolean {
		return this.router.url === '/setting-api-key';
	}
}
