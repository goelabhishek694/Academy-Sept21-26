// var greeting = "Hello";
// let name = "Alice";
// const age = 25;

// sayHello();

// function sayHello() {
//   console.log(greeting + ", " + name);
// }

// sayHello();

// console.log(x);
// var x = 10;

// console.log(y);
// let y = 10;

// sayHi();

// function sayHi() {
//   console.log("Hi there!");
// }

// example 1

// console.log(x); //ud
// greet(); //hello from greet

// var x =10;
// function greet(){
//     console.log("Hello from greet");
// }

// console.log(x);

// console.log(y);
// console.log(x);
// console.log(z);
// let y = 10;
// var x = 20;
// const z = 30;

// sayBye();
// var sayBye = function(){
//     console.log("Byeeee");
// }

// function calculateTax(amount) {
//     var taxRate = 0.2;
//     var tax = amount * taxRate;
//     return tax;
//   }

//   var totalTax = calculateTax(100);
//   console.log(totalTax);
//   console.log(taxRate);

// //global scope
// var globalVar = "I am global";
// let globalLet = "I am also global";

// function showGlobal() {
//   console.log(globalVar); // "I am global"
//   console.log(globalLet); // "I am also global"
// }

// showGlobal();
// console.log(globalVar);   // "I am global"

// //function scope

// function myFunction() {
//     var secret = "You can't see me outside";
//     let alsoSecret = "Me neither";
//     console.log(secret);    // works fine
//   }

//   myFunction();
//   console.log(secret);

//   //block scope

//   if (true) {
//     var varVariable = "I escape blocks";
//     let letVariable = "I stay in the block";
//     const constVariable = "I also stay";
//   }

//   console.log(varVariable); // I escape blocks
//   console.log(letVariable);  //error
//   console.log(constVariable);   //error

// //exercise
//   for (var i = 0; i < 3; i++) {
//     // loop body
//   }
//   console.log(i); //3

//   for (let j = 0; j < 3; j++) {
//     // loop body
//   }
//   console.log(j); //error

// //nested scope

// var outer = "outer";

// function myFunc() {
//   var middle = "middle";

//   if (true) {
//     let inner = "inner";
//     console.log(outer);
//     console.log(middle);
//     console.log(inner);
//   }

//   console.log(outer);
//   console.log(middle);
// //   console.log(inner);
// }

// myFunc();
// console.log(outer);
// console.log(middle);

let x = 1;

function outer() {
  let x = 2;

  function inner() {
    let x = 3;
    console.log(x);
  }

  inner();
  console.log(x);
}

outer();
console.log(x);
