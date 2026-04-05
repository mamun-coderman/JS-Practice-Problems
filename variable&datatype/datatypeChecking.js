// Problem: Write a function that returns the data type of a given variable.

//code:

function typeOfdata(data){
    return Array.isArray(data)
    ? "Array"
    : data === null
    ? "Null"
    : typeof data;
}

const typeGetting = typeOfdata({brand: "samsung", model: "s10"});
console.log(typeGetting)