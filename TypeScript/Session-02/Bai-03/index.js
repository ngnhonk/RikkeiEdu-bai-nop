"use strict";
let arr;
arr = [1, 2, 3, 4, 5];
let reverse;
reverse = [];
for (let i in arr) {
    reverse.unshift(arr[i]);
}
console.log(reverse);
