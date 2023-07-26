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