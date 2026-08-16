let user = {name:"anu",age:21}
console.log(user);

console.log("name" in user);
console.log("email" in user);


console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("email"));

console.log(user.name);
console.log(user.email);
