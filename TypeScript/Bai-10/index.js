"use strict";
let day = Number(prompt("Nhập vào ngày sinh của bạn:"));
let month = Number(prompt("Nhập vào tháng sinh của bạn:"));
switch (month) {
    case 1:
        if (day >= 20) {
            alert("Bạn thuộc cung Bảo Bình!");
        }
        else {
            alert("Bạn thuộc cung Ma Kết!");
        }
        break;
    case 2:
        if (day >= 19) {
            alert("Bạn thuộc cung Song Ngư!");
        }
        else {
            alert("Bạn thuộc cung Bảo Bình!");
        }
        break;
    case 3:
        if (day >= 21) {
            alert("Bạn thuộc cung Bạch Dương!");
        }
        else {
            alert("Bạn thuộc cung Song Ngư!");
        }
        break;
    case 4:
        if (day >= 20) {
            alert("Bạn thuộc cung Kim Ngưu!");
        }
        else {
            alert("Bạn thuộc cung Bạch Dương!");
        }
        break;
    case 5:
        if (day >= 21) {
            alert("Bạn thuộc cung Song Tử!");
        }
        else {
            alert("Bạn thuộc cung Kim Ngưu!");
        }
        break;
    case 6:
        if (day >= 22) {
            alert("Bạn thuộc cung Cự Giải!");
        }
        else {
            alert("Bạn thuộc cung Song Tử!");
        }
        break;
    case 7:
        if (day >= 23) {
            alert("Bạn thuộc cung Sư Tử!");
        }
        else {
            alert("Bạn thuộc cung Cự Giải!");
        }
        break;
    case 8:
        if (day >= 23) {
            alert("Bạn thuộc cung Xử Nữ!");
        }
        else {
            alert("Bạn thuộc cung Sư Tử!");
        }
        break;
    case 9:
        if (day >= 23) {
            alert("Bạn thuộc cung Thiên Bình!");
        }
        else {
            alert("Bạn thuộc cung Xử Nữ!");
        }
        break;
    case 10:
        if (day >= 24) {
            alert("Bạn thuộc cung Hổ Cáp!");
        }
        else {
            alert("Bạn thuộc cung Thiên Bình!");
        }
        break;
    case 11:
        if (day >= 22) {
            alert("Bạn thuộc cung Nhân Mã!");
        }
        else {
            alert("Bạn thuộc cung Hổ Cáp!");
        }
        break;
    case 12:
        if (day >= 22) {
            alert("Bạn thuộc cung Ma Kết!");
        }
        else {
            alert("Bạn thuộc cung Nhân Mã!");
        }
        break;
    default:
        break;
}
