let cart = document.querySelector(".cart");
let total = document.querySelector(".total");

window.addEventListener("load", showCart);

function showCart() {
  let cartItem = JSON.parse(localStorage.getItem("cartItem"));

  let totalItem = document.createElement("h2");
  let totalPrice = document.createElement("h2");

  for (i in cartItem) {
    totalItem.innerHTML = `<h3>total products ${cartItem.length} </h3>`;

    totalPrice.innerHTML = `<h3>total price ${cartItem.length * cartItem[i].price} </h3>`;

    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `  
                <div class="item-info">
                    <img src="${cartItem[i].image_url}" alt="">
                    <div class="item-name">${cartItem[i].name}</div>
                    <div class="item-price">${cartItem[i].price}</div>
                </div>
                <div class="item-delete">
                    <button id='${i}' onclick='remove()'>Delete</button>
                </div>
                <div class="item-quantity">
                    <button onclick='addMore()'>+</button>
                    <span id="value">1</span>
                    <button onclick='minus()'>-</button>
                </div>
            `;
    cart.appendChild(div);
    total.appendChild(totalItem);
    total.appendChild(totalPrice);
  }
}

function addMore() {
  let value = document.querySelector("#value");
  value.innerHTML = parseInt(value.innerHTML) + 1;
}

function minus() {
  let value = document.querySelector("#value");
  if (parseInt(value.innerHTML) > 1) {
    value.innerHTML = parseInt(value.innerHTML) - 1;
  }
}

function remove() {
  let index = event.target.id;
  cart.removeChild(event.target.parentElement.parentElement);
  let item = JSON.parse(localStorage.getItem("cartItem"));
  item = item.filter((product, i) => {
    return i != index;
  });
  localStorage.setItem("cartItem", JSON.stringify(item));
}
