// Problem: Write a function that swaps the values of two variables.
// Code:

function swapTwoValues(value1, value2){
    console.log(`Before swaping:
        value1 = ${value1}
        value2 = ${value2}`);
    let temp 
    temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(`After swaping:
        value1 = ${value1}
        value2 = ${value2}`);
}

let num1 = 5;
let num2 = 10;

swapTwoValues(num1, num2)