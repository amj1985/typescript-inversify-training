"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hero {
    constructor(_id, _name, _aliases, _occupation, _gender, _height, _hair, _eyes, _powers) {
        this._id = _id;
        this._name = _name;
        this._aliases = _aliases;
        this._occupation = _occupation;
        this._gender = _gender;
        this._height = _height;
        this._hair = _hair;
        this._eyes = _eyes;
        this._powers = _powers;
    }
    getId() {
        return this._id;
    }
    getName() {
        return this._name;
    }
    getAliases() {
        return this._aliases;
    }
    getOccupation() {
        return this._occupation;
    }
    getGender() {
        return this._gender;
    }
    getHeight() {
        return this._height;
    }
    getHairColor() {
        return this._hair;
    }
    getEyesColor() {
        return this._eyes;
    }
    getPowers() {
        return this._powers;
    }
}
exports.default = Hero;
