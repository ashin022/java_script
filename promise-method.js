let promise = new Promise((resolve, reject) => {

    let age = 20;

    if (age >= 18) {
        resolve("You can vote");
    } else {
        reject("You cannot vote");
    }

});

promise.then((message) => {
    console.log(message);
});




// let promise = new Promise((resolve, reject) => {

//     reject("Login failed");

// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });




//     let promise = Promise.resolve("Success");

// promise.then((result) => {
//     console.log(result);
// });


//  promise.reject()-it creates an already-rejected promise


// let promise = Promise.reject("Something went wrong");

// promise.catch((error) => {
//     console.log(error);
// });