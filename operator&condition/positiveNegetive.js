// Problem: Create a function that determines if a number is positive, negative, or zero.

//Code:

function checkNumberSign(givenNumber) {
    
    if (givenNumber > 0) return "Positive";
    if (givenNumber < 0) return "Negetive";
    return "Zero";
    
}

const number = 0;

checkNumberSign(number)