// DOM references

const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const modalInput = document.querySelector(".modal-input");
const ticketContainer = document.querySelector(".ticket-container");
const toolbox = document.querySelector(".toolbox");

// STATE 
let selectedColor = "#ff6b6b";

// MODAL TOGGLE

let isModalOpen = false;

addBtn.addEventListener("click", function(){
    if(isModalOpen){
        modal.classList.add("hidden");
        addBtn.textContent = "+"
    }else{
        modal.classList.remove("hidden");
        addBtn.textContent = "-"
        modalInput.value="";
    }
    isModalOpen=!isModalOpen;
})