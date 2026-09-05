// let fruits = ["apple","banana","mango","orange"];
// console.log(fruits);


// // 1. Array length

// console.log(fruits.length);


// // // 2. Array toString()

// console.log(fruits.toString()); 

// // // 3. Array at()

// console.log( fruits.at(1)); 
// console.log( fruits.at(-1)); 

// // // 4. Array join()

// console.log(fruits.join(" - "));

// // // 5. Array pop() - removes last item

// let arr1 = [...fruits]; 
// console.log(arr1.pop()); 
// console.log(arr1);

// // 6. Array push() - adds to end

// let arr2 = [...fruits];
// console.log( arr2.push("Grapes")); 
// console.log(" After push:", arr2); 

// // 7. Array shift() - removes first item

// let arr3 = [...fruits];
// console.log(arr3.shift());

// // 8. Array unshift() - adds to start

// let arr4 = [...fruits];
// console.log(arr4.unshift("Grapes"));
// console.log(arr4);

// // 9. Array isArray()

// console.log( Array.isArray(fruits));
// console.log(Array.isArray("hello"));

// // 10. Array delete() - creates empty slot, not recommended

// let arr5 = [...fruits];
// delete arr5[1];
// console.log(arr5);

// // 11. Array concat() - join arrays


// let moreFruits = ["Grapes", "Pineapple"];
// console.log( fruits.concat(moreFruits));


// // 12. Array copyWithin() - copy part of array to another position

// let nums = [1, 2, 3, 4, 5];
// console.log( nums.copyWithin(0, 3)); 

// // 13. Array flat() - flatten nested array

// let nested = [1, 2, [3, 4], [5, [6]]];
// console.log( nested.flat()); 
// console.log( nested.flat(2));

// // 14. Array slice() - get part of array, doesn't change original

// console.log( fruits.slice(1, 3));
// console.log( fruits);


// console.log( fruits.splice(1, 3));
// // console.log( fruits);

// // 15. Array indexOf()

// console.log(fruits.indexOf("mango"));
// console.log( fruits.indexOf("grapes"));












// What is Abstraction?Abstraction = Showing only what to do, hiding how it is done.

// Abstract Class: A class you cannot create object from. It's like a blueprint.

// Abstract Method: A method with no body. Child class MUST write its body.





class Payment { pay(a) {
     throw "Implement pay" } }
class UPI extends Payment { pay(a) { 
    console.log(`₹${a} via UPI`); } }

class Card extends Payment { pay(a) { 
    console.log(`₹${a} via Card`); } }

function checkout(method, amt) { 
    method.pay(amt); }
checkout(new UPI(), 500);