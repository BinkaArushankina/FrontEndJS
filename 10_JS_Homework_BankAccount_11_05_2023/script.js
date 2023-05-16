//Create an object literal representing a bank account with properties for account number, 
//account holder name, and balance. Add methods for depositing and withdrawing money from the account, 
//and a method for checking the balance.
//Создайте klass объекта, представляющий банковский счет со свойствами для номера счета, 
//имени владельца счета и баланса. Добавьте способы ввода и вывода денег со счета, 
//а также способ проверки баланса.

alert('Hello world');  //modalnoe okno, fokus so wsej str na eto soobschenie, wiskakiwajuschie sms

//rabota s objectom is json

//const bankAccount = {accountNumber: '123', accountHolderName: 'Alice', balance: 1000, 
//deposit: function(amount) {
//    amount > 60000 ? alert('potdwerschdenie legalnosti dochoda') : this.balance += amount;
//},
//withdraw: function(amount) {
//    if (amount <= this.balance) {
//          this.balance -= amount;
//    } else {
//          console.log( 'not enough money on the balance')
//    }
//WOT tak lutsche
//amount <= this.balance ? (this.balance -= amount) : console.log("not enough money on the balance");
//},
//checkBalance: function() {
//    console.log(`Account balance is ${this.balance}`)
//}}

let res = Object.keys(bankAccount);
console.log(res);
const [number, userName, balance] = Object.values(bankAccount); //polutschim is json nuschnie nam weschi
console.log(res);
res = Object.entries(bankAccount);
console.log(res);

//bankAccount.checkBalance();
//bankAccount.withdraw(200);
//bankAccount.deposit(500);


//universalnij variant bes objecta, bes jsona
function BankAccount (konto, userName, balance) {
    this.konto = konto;
    this.userName = userName;
    this.balance = balance;
}

const first = new BankAccount(00001, 'John', 5000);

first.getBalance = getBalance; //tak kak eto funkzia ne w konstruktore, tonuschno ee sdes s rawno, schtobi sosdatj eto pole tak skastj w konstruktore
console.log(first.getBalance()); //5000

first.depositing = depositing;
console.log(first.depositing(200)); //5200

first.withdrawing = withdrawing;
console.log(first.withdrawing(500)); //4700

function depositing ( let ) {
    return this.balance += let;
}

function withdrawing ( let ) {
    return this.balance -= let;
}
   
function getBalance () {
    return this.balance;
}