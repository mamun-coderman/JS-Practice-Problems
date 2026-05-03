// print this line beacause of detecting exact js file.
console.log("This is from first js file.")

// essential js code for html first section starts here
const btn = document.getElementById("text-btn");
btn.addEventListener("click", function(){ 
    btn.style.backgroundColor = "orange"
    btn.style.color = "white"
    btn.innerText = "changed"
    const btnTitle = document.getElementById("btn-title");
    btnTitle.innerText = "Hello, I am changed from first JS file."
    const backgroundChange = document.getElementById("first-section");
    backgroundChange.style.backgroundColor = "skyblue";
})

// first section ends here
// here, when we click on button, the background of section and button will change. The number increases per click .

let count = 0;

const numBtn = document.getElementById("num-btn");
numBtn.addEventListener("click", function(){ 
    numBtn.style.backgroundColor = "orange";
    numBtn.style.color = "white";
    document.getElementById("second-section").style.backgroundColor = "skyblue";
    const displayNum = document.getElementById("count");

    count += 1;
    displayNum.innerText = count;

})

// second section ends here and third starts

const hiddenTxt = document.getElementById("hidden-text");
const hiddenBtn = document.getElementById("hide-btn");
hiddenBtn.addEventListener("click", function(){ 
    hiddenBtn.style.border = "1px solid orange"
    hiddenBtn.style.backgroundColor = "orange"
    hiddenBtn.style.color = "white"
    hiddenTxt.style.display = "none";
})