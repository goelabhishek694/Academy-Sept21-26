// DOM references

const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const modalInput = document.querySelector(".modal-input");
const ticketContainer = document.querySelector(".ticket-container");
const toolbox = document.querySelector(".toolbox");
let activeColorBox = document.querySelector(".color-red");

activeColorBox.classList.add("active");
// STATE 
let selectedColor = "#ff6b6b";

// MODAL TOGGLE

let isModalOpen = false;

ticketContainer.addEventListener("click", function(e){
    console.log("hello");
    
    if(isModalOpen){
        console.log("world");
        
        modal.classList.add("hidden");
        addBtn.textContent = "+"
    }
    isModalOpen = !isModalOpen;
});

toolbox.addEventListener("click", function (e) {
    // console.log(e.target);
    let ele = e.target;
    if (ele.classList[0] == "add-btn") {
        if (isModalOpen) {
            modal.classList.add("hidden");
            addBtn.textContent = "+"
        } else {
            modal.classList.remove("hidden");
            addBtn.textContent = "-"
            modalInput.value = "";
        }
        isModalOpen = !isModalOpen;
    }else if (ele.classList[0] == "color-box"){
        //ticket color selection
        //remove active class
        activeColorBox.classList.remove("active");

        ele.classList.add("active");
        selectedColor = ele.dataset.color;
        activeColorBox = ele;

        // console.log(selectedColor);
        // console.log(ele.dataset.title);
    }
})

modalInput.addEventListener("keydown", function(e){
    // console.log(e.key);
    
    if(e.key == "Enter"){
        const taskText = modalInput.value.trim();
        if(taskText == ""){
            alert("pls enter a task description");
            return;
        }
        createTicket(selectedColor, taskText);

        modalInput.value = "";
        modal.classList.add("hidden");
            addBtn.textContent = "+"

    }
});

function createTicket(color, task){
    console.log(`ticket created with color ${color} and task ${task}`);
    
}



