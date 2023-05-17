function getFiveInSevenSec() {
    setTimeout(() => {
    return 5;
    }, 7000); //7 sec
}

let result = getFiveInSevenSec();
console.log(result); //undefined   5 wernetsa tolko tscheres 7 sec, a on daet snatschenie prjamo sejtschas, poetomu undefined tscheres 7 sec budet 5


let promise = new Promise (function (resolved, reject) {//esli wse horoscho budet rabotatj s resolved, a w protiwnom slutschae s reject
    setTimeout(() => {
        resolved(5);
    }, 7000);
});
console.log(promise);
promise.then((value) => { //esli wse horoscho resolved
    console.log(value);
})



let promise2 = new Promise (function (resolved, reject) {//esli wse horoscho budet rabotatj s resolved, a w protiwnom slutschae s reject
    setTimeout(() => {
        reject(new Error('Error, nothing come back'));
    }, 7000);
})
promise2
.then((data) => { //esli wse plocho to sajdet w reject i raspetschtaet error
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

let url = fetch('https://cataas.com/api/cats')
.then((value) => value.json())
.then((data) => console.log(data[0]));