let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');

openShopping.addEventListener('click', ()=>{
    body.classList.toggle('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})