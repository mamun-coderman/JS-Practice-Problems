// Write a programme that prints all the numbers from 1 to 1000 in descending order.


for( let num = 1000; num >= 1; num-- ) {
    process.stdout.write(num + "\t");
    if( (1001- num) % 5 === 0) {
        process.stdout.write("\n")
    }
    
}