let numbers: number[];
numbers = [12, 24, 13, 4, 55, 6, 7, 28, 96, 10];
let count = 0;
for (let i of numbers) {
    if (i >= 10) {
        count++;
    }
}
console.log("Số phần tử lớn hơn hoặc bằng 10: " + count);