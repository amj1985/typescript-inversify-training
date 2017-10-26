import { User } from '../../domain/entities/base/user';
import { Db, ObjectID } from 'mongodb';
import { injectable } from 'inversify';
import { MongoDBConnection } from './connection';

@injectable()
export class MongoDbContext {
    private _db: Db;
    constructor() {
        MongoDBConnection.Instance.getConnection((connection) => {
            this._db = connection;
        });
    }
    public find(collection: string, filter: Object, result: (error, data) => void): void {
        this._db.collection(collection).find(filter).toArray((error, find) => {
            return result(error, find);
        });
    }

    public findOneById(collection: string, objectId: string, result: (error, data) => void): void {
        this._db.collection(collection).find({ _id: new ObjectID(objectId) }).limit(1).toArray((error, find) => {
            return result(error, find[0]);
        });
    }

    public insert(collection: string, model: User, result: (error, data) => void): void {
        this._db.collection(collection).insertOne(model, (error, insert) => {
            return result(error, insert.ops[0]);
        });
    }

    public update(collection: string, objectId: string, model: User, result: (error, data) => void): void {
        this._db.collection(collection).updateOne({ _id: new ObjectID(objectId) }, model, (error, update) => {
            return result(error, model);
        });
    }

    public remove(collection: string, objectId: string, result: (error, data) => void): void {
        this._db.collection(collection).deleteOne({ _id: new ObjectID(objectId) }, (error, remove) => {
            return result(error, remove);
        });
    }
}