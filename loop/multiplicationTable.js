// Write a function to Create a multiplication table for a given number.

function multiplicationTable(givenNumber){
    console.log(`Multiplication table of ${givenNumber} given bellow: `)
    for( let i = 1; i <= 10; i++){
        console.log(`${givenNumber} * ${i} = ${givenNumber * i}`);
    }
}

const number = 7;

multiplicationTable(number)