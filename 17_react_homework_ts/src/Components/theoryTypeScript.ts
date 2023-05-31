// sadaem tip dannich, w daanom slutschae ne objasatelno, potomuschto primet tip snatschenia
let firstname: string = 'Danny'; // typeof firstname = string
 

let age: number | string;  // typeof age = number or string
age = 26;
age = '26';

let userName: any = "Andrew"; //sagluschka any kogda ne snaem kakoj budet tip, moschno menatj kak w js na ljuboj tip
userName = 23;
userName = false;

let direction: 'UP' | 'DOWN';  // direction = 'UP' or 'DOWN'; maschet bitj tolko stroka up ili down
direction = 'UP';
direction = 'DOWN';

let person: {  //opisanie objecta person s takimi to polami(fullname programmer) takogoto tipa string i boolean sootwetstwenno
    fullName: string,
    isProgrammer: boolean
};

person = {  //teper usche prosto sosdaem object person polnozenno (ego eksemplar)
    fullName: 'Bill Parker', //sdes mi ukasali tolko string
    isProgrammer: false // sdes tolko boolean
}

//person.age = 10;  ERROR - net key age w opisanii objecta person

//person.isProgrammer = 'Yes';  ERROR - key tolko boolean opisanii objecta person, a ne string

let ids: number[] = [];
ids.push(1);
//ids.push('2'); not a number

let option: (string | number)[];
option = [10, 'left']; //tolko string ili number

let persons = ['Delia', 'Alex'];
//persons[0] = 43; tak ne polutschitsa tolko string, eto nejawnoe tipisazia po snatscheiu elm po tomu sche indexu pri sosdanii massiwa

function circle(diam: number ): string { //diametr eto atribut funkzii , a woswraschaet string (tipizirowali atributi i to schto woswraschaet funkzia)
    return 'Circle = ' + Math.PI * diam;
}

let sayHi: (name: string) => void; //atribut tolko string i nitschego ne wosraschaet
sayHi = (name: string) => console.log('Hi ' + name); //propisali strelotschnuju funkziu
