"use strict";
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.author = author;
    }
}
class LibraryManager {
    constructor() {
        this.id = 1;
        this.books = [];
    }
    addBook(title, author, year) {
        this.books.push(new Book(this.id++, title, author, year));
        console.log("Đã thêm sách thành công!");
        return;
    }
    listBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện đang trống!");
        }
        else {
            this.books.forEach((element) => {
                console.log(`Book ID: ${element.id} - Book name: ${element.title} - Author: ${element.author} - Publish: ${element.year} `);
            });
        }
        return;
    }
    removeBook(id) {
        let checkBook = this.books.findIndex((element) => element.id === id);
        if (checkBook === -1) {
            console.log("Không tồn tại cuốn sách này trong thư viện!");
        }
        else {
            this.books.splice(checkBook, 1);
            console.log(`Đã xoá sách với mã ${id} thành công!!`);
        }
        return;
    }
    searchBook(title) {
        let findBook = this.books.findIndex((element) => element.title === title);
        if (!findBook) {
            console.log("Không tồn tại cuốn sách này trong thư viện!");
        }
        else {
            console.log(`Đã tìm thấy cuốn sách bạn cần tại ID = ${findBook + 1}`);
        }
    }
}
class Main {
    static bootstrap() {
        let manager = new LibraryManager();
        while (true) {
            let choose;
            let command = prompt(`
                1. Thêm sách vào thư viện.
                2. Hiển thị danh sách sách.
                3. Xóa sách theo mã sách.
                4. Tìm kiếm sách theo tên.
                5. Dừng chương trình.
                Hãy nhập vào lựa chọn của bạn: `);
            if (!command || (command.trim() === "")) {
                console.log("Vui lòng nhập vào một lựa chọn");
                continue;
            }
            else {
                choose = parseInt(command, 10);
                if (isNaN(choose) || choose < 1 || choose > 5) {
                    console.log("Lựa chọn không hợp lệ, vui lòng thử lại!");
                    continue;
                }
            }
            switch (choose) {
                case 1:
                    let inTitle = prompt("Nhập vào tên cuốn sách: ");
                    let inAuthor = prompt("Nhập vào tên tác giả: ");
                    let inYear = prompt("Nhập vào năm xuất bản: ");
                    if (!inTitle || !inAuthor || !inYear) {
                        console.log("Vui lòng nhập đầy đủ thông tin!");
                        continue;
                    }
                    let valYear = parseInt(inYear);
                    manager.addBook(inTitle, inAuthor, valYear);
                    break;
                case 2:
                    manager.listBooks();
                    break;
                case 3:
                    let deleteID = prompt("Nhập vào ID cuốn sách muốn xoá");
                    if (!deleteID) {
                        console.log("Vui lòng nhập vào ID một cuốn sách!");
                        continue;
                    }
                    let valDelete = parseInt(deleteID, 10);
                    manager.removeBook(valDelete);
                    break;
                case 4:
                    let searchName = prompt("Nhập vào tên cuốn sách muốn tìm");
                    if (!searchName) {
                        console.log("Vui lòng nhập vào tên một cuốn sách!");
                        continue;
                    }
                    manager.searchBook(searchName);
                    break;
                case 5:
                    console.log("Hẹn gặp lại!");
                    break;
            }
            if (choose === 5) {
                break;
            }
        }
    }
}
Main.bootstrap();
