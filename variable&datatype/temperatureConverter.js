/* 
Problem:

Write a function that takes a temperature value as input along with its unit and converts it to the opposite unit.

If the input is in Celsius (C), convert it to Fi track Fahrenheit (F)
If the input is in Fahrenheit (F), convert it to Celsius (C)

*/
// Code:

function convertTemperature(input){
    const value = parseFloat(input);
    const unit = input.slice(-1).toUpperCase();
    // celsius to fahrenheit
    if (unit === "C"){
        const fahrenheit = ( value * 9/5 ) + 32;
        return `${value}°C = ${fahrenheit}°F`;
    }
    // fahrenheit to celsius
    else if ( unit === "F" ) {
        const celsius = ( fahrenheit - 32 ) * 5/9;
        return `${value}°F = ${celsius}`;
    }
    else {
        return `Invalid input ! Type C for celcius and F for fahrenheit`
    }
}

console.log(convertTemperature("26C"));