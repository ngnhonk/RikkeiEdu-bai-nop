"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    get getName() {
        return this.name;
    }
}
class Member extends Person {
    constructor(id, name, membershipType) {
        super(id, name);
        this.membershipType = membershipType;
    }
    get getMembershipType() {
        return this.getMembershipType;
    }
}
class Librarian extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    get getPosition() {
        return this.position;
    }
}
class CD {
    constructor(id, title, artist) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.isBorrowed = false;
    }
    borrow() {
        this.isBorrowed = true;
    }
    returnCD() {
        this.isBorrowed = false;
    }
    getDetails() {
        console.log(`ID: ${this.id} - Title: ${this.title} - Artist: ${this.artist} - Status: ${this.isBorrowed ? "Available" : "Borrowed"}`);
    }
}
class BorrowRecorded {
    constructor(member, cd) {
        this.member = member;
        this.cd = cd;
    }
    ;
    getRecordDetails() {
        console.log(`CD name: ${this.cd} - Borrowed by: ${this.member}`);
    }
}
class LibraryManager {
    constructor() {
        this.member_id = 1;
        this.librarian_id = 1;
        this.cd_id = 1;
        this.members = [];
        this.librarians = [];
        this.cds = [];
        this.borrowRecords = [];
    }
    addMember(name, membershipType) {
        this.members.push(new Member(this.member_id++, name, membershipType));
        console.log(`Đã thêm Member: ${name} thành công!`);
    }
    addLibrarian(name, position) {
        this.librarians.push(new Librarian(this.librarian_id++, name, position));
        console.log(`Đã thêm Librarian: ${name} thành công!`);
    }
    addCD(title, artist) {
        this.cds.push(new CD(this.cd_id++, title, artist));
        console.log(`Đã thêm CD: ${title} thành công!`);
    }
    borrowCD(memberId, cdId) {
        let checkBorrowCD = this.cds.findIndex((element) => element.id === cdId);
        let checkMember = this.members.findIndex((element) => element.id === memberId);
        if (checkBorrowCD === -1 || checkMember === -1) {
            console.log(`Thông tin Member hoặc CD không hợp lệ`);
        }
        else {
            this.borrowRecords.push(new BorrowRecorded(this.members[checkMember], this.cds[checkBorrowCD]));
            console.log(`${this.members[checkMember].getName} đã mượn đĩa ${this.cds[checkBorrowCD].title} thành công!`);
        }
    }
    returnCD(cdId) {
        let checkReturnCD = this.cds.findIndex((element) => element.id);
        if (checkReturnCD === -1) {
            console.log(`Vui lòng nhập vào một đĩa CD hợp lệ!`);
        }
        else {
            this.cds[checkReturnCD].isBorrowed = false;
            console.log(`Đã trả đĩa CD: ${this.cds[checkReturnCD].title} thành công!`);
        }
    }
    listBorrowRecords() {
        console.log(`Danh sách đĩa CD đã được mượn:`);
        this.borrowRecords.forEach((element) => {
            console.log(`CD: ${element.cd.title} - Borrowed by: ${element.member.getName}`);
        });
    }
}
class Main {
    constructor() {
        this.manager = new LibraryManager;
    }
    bootstrap() {
        let isActive = true;
        while (isActive) {
            let input = prompt(`
                    1. Thêm thành viên
                    2. Thêm thủ thư
                    3. Thêm CD
                    4. Mượn CD
                    5. Trả CD
                    6. Hiển thị danh sách mượn
                    7. Dừng chương trình
                `);
            if (!input) {
                console.log(`Vui lòng nhập một lệnh!`);
                continue;
            }
            let command = parseInt(input);
            if (command <= 0 || command > 7) {
                console.log("Vui lòng nhập một lựa chọn hợp lệ!");
                continue;
            }
            switch (command) {
                case 1:
                    let addMemberName = prompt("Nhập vào tên thành viên muốn thêm: ");
                    let addMembership = prompt("Nhập vào hạng thành viên: ");
                    if (!addMemberName || !addMembership) {
                        console.log(`Vui lòng nhập đầy đủ thông tin!`);
                        continue;
                    }
                    this.manager.addMember(addMemberName, addMembership);
                    break;
                case 2:
                    let addLibrarianName = prompt("Nhập vào tên thủ thư:");
                    let addLibrarianPosition = prompt("Nhập vào vị trí:");
                    if (!addLibrarianName || !addLibrarianPosition) {
                        console.log(`Vui lòng nhập đầy đủ thông tin!`);
                        continue;
                    }
                    this.manager.addLibrarian(addLibrarianName, addLibrarianPosition);
                    break;
                case 3:
                    let addCD = prompt("Nhập vào tên đĩa");
                    let addCdArtist = prompt("Nhập vào nghệ sĩ:");
                    if (!addCD || !addCdArtist) {
                        console.log(`Vui lòng nhập đầy đủ thông tin!`);
                        continue;
                    }
                    this.manager.addCD(addCD, addCdArtist);
                    break;
                case 4:
                    let borrowCD_id = prompt("Nhập vào ID của đĩa CD muốn mượn: ");
                    let borrowCD_member = prompt("Nhập vào ID của người mượn: ");
                    if (!borrowCD_id || !borrowCD_member) {
                        console.log("Vui lòng nhập đầy đủ thông tin!");
                        continue;
                    }
                    let valBorrowCD_id = parseInt(borrowCD_id, 10);
                    let valBorrowCD_member = parseInt(borrowCD_member, 10);
                    this.manager.borrowCD(valBorrowCD_member, valBorrowCD_id);
                    break;
                case 5:
                    let returnCD_id = prompt("Nhập vào đĩa CD cần trả: ");
                    if (!returnCD_id) {
                        console.log("Vui lòng nhập đầy đủ thông tin!");
                        return;
                    }
                    let valReturnCD_id = parseInt(returnCD_id, 10);
                    this.manager.returnCD(valReturnCD_id);
                    break;
                case 6:
                    this.manager.listBorrowRecords();
                    break;
                case 7:
                    console.log(`Hẹn gặp lại!`);
                    break;
            }
            if (command === 7) {
                break;
            }
        }
    }
}
const app = new Main();
app.bootstrap();
