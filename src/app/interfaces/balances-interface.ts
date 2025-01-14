export interface BalancesInterface {
	error: number;
	result: Result;
}

export interface Result {
	[coin: string]: CoinData; // ใช้ index signature เพื่อรองรับชื่อเหรียญที่ไม่แน่นอน
}

export interface CoinData {
	available: number;
	reserved: number;
}
