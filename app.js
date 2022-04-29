let products = [
  {
    name: "Carrot Oil",
    tag: "Carrot Oil",
    price: 3500,
    inCart: 0,
  },
  {
    name: "Lip Balm",
    tag: "Lip Balm",
    price: 3500,
    inCart: 0,
  },
  {
    name: "Serum",
    tag: "Serum",
    price: 3500,
    inCart: 0,
  },
  {
    name: "Mosturizing Lotion",
    tag: "Mosturizing Lotion",
    price: 5500,
    inCart: 0,
  },
];

let shoppingCart = document.querySelectorAll(".add-cart");
for (let i = 0; i < shoppingCart.length; i++) {
  shoppingCart[i].addEventListener("click", function () {
    cartNumbers(products[i]);
  });
}
function cartNumbers(product) {
  // console.log("The product clicked is", product);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart-fill-badge").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart-fill-badge").textContent = 1;
  }
  setItems(product);
}
function setItems(product) {
  // console.log("inside of setItems function");
  // console.log("My product is", product);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log("my cartItems are", cartItems);
  if(cartItems != null){
    cartItems[product.tag].inCart += 1;
  }
  product.inCart = 1;
  cartItems = {
    [product.tag]: product
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function onloadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart-fill-badge").textContent = productNumbers;
  }
}
onloadCartNumbers();
