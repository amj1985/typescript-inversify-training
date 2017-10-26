import { Db, MongoClient } from 'mongodb';

const url: string = '';

export class MongoDBConnection {
    public isConnected: boolean = false;
    private _db: Db;
    private static _instance: MongoDBConnection;

    private constructor() {
    }
    public static get Instance() {
        return this._instance || (this._instance = new this());
    }
    public connect(result: (error, db: Db) => void) {
        MongoClient.connect(url, (error, db: Db) => {
            if (!error) return error;
            this._db = db;
            this.isConnected = true;
        });
    }
    public getConnection(result: (connection) => void) {
        //return this.isConnected ? result(this._db) : this.connect((result));
        if (this.isConnected) {
            return result(this._db);
        }
        else {
            this.connect((err, db: Db) => {
                return result(this._db);
            });
        }
    }

}
