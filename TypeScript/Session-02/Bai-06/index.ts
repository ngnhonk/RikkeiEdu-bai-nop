type Stores = {
    id: number,
    name: string,
    count: number,
}

type Carts = {
    id: number,
    name: string,
    count: number,
}

let stores = [
    { id: 1, name: "Milk", count: 99 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100, }
];

let carts = [{ id: 1, name: "Test", count: 1 }];

function Create(): void {
    let cName: string | null = prompt("Nhap vao ten san pham muon mua: ");
    if (cName === null || cName.trim() === "") {
        alert("Ban chua nhap vao ten san pham!");
        return;
    }
    let checkID = stores.findIndex(element => element.name.toLowerCase() === cName.toLowerCase());
    if (checkID > 0) {
        stores[checkID].count --;
        let checkCart = carts.findIndex(element => element.name.toLowerCase() === cName.toLowerCase());
        if(checkCart <= 0){
            carts.push(stores[checkID]);
            carts[carts.length-1].count = 1;
        } else {
            carts[checkCart].count ++ ;
        }
        
    } else {
        console.log("Khong ton tai san pham!");
    }
}

function Read(): void {
    console.log("Cac san pham trong cua hang: ");
    console.table(stores);
    console.log("Cac san pham trong gio hang: ");
    console.table(carts);
}

function Update(): void {
    let uName: string | null;
    let uWhere: string | null;
    uWhere = prompt("Nhap vao SP ban muon doi ten: ");
    uName = prompt("Ban muon doi ten thanh? :");
    if (uWhere === null || uWhere.trim() === "" || uName === null || uName.trim() === "") {
        alert("Ban chua nhap day du thong tin!");
        return;
    }
    let checkID = carts.findIndex(element => element.name.toLowerCase() === uWhere.toLowerCase());
    if (checkID > 0) {
        carts[checkID].name = uName;
    } else {
        alert("Khong ton tai!");
    }
}
function Delete(): void {
    let dName: string | null;
    dName = prompt("Nhap ten SP ban muon xoa: ");
    if (dName === null || dName.trim() === "") {
        alert("Ban chua nhap du thong tin !");
        return;
    }
    let checkID = carts.findIndex(element => element.name.toLowerCase() === dName.toLowerCase());
    if (checkID > 0) {
        carts.splice(checkID, 1);
    } else {
        alert("Khong ton tai!");
    }
}
function main() {
    let action: string | null;
    while (true) {
        action = prompt("Nhap vao yeu cau (C/R/U/D/E): ");
        if (action === null || action.trim() === "") {
            alert("Khong hop le");
            break;
        }
        action = action.toUpperCase();
        switch (action) {
            case "C":
                Create();
                break;
            case "R":
                Read();
                break;
            case "U":
                Update();
                break;
            case "D":
                Delete();
                break;
            case "E":
                alert("Cam on ban den voi Rikkei Stores");
                return;
            default:
                alert("Khong hop le, vui long thu lai!");
        }
    }
}

main();