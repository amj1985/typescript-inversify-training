
export interface IUser {
    _id: string,
    _name: string,
    _surname: string[],
    _birthdate: Date,
    _gender: string,
    _registrationDate: Date,
    _maxWithdrawal: number,
    _role: string,
    _discount: number,
    _endDate?: Date,
}

