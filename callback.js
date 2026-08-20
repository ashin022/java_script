// method

// function x(Callback){
//     console.log("x called");
//     Callback()

// }
// x(function(){
//     console.log("y called");
// })

// // 2. method..........................

// function mrng(print){
//     print()
// }

// function greet(){
//     console.log("good morng");

// }

// mrng(greet)


// call back hell ..........................


function step1(callback){
    setTimeout(() => {
        console.log("step 1 called");
        callback()
    },1000);
}

function step2(callback){
    setTimeout(() => {
        console.log("step 2 called");
        callback()
    },1000);
}

function step3(callback){
    setTimeout(() => {
        console.log("step 3 called");
        callback()
    },1000);
}


step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All steps are completed");
        })
    })
})