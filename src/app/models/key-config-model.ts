export class KeyConfigModel {
    apiKey: string | null = null;
    secretKey: string | null = null;
    exchangeUuid: string | null = null;
    userUuid: string | null = null;

    constructor(
        apiKey?: string | null,
        secretKey?: string | null,
        exchangeUuid?: string | null,
        userUuid?: string | null
    ) {
        this.apiKey = apiKey || null;
        this.secretKey = secretKey || null;
        this.exchangeUuid = exchangeUuid || null;
        this.userUuid = userUuid || null;
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
    getExchangeUuid(): string | null {
        return this.exchangeUuid;
    }
    setExchangeuuid(exchangeUuid: string): void {
        this.exchangeUuid = exchangeUuid;
    }
    getUserUuid(): string | null {
        return this.userUuid;
    }
    setUserUuid(userUuid: string): void {
        this.userUuid = userUuid;
    }
}
