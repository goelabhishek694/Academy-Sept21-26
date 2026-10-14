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

{
    let greet = "Hello World";
    const age = 23;
}

// console.log(greet);
// console.log(age);

{
    var hobby = "painting";
}

console.log(hobby);


//var is function scoped
// function testFn(){
//     var vegetable = "potato";
//     return;
// }

// console.log(vegetable);


let a = 10;
let b = 2/0;
let c = "hello"/2;
let d = -10.5;

console.log(a,b,c,d);

console.log(typeof NaN);
console.log(typeof Infinity);

let str1 = 'Hello'; //single quotes
let str2 = "World"; //double quotes

//template literals -> used to embed expression/variable inside a string
let str3 = `Hi, template`; //backticks

let name = "Sachin";

let str4 = `Hi ${name}`;
// expression is evaluated before logging 
console.log(str4);


//Booleans
let isEven = true;
let isOdd = false;

//Undefined -> a variables has been declared , but it is not assigned a vlue yet. it has default value i.e. undefined. 
let x;
console.log(x);

//Null
// used to represent deliberate emptiness

let y = null;

console.log(typeof null);
console.log(typeof undefined);

//symbol , bigInt -> ignore 


//refernce 

let arr = [10,20,30]; 
console.log(arr);

console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length-1]);


//objects

let person = {
    name: "Rabinson",
    age: 23,
    isWorking: true,
    hobbies: ["singing", "dancing", "coding"]
}

//dot notation
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[0]);

//bracket notation
console.log(person["name"]);


//function declaration
function serveBeverage(beverageName){
    console.log(`serving ${beverageName}`);
}

//function calling
serveBeverage("coffee");

let num1=100;
num2 = num1;
num2 = 200;
console.log(num1);
console.log(num2);


let arr1 = [10,20,30];
let arr2 = arr1;

arr2.push(40);
console.log(arr1);
console.log(arr2);

