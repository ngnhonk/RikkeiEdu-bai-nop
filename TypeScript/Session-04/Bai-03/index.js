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
        this.id = 0;
        this.books = [];
    }
    addBook(title, author, year) {
        this.books.push(new Book(this.id++, title, author, year));
        return;
    }
    listBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện đang trống!");
        }
        else {
            this.books.forEach((element) => {
                console.log(`Book name: ${element.title} - Author: ${element.author} - Publish: ${element.year} `);
            });
        }
        return;
    }
    removeBook(id) {
        let checkBook = this.books.findIndex((element) => element.id === id);
        if (!checkBook || checkBook < 0) {
            console.log("Không tồn tại cuốn sách này trong thư viện!");
        }
        else {
            this.books.splice(id - 1, 1);
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
            console.log(`Đã tìm thấy cuốn sách bạn cần tại ID = ${findBook}`);
        }
    }
}
class Main {
    bootstrap() {
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
            }
            switch (choose) {
                case 1:
                    break;
                case 1:
                    break;
                case 1:
                    break;
                case 1:
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
