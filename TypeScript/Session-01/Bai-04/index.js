"use strict";
let arrIn = "potato";
let destination;
let arr = Array.from(arrIn);
let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
let final = uniqueArr.join("");
console.log(final);
