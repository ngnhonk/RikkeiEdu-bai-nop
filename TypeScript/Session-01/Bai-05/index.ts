
function add(numOne: string|number, numTwo:string|number): string|number{
    let num1: number = Number(numOne);
    let num2: number = Number(numTwo);
    if(isNaN(num1) || isNaN(num2)){
        return "Wrong Input";
    } else {
        return num1+num2;
    }
}   

function sub(numOne: string|number, numTwo:string|number): string|number{
    let num1: number = Number(numOne);
    let num2: number = Number(numTwo);
    if(isNaN(num1) || isNaN(num2)){
        return "Wrong Input";
    } else {
        return num1-num2;
    }
}   

function multiply(numOne: string|number, numTwo:string|number): string|number{
    let num1: number = Number(numOne);
    let num2: number = Number(numTwo);
    if(isNaN(num1) || isNaN(num2)){
        return "Wrong Input";
    } else {
        return num1*num2;
    }
}   

function divide(numOne: string|number, numTwo:string|number): string|number{
    let num1: number = Number(numOne);
    let num2: number = Number(numTwo);
    if(isNaN(num1) || isNaN(num2) || (num2 == 0)){
        return "Wrong Input";
    } else {
        return num1/num2;
    }
}   
