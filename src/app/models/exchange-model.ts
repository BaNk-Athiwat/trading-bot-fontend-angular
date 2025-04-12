import { KeyConfigModel } from './key-config-model';

export class ExchangeModel {
    exchangeUuid: string | null = null;
    name: string | null = null;
    baseUrl: string | null = null;
    enable: boolean | null = null;
    key: KeyConfigModel | null = null;

    constructor(
        exchangeUuid?: string | null,
        name?: string | null,
        baseUrl?: string | null,
        enable?: boolean | null,
        key?: KeyConfigModel | null
    ) {
        this.exchangeUuid = exchangeUuid || null;
        this.name = name || null;
        this.baseUrl = baseUrl || null;
        this.enable = enable || null;
        this.key = key || null;
    }

    getExchangeUuid(): string | null {
        return this.exchangeUuid;
    }
    setExchangeUuid(exchangeUuid: string): void {
        this.exchangeUuid = exchangeUuid;
    }
    getName(): string | null {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getBaseUrl(): string | null {
        return this.baseUrl;
    }
    setBaseUrl(baseUrl: string): void {
        this.baseUrl = baseUrl;
    }
    getEnable(): boolean | null {
        return this.enable;
    }
    setEnable(enable: boolean): void {
        this.enable = enable;
    }
    getKey(): KeyConfigModel | null {
        return this.key;
    }
    setKey(key: KeyConfigModel): void {
        this.key = key;
    }
}
