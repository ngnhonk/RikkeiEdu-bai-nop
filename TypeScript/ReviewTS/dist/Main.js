import { HotelManager } from "./services/HotelManager.js";
class Main {
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
            12. Thoát chương trình.`);
            if (!input) {
                console.log(`Vui lòng nhập một lệnh phù hợp!`);
                continue;
            }
            let command = parseInt(input, 10);
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
                    let getServiceID = prompt(`Nhập vào phòng cần hiển thị thông tin dịch vụ:`);
                    if (!getServiceID) {
                        console.log(`Vui lòng nhập đầy đủ thông tin phù hợp!`);
                        continue;
                    }
                    let valServiceID = parseInt(getServiceID);
                    this.manager.getRoomServices(valServiceID);
                    break;
                case 11:
                    let getCancelID = prompt(`Nhập vào phòng cần hiển thị chính sách huỷ:`);
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
