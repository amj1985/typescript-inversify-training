"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const url = '';
class MongoDBConnection {
    constructor() {
        this.isConnected = false;
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    connect(result) {
        mongodb_1.MongoClient.connect(url, (error, db) => {
            if (!error)
                return error;
            this._db = db;
            this.isConnected = true;
        });
    }
    getConnection(result) {
        //return this.isConnected ? result(this._db) : this.connect((result));
        if (this.isConnected) {
            return result(this._db);
        }
        else {
            this.connect((err, db) => {
                return result(this._db);
            });
        }
    }
}
exports.MongoDBConnection = MongoDBConnection;
