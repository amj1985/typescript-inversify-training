import { User } from '../entities/base/user';

export class Employee extends User {

    private _workStartDate: Date;
    private _workEndDate: Date;
    private _cause: string;

    constructor(_id: string, _name: string, _surname: Array<string>,
        _birthdate: Date, _gender: string, _registrationDate: Date,
        _maxWithdrawal: number, _role: string, _discount: number, _endDate: Date, _workStartDate: Date,
        _workEndDate: Date, _cause: string) {
        super(_id, _name, _surname,
            _birthdate, _gender,
            _registrationDate, _maxWithdrawal
            , _role, _discount, _endDate);
            this._workStartDate = _workStartDate;
            this._workEndDate = _workEndDate;
            this._cause = _cause;

    }
    get workStartDate():Date {
        return this._workStartDate;
    }
    set workStartDate(date :Date) {
        this._workStartDate = date;
    }
    get workEndDate():Date {
        return this._workEndDate;
    }
    set workEndDate(date :Date) {
        this._workEndDate = date;
    }
    get cause(): string {
        return this._cause;
    }
    set cause(cause: string){
        this._cause = cause;
    }
}