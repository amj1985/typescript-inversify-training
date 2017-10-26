import { Note } from './note';
import { User } from './base/user';

export class Partner extends User {
    private _notes: Array<Note>;
    private _lastPayment: Date;
    constructor(_id: string, _name: string, _surname: Array<string>,
        _birthdate: Date, _gender: string, _registrationDate: Date,
        _maxWithdrawal: number, _role: string, _discount: number,
        _endDate: Date, _notes: Array<Note>, _lastPayment: Date) {
        super(_id, _name, _surname,
            _birthdate, _gender,
            _registrationDate, _maxWithdrawal
            , _role, _discount, _endDate);
        this._notes = _notes;
        this._lastPayment = _lastPayment;
    }
    get notes(): Array<Note> {
        return this._notes;
    }
    set notes(notes: Array<Note>) {
        this._notes = notes;
    }
    get lastPayment(): Date {
        return this._lastPayment;
    }
    set lastPayment(lastPayment: Date) {
        this._lastPayment = lastPayment
    }
}   