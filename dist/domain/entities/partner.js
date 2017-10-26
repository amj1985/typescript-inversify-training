"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./base/user");
class Partner extends user_1.User {
    constructor(_id, _name, _surname, _birthdate, _gender, _registrationDate, _maxWithdrawal, _role, _discount, _endDate, _notes, _lastPayment) {
        super(_id, _name, _surname, _birthdate, _gender, _registrationDate, _maxWithdrawal, _role, _discount, _endDate);
        this._notes = _notes;
        this._lastPayment = _lastPayment;
    }
    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }
    get lastPayment() {
        return this._lastPayment;
    }
    set lastPayment(lastPayment) {
        this._lastPayment = lastPayment;
    }
}
exports.Partner = Partner;
