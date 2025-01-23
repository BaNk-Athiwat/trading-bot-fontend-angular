import { Component, Input, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Exchange } from '../../enums/exchange.enum';

@Component({
	selector: 'app-connection-box',
	templateUrl: './connection-box.component.html',
	styleUrls: ['./connection-box.component.scss'],
})
export class ConnectionBoxComponent implements OnInit {
	@Input() exchange: string = '';

	public faPlusSquare = faPlusSquare;
	public bitkubEnum = Exchange.BITKUB;
	public binanceEnum = Exchange.BINANCE;
	public okxEnum = Exchange.OKX;

	constructor() {}

	ngOnInit() {}
}
