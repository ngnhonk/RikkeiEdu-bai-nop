"use strict";
class GeometryCalculator {
    constructor() {
        this.pi = 3.14;
    }
    circleArea(radius) {
        return radius * radius * this.pi;
    }
    circlePerimeter(radius) {
        return (radius + radius) * this.pi;
    }
    triangleArea(base, height) {
        return 1 / 2 * base * height;
    }
    trianglePerimeter(a, b, c) {
        return a + b + c;
    }
    rectangleArea(width, height) {
        return width * height;
    }
    rectanglePerimeter(width, height) {
        return (width + height) * 2;
    }
    parallelogramArea(base, height) {
        return base * height;
    }
    parallelogramPerimeter(a, b) {
        return (a + b) * 2;
    }
    rhombusArea(d1, d2) {
        return 1 / 2 * d1 * d2;
    }
    rhombusPerimeter(d1, d2) {
        let side = Math.sqrt(((1 / 2) * d1) * ((1 / 2) * d1) + ((1 / 2) * d2) * ((1 / 2) * d2));
        return side * 4;
    }
}
class Main {
    static bootstrap() {
        let manager = new GeometryCalculator();
        while (true) {
            let input = prompt(`
            1. Tính diện tích và chu vi hình tròn. 
            2. Tính diện tích và chu vi hình tam giác.
            3. Tính diện tích và chu vi hình chữ nhật.
            4. Tính diện tích và chu vi hình bình hành.
            5. Tính diện tích và chu vi hình thoi.
            6. Dừng chương trình.
            Nhập vào lựa chọn của bạn:`);
            if (!input) {
                console.log("Vui lòng nhập vào lựa chọn!");
                continue;
            }
            let command = parseInt(input, 10);
            switch (command) {
                case 1:
                    let inRadius = prompt("Nhập vào bán kính hình tròn: ");
                    if (!inRadius) {
                        console.log("Vui lòng nhập vào bán kính hình tròn!");
                        continue;
                    }
                    else {
                        let valRadius = parseInt(inRadius, 10);
                        console.log("Diện tích hình tròn: " + manager.circleArea(valRadius));
                        console.log("Chu vi hình tròn: " + manager.circlePerimeter(valRadius));
                        break;
                    }
                case 2:
                    let inTriBase = prompt("Nhập vào cạnh đáy tam giác: ");
                    let inTriHeight = prompt("Nhập vào chiều cao tam giác: ");
                    if (!inTriBase || !inTriHeight) {
                        console.log("Vui lòng nhập đầy đủ!");
                        continue;
                    }
                    else {
                        let valBase = parseInt(inTriBase, 10);
                        let valHeight = parseInt(inTriHeight, 10);
                        console.log("Diện tích hình tam giác: " + manager.triangleArea(valBase, valHeight));
                        break;
                    }
                    break;
                case 3:
                    let inRecWidth = prompt("Nhập vào chiều dài của hình chữ nhật: ");
                    let inRecHeight = prompt("Nhập vào chiều rộng của hình chữ nhật: ");
                    if (!inRecWidth || !inRecHeight) {
                        console.log("Vui lòng nhập đầy đủ!");
                        continue;
                    }
                    else {
                        let valRecWidth = parseInt(inRecWidth, 10);
                        let valRecHeight = parseInt(inRecHeight, 10);
                        console.log("Diện tích hình chữ nhật: " + manager.rectangleArea(valRecWidth, valRecHeight));
                        console.log("Chu vi hình chữ nhật: " + manager.rectanglePerimeter(valRecWidth, valRecHeight));
                    }
                    break;
                case 4:
                    let inParaBase = prompt("Nhập vào cạnh đáy hình bình hành: ");
                    let inParaHeight = prompt("Nhập vào chiều cao của hình bình hành: ");
                    if (!inParaBase || !inParaHeight) {
                        console.log("Vui lòng nhập đầy đủ!");
                        continue;
                    }
                    else {
                        let valParaBase = parseInt(inParaBase, 10);
                        let valParaHeight = parseInt(inParaHeight, 10);
                        console.log("Diện tích hình bình hành: " + manager.parallelogramArea(valParaBase, valParaHeight));
                        console.log("Chu vi hình bình hành: " + manager.parallelogramPerimeter(valParaBase, valParaHeight));
                    }
                    break;
                case 5:
                    let inD1 = prompt("Nhập vào độ dài đường chéo thứ nhất: ");
                    let inD2 = prompt("Nhập vào độ dài đường chéo thứ hai: ");
                    if (!inD1 || !inD2) {
                        console.log("Vui lòng nhập đầy đủ độ dài 2 cạnh!");
                        continue;
                    }
                    else {
                        let valD1 = parseInt(inD1, 10);
                        let valD2 = parseInt(inD2, 10);
                        console.log(`Diện tích hình thoi: ${manager.rhombusArea(valD1, valD2)}`);
                        console.log(`Chu vi hình thoi: ${manager.rhombusPerimeter(valD1, valD2)}`);
                    }
                    break;
                case 6:
                    console.log("See u later!");
                    break;
            }
            if (command === 6) {
                break;
            }
        }
    }
}
Main.bootstrap();
