console.log('Hello World');
let x;
console.log(x); //ne opredelena undefined
x = 7;
x = 'bye';
console.log(x);

const pi = 3.1415926;
//pi = 3.14; eto oschibka

let y = x;
console.log(y);

console.log('pi = '+ pi);

const exp = pi;
console.log(`exp = ${exp} or ${pi}`);

x = true;
console.log(x);

x = null;
console.log(x);

let res = 7 % 2; // ostatok ot delenia 7 na 2
console.log(`res = ${res}`);

res = 'true' + 5;
console.log(`res = ${res}`);  // true 5 

res = true + 5; // false - 0   true - 1
console.log(`res = ${res}`); // 6

x = 2 === '2';
console.log(`x = ${x}`);  //false

x = 2 === 2;
console.log(`x = ${x}`);  //true

res = +'5'; //number 5
res = 5 + ''; //string 5

switch (res) {
    case 5:
        console.log(`number: ${res}`);
        break;
    case '5':
        console.log(`string: ${res}`);
        break;
    default:
        console.log('Not a 5');      
}

let age = 17;
let vol = age > 17 ? 42 : 1.5;
console.log(`vol = ${vol}`);  //1.5

console.log(+pi.toFixed(2));  //3.14  number  bes + budet stroka

res = -age;
console.log(res); //-17

++age;  //wnatschale pribawlaem a satem ispolsuem snatschenie age
age++;  // snatschala ispolsuem snatschenie age a satem pribawlaem

x = 10;
res = x++ + ++x;  //10 + 1 + 1 + 10;

console.log(typeof age); // number

age = '5';
console.log(typeof age); //string

age = true;
console.log(typeof age);  //boolean

age = undefined;
console.log(typeof age); // undefined

age = null;
console.log(typeof age); //object

x = 10;
y = 5;

res = add(x, y);
console.log(`res = ${res}`);

function add(a, b) {
    return a+b;
}

x = !!x;  //10 = ne ne 10 - nejawnoe priwidenie peremennoj k boolean snatscheniu
console.log(x);  //true  -  ljuboe tschislo budet true krome 0(false)

let example = 'hello';
console.log(!!example);  //true, stroku w boolean , tolko pustaja str budet dawatj false

//number  -  false = null, undefined, NaN, 0, -0, false, '';
//5*'a';  //NaN  - not a number

let userName = null;
let nickName = userName || 'Anonymous';
console.log(nickName);

greeting();                  //Anonymous  
greeting('Rabindranat');     //Rabindranat

function greeting(nickName1 = 'Anonymous') {
   // nickName1 = nickName1 || 'Anonymous';
    console.log(`Hello + ${nickName1}`);
}

//int[] arr = new int[5];
//int [] arr {2,3,4,5};

const arr = [1,2,3,'four', 'five', true];
console.log(typeof arr);
console.log(arr[3]);
console.log(typeof arr[3]);
arr[3] = 4;
console.log(arr[3]);
console.log(arr.length);
arr[10] = 100500;
console.log(arr[10]);
//7,8,9 undefined
console.log(arr);
printArray(arr); //wse elem massiwa raspetschatatj
console.log(arr[9]); //undefined
arr.length = 3;
console.log(arr); //(3) 1,2,3

function printArray(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
}

//Homework
//1)

res = sumDigits(1234);
console.log(`res = ${res}`); //res = 10

console.log(sumDigits(12345)); // 15

//('' + x).split('')  esli w rasdelitela ne ukasatj to on budet prosto delitj kaschdij char
//charAt()
//1234 % 10 = 4
//(1234 - 4)  / 10
//123
function sumDigits(x){
    let sum = 0;
    while (x) {
        sum += x % 10;
        x = ( x - x % 10 ) / 10
    }
    return sum;


    //let sum=0;
    //let str = '' + x;
    //for(let i =0; i<str.length; i++){
    //    sum += +str[i];
    //}
    //return sum;


    //let arr = ('' + x).split('');
    //let sum = 0;
    //for (let i = 0; i < arr.length; i++) {
    //    sum += arr[i];
    //}
    //return sum;
}


//2)
res = luckyNumber(1234321); 
console.log(res ? 'Lucky' : 'Unlucky'); //Lucky

function luckyNumber(x){
    if(typeof +x !== 'number' || x < 100) return false;
    const str = (''+x);
    const mid = Math.floor(str.length/2);
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < mid; i++) {
        leftSum += +str[i];
        rightSum += +str[str.length -i -1]; //to sche samoe kak i left no s sadi, kak pusirkowaja sortirowka, beschit ne po wsej dline a wsegda -1 mensche tschem w prediduschem zikle
    } 
    return leftSum === rightSum;

    /*
    if(typeof +x !== 'number' || x < 100) return false; //prowerka na to schtobi on bil int i mensche 100
    const numberLength = ('' + x).length; 
    //const mid = numberLength % 2 === 0 ? numberLength : (numberLength-1)/2;  //even true  odd false
    const mid = Math.floor(numberLength/2);  //korotkaja sapis prediduschej stroki
    const substr1 = ('' + x).substring(0, mid); //0,1,2
    //const substr2 = numberLength % 2 === 0 ? ('' + x).substring(mid) : ('' + x).substring(mid + 1); //3,4,5, no esli stroka netschetnaja schtobi on wsal poslednie tri zifri
    const substr2 = ('' + x).substring(numberLength - mid);  //korotkaja sapis prediduschej stroki
    return sumDigits(+substr1) === sumDigits(+substr2); 
    */
}


//3)
console.log(banana()); //banana

function banana(){
    let a = 'a';
    let b = 'b';
    return (b + a + (a*b) + a).toLowerCase();
}


//pusirkowaja sortirowka

let arr5 = [1,2,3,6,5,4];

    let counterI = 0;
    let counterJ = 0;

function bubbleSort(arr) {
    
    for (let i = 0; i < arr.length -1; i++) {
        counterI++;
        for (let j = 0; j < arr.length -1 -i; j++) { //beschatj na i mensche tschem length-1
            counterJ++;
           if (arr[j] - arr[j + 1] > 0) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
           }
        }
        
    }
}
bubbleSort(arr5);
console.log(arr5, counterI, counterJ);






