const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");

const allBtn = document.querySelectorAll("button");

// redBtn.addEventListener("click", function(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.textContent);
//     console.log(e.target.tagName);
//     document.body.style.backgroundColor= "red"
// });

// greenBtn.addEventListener("click", function(e){
//     document.body.style.backgroundColor= "green"
// })

// blueBtn.addEventListener("click", function(e){
//     document.body.style.backgroundColor= "blue"
// })

allBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const color = e.target.dataset.color;
        console.log(color);
        document.body.style.backgroundColor=color;
    })
})

e.currTarget
