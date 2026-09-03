async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
        const userDiv = document.getElementById('users');
         data.forEach((user) => {
            const usercard = document.createElement('div');

            usercard.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>${user.address.city}</p>
            <hr>
            `
            userDiv.appendChild(usercard);
        })
    } catch (err) {
        console.log(err);
    }
}
fetchUsers()