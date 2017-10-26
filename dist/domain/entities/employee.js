"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entities/base/user");
class Employee extends user_1.User {
    constructor(_id, _name, _surname, _birthdate, _gender, _registrationDate, _maxWithdrawal, _role, _discount, _endDate, _workStartDate, _workEndDate, _cause) {
        super(_id, _name, _surname, _birthdate, _gender, _registrationDate, _maxWithdrawal, _role, _discount, _endDate);
        this._workStartDate = _workStartDate;
        this._workEndDate = _workEndDate;
        this._cause = _cause;
    }
    get workStartDate() {
        return this._workStartDate;
    }
    set workStartDate(date) {
        this._workStartDate = date;
    }
    get workEndDate() {
        return this._workEndDate;
    }
    set workEndDate(date) {
        this._workEndDate = date;
    }
    get cause() {
        return this._cause;
    }
    set cause(cause) {
        this._cause = cause;
    }
}
exports.Employee = Employee;
