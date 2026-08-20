//array destructuring

const arr = [10,20,30,40]
console.log(arr);
console.log(arr[1]);

// let [a,b,c,d] = arr
// console.log(b);

// let [a,b,c,d,x=50] = arr
// console.log(b);

let arr1 = [10,20,30]
let [a,,c]= arr1


// object destructure

let obj = {name:"abhii",age:20}

console.log(obj.age);


let {name,age,ph=116849684}=obj
console.log(ph);
