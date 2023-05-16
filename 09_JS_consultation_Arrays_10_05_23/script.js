console.log('===== Destructure ====');

//is massiwa witaskiwaem infu
//posle destruktarisazii u nas usche ne massiw, a elementi kotorie nuschni

const infoFullName = ['John', 'Doe'];
const [firstName, lastName] = infoFullName; //distructurisazia : firstname stal john, lastname doe
console.log(firstName, lastName);  //John Doe

const numbers = [1, 2, 3, 4];
const [first, , , fourth] = numbers;
console.log(first, fourth);  //1 4

const book = ["1", "Theodore Dreiser", "Finansist", 1912];
const [isbn, author, title, year] = book;
console.log(isbn, author, title, year);  //1 Theodore Dreiser Finansist 1912

const[a, b, ...rest] = numbers;  // a 1  b 2   rest eto massiw is 3 i 4
console.log(a,b,rest);  //1 2  [3, 4]


console.log('===== Spread syntax =====');


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(arr1, arr2);
console.log(newArr);  //[1, 2, 3, 4, 5, 6]

arr1 = ['a', 'b', 'c'];
arr2 = [...arr1, 'd', 'e', 'f'];
console.log(arr2);  //['a', 'b', 'c', 'd', 'e', 'f']


console.log("===== Array's methods =====");


arr1 = [1, 2, 3];
let res = arr1.push(5);  // dobawlaet element w konez massiwa
console.log(arr1); //[1, 2, 3, 5]
console.log(res);  //4  woswr nowuju dlinu massiwa


res = arr1.pop(); // udalaet poslednij elm
console.log(arr1); //[1, 2, 3]
console.log(res); //5  woswr tot elm kotorij bil udalen


res = arr1.shift(); // udalaet perwij elm
console.log(arr1); //[2, 3]
console.log(res); // 1  woswr tot elm kotorij bil udalen


res = arr1.unshift(0); // dobawlaet w natschale
console.log(arr1); //[0, 2, 3]
console.log(res); // 3  woswr nowuju dlinu massiwa


//method slice moschet samenitj wse eti metodi


res = arr1.splice(1, 2, 8, 9, 10); // s 1 indexa 2 zifri udalit i dobawit 8,9,10 i stroku noschno dobawit prjam sjuda
console.log(arr1); //[0, 8, 9, 10]
console.log(res); // 2  woswr udalennie 2 i 3


res = arr1.slice(1,3); // ne ismenit ischodnij massiw,  index 1(wkljutschit) do 3(newkljutsch) wernet
console.log(arr1); //[0, 8, 9, 10]
console.log(res); // 2  woswr udalenij 8 i 9


const combArray = arr1.concat(arr2);
console.log(arr1); //[0, 8, 9, 10]
console.log(arr2); //['a', 'b', 'c', 'd', 'e', 'f' ]
console.log(combArray); //[0, 8, 9, 10, 'a', 'b', 'c', 'd', 'e', 'f']
