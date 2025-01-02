class Person {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getDetails() {
        console.log(`ID: ${this.id} - Name: ${this.name} - Email: ${this.email} - Phone: ${this.phone}`);
    }
}

abstract class Room {
    roomId: number;
    type: string;
    pricePerNight: number;
    isAvailable: boolean;

    constructor(roomId: number, type: string, pricePerNight: number, isAvailable: boolean) {
        this.roomId = roomId;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
    }

    bookRoom() {
        this.isAvailable = false;
    };

    releaseRoom() {
        this.isAvailable = true;
    }

    abstract calculateCost(nights: number): number;
    abstract getAdditionalServices(): void;
    abstract applyDiscount(discountRate: number): number;
    abstract getCancellationPolicy(): void;
}

class StandartRoom extends Room {

    constructor(roomId: number, type: string, pricePerNight: number, isAvailable: boolean) {
        super(roomId, type, pricePerNight, isAvailable);
    }

    calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }
    getAdditionalServices(): void {
        console.log(`Không có dịch vụ tặng kèm`);
    }
    applyDiscount(discountRate: number): number {
        return (this.pricePerNight - (this.pricePerNight * discountRate / 100));
    }
    getCancellationPolicy(): void {
        console.log(`Chính sách hủy: Hoàn lại 100% nếu hủy trước 1 ngày.`);
    }
}

class DeluxeRoom extends Room {

    constructor(roomId: number, type: string, pricePerNight: number, isAvailable: boolean) {
        super(roomId, type, pricePerNight, isAvailable);
    }

    calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }
    getAdditionalServices(): void {
        console.log(`Có dịch vụ ăn sáng.`);
    }
    applyDiscount(discountRate: number): number {
        return (this.pricePerNight - (this.pricePerNight * discountRate / 100));
    }
    getCancellationPolicy(): void {
        console.log(`Chính sách hủy: Hoàn lại 50% nếu hủy trước 2 ngày`);
    }
}

class SuiteRoom extends Room {

    constructor(roomId: number, type: string, pricePerNight: number, isAvailable: boolean) {
        super(roomId, type, pricePerNight, isAvailable);
    }

    calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }
    getAdditionalServices(): void {
        console.log(`Có dịch vụ Spa, MiniBar.`);
    }
    applyDiscount(discountRate: number): number {
        return (this.pricePerNight - (this.pricePerNight * discountRate / 100));
    }
    getCancellationPolicy(): void {
        console.log(`Chính sách hủy: Không hoàn lại tiền nếu hủy.`);
    }
}

class Booking {
    bookingId: number;
    customer: Person;
    room: Room;
    nights: number;
    totalCost: number;

    constructor(bookingId: number, customer: Person, room: Room, nights: number) {
        this.bookingId = bookingId;
        this.customer = customer;
        this.room = room;
        this.nights = nights;
        this.totalCost = this.room.calculateCost(nights);
    }

    getDetails() {
        console.log(`Booking ID: ${this.bookingId} - Customer: ${this.customer.name} - Room: ${this.room.type} - Nights: ${this.nights} - Total: ${this.totalCost}`);
    }
}

class HotelManager {
    rooms: Room[];
    bookings: Booking[];
    customers: Person[];
    roomID = 1;
    bookingID = 1;
    customerID = 1;

    constructor() {
        this.rooms = [];
        this.bookings = [];
        this.customers = [];
    }

    addRoom(type: string, pricePerNight: number) {
        if (type === "Standard") {
            this.rooms.push(new StandartRoom(this.roomID++, type, pricePerNight, true));
            console.log(`Đã thêm phòng ${this.roomID - 1} - ${type} - ${pricePerNight} thành công!`);
        } else if (type === "Deluxe") {
            this.rooms.push(new DeluxeRoom(this.roomID++, type, pricePerNight, true));
            console.log(`Đã thêm phòng ${this.roomID - 1} - ${type} - ${pricePerNight} thành công!`);
        } else if (type === "Suite") {
            this.rooms.push(new SuiteRoom(this.roomID++, type, pricePerNight, true));
            console.log(`Đã thêm phòng ${this.roomID - 1} - ${type} - ${pricePerNight} thành công!`);
        } else {
            console.log(`Vui lòng chọn Standard/ Deluxe/ Suite`);
        }
    }

    addCustomer(name: string, email: string, phone: string) {
        this.customers.push(new Person(this.customerID++, name, email, phone));
        console.log(`Đã thêm khách hàng: ${this.customerID - 1} - ${name} - ${email} - ${phone} thành công!`);
    }

    bookRoom(customerId: number, roomId: number, nights: number) {
        let checkCusID = this.customers.findIndex((e) => e.id === customerId);
        let checkRoomID = this.rooms.findIndex((e) => e.roomId === roomId && e.isAvailable === true);
        if (checkCusID === -1 || checkRoomID === -1) {
            console.log(`Phòng không tồn tại hoặc hiện không khả dụng!`);
        } else {
            this.bookings.push(new Booking(this.bookingID++, this.customers[checkCusID], this.rooms[checkRoomID], nights));
            this.rooms[checkRoomID].bookRoom();
            console.log(`Đã đặt lịch cho khách ${this.customers[checkCusID].name} với phòng ${this.rooms[checkRoomID].roomId} thành công! Total: ${this.rooms[checkRoomID].calculateCost(nights)}`);
        }
    }

    releaseRoom(roomId: number) {
        let checkReleaseRoomID = this.rooms.findIndex((e) => e.roomId === roomId);
        if (checkReleaseRoomID === -1) {
            console.log(`Phòng không tồn tại!`);
        } else {
            this.rooms[roomId].releaseRoom();
            console.log(`Đã trả phòng ${roomId} thành công!`);
        }
    }

    listAvailableRooms() {
        console.log(`Danh sách các phòng còn trống: `);
        let availableRoom = this.rooms.filter((e) => e.isAvailable === true);
        availableRoom.forEach((e) => {
            console.log(`ID:${e.roomId} - Type:${e.type}`);
        })
    }

    listBookingsByCustomer(customerId: number) {
        console.log(`Danh sách phòng được đặt theo ID khách hàng: ${customerId}`);
        let bookedByID = this.bookings.filter((e) => e.customer.id === customerId);
        bookedByID.forEach((e) => {
            console.log(e.room.roomId + " " + e.room.type);
        })
    }

    calculateTotalRevenue() {
        let totalRevenue: number = this.bookings.reduce((total, cur) => total += cur.totalCost, 0);
        console.log(`Tổng doanh thu từ các phòng: ${totalRevenue}`);
    }

    getRoomTypesCount() {
        let countStandard: number = 0;
        let countDeluxe: number = 0;
        let countSuite: number = 0;

        let standard = this.bookings.filter((e) => e.room.type === "Standard")
        countStandard = standard.length;
        let deluxe = this.bookings.filter((e) => e.room.type === "Deluxe")
        countDeluxe = deluxe.length;
        let suite = this.bookings.filter((e) => e.room.type === "Suite")
        countSuite = suite.length;
        console.log(`
            Standard: ${countStandard}
            Deluxe: ${countDeluxe}
            Suite: ${countSuite}`);

    }

    applyDiscountToRoom(roomId: number, discountRate: number) {
        let checkDiscountRoomID = this.bookings.findIndex((e) => e.room.roomId === roomId);
        if (checkDiscountRoomID === -1) {
            console.log(`Phòng không tồn tại!`);
        } else {
            this.bookings[checkDiscountRoomID].totalCost *= (discountRate / 100);
            console.log(`Đã áp dụng giảm ${discountRate}% cho phòng ${roomId} thành công! Tổng tiền sau áp dụng: ${this.bookings[checkDiscountRoomID].totalCost}`);
        }
    }

    getRoomServices(roomId: number) {
        let checkServicesRoomID = this.bookings.findIndex((e) => e.room.roomId === roomId);
        if (checkServicesRoomID === -1) {
            console.log(`Phòng không tồn tại!`);
        } else {
            this.bookings[roomId].room.getAdditionalServices();
        }
    }

    getCancellationPolicy(roomId: number) {
        let checkCancellationID = this.bookings.findIndex((e) => e.room.roomId === roomId);
        if (checkCancellationID === -1) {
            console.log(`Phòng không tồn tại!`);
        } else {
            this.bookings[roomId].room.getCancellationPolicy();
        }
    }
}

class Main {
    manager: HotelManager;
    constructor() {
        this.manager = new HotelManager();
    }
    bootstrap() {
        let active = true;
        while (active) {
            let input = prompt(`
            Chọn một lệnh: 
            1. Thêm khách hàng.
            2. Thêm phòng.
            3. Đặt phòng.
            4. Trả phòng.
            5. Hiển thị danh sách phòng còn trống.
            6. Hiển thị danh sách đặt phòng của khách hàng.
            7. Tính tổng doanh thu từ các đặt phòng.
            8. Đếm số lượng từng loại phòng.
            9. Áp dụng giảm giá cho phòng.
            10. Hiển thị các dịch vụ bổ sung của phòng.
            11. Hiển thị chính sách hủy phòng.
            12. Thoát chương trình.`)
            if (!input) {
                console.log(`Vui lòng nhập một lệnh phù hợp!`);
                continue;
            }

            let command: number = parseInt(input, 10);

            switch (command) {
                case 1:
                    let cusName = prompt(`Nhập vào tên khách hàng:`);
                    let cusEmail = prompt(`Nhập vào email khách hàng:`);
                    let cusPhone = prompt(`Nhập vào SĐT khách hàng:`);
                    if (!cusName || !cusEmail || !cusPhone) {
                        console.log(`Vui lòng nhập đầy đủ thông tin phù hợp!`);
                        continue;
                    }
                    this.manager.addCustomer(cusName, cusEmail, cusPhone);
                    break;
                case 2:
                    let addType = prompt(`Nhập vào hạng phòng (Standard/Deluxe/Suite)`);
                    let addPrice = prompt("Nhập vào giá:");
                    if (!addType || !addPrice) {
                        console.log(`Vui lòng nhập đầy đủ thông tin phù hợp!`);
                        continue;
                    }
                    let valPrice = parseFloat(addPrice);
                    this.manager.addRoom(addType, valPrice);
                    break;
                case 3:
                    let bookCusID = prompt(`Nhập vào ID khách hàng:`);
                    let bookRoomID = prompt(`Nhập vào ID phòng:`);
                    let bookNights = prompt(`Nhập vào số đêm:`);
                    if (!bookCusID || !bookNights || !bookRoomID) {
                        console.log(`Vui lòng nhập đầy đủ thông tin phù hợp!`);
                        continue;
                    }
                    let valBookCusID = parseFloat(bookCusID);
                    let valBookRoomID = parseFloat(bookRoomID);
                    let valBookNights = parseFloat(bookNights);
                    this.manager.bookRoom(valBookCusID, valBookRoomID, valBookNights);
                    break;
                case 4:
                    let returnRoomID = prompt(`Nhập vào ID phòng cần trả: `);
                    if (!returnRoomID) {
                        console.log(`Vui lòng nhập đầy đủ thông tin phù hợp!`);
                        continue;
                    }
                    let valReturnRoomID = parseInt(returnRoomID);
                    this.manager.releaseRoom(valReturnRoomID);
                    break;
                case 5:
                    this.manager.listAvailableRooms();
                    break;
                case 6:
                    let bookedByCus = prompt(`Nhập vào ID khách hàng: `);
                    if (!bookedByCus) {
                        console.log(`Vui lòng nhập đầy đủ thông tin phù hợp!`);
                        continue;
                    }
                    let valBookedByCus = parseInt(bookedByCus);
                    this.manager.listBookingsByCustomer(valBookedByCus);
                    break;
                case 7:
                    this.manager.calculateTotalRevenue();
                    break;
                case 8:
                    this.manager.getRoomTypesCount();
                    break;
                case 9:
                    let discountRoomID = prompt(`Nhập vào ID phòng muốn discount:`);
                    let percent = prompt("Nhập vào số % muốn giảm (0-100):");
                    if (!percent || !discountRoomID) {
                        console.log(`Vui lòng nhập đầy đủ thông tin phù hợp!`);
                        continue;
                    }
                    let valDiscountRoomID = parseInt(discountRoomID);
                    let valPercent = parseInt(percent);
                    this.manager.applyDiscountToRoom(valDiscountRoomID, valPercent);
                    break;
                case 10:
                    let getServiceID = prompt(`Nhập vào phòng cần hiển thị thông tin dịch vụ:`)
                    if (!getServiceID) {
                        console.log(`Vui lòng nhập đầy đủ thông tin phù hợp!`);
                        continue;
                    }
                    let valServiceID = parseInt(getServiceID);
                    this.manager.getRoomServices(valServiceID);
                    break;
                case 11:
                    let getCancelID = prompt(`Nhập vào phòng cần hiển thị chính sách huỷ:`)
                    if (!getCancelID) {
                        console.log(`Vui lòng nhập đầy đủ thông tin phù hợp!`);
                        continue;
                    }
                    let valCancelID = parseInt(getCancelID);
                    this.manager.getRoomServices(valCancelID);
                    break;
                case 12:
                    console.log(`Hẹn gặp lại!!`);
                    active = false;
                    break;
            }
        }
    }
}

let app = new Main();
app.bootstrap();