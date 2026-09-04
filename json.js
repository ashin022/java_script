// json.stringify() - converts a JavaScript object or value to a JSON string
const user = {
    name: "John Doe",
    age: 30
}

console.log(user);
const jsonString = JSON.stringify(user);
console.log(jsonString);

// json.parse() - converts a JSON string to a JavaScript object
const jsondata = '{"name":"Jane Doe","age":25}';
const userdata = JSON.parse(jsondata);
console.log(userdata);

