function simulateAsync(name, delay, shouldFail = false) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (shouldFail) {
                reject(new Error(`${name} failed`))
            } else {
                resolve(`${name} completed in ${delay} ms`)
            }
        }, delay);
    })
}

// const result = await simulateAsync("fileRead", 1000, true);
// console.log(result);

// Promise.all([promise1, promise2, promise3])
//   .then(results => {
//     // results is an array: [result1, result2, result3]
//   })
//   .catch(error => {
//     // error is the FIRST promise that rejected
//   });


// async function demoAll_Sucess() {
//     console.log("-- Promise.all : All Suceeed");
//     console.log("Starting all operations");
//     const results = await Promise.all(
//         [simulateAsync("CPU Log", 2000), simulateAsync("Memory Log", 1000), simulateAsync("Network Log", 1500)])

//     console.log("All Done");
//     console.log(results);
// }

// demoAll_Sucess();

// async function demoAll_oneFails() {
//     console.log("-- Promise.all : All Suceeed");
//     console.log("Starting all operations");
//     const results = await Promise.all(
//         [simulateAsync("CPU Log", 2000), simulateAsync("Memory Log", 1000, true), simulateAsync("Network Log", 1500)])

//     console.log("All Done");
//     console.log(results);
// }

// demoAll_oneFails();

// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");
// const results = await Promise.all([p3, p1, p2]);
// console.log(results); //[C, A, B]


// Promise.allSettled


// async function demoAllSettled_Sucess() {
//     console.log("-- Promise.allSettled : AllSettled Suceeed");
//     console.log("Starting allSettled operations");
//     const results = await Promise.allSettled(
//         [simulateAsync("CPU Log", 2000), simulateAsync("Memory Log", 1000), simulateAsync("Network Log", 1500)])

//     console.log("All Done");
//     console.log(results);
// }

// demoAllSettled_Sucess();

// async function demoAllSettled_oneFails() {
//     console.log("-- Promise.allSettled : AllSettled Suceeed");
//     console.log("Starting allSettled operations");
//     const results = await Promise.allSettled(
//         [simulateAsync("CPU Log", 2000), simulateAsync("Memory Log", 1000, true), simulateAsync("Network Log", 1500), simulateAsync("Disk Log", 500, true)])

//     const successArr = results.filter(function(task){
//         return task.status == "fulfilled"
//     });

//     const failureArr = results.filter(function(task){
//         return task.status == "rejected"
//     });

//     console.log(successArr);
//     console.log(failureArr);

//     const retriedData = await retryMechanism(failureArr);
//     console.log(retriedData);
    
    

//     console.log("All Done");
//     console.log(results);
// }

// function retryMechanism(arr){
//     return Promise.all(arr)
// }

// demoAllSettled_oneFails();


// async function foo(){

// const results = await Promise.allSettled([
//     Promise.resolve(10),
//     Promise.reject("oops"),
//     Promise.resolve(30)
//   ]);
//   console.log(results[1])

// }

// foo()


//Promise.race -> whichever promise settles first , wins

// const res = await Promise.race(uber, ola, rapido); // whichever app's driver arrives the fastest. it does not care if the rider takes ur ride or not. 


// async function demoRace_FastestWins(){
//     console.log("--- Promise.race: Fastest Wins ---");
//     try{
//         const result = await Promise.race([
//             simulateAsync("slow server", 3000),
//             simulateAsync("medium server", 2000),
//             simulateAsync("fast server", 1000),
//         ]);
//         console.log("Winner: ", result);
//     }catch(err){
//         console.log(err);
//     }
// }

// demoRace_FastestWins()



// async function demoRace_FastestFails(){
//     console.log("--- Promise.race: Fastest Fails ---");
//     try{
//         const result = await Promise.race([
//             simulateAsync("slow server", 3000),
//             simulateAsync("medium server", 2000),
//             simulateAsync("fast server", 1000, true),
//         ]);
//         console.log("Winner: ", result);
//     }catch(err){
//         console.log(err);
//     }
// }

// demoRace_FastestFails()

// async function foo(){
// const result = await Promise.race([
//     new Promise(resolve => setTimeout(() => resolve("A"), 100)),
//     new Promise((resolve, reject) => setTimeout(() => resolve("B"), 50)),
//     new Promise(resolve => setTimeout(() => resolve("C"), 200))
//   ]);
//   console.log(result);
// }

// foo();

// Promise.any()

// async function demoAny_FastestWins(){
//     console.log("--- Promise.any: Fastest Wins ---");
//     try{
//         const result = await Promise.any([
//             simulateAsync("slow server", 3000),
//             simulateAsync("medium server", 2000),
//             simulateAsync("fast server", 1000),
//         ]);
//         console.log("Winner: ", result);
//     }catch(err){
//         console.log(err);
//     }
// }

// demoAny_FastestWins();

// async function demoAny_FastestFails(){
//     console.log("--- Promise.any: Fastest Fails ---");
//     try{
//         const result = await Promise.any([
//             simulateAsync("slow server", 3000),
//             simulateAsync("medium server", 2000),
//             simulateAsync("fast server", 1000, true),
//         ]);
//         console.log("Winner: ", result);
//     }catch(err){
//         console.log(err);
//     }
// }

// demoAny_FastestFails();

async function demoAny_AllFastestFails(){
    console.log("--- Promise.any: All Fastest Fails ---");
    try{
        const result = await Promise.any([
            simulateAsync("slow server", 3000, true),
            simulateAsync("medium server", 2000, true),
            simulateAsync("fast server", 1000, true),
        ]);
        console.log("Winner: ", result);
    }catch(err){
        console.log(err);
    }
}

demoAny_AllFastestFails();

