// const fs = require("fs");
// console.log("Before reading");
// const data = fs.readFileSync("abc.txt", "utf-8");
// console.log("file content: ", data);
// console.log("After reading");

// const fs = require("fs");
// console.log("Before reading");
// fs.readFile("abc.txt", "utf-8", function(error,data){
//     if (error) {
//         console.log("Something went wrong:", error.message);
//         return;
//     }
//     console.log("file content: ", data);
// });
// console.log("After reading");


//parallel async operation 

const { log } = require("console");
const fs = require("fs");
const arr =[];
fs.readFile("f1.txt", "utf-8", function (error, data) {
    if(error){
        console.log("error: ", error);
        return;
    }
    arr.push(data);
  console.log("File 1:", data);
});
fs.readFile("f2.txt", "utf-8", function (error, data) {
  console.log("File 2:", data);
  arr.push(data);
});
fs.readFile("f3.txt", "utf-8", function (error, data) {
  console.log("File 3:", data);
  arr.push(data);
});
console.log(arr);

console.log("All reads started");

//serial async operation

// const fs = require("fs");
// fs.readFile("f1.txt", "utf-8", function (error, data1) {
//   console.log("File 1:", data1);
//   fs.readFile("f2.txt", "utf-8", function (error, data2) {
//     console.log("File 2:", data2);
//     fs.readFile("f3.txt", "utf-8", function (error, data3) {
//       console.log("File 3:", data3);
//       console.log("All files read in order");
//     });
//   });
// });


fs.readFile("f1.txt", "utf-8", function (error, data1) {
    fs.readFile("f2.txt", "utf-8", function (error, data2) {
      fs.readFile("f3.txt", "utf-8", function (error, data3) {
        fs.readFile("f4.txt", "utf-8", function (error, data4) {
          fs.readFile("f5.txt", "utf-8", function (error, data5) {
            fs.readFile("f6.txt", "utf-8", function (error, data6) {
              // ... how far right can we go?
            });
          });
        });
      });
    });
  });