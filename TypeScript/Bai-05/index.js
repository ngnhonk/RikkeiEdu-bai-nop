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
