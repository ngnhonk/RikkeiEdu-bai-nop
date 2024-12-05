"use strict";
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
for (let i = 1; i <= 10; i++) {
    const randomColor = getRandomColor();
    console.log(`%cMàu sắc đã được thay đổi`, `color: ${randomColor}`);
}
