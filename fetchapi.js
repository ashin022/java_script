fetch(URL,Options)
// .then(res=>console.log(res))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
//     // console.log(data[0].name);
//     data.forEach((user) => {
//         console.log(user.name);
//     });
// });


async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    
    } catch (err) {
        console.log(err);
    }
}
fetchUsers()