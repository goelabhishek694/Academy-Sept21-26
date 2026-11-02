// const input = document.getElementById("searchInput");
// // input.addEventListener("keydown", function(e){
// //     // console.log("keydown ", e.key);
// //     // console.log("keydown ", e.code);

// // })
// const movieCards = document.querySelectorAll(".movie-card");

// input.addEventListener("keyup", function(e){
//     const key = e.key;
//     console.log(key);
//     console.log("input box value ", input.value);


//     // console.log("keyup ", e.key);
//     // console.log("keyup ", e.code);
//     const searchTerm = input.value.toLowerCase();
//     console.log("searchTerm ", searchTerm);

//     movieCards.forEach(function(card){
//         const title = card.textContent.toLowerCase();
//         if(title.includes(searchTerm)){
//             card.style.display="block";
//             // card.classList.add("visible")
//         }else{
//             card.style.display="none";
//             // card.classList.remove("visible")
//         }
//     })
// })

// window.addEventListener("scroll", function(){
//     // console.log("scrollY: ", window.scrollY);
// })

// const navbar = document.getElementById("navbar");

// window.addEventListener("scroll", function(){
//     if(window.scrollY>50){
//         navbar.classList.add("scrolled");
//     }else{
//         navbar.classList.remove("scrolled");
//     }
// })

// // getBoundingClientRect -> it returns an object that tells you exactly where that element is relative to the viewport

// // const card = document.querySelector('.movie-card');
// // const rect = card.getBoundingClientRect();
// // console.log('top:', rect.top);
// // console.log('bottom:', rect.bottom);
// // console.log('height:', rect.height);

// function revealMovieCardsOnScroll(){
//     movieCards.forEach(function(card){
//         const rect = card.getBoundingClientRect();
//         // console.log(rect.top);

//         if(rect.top<window.innerHeight){
//             card.classList.add("visible");
//         }
//     })
// }

// // revealMovieCardsOnScroll();

// window.addEventListener("scroll", revealMovieCardsOnScroll);

// // Common Mistakes
// // Assuming getBoundingClientRect values are fixed. They change every time the user scrolls or the page layout shifts.
// // Doing heavy DOM manipulation inside scroll handlers without throttling. This can cause jank and stuttering.
// // Confusing window.scrollY (page scroll position) with getBoundingClientRect (element position relative to viewport). They measure different things.
// // Forgetting to call the reveal function once on page load. Cards already in the viewport would remain hidden until the user scrolls.

// //remove element from DOM

// // const card =document.querySelector(".movie-card");
// // card.remove();

// // parent.removeChild();
// // const card = document.querySelector(".movie-card");
// // const movieList =document.getElementById("movieList");
// // movieList.removeChild(card);


// // const deleteBtns = document.querySelectorAll(".delete-btn");
// // deleteBtns.forEach(function(btn){
// //     btn.addEventListener("click", function(e){
// //         console.log(e.target);
// //         e.target.parentElement.remove();
// //     })
// // })

// //Trying to remove an element that has already been removed. This throws an error.
// // Forgetting that remove() is permanent for that session. The element is gone from the DOM tree. If you need it back, you have to recreate it.
// // Confusing hiding (display: none) with removing. Hiding keeps the element in the DOM. Removing deletes it entirely. Choose based on whether you need it again.

// //one way to overcome 
// // const newCard = document.createElement('div');
// // newCard.classList.add('movie-card', 'visible');
// // newCard.innerHTML = '<span class="movie-title">New Movie</span><button class="delete-btn">X</button>';
// // document.querySelector('#movieList').appendChild(newCard);

// // Manually attach listener to the new button
// // newCard.querySelector('.delete-btn').addEventListener('click', function(event) {
// //   event.target.parentElement.remove();
// // });


// const movieList = document.getElementById("movieList");

// movieList.addEventListener("click", function(e){
//     console.log("click detected on movieList");
//     console.log("actual ele click: ", e.target);
//     console.log("listener attached to: ", e.currentTarget);
//     const deleteBtn = e.target.closest(".delete-btn")
//     // if(e.target.classList.contains("delete-btn")){
//     //     //delete the movie card
//     //     const card = e.target.parentElement;
//     //     console.log(card);
//     //     card.remove();
//     // }

//     if(deleteBtn){
//         const card = deleteBtn.closest(".movie-card");
//         card.remove();
//     }
// })

// <---------Production ready code --------->

// Keyboard search filter

const searchInput = document.querySelector("#searchInput");
const movieList = document.querySelector("#movieList");
const addBtn = document.getElementById("addMovie");

searchInput.addEventListener("keyup", function (e) {
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm);

    const cards = movieList.querySelectorAll(".movie-card");
    cards.forEach(function (card) {
        // console.log(card)
        const title = card.querySelector(".movie-title").textContent.toLowerCase();
        console.log("title :", title)
        if (title.includes(searchTerm)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});


//scroll aware navbar

const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


//   revealOnScroll;
function revealOnScroll() {
    const cards = document.querySelectorAll('.movie-card');
    cards.forEach(function(card) {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        card.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);

  //delete btn 
  movieList.addEventListener("click", function(e){
    const deleteBtn = e.target.closest(".delete-btn");
    if(deleteBtn){
        const card = deleteBtn.closest(".movie-card");
        card.remove();
    }
  });

  //add movie

  addBtn.addEventListener("click", function(e){
    const movieName = prompt("Enter movie name !!");
    if(!movieName) return ;
    const newCard = document.createElement("div");
    newCard.classList.add("movie-card", "visible");
    newCard.innerHTML = `<span class="movie-title">${movieName}</span>
        <button class="delete-btn">X</button>`;
    movieList.appendChild(newCard);
  })

  


  