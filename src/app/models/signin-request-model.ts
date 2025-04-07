export class SigninRequestModel {
    private username: string | null = null;
    private password: string | null = null;

    constructor(username?: string | null, password?: string | null) {
        this.username = username || null;
        this.password = password || null;
    }

    getUsername(): string | null {
        return this.username;
    }
    setUsername(username: string): void {
        this.username = username;
    }
    getPassword(): string | null {
        return this.password;
    }
    setPassword(password: string): void {
        this.password = password;
    }
}
