const library = [];
let inputDate = prompt('Enter book data saparate by  ";"');
//console.log(inputDate); //schto tschelowek wwedet na sajte pojawitsa w console

while (inputDate) { //probel i cancel eto false, a ostalnoe true
    /*
    let count = 0;
    for (let i = 0; i < inputDate.length; i++) {
        if (inputDate[i] === ';') {
            count++;
        }
        if (count > 3) {
            console.log('Date is not valid');
            return;
        } 
    }
    if (count !== 3) {
        return;
    }
    */
   
   const [isbn, title, author, year] = inputDate.split(';')
    if (inputDate.split(';').length === 4 && isbn && title && author && year && findBook(library, isbn) === -1) {
        const book = new Book(isbn, title, author, year);
        library.push(book);
    }
    inputDate = prompt('Enter book data separate by  ";"');
}




printLibrary(library);

 


function printLibrary(library) {
    console.log(library);
    for (let i = 0; i < library.length; i++) {
        console.log(library[i].toString()); //kaschdaja kniga budet raspetschatana tscheres toString w konstruktore w funktion Book
    }
}

function findBook(library, isbn){
   for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;  //esli takaja kniga estj to wernetsa eo isbn
        }
   }
   return -1;  //esli takoj knigi net to -1
}



function Book (isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function() {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}