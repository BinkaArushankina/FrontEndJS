const baseUrl = 'https://jsonplaceholder.typicode.com/';
const userList = document.getElementById('userList'); 
const userList2 = document.getElementById('userList2');    
const userDetailsDiv = document.getElementById('userDetails');    
const searchInput = document.getElementById('searchInput');  
const users = [];

userList.classList.add('userList');
userList2.classList.add('userList2');

async function fetchUsers () { 
    try {
        const response = await fetch(`${baseUrl}users`);
        const users = response.json();
        let filteredUsers = users;

        searchInput.addEventListener('input', () => { 
            const searchTerm = searchInput.value.toLowerCase();
            filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
        });
        return filteredUsers;

    } catch (error) {
        console.log('Error fetching users: ', error);
    }
}


async function displayUsers(users) { 
    const users = await fetchUsers(); 
    
    users.forEach(user => {
        userDetailsDiv.innerHTML = '';

        const nameHeading = document.createElement('h2');
        nameHeading.innerText = user.name; 

        const nickName = document.createElement('p');
        const strong = document.createElement('strong');
        strong.innerText = 'Username: '; 
        nickName.append(strong, user.username);
    
        const email = document.createElement('p');
        email.innerHTML = `<strong>Email:</strong> ${user.email}`; 

        const phone = document.createElement('p');
        phone.innerHTML = `<strong>Phone:</strong> ${user.phone}`; 
    
        userDetailsDiv.append(nameHeading, nickName, email, phone);
        userDetailsDiv.classList.add('userDetailsDiv');
    })
}




