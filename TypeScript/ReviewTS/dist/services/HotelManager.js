import { roomType } from "../constant/constant.js";
import { Booking } from "../models/Booking.js";
import { Person } from "../models/Person.js";
import { DeluxeRoom, StandardRoom, SuiteRoom } from "../models/Room.js";
export class HotelManager {
    constructor() {
        this.roomID = 1;
        this.bookingID = 1;
        this.customerID = 1;
        this.rooms = [];
        this.customers = [];
        this.bookings = [];
    }
    addRoom(type, pricePerNight) {
        if (type === roomType[0]) {
            this.rooms.push(new StandardRoom(this.roomID++, "Standard", 100));
        }
        else if (type === roomType[1]) {
            this.rooms.push(new DeluxeRoom(this.roomID++, "Standard", 100));
        }
        else if (type === roomType[2]) {
            this.rooms.push(new SuiteRoom(this.roomID++, "Standard", 100));
        }
        else {
            console.log("Không hợp lệ, vui lòng thử lại!");
        }
    }
    addCustomer(name, email, phone) {
        this.customers.push(new Person(this.customerID++, name, email, phone));
        console.table(this.customers);
    }
    bookRoom(customerId, roomId, nights) {
        let checkCusID = this.customers.findIndex((e) => e.id === customerId);
        let checkRoomID = this.rooms.findIndex((e) => e.id === roomId && e.isAvailable === true);
        if (checkCusID === -1 || checkRoomID === -1) {
            console.log(`Phòng không tồn tại hoặc hiện không khả dụng!`);
        }
        else {
            this.bookings.push(new Booking(this.bookingID++, this.customers[checkCusID], this.rooms[checkRoomID], nights));
            this.rooms[checkRoomID].bookRoom();
            console.table([`Customer: ${this.customers[checkCusID].name}`, `Room: ${this.rooms[checkRoomID].id}`, `Total: ${this.rooms[checkRoomID].calculateCost(nights)}`]);
        }
    }
    releaseRoom(roomId) {
        let checkReleaseRoomID = this.rooms.findIndex((e) => e.id === roomId);
        if (checkReleaseRoomID === -1) {
            console.log(`Phòng không tồn tại!`);
        }
        else {
            this.rooms[roomId].releaseRoom();
            console.log(`Đã trả phòng ${roomId} thành công!`);
        }
    }
    listAvailableRooms() {
        console.log(`Danh sách các phòng còn trống: `);
        let availableRoom = this.rooms.filter((e) => e.isAvailable === true);
        availableRoom.forEach((e) => {
            console.log(`ID:${e.id} - Type:${e.type}`);
        });
    }
    listBookingsByCustomer(customerId) {
        console.log(`Danh sách phòng được đặt theo ID khách hàng: ${customerId}`);
        let bookedByID = this.bookings.filter((e) => e.room.id === customerId);
        bookedByID.forEach((e) => {
            console.log(e.room.id + " " + e.room.type);
        });
    }
    calculateTotalRevenue() {
        let totalRevenue = this.bookings.reduce((total, cur) => total += cur.totalCost, 0);
        console.log(`Tổng doanh thu từ các phòng: ${totalRevenue}`);
    }
    getRoomTypesCount() {
        let countStandard = 0;
        let countDeluxe = 0;
        let countSuite = 0;
        let standard = this.bookings.filter((e) => e.room.type === "Standard");
        countStandard = standard.length;
        let deluxe = this.bookings.filter((e) => e.room.type === "Deluxe");
        countDeluxe = deluxe.length;
        let suite = this.bookings.filter((e) => e.room.type === "Suite");
        countSuite = suite.length;
        console.log(`
            Standard: ${countStandard}
            Deluxe: ${countDeluxe}
            Suite: ${countSuite}`);
    }
    applyDiscountToRoom(roomId, discountRate) {
        let checkDiscountRoomID = this.bookings.findIndex((e) => e.room.id === roomId);
        if (checkDiscountRoomID === -1) {
            console.log(`Phòng không tồn tại!`);
        }
        else {
            this.bookings[checkDiscountRoomID].setTotalCost(this.bookings[checkDiscountRoomID].totalCost * (discountRate / 100));
            console.log(`Đã áp dụng giảm ${discountRate}% cho phòng ${roomId} thành công! Tổng tiền sau áp dụng: ${this.bookings[checkDiscountRoomID].totalCost}`);
        }
    }
    getRoomServices(roomId) {
        let checkServicesRoomID = this.bookings.findIndex((e) => e.room.id === roomId);
        if (checkServicesRoomID === -1) {
            console.log(`Phòng không tồn tại!`);
        }
        else {
            this.bookings[roomId].room.getAdditionalServices();
        }
    }
    getCancellationPolicy(roomId) {
        let checkCancellationID = this.bookings.findIndex((e) => e.room.id === roomId);
        if (checkCancellationID === -1) {
            console.log(`Phòng không tồn tại!`);
        }
        else {
            this.bookings[roomId].room.getCancellationPolicy();
        }
    }
}
