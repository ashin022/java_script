function greet(name){
    console.log(name);

}

//greet("anu")

function user(callback){
    callback("anu")

}
user(greet)


function applyoperation(x,operation){
    return operation(x)
}

function double(x){
    return x * 2;

}

console.log(applyoperation(2,double));