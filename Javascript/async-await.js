async function fetchData(){
    return "hello"; // return Promise.resolve("hello");
    // throw new Error("bye bye"); // return Promise.reject("bye bye");
    //return; //return Promise.resolve("");

    // return new Promise(function(resolve, reject){
    //     setTimeout(function(){
    //         resolve("world");
    //     }, 0);
    // })
}

const result = fetchData();
console.log(result);

// fetchData()
// .then(function(val){
//     console.log(val);
// })
// .catch(function(err){
//     console.log(err);
    
// })

// async function greet(){
//     console.log("how are you ?");
//     await fetchData(); // execution stops and waits for this promise to be settled
//     console.log("i am good");
// }

// console.log("before greet");
// greet();
// console.log("after greet");


const p1 = new Promise(function (resolve) {
    setTimeout(function () { resolve("First done"); }, 3000);
  });
  
  const p2 = new Promise(function (resolve) {
    setTimeout(function () { resolve("Second done"); }, 1000);
  });
  
  async function test() {
    console.log("Start");
    const val1 = await p1;
    console.log(val1);
    const val2 = await p2;
    console.log(val2);
    console.log("End");
  }
  
  test();


  async function foo() {
    console.log("1");
    await Promise.resolve();
    console.log("2");
  }
  foo();
  console.log("3");