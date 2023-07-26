let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.bildirim');
// let tote = document.querySelector('.tote'); //<i>
// let cartli = document.querySelector('.cartli')
let bodi = document.querySelector('body')

const nicenice = () => alert("NIFE");

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
            <button class="buton" onclick="bashko(${key})"><a>Bashko</a></button>`;
        list.appendChild(newDiv);
})
}

let conta = document.querySelector('.join')
let bashk = [];
initApp();
function bashko(key){
    if(bashk[key] == null){
        bashk[key] = products[key]
    }
    Bashko();
}
function Bashko(){
    conta.innerHTML='';
    bashk.forEach((value,key) =>{
        if(Bashko != null){
            let bashki = document.createElement('div');
            bashki.classList.add('popupb');
            bashki.innerHTML=`
            <div class="x">
            <span class="line bottom"></span>
            <span class="line top"></span>
            </div>
            <div class="box">
            <div class="inner">
            <div class="island"></div>
            </div>
            <i class="btn btn1"></i>
            <i class="btn btn2"></i>
            <i class="btn btn3"></i>
            <i class="rightbtn"></i>
            </div>
            <h3>${value.name}</h3>
            <ul>
            <p>${value.he1}</p>
            <li>${value.explain}</li>
            <li>${value.explain1}</li>
            </ul>
            <h4>${value.price.toLocaleString()}<sup>${value.sup}</sup><i class="fa fa-euro"></i></h6>
            <ul>
            <input type="text" class="input"  placeholder="Name">
            <input type="text" class="input"  placeholder="Surname">
            <input type="email" class="input" data-mask="000" placeholder="example@email.com">
            <input type="text" class="input" data-mask="+000 000 000 000" placeholder="+000 001 111 111">
            </ul>
            <button class="buton" onclick="join(${key})">Bashko</button>`
            conta.appendChild(bashki)
            let x = document.querySelector('.x')
            let katil = document.querySelector('.popupb')
            x.addEventListener("click" , () => {
            // katil.style.display = "none";
            bashki.remove();
            })
        }
    })
}




// list.addEventListener("click" , () => {
//     buysc.classList.remove("open")
// });