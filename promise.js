// let mypromise = new Promise((resolve,rejected)=>{
//     let success = false
//     setTimeout(()=>{
//         if(success){
//             resolve("success")
//         }else{
//             rejected("rejected")
//         }
//     },1000)
// })

// mypromise.then(result=>console.log(result))
// .catch(err=>console.log(err))


//promise chaining

Promise.resolve(10)
.then(num => {
    return num *2
})
.then(num => {
    return num * 3
})
.then(result => {
    console.log(result);
})

