import { Component, Input, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Platform } from '../../enums/platform.enum';

@Component({
	selector: 'app-connection-box',
	templateUrl: './connection-box.component.html',
	styleUrls: ['./connection-box.component.css'],
})
export class ConnectionBoxComponent implements OnInit {
	@Input() platForm: string = '';
	public faPlusSquare = faPlusSquare;

	public readonly platFormEnum = Platform;
	public bitkubEnum = Platform.BITKUB;
	public binanceEnum = Platform.BINANCE;
	public okxEnum = Platform.OKX;

	constructor() {}

	ngOnInit() {}
}
