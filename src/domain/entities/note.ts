export class Note {
    private _date: Date;
    private _severity: string;
    private _details: string;
    constructor(_date: Date, _severity: string, _details: string) {
        this._date = _date;
        this._severity = _severity;
        this._details = _details;
    }
    public get date(): Date {
        return this._date;
    }

    public set date(value: Date) {
        this._date = value;
    }
    public get severity(): string {
        return this._severity;
    }
    public get details(): string {
        return this._details;
    }

    public set details(value: string) {
        this._details = value;
    }

    public set severity(value: string) {
        this._severity = value;
    }
}