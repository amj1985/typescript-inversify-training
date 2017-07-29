class Hero {

    private _id: number;
    private _name: string;
    private _aliases: Array<string>;
    private _occupation: string;
    private _gender: string;
    private _height: object;
    private _hair: string;
    private _eyes: string;
    private _powers: Array<string>;

    constructor(_id: number, _name: string, _aliases: Array<string>,
        _occupation: string, _gender: string, _height: object,
        _hair: string, _eyes: string, _powers: Array<string>) {

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
    public getId() {
        return this._id;
    }
    public getName() {
        return this._name;
    }
    public getAliases() {
        return this._aliases;
    }
    public getOccupation() {
        return this._occupation;
    }
    public getGender() {
        return this._gender;
    }
    public getHeight() {
        return this._height;
    }
    public getHairColor() {
        return this._hair;
    }
    public getEyesColor() {
        return this._eyes;
    }
    public getPowers() {
        return this._powers;
    }

}
export default Hero