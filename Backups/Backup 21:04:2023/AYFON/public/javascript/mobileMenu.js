const tik = document.querySelector('.mobilebar')
const yuk = document.querySelector('.mobilebarmenu')
const vuc = document.querySelector(".list")
tik.addEventListener("click" , () =>{
    yuk.classList.toggle("aq")
    tik.classList.toggle("aq")
    vuc.classList.toggle("aq")
})