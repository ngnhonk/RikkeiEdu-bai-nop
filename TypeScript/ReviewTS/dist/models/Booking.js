export class Booking {
    constructor(bookingId, customer, room, nights) {
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
    get room() {
        return this.room;
    }
    get totalCost() {
        return this._totalCost;
    }
    setTotalCost(val) {
        this._totalCost = val;
    }
}
