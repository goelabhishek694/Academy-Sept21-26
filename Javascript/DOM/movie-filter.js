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
            // card.classList.add("visible")
        }else{
            card.style.display="none";
            // card.classList.remove("visible")
        }
    })
})

window.addEventListener("scroll", function(){
    console.log("scrollY: ", window.scrollY);
})

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
    if(window.scrollY>50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
})

// getBoundingClientRect -> it returns an object that tells you exactly where that element is relative to the viewport

// const card = document.querySelector('.movie-card');
// const rect = card.getBoundingClientRect();
// console.log('top:', rect.top);
// console.log('bottom:', rect.bottom);
// console.log('height:', rect.height);

function revealMovieCardsOnScroll(){
    movieCards.forEach(function(card){
        const rect = card.getBoundingClientRect();
        console.log(rect.top);
        
        if(rect.top<window.innerHeight){
            card.classList.add("visible");
        }
    })
}

// revealMovieCardsOnScroll();

window.addEventListener("scroll", revealMovieCardsOnScroll);

// Common Mistakes
// Assuming getBoundingClientRect values are fixed. They change every time the user scrolls or the page layout shifts.
// Doing heavy DOM manipulation inside scroll handlers without throttling. This can cause jank and stuttering.
// Confusing window.scrollY (page scroll position) with getBoundingClientRect (element position relative to viewport). They measure different things.
// Forgetting to call the reveal function once on page load. Cards already in the viewport would remain hidden until the user scrolls.