// const fs = require("fs");
// fs.readFile("f1.txt", "utf-8", (err, data1) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data1);
//     fs.readFile("f2.txt", "utf-8", (err, data2) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data2);
//         fs.readFile("f3.txt", "utf-8", (err, data3) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data3);
//           }
//         });
//       }
//     });
//   }
// });

// readability : the deeper we nest , tha harder it is to follow the logic 
// error handling: every single level needs its own if(err) check . miss one and u have a silent failure. 
// scalability: adding a fourth file means adding a fourth level of nesting.
// maintainability: try explinig this code to a teammate. or to yourself 3 months from now . 


// What is a Promise ?

//                     pending

// fulfilled                       rejected
// {resolved with a value}         {error/failure with reason}

// why do promises exist ?

// problem with cb                             How Promises Fix it 

// 1. deep nesting                             .then() chaining 
// 2. repetitive error handling                single .catch() at the end of chain
// 3. hard to reason about execution order     each .then() clearly shows what happen next
// 4. inversion of control(you hand your       you hold the promise obj and decide what to do with it . 
//     cb to someone else)

// creating a promise 

// const chaiPromise = new Promise(function(resolve, reject){
//     console.log("Chaiwala starts making chai ..!");
//     resolve("Chai is ready")


// });

// const delay = 1000;

// const chaiPromise = new Promise(function (resolve, reject) {
//     console.log("Chaiwala starts making chai ..!");
//     setTimeout(function () {
//         resolve("Chai is ready");
//         reject("sorry, ran out of milk");
//     }, delay);
// });

// function toastBread() {
//     return new Promise(function (resolve, reject) {
//         console.log("Toasting bread...");
//         setTimeout(function () {
//             resolve("bread is toasted");
//         }, delay);
//     })
// }

// function serveBreakfast() {
//     return new Promise(function (resolve, reject) {
//         console.log("serving breakfast..");
//         setTimeout(function () {
//             resolve("breakfast is served");
//         }, delay);
//     });
// }

// console.log("Before .then()");
// console.log(chaiPromise);
// // .then() -> helps in consuming the Promise. 
// chaiPromise
//     .then(function (value) {
//         console.log("Fulfilled:", value);
//         return toastBread()
//     })
//     .then(function (breadResult) {
//         console.log(breadResult);
//         return serveBreakfast()
//     })
//     .then(function (breakfastResult) {
//         console.log(breakfastResult);
//     })
//     .catch(function (error) {
//         console.log("Rejected:", error)
//     })
//     .finally(function () {
//         console.log("pick up your bag and leave the tea stall")
//     })
// console.log("After .then()");

//sequential async processing -> when order matters 
const { log } = require("console");
const fs = require("fs");

// const p1 = fs.promises.readFile("f1.txt", "utf-8");

// console.log(p1);

// p1
//     .then(function (data) {
//         console.log(data);
//         return fs.promises.readFile("f2.txt", "utf-8");
//     })
//     .then(function (data) {
//         console.log(data);
//         return fs.promises.readFile("f3.txt", "utf-8");
//     })
//     .then(function (data) {
//         console.log(data);
//         return fs.promises.readFile("f4.txt", "utf-8");
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
//     .finally(function(){
//         console.log("done with the task");
//     })

// fs.readFile("f1.txt", "utf-8", function(error, data){
//     console.log("file is read ", data);
// })


//what if order does nto matter -> concurrent file reads


// const p1 = fs.promises.readFile("f1.txt", "utf-8");
// const p2 = fs.promises.readFile("f2.txt", "utf-8");
// const p3 = fs.promises.readFile("f3.txt", "utf-8");

// p1.then(function(data){
//     console.log(data);
// });

// p2.then(function(data){
//     console.log(data);
// });

// p3.then(function(data){
//     console.log(data);
// });


//why are promises special ?

// console.log("A");
// setTimeout(function () {
//   console.log("B");
// }, 0);
// Promise.resolve().then(function () {
//   console.log("C");
// });
// console.log("D");

// Promise.resolve("X")
//   .then(function (val) {
//     console.log(val);
//     return "Y"; // this gets converted into a resolved promise -> Promise.resolve("Y")
//   })
//   .then(function (val) {
//     console.log(val);
//   });

// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 0);
// Promise.resolve().then(function () {
//   console.log("3");
// });
// console.log("4");



const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("hello")
    },10000);
});

promise1.then(function(val){
    console.log(val);
    // return val
});