// Write a function that calculates the factorial of a number

function factorialNumber(givenNumbert) {
    let factNum = 1;
    for ( let i = 1; i <= givenNumbert; i++){
        factNum *= i;
    }
    return factNum
}

const num = 10;
console.log(factorialNumber(num))