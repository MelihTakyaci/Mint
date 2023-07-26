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