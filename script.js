const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);

button.addEventListener("click",function(){
    const cost = document.querySelector("input");
    let tip =(cost.value);
    let temp = 'you should pay'+tip+'on$'+cost.value;
    output.innerHTML= temp;
})