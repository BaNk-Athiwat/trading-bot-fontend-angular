export class CoinViewModel {
	name: string = '';
	balance: number = 0;

	constructor(name: string, balance: number) {
		this.name = name;
		this.balance = balance;
	}
}
