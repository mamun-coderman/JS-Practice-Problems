// this programme will print 3 movie names gradually after 2 seconds.

const movieNames = ["Tytanic", "The Shawshank Redemption", "Life is Beautiful"];
console.log("The best three movie I have ever seen:");
let index = 0;
setInterval(() => {
   console.log(movieNames[index]);
   index = (index+1) % movieNames.length;
}, 2000);
 