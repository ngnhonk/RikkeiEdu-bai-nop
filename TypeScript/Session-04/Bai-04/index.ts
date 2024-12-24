class CD {
    id: number;
    title: string;
    artist: string;
    year: number;

    constructor(id: number, title: string, artist: string, year: number) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year = year;
    }

}

class CDStoreManager {
    cds: CD[];
    id: number = 1;
    constructor() {
        this.cds = [];
    }
    addCD(title: string, artist: string, year: number) {
        this.cds.push(new CD(this.id++, title, artist, year));
        console.log(`Đã thêm đĩa CD thành công!`);
    }
    listCDs() {
        if (this.cds.length === 0) {
            console.log("Trống trơn!");
        } else {
            console.log(`Danh sách đĩa CD: `);
            this.cds.forEach((element) => {
                console.log(`ID: ${element.id} - Name: ${element.title} - Artist: ${element.artist} - Year: ${element.year}`);
            })
        }
    }
    removeCD(id: number) {
        let removeID = this.cds.findIndex((element) => element.id === id);
        if (removeID === -1) {
            console.log("Không tồn tại đĩa CD");
        } else {
            this.cds.splice(removeID, 1);
            console.log(`Đã xoá đĩa CD thành công!`);
        }
    }

    searchCD(name: string) {
        let searchID = this.cds.findIndex((element) => element.title === name);
        if (searchID === -1) {
            console.log(`Không tồn tại đĩa CD`);
        } else {
            console.log(`Đã tìm thấy đĩa ID: ${this.cds[searchID].id} - Title: ${name}`);
        }
    }
}

class Main {
    static bootstrap() {
        let manager = new CDStoreManager();
        while (true) {
            let choose: number;
            let command = prompt(`
                1. Thêm đĩa CD.
                2. Hiển thị danh sách CD.
                3. Xóa đĩa CD theo mã.
                4. Tìm kiếm CD theo tên.
                5. Dừng chương trình.
                Hãy nhập vào lựa chọn của bạn: `);
            if (!command || (command.trim() === "")) {
                console.log("Vui lòng nhập vào một lựa chọn");
                continue;
            } else {
                choose = parseInt(command, 10);
                if (isNaN(choose) || choose < 1 || choose > 5) {
                    console.log("Lựa chọn không hợp lệ, vui lòng thử lại!");
                    continue;
                }
            }
            switch (choose) {
                case 1:
                    let inTitle = prompt("Nhập vào tên đĩa CD: ");
                    let inAuthor = prompt("Nhập vào tên nghệ sĩ: ");
                    let inYear = prompt("Nhập vào năm phát hành: ");
                    if (!inTitle || !inAuthor || !inYear) {
                        console.log("Vui lòng nhập đầy đủ thông tin!");
                        continue;
                    }
                    let valYear = parseInt(inYear);
                    manager.addCD(inTitle, inAuthor, valYear);
                    break;
                case 2:
                    manager.listCDs();
                    break;
                case 3:
                    let deleteID = prompt("Nhập vào ID của đĩa CD muốn xoá:");
                    if (!deleteID) {
                        console.log("Vui lòng nhập vào ID của một đĩa CD!");
                        continue;
                    }
                    let valDelete = parseInt(deleteID, 10);
                    manager.removeCD(valDelete);
                    break;
                case 4:
                    let searchName = prompt("Nhập vào tên đĩa CD muốn tìm:");
                    if (!searchName) {
                        console.log("Vui lòng nhập vào tên đĩa CD!");
                        continue;
                    }
                    manager.searchCD(searchName);
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