// write a program to reverse all digits of a given number

const number = 1234567;
const strNum = number.toString();

let reversedNumber = "";

for ( let i = strNum.length - 1; i >= 0; i-- ) {
    reversedNumber += strNum[i];
}
console.log(reversedNumber)