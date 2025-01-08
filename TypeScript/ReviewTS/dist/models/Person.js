export class Person {
    constructor(id, name, email, phone) {
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
