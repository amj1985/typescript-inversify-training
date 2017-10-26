"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const inversify_1 = require("inversify");
const connection_1 = require("./connection");
let MongoDbContext = class MongoDbContext {
    constructor() {
        connection_1.MongoDBConnection.Instance.getConnection((connection) => {
            this._db = connection;
        });
    }
    find(collection, filter, result) {
        this._db.collection(collection).find(filter).toArray((error, find) => {
            return result(error, find);
        });
    }
    findOneById(collection, objectId, result) {
        this._db.collection(collection).find({ _id: new mongodb_1.ObjectID(objectId) }).limit(1).toArray((error, find) => {
            return result(error, find[0]);
        });
    }
    insert(collection, model, result) {
        this._db.collection(collection).insertOne(model, (error, insert) => {
            return result(error, insert.ops[0]);
        });
    }
    update(collection, objectId, model, result) {
        this._db.collection(collection).updateOne({ _id: new mongodb_1.ObjectID(objectId) }, model, (error, update) => {
            return result(error, model);
        });
    }
    remove(collection, objectId, result) {
        this._db.collection(collection).deleteOne({ _id: new mongodb_1.ObjectID(objectId) }, (error, remove) => {
            return result(error, remove);
        });
    }
};
MongoDbContext = __decorate([
    inversify_1.injectable()
], MongoDbContext);
exports.MongoDbContext = MongoDbContext;
