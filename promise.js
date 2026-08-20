let mypromise = new Promise((resolve,rejected)=>{
    let success = false
    setTimeout(()=>{
        if(success){
            resolve("success")
        }else{
            rejected("rejected")
        }
    },1000)
})

mypromise.then(result=>console.log(result))
.catch(err=>console.log(err))