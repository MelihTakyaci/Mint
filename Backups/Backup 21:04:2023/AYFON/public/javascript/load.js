function loadallprdcts(){
    fetch('./json/items.json').then(raw_data => raw_data.json()).then(request_response => {
        console.log(request_response);


        for (product of request_response.response){
            document.getElementById('card-con').innerHTML += `
            <div class="prdct-card">
                <div class="img" style="background-image: url('${product.mainImage}');"></div>
                <p>${product.name}</p>
                <div class="feature">
                    <p>${product.price}<i class="fa-solid fa-euro-sign"></i></p>
                    <div class="star-body">
                        <div class="star">
                        <input type="radio" name="rate" onclick="alert(5.0)">
                        <input type="radio" name="rate" onclick="alert(4.5)">
                        <input type="radio" name="rate" onclick="alert(4.0)">
                        <input type="radio" name="rate" onclick="alert(3.5)">
                        <input type="radio" name="rate" onclick="alert(3.0)">
                        <input type="radio" name="rate" onclick="alert(2.5)">
                        <input type="radio" name="rate" onclick="alert(2.0)">
                        <input type="radio" name="rate" onclick="alert(1.5)">
                        <input type="radio" name="rate" onclick="alert(1.0)">
                        <input type="radio" name="rate" onclick="alert(0.5)">
                        </div>
                        <div class="commentN">(0)</div>
                    </div>
                </div>
            </div>
            `
        }


    }).catch(error => {
        console.log(error);
        alert("Network Error");
    })
}