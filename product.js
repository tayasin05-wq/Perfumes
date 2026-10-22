const selectedProduct = JSON.parse(
    localStorage.getItem("selectedProduct")
);

if(selectedProduct){

    document.getElementById("productImage").src =
        selectedProduct.image;

    document.getElementById("productImage").alt =
        selectedProduct.name;

    document.getElementById("productName").textContent =
        selectedProduct.name;

    document.getElementById("productCategory").textContent =
        selectedProduct.categoryName;

    document.getElementById("productPrice").textContent =
        "$" + selectedProduct.price.toFixed(2);
}


// Quantity
let quantity = 1;

const quantityElement =
    document.getElementById("quantity");

document.getElementById("plus").addEventListener(
    "click",
    function () {
        quantity++;
        quantityElement.textContent = quantity;
    }
);

document.getElementById("minus").addEventListener(
    "click",
    function () {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    }
);


// Add to cart
document.getElementById("addToCart").addEventListener(
    "click",
    function () {

        const cartItem = {
            ...selectedProduct,
            quantity: quantity
        };

        let cart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];

        cart.push(cartItem);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        window.location.href = "cart.html";
    }
);