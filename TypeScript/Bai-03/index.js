"use strict";
let firstName = "Nguyen";
let lastName = "van Nam";
let needUpper = lastName.charAt(0);
needUpper = needUpper.toUpperCase();
lastName = lastName.slice(1);
lastName = ' ' + needUpper + lastName;
let fullName = firstName.concat(lastName);
console.log(fullName);
