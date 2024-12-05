let firstName: string = "Nguyen";
let lastName: string = "van Nam";

let needUpper:string = lastName.charAt(0)
needUpper = needUpper.toUpperCase();
lastName = lastName.slice(1);
lastName = ' ' + needUpper + lastName;

let fullName: string = firstName.concat(lastName);
console.log(fullName);