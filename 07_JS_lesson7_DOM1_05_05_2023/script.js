console.log('Hello World');
console.log(5+4); //9
//console.log(document.body.innerHTML);

//document.body.innerHTML = '<h1>Hello World</h1>';

//var - peremennie
//let - peremennie
//const a = 0; - konstanta ne perepriswaewaetsa

const div1 = document.getElementById('div1');
console.log('getElementById div1',div1); 
div1.style.border = '1px solid black'; //dobawili w div1 snatchenie style border

const a = document.querySelector('#div1');
console.log('===a===');
console.log('a = ', a);  //const a imeet snatschenie id div1

const pDiv1 = document.querySelectorAll('#div1 > p');
console.log('pDiv1.length',pDiv1.length); //2

for ( let i=0; i<pDiv1.length; i++) {
    pDiv1[i].innerHTML = '<span>new text</span>';  //samenili paragrafi diva na 'new text'
    pDiv1[i].innerHTML = `<span>new text ${i+1}</span>`;  //s takimi kawitschkami obraschaemsa k peremennoj
}

const children = div1.children;
console.log(children.length);  //ssilku na wsech detej div1

for( let i=0; i<children.length; i++) {
    children[i].style.color = 'red';  //schrift detej w krasnij
}

const newP = document.createElement('p');
console.log(newP); //sosdali peremennuju paragraf on prosto estj no on ne na naschem dom derewe

const newPText = document.createTextNode('This text was created y special method');
newP.appendChild(newPText);// soedinili pustoj paragraf newP s tekctom newPText, no on ne na naschej stranize escho

div1.appendChild(newP);// div1 dobawili rebenka newP (wnizu diva1)

//div1.insertBefore(newP, div1.firstElementChild); //1 schto, 2 kuda wstawitj ; dobawili(tam gde nam nado)
                //  newP, children[1]);

const newP2 = document.createElement('p');
const newP2Text = document.createTextNode('This is a new P2 Text');
newP2.appendChild(newP2Text);
div1.replaceChild(newP2, div1.firstElementChild);

