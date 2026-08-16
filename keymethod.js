// let student = {
//     name: "Anu",
//     age: 21,
//     course: "CSE"
// };

// //keys
// console.log(Object.keys(student));

// //values
// console.log(Object.values(student));

//user greet

// let user = {
//     name: "abhi",

//     greet: function(){
//         console.log(this.name);

//     }
// };
// console.log(user.name);

// user.greet();



"use strict"
function greet(){
    console.log(this)
}
greet()