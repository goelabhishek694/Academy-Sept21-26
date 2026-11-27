// var a = 10;
// console.log(a);
// console.log(typeof a);

// a="Scaler";
// console.log(a);
// console.log(typeof a);

// a = true;
// console.log(a);
// console.log(typeof a);

// var b= 10;
// console.log(b);

// var b=100;
// console.log(b);

// for(var a=5;a>=0;a--){
//     console.log(a);
// }
// console.log(a);
// a=100;
// console.log(a);

// let z = 100;
// console.log(z);

// z=10;
// console.log(z);

// // let z = 230;

// const y = 123;
// y=456;

// let cartValue = ""

// const name ="Abhishek";

// {
//     let greet = "Hello World";
//     const age = 23;
// }

// // console.log(greet);
// // console.log(age);

// {
//     var hobby = "painting";
// }

// console.log(hobby);

// //var is function scoped
// // function testFn(){
// //     var vegetable = "potato";
// //     return;
// // }

// // console.log(vegetable);

// let a = 10;
// let b = 2/0;
// let c = "hello"/2;
// let d = -10.5;

// console.log(a,b,c,d);

// console.log(typeof NaN);
// console.log(typeof Infinity);

// let str1 = 'Hello'; //single quotes
// let str2 = "World"; //double quotes

// //template literals -> used to embed expression/variable inside a string
// let str3 = `Hi, template`; //backticks

// let name = "Sachin";

// let str4 = `Hi ${name}`;
// // expression is evaluated before logging
// console.log(str4);

// //Booleans
// let isEven = true;
// let isOdd = false;

// //Undefined -> a variables has been declared , but it is not assigned a vlue yet. it has default value i.e. undefined.
// let x;
// console.log(x);

// //Null
// // used to represent deliberate emptiness

// let y = null;

// console.log(typeof null);
// console.log(typeof undefined);

// //symbol , bigInt -> ignore

// //refernce

// let arr = [10,20,30];
// console.log(arr);

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);

// //objects

// let person = {
//     name: "Rabinson",
//     age: 23,
//     isWorking: true,
//     hobbies: ["singing", "dancing", "coding"]
// }

// //dot notation
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.hobbies[0]);

// //bracket notation
// console.log(person["name"]);

// //function declaration
// function serveBeverage(beverageName){
//     console.log(`serving ${beverageName}`);
// }

// //function calling
// serveBeverage("coffee");

// let num1=100;
// num2 = num1;
// num2 = 200;
// console.log(num1);
// console.log(num2);

// let arr1 = [10,20,30];
// let arr2 = arr1;

// arr2.push(40);
// console.log(arr1);
// console.log(arr2);

// const name = "Reshma"
// const age = 23;

// const msg1 = "My name is " + name + " and my age is " + age;
// const msg2 = `My name is ${name} and my age is ${age}`;

// console.log(msg1);
// console.log(msg2);

// == v/s ===

// //type coercion -> JS first compares them to a common type and then compares
// console.log(5 == "5");
// //type coercion does not take place. it check the type and then matches the value
// console.log(5 === "5");

// console.log(0 == false)  //true
// console.log(0 === false) //false
// console.log("" == 0) //true
// console.log(null == undefined) //true
// console.log(null === undefined) //false

// falsy values
// NaN, 0 ,-0 , false, "" '', null, ud, document.all

// Logical Operators
// && , ||, !

// const age = 25;
// const hasLicense = true;

// const canDrive = age >= 18 && hasLicense;
// console.log(canDrive); //true

// const isWeekend = false;
// const isHoliday = true;

// const canSleepIn = isWeekend || isHoliday;
// console.log(canSleepIn); //true

// const isLoggedOut = !true;
// console.log(isLoggedOut); // false

// console.log("hello" && "world");
// console.log("hello" && 0);
// console.log(0 && "world");
// console.log(0 && null);

// console.log("hello" || "world");
// console.log("hello" || 0);
// console.log(0 || "world");
// console.log(0 || null);

// HW
// I'm learning about type coercion in JavaScript.
// Here are some expressions. I predict each result.
// Tell me which predictions are wrong and explain why, briefly.

// 1. "5" + 3
// 2. "5" - 3
// 3. true + 1
// 4. null + 1
// 5. undefined + 1
// 6. "5" * "2"

//if , else if , else

// if (condition) {
//   // runs if condition is truthy
// } else if (otherCondition) {
//   // runs if first was false and this is truthy
// } else {
//   // runs if nothing above was truthy
// }

// const score = 85;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: F");
// }

// Loops
// while

// let count = 1;
// while (count <= 5) {
//   console.log(count);
//   count++;
// }

//for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// const skills = ["HTML", "CSS", "JavaScript", "Git"];

// for (let i = 0; i < skills.length; i++) {
//   console.log(`Skill ${i + 1}: ${skills[i]}`);
// }

//for...of (The One You Will Use Most)

// const skills = ["HTML", "CSS", "JavaScript", "Git"];

// for (const skill of skills) {
//   console.log(skill);
// }

//Functions in JS

// function serveTea(){
//     console.log("Boil water");
//     console.log("add tea Leaves");
//     console.log("Add milk");
//     console.log("Add sugar");
//     console.log("tea is served");
// }

// serveTea();
//               //parameter
// function greet(name){
//     return `Hello ${name}`
// }
//                   //arg
// const msg = greet("Zareel");
// console.log(msg);

// function add(a, b){
//     return a+b;
// }

// const result = add(123,4320);
// console.log(result);



// const multiply = function(a,b){
//     return a*b;
// }

// console.log(multiply(1234,678));

// //Object 

// // collection of key value pairs

// const obj = {
//     name: "Anil",
//     age: 23,
//     phone: 234567890,
//     email: "coolanil@gmail.com",
//     hasLicense: false,
//     hobbies: ["dance", "sing"],
//     address: {
//         street: 56,
//         "house no": 123,
//         city: "Delhi",
//         country: "India"
//     },
//     sayHi: function(){
//         console.log("Anil says hi");
//     }
// }

// console.log(obj.name);
// console.log(obj.hobbies[1]);
// console.log(obj.address.country);
// obj.sayHi();


// delete obj.email;
// console.log(obj.email); //ud

// for(const key in obj){
//     //bracket notaton -> resolve a variable 
//     console.log(key, obj[key]);

// }

// // obj[key] -> obj["name"] -> 

// const prices = [200, 450, 130, 870, 55];

// const discountedPrices=[];
// for(let i =0 ;i <prices.length; i++){
//     discountedPrices.push(prices[i]*0.9);
// }

// const expensiveProducts = [];
// for(let i =0 ;i <prices.length; i++){
//     if(prices[i] >=200){
//     expensiveProducts.push(prices[i]);
//     }
// }

// let total =0;
// for(let i =0 ;i <prices.length; i++){
//     total = total + prices[i];
// }

// let greeting = function(){
//     console.log("hello");

// }
// const sayHi = greeting;
// sayHi();

// function foo(sayHi){

// }

// function add(a, b) {
//  return a + b;
// }

// function multiply(a, b) {
//  return a * b;
// }

// function compute(operation, x, y) {
//     if(x >=0 && y>=0){

//  return operation(x, y);
//     }
// }

// console.log(compute(add, -5,3));
// console.log(compute(multiply, 5,3));

function processEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

const fruits = ["Mango", "Banana", "Pineapple", "Kiwi"];

//anonymous
processEach(fruits, function (fruit) {
    console.log(`i like ${fruit}`)
});


function printInAllCaps(fruit) {
    console.log(fruit.toUpperCase());
}
//named function approach
processEach(fruits, printInAllCaps);

//HOF -> if it does at least one of these 2 things
// 1. takes one or more functions as arguments 
// 2. returns a function as it's o/p

// const radii = [2, 4, 6, 8];

// 1. diameter
// 2. circumference
// 3. area 

//without HOF

// // Diameters
// const diameters = [];
// for (let i = 0; i < radii.length; i++) {
//  diameters.push(radii[i] * 2);
// }

// // Circumferences
// const circumferences = [];
// for (let i = 0; i < radii.length; i++) {
//  circumferences.push(2 * Math.PI * radii[i]);
// }

// // Areas
// const areas = [];
// for (let i = 0; i < radii.length; i++) {
//  areas.push(Math.PI * radii[i] * radii[i]);
// }

// The repeating part is:

// Create an empty array
// Loop through radii
// Push something into the new array

// The changing part is the formula:

// radii[i] * 2
// 2 * Math.PI * radii[i]
// Math.PI * radii[i] * radii[i]

// function calculate(array, cb){
//     const result = [];
//     for(let i =0;i < array.length; i++){
//         const val = cb(array[i]);
//         result.push(val);
//     }

//     return result;
// }

// function diameter(radius){
//     return radius*2;
// }

// function circumference(radius){
//     return 2 * Math.PI * radius;
// }

// function area(radius){
//     return Math.PI * radius * radius;
// }

// console.log(calculate(radii, diameter));
// console.log(calculate(radii, circumference));
// console.log(calculate(radii, area));


// console.log(calculate(radii, getPerimeterOfSquare));

// function getPerimeterOfSquare(length){
//     return 4*length
// }

//pure functions
// 1. they ALWAYS GIVE THE SAME O/P ON SAME I/P 
// 2. they do not modify and variable, array or print anything ouitside it self. basically no side effect. 

// area(4); //pie16
// area(4); //pie16
// area(4); //pie16
// area(4); //pie16


// let taxRate = 0.18;

// function calculateTax(price) {
//  return price * taxRate;
// }

// console.log(calculateTax(100))
// console.log(calculateTax(100))
// taxRate=0.28;
// console.log(calculateTax(100))

// built in array HOF methods

// 1. map -> transform every item into something new 
// 2. filter -> kepp only items that match a condition 
// 3. reduce -> combines all items into a single result 

// forEach -> runs a cb for each item , but does not return a new array . usefule for side effects like logging. 

// // <------------MAP------------->

// const prices = [200, 450, 130, 870, 55];
// function getDiscountedPrices(price){
//     return price*0.9;
// }

// const discounted = prices.map(getDiscountedPrices);

// console.log(discounted);
// console.log(prices);

// const radii = [2, 4, 6, 8];

// const dia = radii.map(function(radius){
//     return radius*2;
// });

// console.log(radii);
// console.log(dia);


// const products = [
//  { name: "Laptop", price: 80000, inStock: true },
//  { name: "Phone", price: 25000, inStock: false },
//  { name: "Tablet", price: 35000, inStock: true },
//  { name: "Monitor", price: 15000, inStock: true }
// ];

// const productsName = products.map(function(product){
//     return product.name;
// })
// console.log(productsName);

// // <------------------FILTER----------------->

// // use filter if u wan to keep only those items that pass a test/condition

// const prices = [200, 450, 130, 870, 55];

// const expensiveProducts = prices.filter(function(price){
//     if(price>=1000) return price;
// });

// console.log(prices);
// console.log(expensiveProducts);


// const products = [
//  { name: "Laptop", price: 80000, inStock: true },
//  { name: "Phone", price: 25000, inStock: false },
//  { name: "Tablet", price: 35000, inStock: true },
//  { name: "Monitor", price: 15000, inStock: true }
// ];

// const availableProducts = products.filter(function(product){
//     if(product.inStock){
//         return product
//     }
// });

// console.log(availableProducts);

// <-----------------------REDUCE------------------------>

// we use reduce when we want to combine all items of array into one final result

// const prices = [200, 450, 130, 870, 55];
// //always make sure to give a initial value
// const total = prices.reduce(function(acc,curr){
//     console.log("acc -> ", acc);
//     console.log("curr -> ", curr);
//     console.log("storing the sum in acc");
    
//     return acc+curr;
// }, 0);

// console.log(total);

// // it can build Object, flaten an array etc.

// <-----------------------------CHAINING-------------------------------->

const products = [
 { name: "Laptop", price: 80000, inStock: true },
 { name: "Phone", price: 25000, inStock: false },
 { name: "Tablet", price: 35000, inStock: true },
 { name: "Monitor", price: 15000, inStock: true }
];

//find the total prices of all the products that are in stock

const totalInStock = products
.filter(function(product){
    return product.inStock;
})
.map(function(product){
    return product.price;
})
.reduce(function(acc, curr){
    console.log("acc -> ", acc);
    console.log("curr -> ", curr);
    return acc+curr
}, 0);

console.log(totalInStock);


