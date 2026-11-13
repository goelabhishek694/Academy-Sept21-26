// DOM references

const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const modalInput = document.querySelector(".modal-input");
let ticketContainer = document.querySelector(".ticket-container");
const toolbox = document.querySelector(".toolbox");
let activeColorBox = document.querySelector(".color-red");

activeColorBox.classList.add("active");
// STATE 
let selectedColor = "#ff6b6b";
let ticketCounter =0;
let ticketsArr = [];

// MODAL TOGGLE
let isModalOpen = false;



ticketContainer.addEventListener("click", function(e){
    console.log("hello", e.target);
    const ele = e.target;
    const removeBtn = ele.closest(".ticket-remove");

    if(isModalOpen){
        console.log("world");
        
        modal.classList.add("hidden");
        addBtn.textContent = "+";
        isModalOpen = !isModalOpen;
    }
    else if(removeBtn){
        //remove the ticket
        const ticket = removeBtn.closest(".ticket");
        const ticketId = ticket.getAttribute("data-id");

        //remove data from array 
        ticketsArr = ticketsArr.filter(function(ticket){
            return ticket.id!=ticketId;
        });

        //remove from DOM
        ticket.remove();
        
    }
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

modalInput.addEventListener("keyup", function(e){
    // console.log(e.key);
    
    if(e.key == "Enter"){
        const taskText = modalInput.value.trim();
        if(taskText == ""){
            alert("pls enter a task description");
            return;
        }
        isModalOpen = false;
        const ticketId = createTicket(selectedColor, taskText);
        //store ticket data in array
        ticketsArr.push({
            id: ticketId,
            text: taskText,
            color:selectedColor,
            isLocked : true
        })

        modalInput.value = "";
        modal.classList.add("hidden");
        addBtn.textContent = "+"

    }
});

function createTicket(color, task){
    // console.log(`ticket created with color ${color} and task ${task}`);
    const id = generateId();

    // 1. create ticket container
    const ticket = document.createElement("div");
    ticket.classList.add("ticket");
    ticket.setAttribute("data-id", id);

    // 2. create the color band 
    const colorBand = document.createElement("div");
    colorBand.classList.add("ticket-color-band");
    colorBand.style.backgroundColor =  color;

    // 3. Create ticket text area
    const text = document.createElement("div");
    text.classList.add("ticket-text");
    text.textContent = task;

    // 4. create the lock icon
    const lock = document.createElement("div");
    lock.classList.add("ticket-lock");
    lock.innerHTML = `<i class="fa-solid fa-lock"></i>`;

    // 5. remove btn
    const removeBtn = document.createElement("div");
    removeBtn.classList.add("ticket-remove");
    removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    // 6. assemble the ticket
    ticket.appendChild(colorBand);
    ticket.appendChild(text);
    ticket.appendChild(lock);
    ticket.appendChild(removeBtn);

    // 7. add to the page
    ticketContainer.appendChild(ticket);

    return id;
    
}

function generateId(){
    ++ticketCounter;
    return 'ticket-'+ ticketCounter;
}

ticketContainer.addEventListener("click")



