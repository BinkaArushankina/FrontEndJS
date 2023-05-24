const url = 'https://jsonplaceholder.typicode.com/users';
const userList = document.getElementById('userList'); 
const userList2 = document.getElementById('userList2');    
const userDetailsDiv = document.getElementById('userDetails');    
const searchInput = document.getElementById('searchInput');  
const users = [];

userList.classList.add('userList');
userList2.classList.add('userList2');

async function fetchAndDisplayUsers () { 
    try {
        const res = await fetch(url);
        const users = await res.json();

        users.forEach((user) => {
            const li = document.createElement('li');
            li.innerText = user.name;
            userList.append(li);
        })

        let filteredUsers = users;
        displayUsers(users);

        searchInput.addEventListener('input', () => { 
            const searchTerm = searchInput.value.toLowerCase();
            filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
            displayUsers(users);
        });
        return filteredUsers;

    } catch (error) {
        console.log('Error fetching users: ', error);
    }
}


async function displayUsers(users) { 
    userList2.innerHTML = '';

    users.forEach((user) => {
        const li = document.createElement('li');
        li.innerText= user.name;
        li.addEventListener('click', ())
    })
    const users = await fetchUsers(); 
    
    users.forEach(user => {
        userList2.innerHTML = '';

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
    
    fetchAndDisplayUsers(); // ili wsatj wsu funkziu w skobki i srasu sa nej() escho eti skobki
}




