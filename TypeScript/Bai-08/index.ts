let bingo:number = Math.floor(Math.random() * 10) + 1;
let count = 0;
while(true){
    count++;
    if(count > 3){
        alert("Bạn đã thua!");
        break;
    }
    let guest:number = Number(prompt("Game đoán số (bạn chỉ có 3 lượt dự đoán):"));
    if(guest < bingo){
        alert("Lớn hơn nữa!");
    } else if(guest > bingo){
        alert("Nhỏ hơn nữa!");
    } else {
        alert("Bingo!");
        break;
    }
}