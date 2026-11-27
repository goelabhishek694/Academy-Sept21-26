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

// async function demoAny_AllFastestFails() {
//     console.log("--- Promise.any: All Fastest Fails ---");
//     try {
//         const result = await Promise.any([
//             simulateAsync("slow server", 3000, true),
//             simulateAsync("medium server", 2000, true),
//             simulateAsync("fast server", 1000, true),
//         ]);
//         console.log("Winner: ", result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// demoAny_AllFastestFails();


// function withTimeout(promise, ms) {
//     const timeout = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject(new Error(`Operation timed out after ${ms}ms`))
//         }, ms);
//     })
//     return Promise.race([...promise, timeout])
// }

// async function demoTimeout() {
//     console.log("--- Timeout Pattern ---");

//     //Case 1: operation is fast enough
//     try {
//         const result = await withTimeout([simulateAsync("fast read", 1000), simulateAsync("med read", 1500)], 2000) //2 sec deadline
//         console.log("Case1 :", result);

//     } catch (err) {
//         console.log("Case1 error: ", err);
//     }

//     //Case 2: operation is too slow
//     try {
//         const result = await withTimeout([simulateAsync("fast read", 1000), simulateAsync("med read", 1500)], 500) //0.5 sec deadline
//         console.log("Case2 :", result);
//     } catch (err) {
//         console.log("Case2 error: ", err);
//     }
// }

// demoTimeout()



//retry mechanism


async function retry(fn, retries = 3, delay = 3000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Attempt ${attempt} ...`);
            const result = await fn();
            console.log(`Succeeded on attempt ${attempt}`);
            console.log(result);
            return result;
        } catch (err) {
            console.log(`Attempt ${attempt} failed...`);
            if (attempt == retries) {
                throw new Error(`Failed after ${retries} attempts. last error: ${err.message}`);
            }
            console.log(`Waiting for ${delay}ms before retry...`);
            await new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve("hello");
                }, delay);
            })

        }
    }
}

function createDemoFn(){
    let callCount =0;
    return function(){
        callCount++;
        if(callCount<=2){
            return simulateAsync(`Call-${callCount}`, 300, true); //fail
        }
        return simulateAsync(`Call-${callCount}`, 300); //succeed
    };
}

async function demoRetry(){
    console.log("----Retry Pattern------");
    const flakyOpn = createDemoFn();

    try{
        const result = await retry(flakyOpn, 5, 3000);
        console.log("Final result: ", result);
    }catch(err){
        console.log("Gave up: ", err.message);
    }
}

demoRetry();


//AI Prompt
// I just learned about Promise.all, Promise.allSettled, Promise.race, and Promise.any. Give me a real-world scenario and ask me which combinator to use. Do not give me the answer yet. After I answer, tell me if I am right and explain why.
