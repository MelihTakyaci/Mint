/* Filter Aktif //!Kaldirildi(filtersiz sistem gecis)
const filter = document.querySelector(".filter");
const uran = document.querySelector(".search_box")
const vuc = document.querySelector('.list')
const acc = document.querySelector('.acc')
uran.addEventListener("click" , () => {
    filter.classList.toggle("am");
});
vuc.addEventListener("click" , () =>{
    filter.classList.remove("am")
});
acc.addEventListener("click" , () =>{
    filter.classList.remove("am")
});*/

//Mobile Menu
const tik = document.querySelector('.mobilebar')
const yuk = document.querySelector('.mobilebarmenu')
const vuc = document.querySelector(".list")
tik.addEventListener("click" , () =>{
    yuk.classList.toggle("aq")
    tik.classList.toggle("aq")
    vuc.classList.toggle("aq")
})

let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let total1 = document.querySelector('.total1');
let quantity = document.querySelector('.bildirim');
let tote = document.querySelector('.tote'); //<i>
let cartli = document.querySelector('.cartli')
let sec = document.querySelector('section')
let products = [
    {
        id: 1,
        name: 'HypherX Headphones',
        he1: 'HypherX',
        explain: 'Gaming Headphone',
        explain1: '68,8mm x 53,4mm',
        explainlong:'lorem20',
        image: 'HyperX/hypherx.png',
        image1:'HyperX/hyper2.png',
        image2:'HyperX/hyper3.png',
        image3: 'HyperX/hyper4.png',
        price: 60,
        sup: '00',
        fiyat: 60,
        catagory: 'gaming',
        catagory1: 'accessory',
        stok:0
    },
    {
        id: 2,
        name: 'Baesus USBHub',
        he1: 'Baesus',
        explain: 'USB 3.0 Convertor',
        explain1: '1.2m 4ft',
        image: 'Baesus USB Hub/baesushub.png',
        price: 65,
        sup: '00',
        fiyat: 65,
        catagory: 'accessory',
        stok:5
    },
    {
        id: 3,
        name: 'PLA 3D Printer Filament',
        he1: 'Creality 3D',
        explain: '1KG Black',
        explain1: '1.2m 4ft',
        image: 'Black Filament/ama-.png',
        price: 20,
        sup: '00',
        fiyat: 20,
        catagory: 'creativity',
        stok:1
    },
    {
        id: 4,
        name: 'Dell Laptop',
        he1: 'Dell',
        explain: '13 inch Laptop',
        explain1: '16.4ft',
        image: 'Dell 13inch/dellmodern.png',
        price: 650,
        sup: '00',
        fiyat: 650,
        catagory: 'creativity',
        catagory1: 'gaming',
        stok:5
    },
    {
        id: 5,
        name: '6 Port USB Hub',
        he1: 'SmartGift',
        explain: 'USB 3.0 to Convertor',
        explain1: 'USB',
        image: 'Smartgiftusbhub/usbhub.png',
        price: 40,
        sup: '00',
        fiyat: 40,
        catagory: 'accessory',
        stok:2
    },
    {
        id: 6,
        name: 'SteelSeries Rival 3',
        he1: 'SteelSeries',
        explain: 'Optic Sensor Mouse',
        explain1: '8500cpi',
        image: 'steelseriesrival3/steelseries.png',
        price: 35,
        sup: '00',
        fiyat: 35,
        catagory: 'gaming',
        stok:2
    },
    {
        id: 7,
        name: 'Arduino Uno',
        he1: 'Arduino',
        explain: 'Microcontroller board',
        explain1: '',
        image: 'Arduino Uno/Arduino_Uno-remo.png',
        price: 12,
        sup: '00',
        fiyat: 12,
        catagory: 'elektronik',
        stok:2
    },
    {
    id: 8,
    name: 'Budi Type-C Cablo',
    he1: 'Budi',
    explain: 'Type-C to Type-C',
    explain1: '1.2m',
    image: 'Kablo/kablo.png',
    price: 11,
    sup: '00',
    fiyat: 11,
    catagory: 'accessory',
    stok:10
},
{
    id: 9,
    name: 'RGB LED',
    he1: 'Tasmor',
    explain: 'Waterprooof RGB Led',
    explain1: 'Led',
    image: 'Led/led.png',
    price: 20,
    sup: '00',
    fiyat: 20,
    catagory: 'accessory',
    stok:10   
}
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.classList.add(products[key].catagory , "hide" , products[key].catagory1)
        newDiv.innerHTML = `
            <img src="image/${value.image}" class="image" onclick="popup(${key})">
            <h3 class="baslik" onclick="popup(${key})">${value.name}</h3>
            <ul>
            <p onclick="popup(${key})">${value.he1}</p>
            <li class="ozel">${value.explain}</li>
            <li class="ozel">Stock:${value.stok}</li>
            </ul>
            <h6 class="fiyat">${value.price.toLocaleString()}<sup>${value.sup}</sup><i class="fa fa-euro"></i></h6>
            <button class="buton" onclick="addToCard(${key})"><a>Add To Card</a></button>`;
        list.appendChild(newDiv);
        let foto = document.querySelectorAll('.image')
})
}
let poPup = [];
initApp();
function popup(key){
    if(poPup[key] == null){
        poPup[key] = products[key]
    }
    popUp();
}
function popUp(){
    sec.innerHTML='';
    poPup.forEach((value,key) =>{
        if(popUp != null){
            let popupu = document.createElement('div');
            popupu.classList.add('popup');
            popupu.innerHTML=`
            <div class="x">
            <span class="cross top"></span>
            <span class="cross bot"></span>
            </div>
            <div class="gallery">
            <div class="smlimg">
            <img src="image/${value.image}" onclick="changefunction(this)">
            <img src="image/${value.image1}" onclick="changefunction(this)">
            <img src="image/${value.image2}" onclick="changefunction(this)">
            <img src="image/${value.image3}" onclick="changefunction(this)">
            </div>
            <div class="imgcon">
            <img id="bigimg" src="image/${value.image}">
            </div>
            </div>
            <h3>${value.name}</h3>
            <ul>
            <p>${value.he1}</p>
            <li>${value.explain}</li>
            <li>${value.explain1}</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nisi fuga, vero quasi voluptatem, fugit ea repudiandae illum, mollitia magni quis suscipit. Minus temporibus voluptates sint nostrum porro. Nemo laudantium quis delectus optio beatae illum praesentium, fugiat sapiente maiores nam, suscipit perferendis quam vero? Itaque magnam ex facere obcaecati reprehenderit?</li>
            </ul>
            <p>Stok:${value.stok}</p>
            <h4>${value.price.toLocaleString()}<sup>${value.sup}</sup><i class="fa fa-euro"></i></h6>
            <button class="buton" onclick="addToCard(${key})"><a>Add To Card</a></button>`
            sec.appendChild(popupu)
            // x for productPopup
            let closeButton = document.querySelector('.x');
            closeButton.addEventListener('click', () => {
              popupu.remove();
              delete poPup[key];
            });

        }
        


    })
}
function changefunction(smlimg){
    var fullimg = document.getElementById('bigimg');
    fullimg.src = smlimg.src
}
//Card Math
let storage = []
function addToCard(key){
    console.log(key);
    if( products[key].stok == 0 ){
        listCards[key].quantity = 0
    }
    else if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
        storage[key] = localStorage.setItem("key1" , listCards);
    }else if(storage !=  null){
        listcards[key] = storage[key]
        listCards[key].quantity = 1;
    }
    // localStorage.getItem("key" ,listCards[key])
    reloadCard();
}

function changeQuantity(key, quantity){
console.log(key, quantity);
if(quantity == 0){
    delete listCards[key];
}else if( quantity <= products[key].stok){
    listCards[key].quantity = quantity;
    listCards[key].fiyat = quantity * products[key].price;
    // localStorage.setItem("key2" , listCards[key].quantity);
    // localStorage.getItem(listCards[key].quantity)
}else if(quantity == products[key].stok){
    listCard[key].quantity = products[key].stok
    listCards[key].fiyat = products[key].stok * products[key].fiyat
}else if (products[key].stok == 0){
    listCards[key].quantity = 0
}
reloadCard();
}
// Buton Active
//parameter passed from button (Parameter same as category)


//pop up screen for buy

const buybut = document.querySelector(".buy");
const buysc = document.querySelector(".paybg")
buybut.addEventListener("click" , () => {
    buysc.classList.toggle("open");
});
// x for buy
const x = document.querySelector(".xbut");
x.addEventListener("click" , () => {
    buysc.classList.remove("open")
});
list.addEventListener("click" , () => {
    buysc.classList.remove("open")
});

   
