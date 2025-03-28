const section = document.querySelector('#resultSection');
let result = document.createElement('p');

section.appendChild(result);

const users = {
    1: { name: 'Rafael', age: 24, tech : 'JavaScript' },
    2: { name: 'Alfredo', age: 23, tech : 'SQL' },
    3: { name: 'Guadalupe', age: 25, tech : '.Net' },
    4: { name: 'Salvador', age: 27, tech : 'C#' },
    5: { name: 'Bruno', age: 25, tech : 'Java' },
};

// simulate an API fetch
function fetchUserInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users[id];
            if (user) {
                resolve(user);
            } else {
                reject(`The user with id=${id} was not found!`); 
            }
        }, 3000);
    });
}

// handle user data
function handleUserFetch() {
    const id = parseInt(document.getElementById('id').value);

    result.textContent = 'Loading user info...';

    fetchUserInfo(id)
        .then((user) => {
            result.textContent = `User Found: Name: ${user.name}, Age: ${user.age}, Technology: ${user.tech}`;
        })
        .catch((error) => {
            result.textContent = `Error: ${error}`;
        });
}

const searchButton = document.getElementById('search');
searchButton.addEventListener('click', handleUserFetch);
