//const baseUrl = 'https://jsonplaceholder.typicode.com/';
const baseUrl = 'https://646b401a7d3c1cae4ce37a4c.mockapi.io/';

const usersList = document.getElementById('usersList');//polutschaem useList
const loadUsersBtn = document.getElementById('loadUsersBtn');
const title = document.getElementById('title');
const body = document.getElementById('body');
const postsList = document.getElementById('postsList');//polutschaem useList
const loadPostsBtn = document.getElementById('loadPostsBtn');
const addPostBtn = document.getElementById('addPostBtn');

loadUsersBtn.addEventListener('click', async() => { //weschaem sobitie na knopku
    const users = await fetchUsers(); //doschdatsa resultata func userow
    displayUsers(users); //i potom posle otweta u nas estj dostup k users
})

loadPostsBtn.addEventListener('click', async() => {
    const posts = await fetchPosts();
    displayPosts(posts);
})

addPostBtn.addEventListener('click', async() => {
    const posts = await createPost(postData); 
    //displayPosts(posts);
})

async function fetchUsers() { // prozess polutschenia dannich s serwera
    try {
        const response = await fetch(`${baseUrl}users`); //await dolschne doschdatsa fetcha i ne budet perechodit na 14 str poka ne polutschit otweta ot 13 //k https stroke dobawili endpoint takim obrasom users w https 
        const users = response.json(); //prisoedinaem k jsonu. 
        return users; //polutschili userow
    } catch (error) {
        console.log('Error fetching users: ', error);  //pri oschibke
    }
}

async function fetchPosts () { //prozess polutschenia dannich s serwera
    try {
        const response = await fetch(`${baseUrl}posts`); //dobawili w https endpoint posts
        const posts = response.json();
        return posts;
    } catch (error) {
        console.log('Error fetching users: ', error);
    }
}

async function createPost (postData) { //dobawitj schto to na serwer
    try {
        const response = await fetch (`${baseUrl}posts`, {  //1 method eto adress , iwtoroj method schto mi peredaem
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        const post = await response.json(); //ismenenia w json dobawlaem
        const posts = await fetchPosts();
        return post;//woswr ismenenie
    } catch (error) {
        console.log('Error fetching users: ', error);
    }
}

async function handleAddPost() {
    if (!title || !body) {
        alert('Please enter something in field title and body'); //esli pustoj
        return;
    }

    const postData = {//polutschim sam post
        title: title.value,
        body: body.value,
        id: '' + new Date().getTime()
    }

    const post = await createPost(postData);

    if (post) {
        title.value = '';
        body.value = '';
    }

    const posts = await fetchPosts(); //schdi poka wipolnitsa funkzia fetchPosts potom idi dalsche
    displayPosts(posts); //esli wipolnilas to raspetschataj s pomoschju displayPosts
}

function displayPosts(posts) { //otobraschenie dannich w konsole
    postsList.innerHTML = '';

    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<h4>${post.title}</h4>
        <p>${post.body}</p>`;
        postsList.append(li);
    });
}


function displayUsers(users) { //otobraschenie dannich w konsole
    usersList.innerHTML = '';

    users.forEach(({name, phone}) => { //beschim po naschim useram ne po wsemu massiwu a po imeni i tel
        const li = document.createElement('li'); //sosdaem list
        const phoneFormat = phone.split(' ')[0];//rasbej str po probelu i nuschen perwij elm
        li.textContent = name + '  ' + phoneFormat; //nomer + phone
        usersList.append(li); //wstawlaem w userList li s userami
    })

   /* wtoroj wariant //sochranaet otdelno wesj massiw, bolee satratnij metod

   const alt = users.map(user => {
        const phoneFormat = user.phone.split(' ')[0];
        return `<li>${user.name} ${phoneFormat}</li>`;
    }).join('');

    userList.innerHTML = alt; */
}




