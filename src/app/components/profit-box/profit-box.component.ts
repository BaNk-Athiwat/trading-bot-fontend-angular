import { Component, Input, OnInit } from '@angular/core';
import { Exchange } from '../../enums/exchange.enum';

@Component({
	selector: 'app-profit-box',
	templateUrl: './profit-box.component.html',
	styleUrls: ['./profit-box.component.scss'],
})
export class ProfitBoxComponent implements OnInit {
	@Input() exchange: string = '';
	@Input() data: number = 0;

	public bitkubEnum = Exchange.BITKUB;
	public binanceEnum = Exchange.BINANCE;
	public okxEnum = Exchange.OKX;

	constructor() {}

	ngOnInit() {}
}
