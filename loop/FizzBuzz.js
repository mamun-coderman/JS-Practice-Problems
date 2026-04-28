// Print numbers from 1 to 100, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz".

function fizzBuzz() { 
    for( let num = 1; num <= 100; num++) {
        if(( num % 3 === 0) && ( num % 5 === 0)){
            console.log("FizzBuzz")
        }   
        else if ( num % 3 === 0){
            console.log("Fizz")
        }   
        else if ( num % 5 === 0){
            console.log("Buzz")
        }
        else{
            console.log(num)
        }

        
    }
}

fizzBuzz()