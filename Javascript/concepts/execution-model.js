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

// let x = 1;

// function outer() {
//   let x = 2;

//   function inner() {
//     let x = 3;
//     console.log(x);
//   }

//   inner();
//   console.log(x);
// }

// outer();
// console.log(x);

// //variable shadowing,

// let color = "red";

// function outer() {
//   let color = "blue";

//   function inner() {
//     console.log(color);
//   }

//   inner();
// }

// outer();

// let discount = 0.1;

// function calculatePrice(basePrice) {
//   let tax = 0.08;

//   function applyDiscount(price) {
//     let discountedPrice = price * (1 - discount); //108*(0.9)
//     return discountedPrice; //97.2
//   }

//   let priceWithTax = basePrice * (1 + tax); //100*(1.08) = 108
//   let finalPrice = applyDiscount(priceWithTax);
//   return finalPrice;
// }

// console.log(calculatePrice(100)); //97.2

// //lexical scoping -> my scope + parent's scope. so parent's scope = where i am defined. and not from where i was called.

// let name = "Global";

// function greet() {
//   console.log("Hello, " + name);
// }

// function wrapper() {
//   let name = "Wrapper";
//   greet();
// }

// wrapper();

// function a(){

//   // some cdeo

//   function b(){

//   }

//   // some more code
// }

// let x = 10;

// function foo() {
//   console.log(x);
// }

// function bar() {
//   let x = 20;
//   foo();
// }

// bar()

// //lexical scope chaing example
// var count = 0;

// function increment() {
//   console.log(count);
//   count = count + 1;
//   var count = 5;
// }

// increment();
// console.log(count);

// function createCounter(param) {
//   let count = 0;

//   function increment() {
//     count = count + 1;
//     console.log("Count is: " + count);
//   }

//   return increment;
// }

// const myCounter = createCounter();

// myCounter();
// myCounter();
// myCounter();

// function outer() {
//   let x = 10;

//   x = 20;
//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }


// const fn = outer();
// fn();

//why do i want the state to be private ?

let count = 0;

function addOne(num) {
  let result = num + 1;
  count++;
  return result;
}

console.log(addOne(5));
console.log(addOne(5));
console.log(addOne(5));
count =10; // to avoid this kind of ovrride we want to our variable to be private, so that no one can alter it acept the function. 
console.log(count);

//closures -> to create a private variable
// example of data encapsulate through closures

function createCounter(){
  let count = 0;

  function addOne(num) {
    let result = num + 1;
    count++;
    console.log(`Called ${count} times`)
    return result;
  } 

  return addOne;
}

const counter = createCounter();

counter(5);
counter(5);
counter(5);


function createBankAccount(initialBalance) {
  let balance = initialBalance;

  function deposit(amount) {
    balance = balance + amount;
    console.log("Deposited: " + amount + ". New balance: " + balance);
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log("Insufficient funds. Balance: " + balance);
      return;
    }
    balance = balance - amount;
    console.log("Withdrew: " + amount + ". New balance: " + balance);
  }

  function getBalance() {
    return balance;
  }

  return {
    deposit: deposit,
    withdraw: withdraw,
    getBalance: getBalance
  };
}

const myAccount = createBankAccount(100);

myAccount.deposit(100);
myAccount.withdraw(200);
console.log(`Current balance: ${myAccount.getBalance()}`);
myAccount.withdraw(2000);
