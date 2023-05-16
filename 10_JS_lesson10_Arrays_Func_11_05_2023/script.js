console.log('==== regular function =====');


console.log(multiply(3, 5)); //moschno wiswatj i do functii i posle

function multiply (a, b) {
    return a*b;
}

console.log(multiply(2, 5));  //moschno wiswatj i do functii i posle



console.log('==== arrow function =====');


//console.log(multiplyArrow(4,5));  //kratkuju sapis moschno wiswatj tolko posle samoj funkzii

const multiplyArrow = (a, b)  =>  a*b; 

console.log(multiplyArrow(4,5));  //kratkuju sapis moschno wiswatj tolko posle samoj funkzii


//---------------------------------------------------------------------------------------------\\
console.log('==== arrow function() =====');


const obj = { userName: 'John', sayHello: function(){console.log(`Hello ${this.userName}`);}}

obj.sayHello();  //Hello John,   sdes on obraschaetsa k objectu  i nachodit ego username



console.log('==== arrow () =>  =====');


const objArrow = { userName: 'John', sayHello: () => {console.log(`Hello ${this.userName}`);}}

objArrow.sayHello();  //Hello undefined    hotja eto tosche samoe no () => no sdes globalnoe pole Window  global field Window, on ischet u global windoe username, a ego net i on ego sosdaet no pustim, poetomu w console undefined





const person = { firstName: 'John', lastName: 'Smith', age:34, fullName: function() {return `${this.firstName} ${this.lastName}`;}}

let arr = Object.keys(person);  //polutschitj key bes value
console.log(arr);  // ['firstName', 'lastName', 'age', 'fullName']

arr = Object.values(person);  //polutschitj values bes key
console.log(arr);  //['John', 'Smith', 34, ƒ]

arr = Object.entries(person);  //polutschitj values i key
console.log(arr[2][0]); //age     sdes obraschajus k massiwu ko 2 indexu[age, 34] i w nem k 0 indexu [age]




console.log('===== indexOF =====');


arr = ['one', 'two', 'threE', 'eight', 'tHree', 'three', 'six'];

let res = arr.indexOf('three');
console.log(arr);//ischodnij massiw ne menaetsa
console.log(res);//5 //wernul ego index, a esli takogo slowo net to wernet -1


console.log('===== includes =====');


res = arr.includes('three');
console.log(arr);//ischodnij massiw ne menaetsa
console.log(res);//true  tak ka etot elm imeetsa w massiwe, a false esli takogo net


console.log('===== findIndex =====');


res = arr.findIndex((x, i) => i>2 && x.toLowerCase() === 'three' ); //element massiwa, index elm massiwa, on najdet ego odin i sapischet i dalsche iskatj ne budet
console.log(arr);//ischodnij massiw ne menaetsa
console.log(res);//4  tak ka etot elm stoit po indexu 4 , -1 esli takogo elm net


res= arr.findIndex(predicateLength3);
console.log(res); //index 6 - six po wsem uslowiam prochodit , -1 esli takogo elm net
function predicateLength3(element, index) { //element massiwa, index elm massiwa, on najdet ego odin i sapischet i dalsche iskatj ne budet
    return index >= 2 && element.length === 3;
}


const persons = [
    {userName: 'Peter', age: 23},
    {userName: 'John', age: 28},
    {userName: 'Tigran', age: 26},
    {userName: 'Rabindranat', age: 23}
];

res = persons.findIndex((p, i) => i>0 && p.age < 25);
console.log(res); //3

res = persons.filter((p) => p.age < 25);
console.log(res); //0: {userName: 'Peter', age: 23}1: {userName: 'Rabindranat', age: 23}



console.log('===== map =====');



res = persons.map((p, i) => console.log(`${i+1}. Name: ${p.userName}, Age: ${p.age}`)) //1. Name: Peter, Age: 23 2. Name: John, Age: 28 3. Name: Tigran, Age: 26 4. Name: Rabindranat, Age: 23

res = persons.map((p, i) => `${i+1}. Name: ${p.userName}, Age: ${p.age}`)
console.log(res);//['1. Name: Peter, Age: 23', '2. Name: John, Age: 28', '3. Name: Tigran, Age: 26', '4. Name: Rabindranat, Age: 23']



console.log('===== reduce =====');


res = persons.reduce((accum, item) => accum + item.age, 0); //accum kak count, dobawl age persons w accum kak sum
console.log(res); //100  number



console.log('===== sort =====');


res = persons.sort((a, b) => a.age - b.age === 0 ? b.userName.length - a.userName.length : a.age - b.age)  //no esli wosrast odinakowij, to otsotiruj po dline imeni, tot kto dlinnee perwim
console.log(res); //otsortiruet po wosrastu



