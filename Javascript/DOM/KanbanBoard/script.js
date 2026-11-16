// DOM references

const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const modalInput = document.querySelector(".modal-input");
let ticketContainer = document.querySelector(".ticket-container");
const toolbox = document.querySelector(".toolbox");
let activeColorBox = document.querySelector(".color-red");
const COLORS = ['#ff6b6b', '#6bcbff', '#6bff9e', '#ffb86b'];
const showAllBtn = document.querySelector(".show-all-btn");

activeColorBox.classList.add("active");
// STATE 
let selectedColor = "#ff6b6b";
let ticketCounter =0;
let ticketsArr = [];

// MODAL TOGGLE
let isModalOpen = false;

//==== INITIALIZATION ====
loadFromLocalStorage();

ticketContainer.addEventListener("click", function(e){
    console.log("hello", e.target);
    const ele = e.target;
    const removeBtn = ele.closest(".ticket-remove");
    const lockBtn = ele.closest(".ticket-lock");
    const colorBand = ele.closest(".ticket-color-band");

    if(isModalOpen){
        console.log("world");
        
        modal.classList.add("hidden");
        addBtn.textContent = "+";
        isModalOpen = !isModalOpen;
    }
    if(removeBtn){
        //remove the ticket
        const ticket = removeBtn.closest(".ticket");
        const ticketId = ticket.getAttribute("data-id");

        //remove data from array 
        ticketsArr = ticketsArr.filter(function(ticket){
            return ticket.id!=ticketId;
        });

        //remove from DOM
        ticket.remove();
        saveToLocalStorage();
        
    }
    if(lockBtn){
        const ticket = lockBtn.closest(".ticket");
        const ticketId = ticket.getAttribute("data-id");
        const textEle = ticket.querySelector(".ticket-text");
        const icon = lockBtn.querySelector("i");

        //find the ticket data 
        var ticketData = ticketsArr.find(function(ticket){
            return ticket.id == ticketId
        });

        if(!ticketData) return;

        //toggle the locked state
        if(ticketData.isLocked){
            textEle.setAttribute("contenteditable", "true");
            icon.classList.remove("fa-lock");
            icon.classList.add("fa-unlock");
        }else{
            textEle.setAttribute("contenteditable", "false");
            icon.classList.remove("fa-unlock");
            icon.classList.add("fa-lock");
        }

        ticketData.isLocked = !ticketData.isLocked;
        saveToLocalStorage();
    }
    if(colorBand){
        const ticket = colorBand.closest(".ticket");
        const ticketId = ticket.getAttribute("data-id");
        
        const ticketData = ticketsArr.find(function (t) {
            return t.id === ticketId;
        });

        if(!ticketData) return;

        //find current color index
        const currentIdx = COLORS.indexOf(ticketData.color);
        const nextIdx = (currentIdx+1)%COLORS.length;

        //update data 
        ticketData.color = COLORS[nextIdx];
        //update DOM 
        colorBand.style.backgroundColor = COLORS[nextIdx];
        saveToLocalStorage();

        
    }
});

toolbox.addEventListener("click", function (e) {
    let ele = e.target;
    console.log(e.target);
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

        //filter tickets to show only this color
        filterTicketsByPriority(selectedColor);
    }
})

showAllBtn.addEventListener("click", function(){
    showAllTickets();
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
        saveToLocalStorage();

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


ticketContainer.addEventListener("blur", function(e){
    //handle the edited ticket text
    var editedEle = e.target;
    if(!editedEle.classList.contains("ticket-text")) return;
    var ticket = editedEle.closest(".ticket");
    var ticketId = ticket.getAttribute("data-id");
    var newText = editedEle.textContent.trim();

    //update the data array
    var ticketData = ticketsArr.find(function(ticket){
        return ticket.id == ticketId
    });

    if(ticketData){
        ticketData.text= newText;
    }
}, true);

function filterTicketsByPriority(color){
    var allTickets = document.querySelectorAll(".ticket");
    allTickets.forEach(function(ticket){
        var ticketId = ticket.getAttribute('data-id');
        var ticketData = ticketsArr.find(function (t) {
            return t.id === ticketId;
        });
        if(ticketData && ticketData.color == color){
            ticket.style.display = "flex" ;
        }else{
            ticket.style.display = "none" ;
        }
    })
}

function showAllTickets(){
    var allTickets = document.querySelectorAll(".ticket");
    allTickets.forEach(function(ticket){
        ticket.style.display = "flex";
    })
}


function saveToLocalStorage(){
    localStorage.setItem("kanban-tickets", JSON.stringify(ticketsArr));
    localStorage.setItem("kanban-counter", ticketCounter.toString());
}

//use createTicket function . HW
function renderTicket(ticketData){
    const ticketId = ticketData.id;
    const ticketColor = ticketData.color;
    const ticketText = ticketData.text;

        // 1. create ticket container
        const ticket = document.createElement("div");
        ticket.classList.add("ticket");
        ticket.setAttribute("data-id", ticketId);
    
        // 2. create the color band 
        const colorBand = document.createElement("div");
        colorBand.classList.add("ticket-color-band");
        colorBand.style.backgroundColor =  ticketColor;
    
        // 3. Create ticket text area
        const text = document.createElement("div");
        text.classList.add("ticket-text");
        text.textContent = ticketText;
    
        // 4. create the lock icon
        const lock = document.createElement("div");
        lock.classList.add("ticket-lock");
        //on the basis of state, set content editable
        if(ticketData.isLocked){
            lock.innerHTML = `<i class="fa-solid fa-lock"></i>`;
            text.setAttribute("contenteditable", false);
        }else{
            lock.innerHTML = `<i class="fa-solid fa-unlock"></i>`;
            text.setAttribute("contenteditable", true);
        }
    
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
}

function loadFromLocalStorage(){
    var savedTickets = localStorage.getItem("kanban-tickets");
    var savedCounter = localStorage.getItem("kanban-counter");

    if(savedTickets && savedCounter){
        ticketsArr = JSON.parse(savedTickets);
        ticketCounter = parseInt(savedCounter, 10);
        ticketsArr.forEach(function(ticketData){
            renderTicket(ticketData);
        });
    }else{
        ticketsArr = [];
        ticketCounter = 0;
    }
}