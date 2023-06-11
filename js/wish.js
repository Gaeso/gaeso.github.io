const wishbtn = document.querySelector("#wishbtn");
const wishform = document.querySelector("#wish-form");
const inputPname = document.querySelector("#inputProduct");
const inputPrice = document.querySelector("#inputPrice");

let product=[]; 


function saveToDos() {
    localStorage.setItem("product", JSON.stringify(product));
}
function wishfunction(){
    timerdiv.classList.add("hidden");
    wishbtn.classList.add("hidden");
    wishform.classList.remove("hidden");
}
function wishSubmit(event) {
    event.preventDefault();
    const newProductName = inputPname.value;
    const newProductPrice = inputPrice.value;
    inputPname.value = "";
    inputPrice.value = "";

    const newPriceObj = {
        text: newProductName,
        price: newProductPrice
    };

    product.push(newPriceObj);

    saveToDos();
    
}

wishbtn.addEventListener("click", wishfunction);
wishform.addEventListener("submit", wishSubmit)
