const url = 'https://jsonplaceholder.typicode.com/users';
const userList = document.getElementById('userList'); //polutschit ssilku na userList
const userList2 = document.getElementById('userList2');    
const userDetailsDiv = document.getElementById('userDetails');    
const searchInput = document.getElementById('searchInput');  
const users = [];

userList.classList.add('userList');// kaschdij ras kogda hotim infu o polsowatele wiwesti on usinowlaet eti elm
userList2.classList.add('userList2');

//users.push(null); //ismenatj soderschimoe moschno
//users = [4];  //pereopredelatj nelsa

fetch (url) //delaem sapros po etomu adresu
    .then(res => res.json()) //podkljutschilis sapros k jsonu
    .then(users => {
        
        users.forEach(user => {
            const li = document.createElement('li'); //sosdaem spisok
            li.innerText = user.name; //wiwodim tolko imena userow
            li.addEventListener('click', () =>  displayUserDetails(user));//po kliku na tscheloweka wipolnitsa funkzia displayUserDetails
            userList.append(li); //dobawlaem imena w list li
        })
    })
    .catch(err => console.log(err));//esli wse plocho i schto to na srabotalo 
  

fetch(url)//sapros na serwer
    .then(res => res.json())
    .then(users => {
        let filteredUsers = users;
        displayUsers(filteredUsers);
            //poiskowaja stroka popularnaja operazia nado wiutschitj
        searchInput.addEventListener('input', () => { //kaschdoe ismenenie inputa polutschaem obnowlennij spisok
            const searchTerm = searchInput.value.toLowerCase();//schtobi wse schto wwodat bilo malenkim s serwera
            filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));//beschim po users i filtruem , polutschaem odnogo usera ego ima w tolowercase , includes podskaschet esli li sowpadenie w stroke s tem schto tschelowek wwodit w stroke, ( true esli = 'Hello world.includes('llo') true)
            displayUsers(filteredUsers);
        });       
})
.catch(error => {
    console.log('Error fetching user', error);
});


function displayUsers(users) {//massiw userow
        userList2.innerHTML = '';//otschischatj nasch list schtobi w stroke wwoda ne ostawalas

            users.forEach(user => {
                const li = document.createElement('li');
                li.innerText = user.name;
                li.addEventListener('click', () =>  displayUserDetails(user));//preschde tschem dobawlatj mi sapuskaem funkziu s konkretnim userom
                userList2.append(li);
            })
}

function displayUserDetails(user) {
    userDetailsDiv.innerHTML = '';//satschistitj

    const nameHeading = document.createElement('h2');//sagolowok
    nameHeading.innerText = user.name; 

    const nickName = document.createElement('p');
    const strong = document.createElement('strong');//schirnij schrift
    strong.innerText = 'Username: '; //eto tscheres innerText
    nickName.append(strong, user.username);
    
    const email = document.createElement('p');
    email.innerHTML = `<strong>Email:</strong> ${user.email}`; // a tak tscheres innerHTML

    const phone = document.createElement('p');
    phone.innerHTML = `<strong>Phone:</strong> ${user.phone}`; 
    
    userDetailsDiv.append(nameHeading, nickName, email, phone);//wnesem wse elementi usera kotorie nado raspetschatatj pri klicke
    userDetailsDiv.classList.add('userDetailsDiv');
}
