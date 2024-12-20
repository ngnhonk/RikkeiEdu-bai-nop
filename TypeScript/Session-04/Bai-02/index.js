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
    rhombusPerimeter(side) {
        return 4 * side;
    }
}
class app {
    static run() {
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
                    let inRadius = prompt("Nhập vào cạnh hình tròn: ");
                    if (!inRadius) {
                        console.log("Vui lòng nhập vào cạnh hình tròn!");
                        continue;
                    }
                    else {
                        let valRadius = parseInt(inRadius, 10);
                        console.log("Diện tích hình tròn: " + manager.circleArea(valRadius));
                        console.log("Chu vi hình tròn: " + manager.circlePerimeter(valRadius));
                        break;
                    }
                case 2:
                    let inBase = prompt("Nhập vào cạnh hình tròn: ");
                    let inHeight = prompt("Nhập vào cạnh hình tròn: ");
                    if (!inBase || !inHeight) {
                        console.log("Vui lòng nhập đầy đủ!");
                    }
                    else {
                        let valBase = parseInt(inBase, 10);
                        let valHeight = parseInt(inBase, 10);
                        console.log("Diện tích hình tròn: " + manager.rectangleArea(valBase, valHeight));
                        console.log("Chi vi hình tròn: " + manager.rectanglePerimeter(valBase, valHeight));
                        break;
                    }
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
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
app.run();
