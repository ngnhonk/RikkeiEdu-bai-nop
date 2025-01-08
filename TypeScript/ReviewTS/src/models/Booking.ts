import { Person } from "./Person.js";
import { Room, StandardRoom, SuiteRoom, DeluxeRoom } from "./Room.js";

export class Booking {
    private _bookingId: number;
    private _customer: Person;
    private _room: Room;
    private _nights: number;
    private _totalCost: number;

    constructor(bookingId: number, customer: Person, room: Room, nights: number) {
        this._bookingId = bookingId;
        this._customer = customer;
        this._room = room;
        this._nights = nights;
        this._totalCost = room.calculateCost(nights);
    }

    getDetails() {
        console.table([
            this._bookingId,
            this._customer.name,
            this._room.type,
            this._nights,
            this._totalCost
        ]);
    }

    get room(): Room {
        return this.room;
    }

    get totalCost() {
        return this._totalCost;
    }
    setTotalCost(val: number) {
        this._totalCost = val;
    }
}
