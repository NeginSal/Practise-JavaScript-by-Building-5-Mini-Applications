const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);
button.addEventListener("click",function(){
    console.log("click");
    output.innerText="Hi";
})