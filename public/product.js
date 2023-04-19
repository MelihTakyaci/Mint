const search = () =>{
    const search_box = document.getElementById("kerkoEntry").value.toUpperCase();
    const store = document.getElementById("filter")
    const product = document.querySelectorAll(".product")
    const pname = document.getElementsByClassName("name")

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
           let textvalue = match.textContent || match.innerHTML

           if (textvalue.toUpperCase().indexOf(search_box) > -1){
                product[i].style.display = "";
           }
           else{
            product[i].style.display = "none";
           }
        }
    }
};
const filter = document.querySelector(".filter");
const uran = document.querySelector(".search_box")
uran.addEventListener("click" , () => {
    filter.classList.toggle("am");
});