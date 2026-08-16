let mymap = new Map()
mymap.set("name","anu")
mymap.set("age",21)
console.log(mymap);
console.log(mymap.get('name'));
console.log(mymap.has('name'));
console.log(mymap.size);
mymap.delete("age")
console.log(mymap);
