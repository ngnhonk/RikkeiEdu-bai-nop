export class Person {
    private _id: number;
    private _name: String;
    private _email: String;
    private _phone: String;

    constructor(id: number, name: String, email: String, phone: String) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    getDetails() {
        console.table([
            this._id,
            this._name,
            this._email,
            this._phone
        ]);
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }
}