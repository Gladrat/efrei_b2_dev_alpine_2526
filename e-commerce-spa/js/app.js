function changePage(idPage) {
  document.querySelectorAll(".page").forEach((p) => p.classList.add("hidden"));
  document.querySelector(idPage).classList.remove("hidden");
}

window.addEventListener("hashchange", (e) => {
  changePage(location.hash);
});

document.addEventListener("DOMContentLoaded", () => {
  location.hash = "#product01"
  changePage(location.hash);
});

// function changePage(idPage) {
//   document.querySelectorAll(".page").forEach((p) => p.classList.add("hidden"));
//   document.querySelector(idPage).classList.remove("hidden");

//   if (idPage === "#product01") {
//     document.querySelector("#product01").innerHTML = `
//       <h1>Product 01</h1>
//       <button class="add" id="product_01">Add to cart</button>`;
//   } else if (idPage === "#product02") {
//     document.querySelector("#product02").innerHTML = `
//       <h1>Product 02</h1>
//       <button class="add" id="product_02">Add to cart</button>`;
//   } else if (idPage === "#cart") {
//     document.querySelector("#cart").innerHTML = `
//       <h1>Cart</h1>
//       <button class="show-cart">Show Cart</button>`;
//   }
// }   