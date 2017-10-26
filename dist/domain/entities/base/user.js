"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
let User = class User {
    constructor(_id, _name, _surname, _birthdate, _gender, _registrationDate, _maxWithdrawal, _role, _discount, _endDate) {
        this._id = _id;
        this._name = _name;
        this._surname = _surname;
        this._birthdate = _birthdate;
        this._gender = _gender;
        this._registrationDate = _registrationDate;
        this._maxWithdrawal = _maxWithdrawal;
        this._role = _role;
        this._discount = _discount;
        this._endDate = _endDate;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get birthdate() {
        return this._birthdate;
    }
    get gender() {
        return this._gender;
    }
    get maxWithdrawal() {
        return this._maxWithdrawal;
    }
    get role() {
        return this._role;
    }
    get discount() {
        return this._discount;
    }
};
User = __decorate([
    inversify_1.injectable()
], User);
exports.User = User;
