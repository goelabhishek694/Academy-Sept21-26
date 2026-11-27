// Write a function called convertTemp that takes two arguments: a number (the temperature) and a string (the unit, either "C" or "F"). If the unit is "C", convert the temperature to Fahrenheit. If the unit is "F", convert it to Celsius. Return a string that describes the result.

function convertTemp(temp, unit) {
  if (unit === "C") {
    const farenheit = (temp * 9) / 5 + 32;
    return `${temp} °${unit} is ${farenheit} °F`;
  } else if (unit === "F") {
    const celcius = (5 / 9) * (temp - 32);
    return `${temp} °${unit} is ${celcius} °C`;
  } else {
    return "Invalid unit. Use 'C' or 'F'.";
  }
}

console.log(convertTemp(100, "C"));
console.log(convertTemp(38, "F"));
console.log(convertTemp(0, "C"));

// Write a function called reverseWords that takes a sentence (a string) and returns a new string where each word is reversed, but the word order stays the same.

function reverseWord(str) {
  const words = str.split(" ");
  const reverseWords = [];

  for (const word of words) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    reverseWords.push(reversed);
  }

  return reverseWords.join(" ");
}

console.log(reverseWord("hello world")); // "olleh dlrow"
console.log(reverseWord("Javascript is fun")); // "olleh dlrow"

// You are given an array of student objects. Each student has a name and a score. Write a function called categorizeStudents that takes this array and returns an object with three arrays: toppers (score 80 and above), average (score 50 to 79), and belowAverage (score below 50). Each array should contain the student names (not the full objects).

// Concepts being exercised: Arrays of objects, object creation, for...of loop, conditionals (if/else if/else), dot notation, pushing to arrays, function with return.

const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 65 },
  { name: "Charlie", score: 45 },
  { name: "Diana", score: 88 },
  { name: "Eve", score: 30 },
  { name: "Frank", score: 72 },
];

console.log(categorizeStudents(students));
// Expected output:
// {
//   toppers: ["Alice", "Diana"],
//   average: ["Bob", "Frank"],
//   belowAverage: ["Charlie", "Eve"]
// }

function categorizeStudents(students) {
  const result = {
    toppers: [],
    average: [],
    belowAverage: [],
  };

  for (const student of students) {
    const name = student.name;
    const score = student.score;

    if (score >= 80) {
      result.toppers.push(name);
    } else if (score >= 50 && score < 80) {
      result.average.push(name);
    } else {
      result.belowAverage.push(name);
    }
  }

  return result;
}

// Create a mini library system. You have an array of book objects. Each book has title, author, and isAvailable (boolean). Write three functions:

// findBook(library, title) — searches for a book by title and returns the book object, or null if not found.
// borrowBook(library, title) — sets the book's isAvailable to false if it exists and is available. Returns a message string.
// returnBook(library, title) — sets the book's isAvailable to true if it exists and is currently borrowed. Returns a message string.
const library = [
  { title: "The Hobbit", author: "Tolkien", isAvailable: true },
  { title: "1984", author: "Orwell", isAvailable: true },
  { title: "Dune", author: "Herbert", isAvailable: false },
];

function findBook(library, bookName) {
  for (const book of library) {
    const title = book.title;
    
    if (title.toLowerCase() === bookName.toLowerCase()) return book;
  }
  return null;
}

function borrowBook(library, title) {
  const book = findBook(library, title);
  if (!book) {
    return `${title} not found in the library`;
  }
  if (!book.isAvailable) {
    return `${title} is already borrowed`;
  }
  book.isAvailable = false;
  return `you have borrowed ${title} `;
}

function returnBook(library, title) {
  const book = findBook(library, title);
  if (!book) {
    return `${title} not found in the library`;
  }
  if (book.isAvailable) {
    return `${title} was not borrowed`;
  }
  book.isAvailable = true;
  return `you have returned ${title} `;
}


console.log(borrowBook(library, "The Hobbit"));
console.log(borrowBook(library, "The Hobbit"));
console.log(returnBook(library, "The Hobbit"));
console.log(borrowBook(library, "Unknown Book"));

function maker(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = maker(5);
const add10 = maker(10);
console.log(add5(3));
console.log(add10(3));

// Write a function called createEncoder that takes a number (a shift value). It returns a function that takes a message string and shifts every letter forward in the alphabet by that number. Non-letter characters stay the same. For simplicity, handle only lowercase letters and wrap around (so z shifted by 1 becomes a).

// const encode3 = createEncoder(3);
// console.log(encode3("hello"));     // "khoor"
// console.log(encode3("xyz"));       // "abc"

// const encode1 = createEncoder(1);
// console.log(encode1("abc"));       // "bcd"


function createEncoder(shift){
  
  return function(message){
    message = message.split(" ");
    let encodedMsg = "";
    for(const word of message){
      encodedMsg = encodedMsg+ " " +encode(word);
    }
    return encodedMsg;
  }

  function encode(message){
    message = message.toLowerCase();
    let encodedStr = "";
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<message.length;i++){
      const char = message[i];
      const index = alphabets.indexOf(char);
      if(index==-1) return `Only alphabets are allowed`
      const shiftedIdx = (index+3)%26;
      encodedStr += alphabets[shiftedIdx];
    }
    return encodedStr;
  }
}

const encoder3 = createEncoder(3);
const encodedStr = encoder3("Hello World");
console.log(encodedStr);


//instead of using alphabets astr, we can use ascii itself . fromCharCode() , charCodeAt()
// we need to solve this for strings and not just words . 


// Write a function called limitCalls that takes two arguments: a function fn and a number maxCalls. It returns a new function that works just like fn, but only for the first maxCalls invocations. After that, it returns the string "Call limit reached".

// function sayHello(name) {
//   return `Hello, ${name}!`;
// }

// const limitedHello = limitCalls(sayHello, 3);
// console.log(limitedHello("Alice"));   // "Hello, Alice!"
// console.log(limitedHello("Bob"));     // "Hello, Bob!"
// console.log(limitedHello("Charlie")); // "Hello, Charlie!"
// console.log(limitedHello("Diana"));   // "Call limit reached"
// console.log(limitedHello("Eve"));     // "Call limit reached"


// Problem Statement:

// Build a To-Do List Manager using a closure-based module pattern. Create a function called createTodoManager that returns an object with these methods:

// addTask(title) — adds a task with a unique ID, the given title, and completed: false.
// completeTask(id) — marks a task as completed.
// removeTask(id) — removes a task by ID.
// getTasks() — returns all tasks.
// getPending() — returns only tasks that are not completed.
// getCompleted() — returns only completed tasks.
// The internal task array and the ID counter should NOT be accessible from outside. They should be private, enclosed in the closure.

const myTodos = createTodoManager();

myTodos.addTask("Learn closures");
myTodos.addTask("Build a project");
myTodos.addTask("Push to GitHub");

console.log(myTodos.getTasks());
// [
//   { id: 1, title: "Learn closures", completed: false },
//   { id: 2, title: "Build a project", completed: false },
//   { id: 3, title: "Push to GitHub", completed: false }
// ]

myTodos.completeTask(1);
console.log(myTodos.getCompleted());
// [ { id: 1, title: "Learn closures", completed: true } ]

console.log(myTodos.getPending());
// [
//   { id: 2, title: "Build a project", completed: false },
//   { id: 3, title: "Push to GitHub", completed: false }
// ]

myTodos.removeTask(2);
console.log(myTodos.getTasks());
// [
//   { id: 1, title: "Learn closures", completed: true },
//   { id: 3, title: "Push to GitHub", completed: false }
// ]
