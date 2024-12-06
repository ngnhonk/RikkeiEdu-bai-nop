"use strict";
let arr;
arr = [[1, 2, 1, 24], [6, 2, 7, 4], [3, 4, 2, 5]];
console.log(arr);
for (let x in arr) {
    for (let y in arr[x]) {
        console.log(arr[x][y] + ", ");
    }
}
