let arr: number[];
arr = [2, 6, 4, 3, 5, 1, 7, 8, 9, 10];

// Selection
for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let pos = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < min) {
            min = arr[j];
            pos = j;
        }
    }
    let tmp = arr[i];
    arr[i] = arr[pos];
    arr[pos] = tmp;
}

// Bubble
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[i]) {
//             let tmp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tmp;
//         }
//     }
// }

console.log(arr);
