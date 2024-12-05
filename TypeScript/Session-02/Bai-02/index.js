"use strict";
let arr;
arr = [45, 50, 15, 25, 20, 30, 35, 40, 5, 10];
let max = -9999;
let posMax = 0;
let min = 9999;
let posMin = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        posMax = i;
    }
    if (arr[i] < min) {
        min = arr[i];
        posMin = i;
    }
}
console.log(`Max: ${max} with position: ${posMax + 1}`);
console.log(`Min: ${min} with position: ${posMin + 1}`);
