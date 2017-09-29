export class User {
    public id: string;
    public username: string;
    public salt: string;
    public passwordEncoded: string;
    public email: string;
    public expirationTime: number;
}
