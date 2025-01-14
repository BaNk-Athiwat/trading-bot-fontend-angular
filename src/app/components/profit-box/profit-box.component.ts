import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '../../enums/platform.enum';

@Component({
	selector: 'app-profit-box',
	templateUrl: './profit-box.component.html',
	styleUrls: ['./profit-box.component.css'],
})
export class ProfitBoxComponent implements OnInit {
	@Input() platForm: string = '';
	@Input() data: number = 0;

	public readonly platFormEnum = Platform;
	public bitkubEnum = Platform.BITKUB;
	public binanceEnum = Platform.BINANCE;
	public okxEnum = Platform.OKX;
	constructor() {}

	ngOnInit() {}
}
