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