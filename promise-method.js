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


async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
        const userDiv = document.getElementById('users');
         data.forEach((user) => {
            const usercard = document.createElement('div');

            usercard.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>${user.address.city}</p>
            <hr>
            `
            userDiv.appendChild(usercard);
        })
    } catch (err) {
        console.log(err);
    }
}
fetchUsers()
//  / Promise.all()  :- Returns a single Promise from a list of promises When all promises resolved

// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Both resolve, who is faster?
Promise.all([myPromise1, myPromise2]).then((x) => {
  console.log(x);
});





// Promise.allSettled() :- Returns a single Promise from a list of promises When all promises settle (either fulfilled or rejected)

// Create a Promise
const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Settle All
Promise.allSettled([myPromise3, myPromise4]).then((results) =>
  results.forEach((x) => console.log(x.status)),
);




// Promise.any() :- Returns a single Promise from a list of promises When any of the promises fulfill

// Create a Promise
const myPromise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Run when any promise fulfill
Promise.any([myPromise5, myPromise6]).then((x) => {
  console.log(x);
});


// Promise.race() :- Returns a single Promise from a list of promises When the faster promises settle (either fulfilled or rejected)

// Create a Promise
const myPromise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise8 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// When the faster promise settles
Promise.race([myPromise7, myPromise8]).then((x) => {
  console.log(x);
});