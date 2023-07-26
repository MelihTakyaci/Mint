async function fetchData() {
    try {
        const response = await fetch('./json/items.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
const list = document.querySelector('.list')
async function displayData() {
    const data = await fetchData();

    if(data) {
        console.log(data)
        data.forEach( (value , key) => {
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
        });
    }
}
window.addEventListener('load', displayData);