 console.log('===== object =====');


 const parentObject = {
    userName: 'Mary',
    age: 50,
    sayHello: function() {
        console.log('Hello from parent');
    }
 }

 const childObject = Object.create(parentObject);  //sosdali rebenka s global create
 childObject.userName = 'Jane';
 childObject.sayHello = function() {
    console.log(`Hello from child, ${this.userName}`);
 }

 childObject.sayHello();



 
 console.log('===== Warenkorb =====');


 /* items: [],  item => name, price, quantity
    totalCost: 0,
    addItem
    removeItem
    updateTotalCost
 */
 const shoppingCart = {
    items: [], 
    totalCost: 0, //pole obj ismenaetsa pri dobawlenii nowogo towara
    addItem(item) {
        //for (let i = 0; i < this.items.length; i++) {
        //    return this.items[i].name === item.name ?  this.items[i] : undefined;
        //}
        const existingItem = this.items.find(e => e.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity; //esli estj towar uwelitschili quantity
        } else {
            if(item.name && item.price && item.quantity) { //schtobi ne dobawlal produkt s 0 0 0, pri entere
               this.items.push(item); //esli net towara to dobawim ego 
            }
            
        }
        this.updateTotalCoast();
    },
    removeItem(itemName) {
        const index = this.items.findIndex((i) => i.name === itemName);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
        this.updateTotalCoast();
    },
    updateTotalCoast() {
        this.totalCost = this.items.reduce((total, item) => {
           return total + item.price * item.quantity;
        }, 0); //beschim po massiwu items zenu uwelitsch na kolwo. 
    }
 }
 //shoppingCart.addItem({name: 'Milk', price: 20, quantity: 2});
 //shoppingCart.addItem({name: 'Bread', price: 13, quantity: 4});
 //shoppingCart.addItem({name: 'Beef', price: 100, quantity: 14});
 //console.log(shoppingCart.totalCost);
 //shoppingCart.removeItem('Beef');
 //console.log(shoppingCart.totalCost);

 const add = document.getElementById('add'); //ssilku na html tag 
 add.onclick = addHandler; // sobitie onclick po etomu klicku u nas rabotaet naschatie lewojmischi i soedinaetsa script s html
 //add.addEventListener('click', addHandler);// sobitie click
 //add.addEventListener('keydown', (e) => {
 //   console.log(e.target);// nawesti tab po wsem strokam do button, fokus kursora na button i kakie knopki naschmesch, budut w konsoli
 //})
 const stats = document.getElementById('stats');
 stats.onclick = statsHandler; //atribut onclick

 const productList = document.getElementById('productList');

 function addHandler() {  //schtobi dobawlalaos tscheres html na stranize, a ne tut
    shoppingCart.addItem({
        name: productName.value.trim(),
        price: +price.value.trim(),
        quantity: +quantity.value.trim() 
    });
    productList.innerHTML = '';
    shoppingCart.items.forEach(e => {//beschim po items w zikle
        const li = document.createElement('li');
        li.textContent = `Product name: ${e.name}, Product price: ${e.price}, Quantity of product: ${e.quantity}`;
        productList.append(li);
        return;
    }) 
    
    
 }
 function statsHandler() {
    if (shoppingCart.items.length) {
      //kolwo of all products, total coast of all products, quantity of all products, max price of product, min price of all products, avg of products
    const avgPrice = shoppingCart.items.reduce((total, el) => total + el.price ,0) / shoppingCart.items.length;
    const minPrice = shoppingCart.items.sort((a, b) => a.price - b.price)[0].price; //otsort i na 0 wom min stoit
    const maxPrice = shoppingCart.items.sort((a, b) => a.price - b.price)[shoppingCart.items.length-1]; ////otsort i na length-1 max stoit
    //ili tak const maxPrice = shoppingCart.items.sort((a, b) => b.price - a.price)[0].price;; //otsort naoborot i na 0 wom max stoit
    const totalQuantity = shoppingCart.items.reduce((total, el) => total + el.quantity );
    const totalCoast = shoppingCart.items.reduce((total, el) => total + el.quantity * el.price, 0 );
    const itemsQuantity = shoppingCart.items.length;  
    const statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = //true ne nol, false 0, schtobi isbawitsa ot nenschnich nolej
       ` <p>Average Price: ${avgPrice % 1 ? avgPrice.toFixed(2) : avgPrice}</p> 
        <p>Min Price: ${minPrice % 1 ? minPrice.toFixed(2) : minPrice}</p>
        <p>Max Price: ${maxPrice % 1 ? maxPrice.toFixed(2) : maxPrice}</p>
        <p>Total Quantity: ${totalQuantity}</p>
        <p>Total Coast: ${totalCoast % 1 ? totalCoast.toFixed(2) : totalCoast}</p>
        <p>Items Quantity: ${itemsQuantity}</p>`;
    }
    
 }



 console.log('===== class =====');


 class Person {
    constructor(name, age) {
        this.name = name;
        this.age = +age;
    }

    sayHello() {
        console.log('Hello');
    }
 }

 class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    sayHello() {
        super.sayHello();
        console.log('I am an employee');
    }
 }

 const john = new Employee ('John', 30, 'Software Engineer');
 console.log(john.name); //John
 console.log(john.age); //30
 console.log(john.jobTitle); //Software Engineer
 console.log(john.sayHello()); // Hello  Iam an employee
