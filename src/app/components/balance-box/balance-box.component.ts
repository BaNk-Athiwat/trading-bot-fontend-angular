import { Component, Input, OnInit } from '@angular/core';
import { Exchange } from '../../enums/exchange.enum';

@Component({
	selector: 'app-balance-box',
	templateUrl: './balance-box.component.html',
	styleUrls: ['./balance-box.component.scss'],
})
export class BalanceBoxComponent implements OnInit {
	@Input() exchange: string = '';
	@Input() balance: number = 0;

	public bitkubEnum = Exchange.BITKUB;
	public binanceEnum = Exchange.BINANCE;
	public okxEnum = Exchange.OKX;

	constructor() {}

	ngOnInit() {}
}
