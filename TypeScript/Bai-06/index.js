"use strict";
function add(numOne, numTwo) {
    let num1 = Number(numOne);
    let num2 = Number(numTwo);
    if (isNaN(num1) || isNaN(num2)) {
        return "Wrong Input";
    }
    else {
        return num1 + num2;
    }
}
function sub(numOne, numTwo) {
    let num1 = Number(numOne);
    let num2 = Number(numTwo);
    if (isNaN(num1) || isNaN(num2)) {
        return "Wrong Input";
    }
    else {
        return num1 - num2;
    }
}
function multiply(numOne, numTwo) {
    let num1 = Number(numOne);
    let num2 = Number(numTwo);
    if (isNaN(num1) || isNaN(num2)) {
        return "Wrong Input";
    }
    else {
        return num1 * num2;
    }
}
function divide(numOne, numTwo) {
    let num1 = Number(numOne);
    let num2 = Number(numTwo);
    if (isNaN(num1) || isNaN(num2) || (num2 == 0)) {
        return "Wrong Input";
    }
    else {
        return num1 / num2;
    }
}
function power(numOne, numTwo) {
    let num1 = Number(numOne);
    let num2 = Number(numTwo);
    if (isNaN(num1) || isNaN(num2)) {
        return "Wrong Input";
    }
    else {
        return num1 ** num2;
    }
}
function squareRoot(numOne) {
    let num1 = Number(numOne);
    if (isNaN(num1)) {
        return "Wrong Input";
    }
    else {
        return Math.sqrt(num1);
    }
}
function factorialize(numIn) {
    let num = Number(numIn);
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
function handleAdd() {
    const numOne = document.getElementById('num1').value;
    const numTwo = document.getElementById('num2').value;
    const result = add(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleSub() {
    const numOne = document.getElementById('num1').value;
    const numTwo = document.getElementById('num2').value;
    const result = sub(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleMul() {
    const numOne = document.getElementById('num1').value;
    const numTwo = document.getElementById('num2').value;
    const result = multiply(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleDiv() {
    const numOne = document.getElementById('num1').value;
    const numTwo = document.getElementById('num2').value;
    const result = divide(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handlePow() {
    const numOne = document.getElementById('num1').value;
    const numTwo = document.getElementById('num2').value;
    const result = power(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleSqrt() {
    const numOne = document.getElementById('num1').value;
    const numTwo = document.getElementById('num2').value;
    const result = squareRoot(numOne);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleFac() {
    const numOne = document.getElementById('num1').value;
    const numTwo = document.getElementById('num2').value;
    const result = factorialize(numOne);
    document.getElementById('result').textContent = `Result: ${result}`;
}
