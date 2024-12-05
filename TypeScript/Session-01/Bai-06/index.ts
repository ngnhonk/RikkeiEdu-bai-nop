
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

function power(numOne: string|number, numTwo:string|number): string|number{
    let num1: number = Number(numOne);
    let num2: number = Number(numTwo);
    if(isNaN(num1) || isNaN(num2)){
        return "Wrong Input";
    } else {
        return num1**num2;
    }
}   

function squareRoot(numOne: string|number) :string|number {
    let num1: number = Number(numOne);
    if(isNaN(num1)){
        return "Wrong Input";
    } else {
        return Math.sqrt(num1);
    }
}

function factorialize(numIn: string|number): string|number {
    let num:number = Number(numIn);
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }

function handleAdd() {
    const numOne:number = document.getElementById('num1').value;
    const numTwo:number = document.getElementById('num2').value;
    const result = add(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleSub() {
    const numOne:number = document.getElementById('num1').value;
    const numTwo:number = document.getElementById('num2').value;
    const result = sub(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleMul() {
    const numOne:number = document.getElementById('num1').value;
    const numTwo:number = document.getElementById('num2').value;
    const result = multiply(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleDiv() {
    const numOne:number = document.getElementById('num1').value;
    const numTwo:number = document.getElementById('num2').value;
    const result = divide(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handlePow() {
    const numOne:number = document.getElementById('num1').value;
    const numTwo:number = document.getElementById('num2').value;
    const result = power(numOne, numTwo);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleSqrt() {
    const numOne:number = document.getElementById('num1').value;
    const numTwo:number = document.getElementById('num2').value;
    const result = squareRoot(numOne);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function handleFac() {
    const numOne:number = document.getElementById('num1').value;
    const numTwo:number = document.getElementById('num2').value;
    const result = factorialize(numOne);
    document.getElementById('result').textContent = `Result: ${result}`;
}