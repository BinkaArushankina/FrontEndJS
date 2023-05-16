let a = 555; // number
let b = '' + a;  //b stala string
a.toString(); //a stala string
let c = +a;  // a stala number
a = '333';  //string
console.log(a.length);  //method length tolko u string

//Number : 10, -5, 3.14;
//String : 'hello', 'world', '123';
//Boolean : true, false;
//undefined : let a; a is undefined;
//Null : let b = null;

//+ - * / % **w stepenj 
console.log(2**3);  // 2 w 3 stepeni = 8
console.log(Math.pow(2, 3));  // 2 w 3 stepeni = 8

console.log(typeof 1);  //number
console.log(typeof 'hello');  //string
console.log(typeof true);  //boolean
console.log(typeof undefined); //undefined
console.log(typeof null);  //object

console.log(1 == '1'); // true (non-strict equality)
console.log(1 === '1'); // false (strict equality)
console.log(1 != '2'); // true (non-strict equality)
console.log(1 !== '2'); // true (strict equality)
console.log(5 > 3); // true 
console.log(3 <= 3); // true 

console.log(1 + '2'); // '12' (number is coerced to a string)
console.log('3' * '4'); // 12 (string are coerced to a numbers) umnoschenie tolko s ziframi poetomu on ich casting w int automatitscheski
console.log('3fg' * '4'); // NaN (Not a Number) //ti menja sastawljaesch delatj sloschenie tschisel s ne tschislami
console.log(2 == '2'); // true (number is coerced to a comparation)

let arr = [1, 2, 3];
let names = ['Alice', 'Bob', 'Charlie'];
let mixed = [11, 'two', false, null, undefined, 
{userName: 'Semen', age: 28, toString:'My name is ' + this.userName + ", I'm " + this.age + ' years old' }, NaN];
console.log(mixed[5].toString);



