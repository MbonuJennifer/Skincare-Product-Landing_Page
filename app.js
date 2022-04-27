let shoppingCart = document.querySelectorAll(".add-cart");
for (let i = 0; i < shoppingCart.length; i++) {
  shoppingCart[i].addEventListener("click", function () {
    cartNumbers();
  });
}
function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart-fill").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart-fill").textContent = 1;
  }
}
function onloadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart-fill").textContent = productNumbers;
  }
}
onloadCartNumbers();
