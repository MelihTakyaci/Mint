//Nav Bar Stabilizasyon
window.addEventListener("scroll" , function(){
    var nav = this.document.querySelector('header')
    nav.classList.toggle('sticky' , window.scrollY > 0);
})

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


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let total1 = document.querySelector('.total1');
let quantity = document.querySelector('.bildirim');
let tote = document.querySelector('.tote'); //<i>
let cartli = document.querySelector('.cartli')
let sec = document.querySelector('section')

openShopping.addEventListener('click', ()=>{
    body.classList.toggle('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'HypherX Headphones',
        he1: 'HypherX',
        explain: 'Gaming Headphone',
        explain1: '68,8mm x 53,4mm',
        image: 'hypherx.png',
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
        image: 'baesushub.png',
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
        image: 'ama-.png',
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
        image: 'dellmodern.png',
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
        image: 'usbhub.png',
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
        image: 'steelseries.png',
        price: 35,
        sup: '00',
        fiyat: 35,
        catagory: 'gaming',
        stok:2
    },
    
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
            <p>${value.he1}</p>
            <li class="ozel">${value.explain}</li>
            <!--<li class="ozel">Stock:${value.stok}</li>-->
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
            <div >
            <span class="cross top"></span>
            <span class="cross bot"></span>
            </div>
            <img src="image/${value.image}">
            <h3>${value.name}</h3>
            <ul>
            <p>${value.he1}</p>
            <li>${value.explain}</li>
            <li>${value.explain1}</li>
            </ul>
            <h4>${value.price.toLocaleString()}<sup>${value.sup}</sup><i class="fa fa-euro"></i></h6>
            <button class="buton" onclick="addToCard(${key})"><a>Add To Card</a></button>`
            sec.appendChild(popupu)
        }
    })
}
//Card Math
function addToCard(key){
    if( products[key].stok == 0 ){
        listCards[key].quantity = 0
    }
    else if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }

    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.fiyat;
        count = count + value.quantity;
        lim = value.stok
         if(value != null){
            let newDiv = document.createElement('li');
            newDiv.classList.add('cartli');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.fiyat.toLocaleString()} <i class="fa fa-euro" class="tote"></i></div>
                <div class="MikPan">
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1}),${value.stok}">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    total1.innerText = totalPrice.toLocaleString()
    quantity.innerText = count;
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
//Search Engine
const search = () =>{
    const search_box = document.getElementById("kerkoEntry").value.toUpperCase();
    const store = document.getElementsByClassName(".list")
    const product = document.querySelectorAll(".item")
    const pname = document.getElementsByTagName("h3")
    const rname = document.getElementsByTagName("p")
    const tname = document.getElementsByTagName("li")

    for(var i=0; i < pname.length; i++){
        for(var e=0; e<rname.length; e++){
            for(var j=0; j<tname.length; j++){
        let match = product[i].getElementsByTagName('h3')[0];
        let match1 = product[i].getElementsByTagName('p')[0];
        let match2 = product[i].getElementsByTagName('li')[0];
        if(match) {
           let textvalue = match.textContent || match.innerHTML

           if (textvalue.toUpperCase().indexOf(search_box) > -1){
                product[i].style.display = "block";
           }
           else if(match1) {
            let textvalue1 = match1.textContent || match1.innerHTML
            if (textvalue1.toUpperCase().indexOf(search_box) > -1){
                product[i].style.display = "block";           
            }else if(match2){
                let textvalue2 = match2.textContent || match2.innerHTML
                if (textvalue2.toUpperCase().indexOf(search_box) > -1){
                    product[i].style.display = "block";  
                }else{
                product[i].style.display = "none";
                }
            }
        }
        }
    }}
}};
//Arama Motoru Mobile
            const searchm = () =>{
                const search_box = document.getElementById("kerkoEntrym").value.toUpperCase();
                const store = document.getElementsByClassName(".list")
                const product = document.querySelectorAll(".item")
                const pname = document.getElementsByTagName("h3")
                const rname = document.getElementsByTagName("p")

            
                for(var i=0; i < pname.length; i++){
                    for(var i=0; i<rname.length; i++){
                    let match = product[i].getElementsByTagName('h3')[0];
                    let match1 = product[i].getElementsByTagName('p')[0];
                    
                    if(match) {
                       let textvalue = match.textContent || match.innerHTML
            
                       if (textvalue.toUpperCase().indexOf(search_box) > -1){
                            product[i].style.display = "";
                       }else if(match1) {
                        let textvalue1 = match1.textContent || match1.innerHTML
                        if (textvalue1.toUpperCase().indexOf(search_box) > -1){
                            product[i].style.display = "";           
                        }
                       else{
                        product[i].style.display = "none";
                       }
                    }
                }
                }
            }};
// Buton Active
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let dug = document.querySelectorAll(".button-deger");
    dug.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        dug.classList.add("lao");
      } else {
        dug.classList.remove("lao");
      }
    });

    let elements = document.querySelectorAll(".item");
//loop through all cards
    elements.forEach((element) => {
  //display all cards on 'all' button click
    if (value == "all") {
    // element.classList.remove("hide");
    element.style.display = "block"
    } else {
    if (element.classList.contains(value)) {
    //   element.classList.remove("hide");
        element.style.display = "block"
    } else {
      //hide for antother elements
    //   element.classList.add("hide");
        element.style.display = "none";
    }
  }
});
}
//Yukleme
window.onload = () => {
    filterProduct("all");
  };

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
