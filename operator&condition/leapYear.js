// Create a function that checks if a year is a leap year.

// Code:

function leapYearCheck(givenYear) {
    if ((givenYear % 4 === 0) && (givenYear % 100 !==0)) 
        return `${givenYear} is a leap year`
    if ((givenYear % 100 === 0) && (givenYear % 400 ===0)) 
        return `${givenYear} is a leap year`
    return `${givenYear} is not a leap year`
}

const year = 2026;

console.log(leapYearCheck(year))