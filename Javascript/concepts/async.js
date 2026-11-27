// console.log("First");

// setTimeout(cb, delay)
// setTimeout(function(){
//     console.log("Second");
// }, 0); //3sec -> it does not mean that exactly after 3sec the cb function would be called. this is the minimum time befroe cb is eligible to run. 

// console.log("Third");

console.log("1. Script starts");

setTimeout(function timerOne() {
  console.log("5. Timer 1 runs");
}, 0);
setTimeout(function timerTwo() {
  console.log("6. Timer 2 runs");
}, 0);
function firstFunction() {
  console.log("2. firstFunction starts");
  secondFunction();
  console.log("4. firstFunction ends");
}
function secondFunction() {
  console.log("3. secondFunction runs");
}
firstFunction();
console.log("Script ends");
