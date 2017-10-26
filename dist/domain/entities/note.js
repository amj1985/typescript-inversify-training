"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Note {
    constructor(_date, _severity, _details) {
        this._date = _date;
        this._severity = _severity;
        this._details = _details;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    get severity() {
        return this._severity;
    }
    get details() {
        return this._details;
    }
    set details(value) {
        this._details = value;
    }
    set severity(value) {
        this._severity = value;
    }
}
exports.Note = Note;
