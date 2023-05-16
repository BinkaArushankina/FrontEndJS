const arr = [1, 2, 3, 'four', 'five'];
console.log(typeof arr);//object

console.log('===== push =====');

let res = arr.push(6, 7, 8);//push on dobawlaet w konez massiwa arr 6,7,8
console.log(arr);//arr = 1,2,3,4,5,6,7,8
console.log(res);//res = 8 - push woswraschaet nowuju dlinu massiwa 8;

console.log('===== pop =====');

res = arr.pop(); //pop udlaet s konza massiw awtomatitscheski element
console.log(arr); //1,2,3,4,5,6,7
console.log(res);// res = 8 woswraschaet udalennij element

console.log('===== shift =====');

res = arr.shift(); //shift udlaet s natschala massiwa awtomatitscheski element
console.log(arr); //2,3,4,5,6,7
console.log(res); //res = 1 woswraschaet udalennij element

console.log('===== unshift =====');

res = arr.unshift(0, 1); //unshift wstawlaet elementi w natschalo massiwa
console.log(arr); //0,1,2,3,4,5,6,7
console.log(res); // res = 8 nowuju dlinu

console.log('===== concat =====');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
res = arr1.concat(arr2); //concat soedinaet 2 massiwa
console.log(arr1); //1,2,3
console.log(arr2); //4,5,6
console.log(res);  //[1,2,3,4,5,6] - woswraschaet  nowij massiw

console.log('===== slice =====');

res = arr.slice(2, 6); //slice(start, finish) kak substring startowij wchodit a konetschnij ne wchodit, 6 ne utschitiwaetsa
console.log(arr); //0,1,2,3,4,5
console.log(res); // res = 4 nowuju dlinu 2,3,4,5

console.log('===== splice =====');

res = arr.splice(1, 4); //splice(start, countElement) s 1 elementa 4 zifri wiresani w etom slutshae posledn elm tosche utschitiwaetsa
console.log(arr); //0,5,6,7
console.log(res); //1,2,3,4 - woswraschaet wiresanie elementi

console.log('===== spread =====');

const uniteArr = [...arr1, ...arr2];  //operator spread, wso soderschimoe dwuch massiwow soedinili
console.log(arr1); //1,2,3
console.log(arr2); //4,5,6
console.log(uniteArr); //[1, 2, 3, 4, 5, 6]

let arr4 = [1, 2, 3];



let arr5 = arr4; //powerchnostnaja kopia , menaem odin massiw menaetsa wtoroj massiw arr4 arr5 ssilki na odnu jatschejku pamati
arr5[0] = 100;
console.log(arr5); //100, 2, 3
console.log(arr4); //100, 2, 3

arr5 = [...arr4]; //glubokaja kopia massiwa spread
arr5[0] = 200;  // 100 budet tolko w arr5
console.log(arr5); //200, 2, 3
console.log(arr4); //100, 2, 3


console.log('===== destructure =====');

const [id, name, family] = arr4;  //arr4=[1, 2, 3] destructure kogda nuschen ne sam massiw,a ego otdelnie elementi
console.log(id);
