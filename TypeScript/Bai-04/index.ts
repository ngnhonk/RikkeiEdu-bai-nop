let arrIn: string = "potato";
let destination: string;

let arr = Array.from(arrIn);
let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
let final: string = uniqueArr.join("");
console.log(final);
