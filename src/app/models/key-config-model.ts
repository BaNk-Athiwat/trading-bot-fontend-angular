export class KeyConfigModel {
    apiKey: string | null = null;
    secretKey: string | null = null;
    exchangeUuid: string | null = null;

    constructor(
        apiKey?: string | null,
        secretKey?: string | null,
        exchangeUuid?: string | null
    ) {
        this.apiKey = apiKey || null;
        this.secretKey = secretKey || null;
        this.exchangeUuid = exchangeUuid || null;
    }
    getApiKey(): string | null {
        return this.apiKey;
    }
    setApiKey(apiKey: string): void {
        this.apiKey = apiKey;
    }
    getSecretKey(): string | null {
        return this.secretKey;
    }
    setSecretKey(secretKey: string): void {
        this.secretKey = secretKey;
    }
    getExchange(): string | null {
        return this.exchangeUuid;
    }
    setExchange(exchangeUuid: string): void {
        this.exchangeUuid = exchangeUuid;
    }
}
