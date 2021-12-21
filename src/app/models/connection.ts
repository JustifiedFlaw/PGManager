export class Connection {
    id: number;
    username: string;
    connectionName: string;
    connectionHost: string;
    connectionPort: number
    connectionDatabase: string;
    connectionUsername: string;
    connectionPassword: string;

    constructor() {
        this.id = 0;
        this.username = '';
        this.connectionName = '';
        this.connectionHost = '';
        this.connectionPort = 5432;
        this.connectionDatabase = '';
        this.connectionUsername = '';
        this.connectionPassword = '';
    }
}