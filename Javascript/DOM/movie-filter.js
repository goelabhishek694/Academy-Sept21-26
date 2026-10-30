const input = document.getElementById("searchInput");
// input.addEventListener("keydown", function(e){
//     // console.log("keydown ", e.key);
//     // console.log("keydown ", e.code);

// })
const movieCards = document.querySelectorAll(".movie-card");

input.addEventListener("keyup", function(e){
    const key = e.key;
    console.log(key);
    console.log("input box value ", input.value);
    
    
    // console.log("keyup ", e.key);
    // console.log("keyup ", e.code);
    const searchTerm = input.value.toLowerCase();
    console.log("searchTerm ", searchTerm);
    
    movieCards.forEach(function(card){
        const title = card.textContent.toLowerCase();
        if(title.includes(searchTerm)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
    })
})