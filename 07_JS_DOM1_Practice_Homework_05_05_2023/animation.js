
//1)
const t = setInterval(move, 20); //sapustitj fnk move kaschdie 20 mlsek
let pos = 0;
let flag = false;
const box = document.getElementById('box');

//clearInterval(t); // ostanowitj setInterval esli ne nuschno schtobi beskonetschno krutilas
function move(){
    if(pos === 0 || pos === 150) { 
        flag = !flag;     
    }

    flag ? pos++ : pos--;

    //ili

    //if(pos === 0){
    //    flag = true;
    //}
    //if(pos === 150) {
    //    flag = false;
    //}
       

    //if(flag) {
    //    pos++; 
    //} else {
    //    pos--;
    //}

    box.style.left = pos + 'px';
    box.style.top = pos + 'px'; 
    
}

/*
let dir = 1;
function move() {
    pos += dir;  //pos = pos + dir;
    if (pos === 150){
        dir= -1;
    }
    if(pos === 0){
        dir = 1;
    }

    //if (pos === 0 || pos === 150) {
    //    dir*= -1; dir = dir * -1;
    //}
    box.style.left = pos + 'px';
    box.style.top = pos + 'px'; 
}
*/


//_________________________________________________________________________________________\\

//2)
console.log(new Date()); //kak otobrasitj datu
setInterval (printTime, 1000); //kaschduju sek obnowl wrema
//*TODO dopisatj functiu printTime(), schtobi ona wiwodila na ekran aktualnoe wrema.
function printTime() {
    const d = new Date();
    const h = d.getHours() > 9 ? d.getHours() : +('0'+ d.getHours());
    const m = d.getMinutes() > 9 ? d.getMinutes() : +('0'+ d.getMinutes());
    const s = d.getSeconds() > 9 ? d.getSeconds() : +('0'+ d.getSeconds());
    const time = `${h} : ${m} : ${s}`;

    const timeBox = document.getElementById('time');
    timeBox.innerText = time;
}


//wtoroj wariant bes ismenenij i dobawlenie time w html i css
//to nado dobawitj sdes w js w fundtion pritnTime(){}
/*
const h1 = document.createElement('h1');
h1.innerText = time;
h1.style.margin = '10px auto 0';
h1.style.width = fit-content;
console.log(document.body.children)
if (document.body.children == 2) {
    document.body.children(h1);
} else {
    document.body.replaceChild(h1, document.body.lastElementChild);
}
*/


//___________________________________________________________________________________________\\




// = - priswoenie
// == - ne strogoe srawnenie (srawnenie snatschenij bes utscheta tipow dannich) ('1' == 1) true
// === - strogoe srawnenie (s utschotom tipow dannich) ('1' === 1) false

//sloschenie tschisla i stroki nasiwaetsa concatinaziej
//Resultatom budet "slipschajasa strotschka"