let arr: number[];
arr = [45, 50, 15, 25, 20, 30, 35, 40, 5, 10];

let max: number = -9999;
let posMax: number = 0;
let min: number = 9999;
let posMin: number = 0;

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