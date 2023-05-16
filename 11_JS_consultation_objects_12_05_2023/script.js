const eComStore ={  //bolschoj object magasin//massiw buduschich productow, kototie ma sachotim kupitj,//i kaschdij product magasina eto element massiwa, budet objectom
    products: [],   
    categories: [{A: 'A'}, {B: 'B'}],  //massiw buduschich kategorij kotorie ti wiberisch
    users: [], 
    addProduct(productName, price, category, quantity){ //function dobawit product
        const id = this.products.length +1; //dobawlenie kolwo producta w korsine 1 2 3 4 5 schtuk
        const product = {id, productName, price, category, quantity}; //product pushitsa w massiw
        if (id && productName && price && category && quantity) {
            this.products.push(product);
        }
        
    },
    removeProduct(id){ //function udalit product
        const index = this.products.findIndex(p => p.id == id); //esli takoj elm estj po indexu ego udalaem is korsini
        if (index !== -1) {
            this.products.splice(index, 1); //tot samij index kotorij hotim udalitj i tolko ego odin elm
        }
    },
    getProductById(id){
        return this.products.find(p => p.id === id); //po id ischem
    },
    getProductByCategory(category){
        return this.products.filter(p => p.category === category); //najti product po kategorii
    },
    addUser(nickName, email, password){ //sosdatj usera
        const id = this.users.length + 1; //dobawl kolwo userow
        const user = {id, nickName, email, password};
        this.users.push(user); //pushim account usera
        return user;
    },
    removeUser(){
        const index = this.users.findIndex(u => u.id == id); //esli takoj user estj po indexu ego account udalaem 
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    },
    getUserById(id){
        return this.users.find(u => u.id === id); //najti usera po id
    }

}
const addProduct = document.getElementById('addProduct');
const addProductList = document.getElementById('addProductList');
const addUser = document.getElementById('addUser');
const addUserList = document.getElementById('addUserList');

addProductList.addEventListener('click', (e) => {
    
    const id = e.target.previousSibling.textContent.split(',')[0].split(' ')[1];
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();//udalaem roditela
        eComStore.removeProduct(id); //udalit product is spiska po id
    }
})

addUserList.addEventListener('click', (e) => {
    
    const id = e.target.previousSibling.textContent.split(',')[0].split(' ')[1];
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();//udalaem roditela
        eComStore.removeUser(id); //udalit product is spiska po id
    }
})


addProduct.onclick = addProductHandler; // eto sobitie klick lewoj knopki mischi, dalsche idut sobitia posle clicka
addUser.onclick = addUserHandler;
addProduct.addEventListener('keydown', (e) => {
    console.log(e);
})

function addProductHandler() {
    const productName = document.getElementById('productName').value.trim();
    const price = document.getElementById('price').value.trim();
    const category = document.getElementById('category').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    const addProductList = document.getElementById('addProductList')
    addProductList.innerHTML = '';

    eComStore.addProduct(productName, price, category, quantity);

    eComStore.products.forEach(e => {
        console.log(e);
        const li = document.createElement('li');
        li.innerHTML = `<span>ID: ${e.id}, Product Name: ${e.productName}, Price: ${e.price}, Category: ${e.category}, Quantity: ${e.quantity}</span>
        <button>Delete</button>`;
        addProductList.append(li);
    });
}

function addUserHandler() {
    const nickName = document.getElementById('nickName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    addUserList.innerHTML = '';

    eComStore.addUser(nickName, email, password);

    eComStore.products.forEach(e => {
        console.log(e);
        const li = document.createElement('li');
        li.innerHTML = `<span>ID: ${e.id}, Nickname: ${e.nickName}, Email: ${e.email}, Password: ${e.password}</span>
        <button>Delete</button>`;
        addUserList.append(li);
    });
}