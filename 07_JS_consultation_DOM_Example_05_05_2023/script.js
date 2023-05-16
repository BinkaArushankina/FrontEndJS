
const title = document.getElementById('title');
let flag;

function changeTitle() { //beskonetscno naschimanie i title budet menatsa
    const clicked = 'You clicked button';
    const unClicked = 'Welcome to my page';
    //title.textContent = 'You clicked button';

    if (flag) {
        title.textContent = clicked;
        flag = false;
    } else {
        title.textContent = unClicked;
        flag = true;
    }

}

function changeMessage() {
    const message = document.getElementsByClassName('message')[0]; //dostuo k failu a imenno k nulewomu
    message.textContent = 'new message';
}

const images = [
    "./Images/Rouen_Cathedral_1.jpg",
    "./Images/Rouen_Cathedral_2.jpg",
    "./Images/Rouen_Cathedral_3.jpg",
    "./Images/Rouen_Cathedral_4.jpg",
    "./Images/Rouen_Cathedral_5.jpg",
    "./Images/Rouen_Cathedral_6.jpg"
];

const btnPrev = document.getElementById('buttonPrev');
const pictures = document.getElementById('pictures');
const btnNext = document.getElementById('buttonNext');

btnPrev.onclick = prevHandler;
btnNext.onclick = nextHandler;
let index = 0;

function prevHandler() {
    index--;
    if( index<0) {
        index = images.length - 1;
    }
    pictures.src = images[index];
}

function nextHandler() {
    index++;
    if( index === images.length) {
        index = 0;
    }
    pictures.src = images[index];

}

const button = document.getElementById('button');

button.onclick = showHandler;

function showHandler() {
    const p1 = document.createElement('p');
    const name1 = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const text1 = `Name : ${name1}, lastName : ${lastName}`;
    //p1.appendChild(text1);
    p1.textContent = text1;
    document.body.appendChild(p1);
}