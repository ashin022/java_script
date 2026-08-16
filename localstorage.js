function addData(){
    localStorage.setItem("name","viki")
}

function getData(){
    let data = localStorage.getItem("name")
    console.log(data);
}

function removeData(){
    localStorage.removeItem("name")
}

function clearData(){
    localStorage.clear()
}