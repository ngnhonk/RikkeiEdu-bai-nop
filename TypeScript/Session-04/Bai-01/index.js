"use strict";
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}
while (true) {
    let cal = new Calculator();
    let inputA = prompt("Nhập vào số thứ nhất");
    let inputB = prompt("Nhập vào số thứ hai");
    if (!inputA || !inputB) {
        console.log("Vui lòng nhập đầy đủ");
        continue;
    }
    let numA = parseInt(inputA, 10);
    let numB = parseInt(inputB, 10);
    let input = prompt("1. Cộng hai số. \n2. Trừ hai số.\n3. Nhân hai số.\n4. Chia hai số.\n5. Dừng chương trình.\nNhập vào yêu cầu của bạn: ");
    if (!input) {
        console.log("Vui lòng nhập 1 lệnh!");
        continue;
    }
    let command = parseInt(input, 10);
    switch (command) {
        case 1:
            alert(`${numA} + ${numB} = ${cal.add(numA, numB)}`);
            break;
        case 2:
            alert(`${numA} - ${numB} = ${cal.subtract(numA, numB)}`);
            break;
        case 3:
            alert(`${numA} * ${numB} = ${cal.multiply(numA, numB)}`);
            break;
        case 4:
            if (numB === 0) {
                alert("Số chia không hợp lệ");
                break;
            }
            alert(`${numA} / ${numB} = ${cal.divide(numA, numB)}`);
            break;
        case 5:
            alert("See u later!");
            break;
        default:
            break;
    }
    if (command === 5) {
        break;
    }
}
