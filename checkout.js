const cart = JSON.parse(
    localStorage.getItem("cart")
) || [];

const checkoutProducts =
    document.getElementById("checkoutProducts");

const checkoutTotal =
    document.getElementById("checkoutTotal");


let total = 0;


// Check cart
if (cart.length === 0) {

    checkoutProducts.innerHTML =
        "<p>Your cart is empty.</p>";

    checkoutTotal.textContent = "0.00";

} else {

    cart.forEach(function(item) {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        const productDiv =
            document.createElement("div");

        productDiv.classList.add(
            "checkout-product"
        );


        productDiv.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div>

                <h3>${item.name}</h3>

                <p>
                    Price: $${item.price.toFixed(2)}
                </p>

                <p>
                    Quantity: ${item.quantity}
                </p>

                <p>
                    Total: $${itemTotal.toFixed(2)}
                </p>

            </div>

        `;


        checkoutProducts.appendChild(
            productDiv
        );

    });


    checkoutTotal.textContent =
        total.toFixed(2);
}


// Place Order
document.getElementById(
    "checkoutForm"
).addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const phone =
            document.getElementById("phone").value;

        const address =
            document.getElementById("address").value;

        const city =
            document.getElementById("city").value;


        alert(
            "Thank you " +
            name +
            "! Your order has been placed successfully."
        );


        // Empty cart after order
        localStorage.removeItem("cart");


        // Go to Home
        window.location.href =
            "index.html";
    }
);