// Problem: Write code to check if a number is even or odd 

// code: 



function checkingOddEven(inputNumber) {
    if (inputNumber % 2 === 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}

const value = 11;

checkingOddEven(value)



/*

// Without using modulus oprator, using Bitwise operator. Important for job interview.

function checkingOddEven(inputNumber) {
    if (inputNumber & 1 === 0) {
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}

const value = 11;

console.log(checkingOddEven(value))

*/