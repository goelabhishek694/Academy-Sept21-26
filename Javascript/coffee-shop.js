function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink == "coffee") {
            resolve("Order Placed for coffee");
        } else {
            reject("Sorry, we only serve coffee !")
        }
    })
}

function processOrder(orderMessage) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(orderMessage + " -> processed and served")
        }, 2000)
    })
}

function generateBill(processedMessage) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(processedMessage + " -> bill generated (Rs. 200)")
        }, 1000);
    })
}

//promise chain way 

// placeOrder("coffee")
// .then(function(order){
//     console.log(order);
//     return processOrder(order);
// })
// .then(function(processed){
//     console.log(processed);
//     return generateBill(processed);
// })
// .then(function(bill){
//     console.log(bill);
// })
// .catch(function(err){
//     console.log(err);
// });


// async function serveCustomer() {
//     let order;
//     try {
//         let drink = "tea";
//         order = await placeOrder(drink);
//         console.log(order);
//     } catch (err) {
//         console.log("Drink selection incorrect: ", drink);
//     }

//     let processed;
//     try {
//         processed = await processOrder(order);
//         console.log(processed);
//     } catch (err) {
//         console.log(err);
        
//     }

//     let bill;
//     try {
//         bill = await generateBill(processed);
//         console.log(bill);
//     } catch (err) { //if promise is rejected, or any other error occurs , it gets caught in this catch block.
//         console.log(err);
//     } finally {
//         console.log("Thank You, visit again !");

//     }
// }

// serveCustomer()


// async function doWork() {
//     try {
//       const a = await step1(); // succeeds
//       const b = await step2(); // REJECTS
//       const c = await step3();
//       console.log("Done");
//     } catch (err) {
//       console.log("Failed:", err);
//     }
//   }

//   doWork()


function fetchUser() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("User data fetched");
      }, 2000);
    });
  }
  
  function fetchAnalytics() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        // resolve("Analytics data loaded");
        reject("error in fetching analytics")
      }, 3000);
    });
  }
  
  function fetchActivity() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("Activity summary ready");
      }, 1500);
    });
  }

  //asynchronous serial manner , where order matters

//   async function loadDashboard(){
//     try{
//         console.log("Loading Dashboard....");
//         const user = await fetchUser();
//         console.log(user);

//         const analytics = await fetchAnalytics();
//         console.log(analytics);

//         const activity = await fetchActivity();
//         console.log(activity);

//         console.log("Dashboard fully loaded !");
//     }catch(err){
//         console.log("error while loading dashboard data: ",err);
//     }
//   }

// loadDashboard()
  
// asynchronous parallel manner, order does not matter , user needs to load first

// async function loadDashboardFast(){
//     try{
//         //step 1: sequential(must happen first)
//         const user = await fetchUser();
//         console.log(user);

//         //step 2: start both promises at the same time 
//         const analyticsPromise = fetchAnalytics();
//         const activityPromise = fetchActivity();

//         //step 3: wit for both to complete
//         //i will return with their repsctive values , if both are resilved. i will return with error if anyone gets rejected. 
//         const data = await Promise.all([analyticsPromise, activityPromise]);
//         console.log(data[0]);
//         console.log(data[1]);
//         console.log("Dashboard loaded (optimized)!");

        

//     }catch(err){
//         console.log("error: ", err);
        
//     }
// }

// loadDashboardFast()



async function loadData() {
    const a =  fetchA();
    const b = fetchB();
    // return [a, b];

    return Proimise.all([a,b]);
  }

//   Show me 3 real-world examples of where async/await is used in fullstack JavaScript applications. For each example, explain what the async operation is, why it needs to be async, and whether the tasks are sequential or parallel. Keep your examples limited to concepts I know: async, await, try/catch, Promise.all.


// I am building a user profile page. I need to load: user basic info, user posts, user friends list, user notification count, and user settings. Help me figure out which of these API calls depend on each other and which are independent. Then suggest which ones should be sequential and which should use Promise.all. Do not write the code. Just give me the dependency analysis.
