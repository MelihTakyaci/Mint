let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.bildirim');
// let tote = document.querySelector('.tote'); //<i>
// let cartli = document.querySelector('.cartli')

let products = [
    {
        id: 1,
        name: 'Iphone 14pro',
        he1: 'Apple',
        explain: 'SmartPhone',
        explain1: 'Moonlight purple',
        image: '14promax.png',
        price: 2,
        sup: '00',
        fiyat: 2,
        catagory: 'elektronik',
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.classList.add(products[key].catagory , "hide" , products[key].catagory1)
        newDiv.innerHTML = `
            <img src="image/${value.image}" class="image">
            <h3 class="baslik" >${value.name}</h3>
            <ul>
            <p>${value.he1}</p>
            <li class="ozel">${value.explain}</li>
            </ul>
            <h6 class="fiyat">${value.price.toLocaleString()}<sup>${value.sup}</sup><i class="fa fa-euro"></i></h6>
            <button class="buton" onclick="addToCard(${key})"><a>Bashko</a></button>`;
        list.appendChild(newDiv);
})
}

//Card Math
let birim = document.querySelector('.tote')
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}