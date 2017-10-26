
import { IUser } from "../../interface/entities/IUser";
import { injectable } from 'inversify';

@injectable()
export class User implements IUser {

    _id: string;
    _name: string;
    _surname: string[];
    _birthdate: Date;
    _gender: string;
    _registrationDate: Date;
    _maxWithdrawal: number;
    _role: string;
    _discount: number;
    _endDate: Date;

    constructor(_id: string, _name: string, _surname: string[],
        _birthdate: Date, _gender: string, _registrationDate: Date,
        _maxWithdrawal: number, _role: string, _discount: number,
        _endDate: Date) {

        this._id = _id;
        this._name = _name;
        this._surname = _surname;
        this._birthdate = _birthdate;
        this._gender = _gender;
        this._registrationDate = _registrationDate;
        this._maxWithdrawal = _maxWithdrawal;
        this._role = _role
        this._discount = _discount;
        this._endDate = _endDate;

    }
    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get surname(): string[] {
        return this._surname;
    }
    get birthdate(): Date {
        return this._birthdate;
    }
    get gender(): string {
        return this._gender;
    }
    get maxWithdrawal(): number {
        return this._maxWithdrawal;
    }
    get role(): string {
        return this._role;
    }
    get discount(): number {
        return this._discount;
    }
}