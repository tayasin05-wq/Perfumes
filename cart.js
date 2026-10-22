let cart = JSON.parse(
    localStorage.getItem("cart")
) || [];

const cartContainer =
    document.getElementById("cartContainer");

const cartTotal =
    document.getElementById("cartTotal");


function displayCart() {

    cartContainer.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartContainer.innerHTML =
            "<h2>Your cart is empty 🛒</h2>";

        cartTotal.textContent = "0.00";
        return;
    }


    cart.forEach(function(item, index) {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        const cartItem =
            document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `

            <img 
                src="${item.image}"
                alt="${item.name}"
            >

            <div>
                <h2>${item.name}</h2>

                <p>${item.categoryName}</p>

                <p>Price: $${item.price}</p>

                <p>
                    Quantity: ${item.quantity}
                </p>

                <h3>
                    Total: $${itemTotal.toFixed(2)}
                </h3>

                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });


    cartTotal.textContent =
        total.toFixed(2);
}


function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}


function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    window.location.href = "checkout.html";
}


displayCart();