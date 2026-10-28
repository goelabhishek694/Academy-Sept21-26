// 1. getElementById
let title = document.getElementById("main-title");
console.log(title);

//2. querySelector

//select by class
let intro = document.querySelector(".intro");
console.log(intro);

//select by id
let title2 = document.querySelector("#main-title");
console.log(title2);

//select by tag name
let firstBtn = document.querySelector("button");
console.log(firstBtn);

let secondPara = document.querySelector("div>p");
console.log(secondPara);

// 3. querySelectorAll
const allIntros = document.querySelectorAll(".intro");
console.log(allIntros);

const allBtns = document.querySelectorAll("button");
console.log(allBtns);


//syntax for event listener
// Element.addEventListener("eventType", cbFunc);

//select the ele
const btn = document.getElementById("btn-1");
btn.addEventListener("click", function(){
    console.log("btn is clicked");
});

btn.addEventListener("dblclick", function(){
    console.log("btn is double clicked");
});


//create and append ele

// 1. create 
let newDiv = document.createElement("div");
console.log(newDiv);

//2. configure
// newDiv.innerHTML= `<strong>Hello from Javascript</strong>`
newDiv.innerText = "Hello from Javascript";
newDiv.classList.add("greet");

let body = document.querySelector("body");
body.appendChild(newDiv);
