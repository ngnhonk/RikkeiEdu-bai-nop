class Person {

    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    get getName(): string {
        return this.name;
    }
}

class Member extends Person {

    membershipType: string;

    constructor(id: number, name: string, type: string) {
        super(id, name);
        this.membershipType = type;
    }

    get getMembershipType(): string {
        return this.membershipType;
    }
}

class Librarian extends Person {

    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }

    get getPosition(): string {
        return this.position;
    }
}

class Book {

    id: number;
    title: string;
    author: string;
    isBorrowed: boolean = false;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    borrow(): void {
        this.isBorrowed = true;
    }

    returnBook(): void {
        this.isBorrowed = false;
    }

    getDetaild(): void {
        console.log(`ID: ${this.id} - Title: ${this.title} - Author: ${this.author}`);
    }
}

class BorrowRecorded {
    member: Member;
    book: Book;

    constructor(member: Member, book: Book) {
        this.member = member;
        this.book = book;
    }

    get getRecordDetails(): string {
        return `Member: ${this.member} borrow: ${this.book}`;
    }
}

class LibraryManager {

    members: Member[];
    librarians: Librarian[];
    books: Book[];
    borrowRecords: BorrowRecorded[];
    memberID = 1;
    librarianID = 1;
    bookID = 1;

    constructor() {
        this.members = [];
        this.librarians = [];
        this.books = [];
        this.borrowRecords = [];
    }

    addMember(name: string, membershipType: string): void {
        this.members.push(new Member(this.memberID++, name, membershipType));
        console.log(`Đã thêm member: ${this.memberID - 1} - ${name} - ${membershipType} thành công!`);
    }

    addLibrarian(name: string, position: string): void {
        this.librarians.push(new Librarian(this.librarianID++, name, position));
        console.log(`Đã thêm librarian: ${this.librarianID - 1} - ${name} - ${position} thành công!`);
    }

    addBook(title: string, author: string): void {
        this.books.push(new Book(this.bookID++, title, author));
        console.log(`Đã thêm book: ${this.bookID - 1} - ${title} - ${author} thành công!`);
    }

    borrowBook(memberId: number, bookId: number): void {
        let checkMemberId = this.members.findIndex((e) => e.id === memberId);
        let checkBookId = this.books.findIndex((e) => e.id === bookId);
        if (checkBookId === -1 || checkMemberId === -1) {
            console.log(`Không tìm thấy cuốn sách hoặc thành viên!`);
        } else {
            this.borrowRecords.push(new BorrowRecorded(this.members[checkMemberId], this.books[checkBookId]));
            console.log(`Đã thêm bản ghi thành viên ${this.members[checkMemberId].name} mượn ${this.books[checkBookId].title} thành công!`);
        }
    }

    returnBook(bookId: number): void {
        let checkReturnBook = this.borrowRecords.findIndex((e) => e.book.id === bookId);
        if(checkReturnBook === -1){
            console.log(`Chưa tồn tại cuốn sách trong danh sách mượn`);
        } else {
            this.borrowRecords.splice(checkReturnBook, 1);
            console.log(`Đã trả cuốn sách ${bookId} thành công!`);
        }  
    }

    listBorrowRecords(): void {
        console.log(`Danh sách mượn: `);
        this.borrowRecords.forEach((e) => {
            console.log(`${e.member.name} - ${e.book.title}`);
        })
    }
}

class Main {
    manager: LibraryManager;

    constructor() {
        this.manager = new LibraryManager;
    }

    bootstrap() {
        let active = true;
        while (active) {
            let input = prompt(`
                1. Thêm thành viên.
                2. Thêm thủ thư.
                3. Thêm sách.
                4. Mượn sách.
                5. Trả sách.
                6. Hiển thị danh sách bản ghi mượn sách.
                7. Dừng chương trình.`);
            if (!input) {
                console.log(`Vui lòng nhập vào một lệnh phù hợp!`);
                continue;
            }
            let command = parseInt(input, 10);
            switch (command) {
                case 1:
                    let addMemberName = prompt(`Nhập vào tên thành viên:`);
                    let addMemberRank = prompt(`Nhập vào hạng thành viên:`);
                    if (!addMemberName || !addMemberRank) {
                        console.log(`Vui lòng nhập vào đầy đủ thông tin!`);
                        continue;
                    }
                    this.manager.addMember(addMemberName, addMemberRank);
                    break;
                case 2:
                    let addLibrarianName = prompt(`Nhập vào tên thủ thư:`);
                    let addLibrarianPosition = prompt(`Nhập vào vị trí thủ thư:`);
                    if (!addLibrarianPosition || !addLibrarianName) {
                        console.log(`Vui lòng nhập vào thông tin hợp lệ!`);
                        continue;
                    }
                    this.manager.addLibrarian(addLibrarianName, addLibrarianPosition);
                    break;
                case 3:
                    let addBookTitle = prompt(`Nhập vào tên sách:`);
                    let addBookAuthor = prompt(`Nhập vào tên tác giả:`);
                    if (!addBookTitle || !addBookAuthor) {
                        console.log(`Vui lòng nhập vào thông tin hợp lệ!`);
                        continue;
                    }
                    this.manager.addBook(addBookTitle, addBookAuthor);
                    break;
                case 4:
                    let inMember = prompt(`Nhập vào ID thành viên: `);
                    let inBookID = prompt(`Nhập vào ID cuốn sách: `);
                    if (!inMember || !inBookID) {
                        console.log(`Vui lòng nhập vào thông tin hợp lệ!`);
                        continue;
                    }
                    let valMemberID = parseInt(inMember, 10);
                    let valBookID = parseInt(inBookID, 10);
                    this.manager.borrowBook(valMemberID, valBookID);
                    break;
                case 5:
                    let inReturnBook = prompt(`Nhập vào ID cuốn sách muốn trả: `);
                    if (!inReturnBook) {
                        console.log(`Vui lòng nhập vào thông tin hợp lệ!`);
                        continue;
                    }
                    let valReturnBook = parseInt(inReturnBook, 10);
                    this.manager.returnBook(valReturnBook);
                    break;
                case 6:
                    console.log(`Danh sách công việc đã phân công:`);
                    this.manager.listBorrowRecords();
                    break;
                case 7:
                    console.log(`Hẹn gặp lại!!!`);
                    active = false;
                    break;
                default:
                    console.log(`Đã xảy ra lỗi!`);
                    break;
            }
        }
    }
}

let app = new Main();
app.bootstrap();