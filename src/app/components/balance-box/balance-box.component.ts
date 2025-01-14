import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '../../enums/platform.enum';

@Component({
	selector: 'app-balance-box',
	templateUrl: './balance-box.component.html',
	styleUrls: ['./balance-box.component.css'],
})
export class BalanceBoxComponent implements OnInit {
	@Input() platForm: string = '';
	@Input() balance: number = 0;

	public readonly platFormEnum = Platform;
	public bitkubEnum = Platform.BITKUB;
	public binanceEnum = Platform.BINANCE;
	public okxEnum = Platform.OKX;

	constructor() {}

	ngOnInit() {}
}
