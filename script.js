let btn1 = document.querySelector("#first");
let btn2 = document.querySelector("#second");
let btn3 = document.querySelector("#third");
let images = document.querySelector("#prodImg")
let product = document.querySelector(".product-img");
let clr1 = document.querySelector("#red");
btn1.addEventListener("click", () => {
    images.src = "images/image3.png";
});
btn2.addEventListener("click", () => {
    images.src = "images/image2.png";
});
btn3.addEventListener("click", () => {
    images.src = "images/image1.png";
});
clr1.addEventListener("click", () => {
    product.style.backgroundColor = "red";
})