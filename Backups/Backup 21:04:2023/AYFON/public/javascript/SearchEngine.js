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