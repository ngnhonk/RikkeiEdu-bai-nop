export abstract class Room {
    protected _id: number;
    protected _type: String;
    protected _pricePerNight: number;
    isAvailable: boolean = true;

    constructor(
        id: number,
        type: String,
        pricePerNight: number
    ) {
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

    calculateCost(nights: number): number {
        return this._pricePerNight * nights;
    }

    get type() {
        return this._type;
    }

    get id() {
        return this._id;
    }

    abstract getAdditionalServices(): void;
    abstract applyDiscount(discountRate: number): number;
    abstract getCancellationPolicy(): void;
}

export class StandardRoom extends Room {

    constructor(
        id: number,
        type: String,
        pricePerNight: number
    ) {
        super(id, type, pricePerNight);
    }

    getAdditionalServices() {
        console.log("No additional services.");
    }

    applyDiscount(discountRate: number): number {
        return this._pricePerNight *= (discountRate / 100);
    }

    getCancellationPolicy(): void {
        console.log("Standard Room Policy will be display here!");
    }

}

export class DeluxeRoom extends Room {

    constructor(
        id: number,
        type: String,
        pricePerNight: number
    ) {
        super(id, type, pricePerNight);
    }

    getAdditionalServices() {
        console.log("Breakfast obtained.");
    }

    applyDiscount(discountRate: number): number {
        return this._pricePerNight *= (discountRate / 100);
    }

    getCancellationPolicy(): void {
        console.log("Deluxtt Room Policy will be display here!");
    }

}

export class SuiteRoom extends Room {

    constructor(
        id: number,
        type: String,
        pricePerNight: number
    ) {
        super(id, type, pricePerNight);
    }

    getAdditionalServices() {
        console.log("Pickaball");
    }

    applyDiscount(discountRate: number): number {
        return this._pricePerNight *= (discountRate / 100);
    }

    getCancellationPolicy(): void {
        console.log("Suite Room Policy will be display here!");
    }

}