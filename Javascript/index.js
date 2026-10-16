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

const age = 25;
const hasLicense = true;

const canDrive = age >= 18 && hasLicense;
console.log(canDrive); //true

const isWeekend = false;
const isHoliday = true;

const canSleepIn = isWeekend || isHoliday;
console.log(canSleepIn); //true

const isLoggedOut = !true;
console.log(isLoggedOut); // false

console.log("hello" && "world");
console.log("hello" && 0);
console.log(0 && "world");
console.log(0 && null);

console.log("hello" || "world");
console.log("hello" || 0);
console.log(0 || "world");
console.log(0 || null);

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

function serveTea(){
    console.log("Boil water");
    console.log("add tea Leaves");
    console.log("Add milk");
    console.log("Add sugar");
    console.log("tea is served");
}

serveTea();
              //parameter
function greet(name){
    return `Hello ${name}`
}
                  //arg
const msg = greet("Zareel");
console.log(msg);

function add(a, b){
    return a+b;
}

const result = add(123,4320);
console.log(result);



const multiply = function(a,b){
    return a*b;
}

console.log(multiply(1234,678));

//Object 

// collection of key value pairs

const obj = {
    name: "Anil",
    age: 23,
    phone: 234567890,
    email: "coolanil@gmail.com",
    hasLicense: false,
    hobbies: ["dance", "sing"],
    address: {
        street: 56,
        "house no": 123,
        city: "Delhi",
        country: "India"
    },
    sayHi: function(){
        console.log("Anil says hi");
    }
}

console.log(obj.name);
console.log(obj.hobbies[1]);
console.log(obj.address.country);
obj.sayHi();


delete obj.email;
console.log(obj.email); //ud

for(const key in obj){
    //bracket notaton -> resolve a variable 
    console.log(key, obj[key]);
    
}

obj[key] -> obj["name"] -> 