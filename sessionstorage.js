function addData(){
    sessionStorage.setItem("name","viki")
}

function getData(){
    let data = sessionStorage.getItem("name")
    console.log(data);
}

function removeData(){
    sessionStorage.removeItem("name")
}

function clearData(){
    sessionStorage.clear()
}