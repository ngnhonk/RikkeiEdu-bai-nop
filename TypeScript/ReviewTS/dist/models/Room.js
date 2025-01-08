export class Room {
    constructor(id, type, pricePerNight) {
        this.isAvailable = true;
        this._id = id;
        this._type = type;
        this._pricePerNight = pricePerNight;
    }
    bookRoom() {
        this.isAvailable = false;
    }
    releaseRoom() {
        this.isAvailable = true;
    }
    calculateCost(nights) {
        return this._pricePerNight * nights;
    }
    get type() {
        return this._type;
    }
    get id() {
        return this._id;
    }
}
export class StandardRoom extends Room {
    constructor(id, type, pricePerNight) {
        super(id, type, pricePerNight);
    }
    getAdditionalServices() {
        console.log("No additional services.");
    }
    applyDiscount(discountRate) {
        return this._pricePerNight *= (discountRate / 100);
    }
    getCancellationPolicy() {
        console.log("Standard Room Policy will be display here!");
    }
}
export class DeluxeRoom extends Room {
    constructor(id, type, pricePerNight) {
        super(id, type, pricePerNight);
    }
    getAdditionalServices() {
        console.log("Breakfast obtained.");
    }
    applyDiscount(discountRate) {
        return this._pricePerNight *= (discountRate / 100);
    }
    getCancellationPolicy() {
        console.log("Deluxtt Room Policy will be display here!");
    }
}
export class SuiteRoom extends Room {
    constructor(id, type, pricePerNight) {
        super(id, type, pricePerNight);
    }
    getAdditionalServices() {
        console.log("Pickaball");
    }
    applyDiscount(discountRate) {
        return this._pricePerNight *= (discountRate / 100);
    }
    getCancellationPolicy() {
        console.log("Suite Room Policy will be display here!");
    }
}
