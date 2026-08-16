function count(num){
    if(num==5){
        return;
    }
    console.log(num);
    count(num + 1)
}

count(1)