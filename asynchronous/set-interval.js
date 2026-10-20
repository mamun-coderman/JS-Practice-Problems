// setInterval and clearInterval practicing programme

let num = 0;
const intervalId =setInterval(() => {
    num++;
    console.log(num);
    if (num === 50) {
        clearInterval(intervalId);
    }
}, 1000);