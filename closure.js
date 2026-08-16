function outer(){
    let name = "viki";

    function inner(){
        console.log(name);

    }
    return inner;

}
let result = outer();

result();
