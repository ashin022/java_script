//array literals

// let animal =["cat","dog","tiger"]
// console.log(animal);
// console.log(animal[1]);
// animal[1]="lion"
// console.log(animal);
// console.log(animal.length);

// //array constructor
// //new array()

// let numbers = new Array(1,2,3,4,5)
// console.log(numbers);



// array iteration method

// for each....................


let animals = ["cat","dog","tiger"]
animals.forEach(function(value){
    console.log(value);
    
})


// map...............

// let number = [1,2,3,4,5,6]
// console.log(number);
// let doublenum = number.map(num => num *2)
// console.log(doublenum);

//filter.................

// let numbers = [1,2,3,4,5,6]
// let evennum = numbers.filter(num=> num%2===0)
// console.log(evennum)


// find ......................


// let numbers = [1,2,3,4,5,6]
// let firstevennum = numbers.find(num=>num%2===0)
// console.log(firstevennum);

// some..............

// let numbers = [1,3,5]
// let haseven = numbers.some(num => num%2===0)
// console.log(haseven);

// // every......................

// let numer = [2,4,6,8]
// let alleven = number.every(num => num%2===0)
// console.log(alleven);

//reduce ...............

let number = [1,2,3,4,5,6]
const sum = number.reduce((a,b)=>a+b)
console.log(sum);

const fruits = ["banana","orange","apple","mango"];
let list = fruits.toString();
console.log(list);
