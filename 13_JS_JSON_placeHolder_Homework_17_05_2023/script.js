const url = 'https://jsonplaceholder.typicode.com/users';

fetch (url) //delaem sapros po etomu adresu
    .then(res => res.json()) //podkljutschilis sapros k jsonu
    .then(users => {
        const userList = document.getElementById('userList'); //polutschit ssilku na userList
        users.forEach(user => {
            const li = document.createElement('li'); //sosdaem spisok
            li.innerText = user.name; //wiwodim tolko imena userow
            userList.append(li); //dobawlaem imena w list li
        })
    })
    .catch(err => console.log(err));//esli wse plocho i schto to na srabotalo


const userList2 = document.getElementById('userList2');    
const userDetailsDiv = document.getElementById('userDetails');    
const searchInput = document.getElementById('searchInput');  
  

fetch(url)//sapros na serwer
    .then(res => res.json())
    .then(users => {
        let filteredUsers = users;
        displayUsers(filteredUsers);

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();//schtobi wse schto wwodat bilo malenkim s serwera
            filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));//beschim po users i filtruem , polutschaem odnogo usera ego ima w tolowercase , includes podskaschet esli li sowpadenie w stroke s tem schto tschelowek wwodit w stroke, ( true esli = 'Hello world.includes('llo') true)
            displayUsers(filteredUsers);
        })    
})
.catch(error => {
    console.log('Error fetching user', error);
});


function displayUsers(users) {//massiw userow
        userList2.innerHTML = '';//otschischatj nasch list schtobi w stroke wwoda ne ostawalas

            users.forEach(user => {
                const li = document.createElement('li');
                li.innerText = user.name;
                userList2.append(li);
            })
}

function displayUserDetails(user) {
    userDetailsDiv.innerHTML = '';//satschistitj

    const nameHeading = document.createElement('h2');//sagolowok
    nameHeading.innerText = user.name; 

    const nickName = document.createElement('p');
    nickName.innerText = `<strong>Username:</strong> ${user.username}`; 

    const email = document.createElement('p');
    email.innerText = `<strong>Email:</strong> ${user.email}`; 

    const phone = document.createElement('p');
    phone.innerText = `<strong>Phone:</strong> ${user.phone}`; 
    
}
//postawitj sluschatel sobitij schtobi raspetschtalas eta infa