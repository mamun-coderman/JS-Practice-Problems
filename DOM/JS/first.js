console.log("This is from first js file.")

const btn = document.getElementById("text-btn");
btn.addEventListener("click", function(){ 
    btn.style.backgroundColor = "orange"
    btn.style.color = "white"
    btn.innerText = "changed"
    const btnTitle = document.getElementById("btn-title");
    btnTitle.innerText = "Hello, I am changed from first JS file."
    
})