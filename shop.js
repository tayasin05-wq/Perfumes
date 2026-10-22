const products = [

    {
        name: "Red Rose",
        category: "women",
        categoryName: "Eau De Parfum",
        price: 89,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPVvlH9I1mql_49AlsvilDb01_ghElVjYIU2jFDeANQ&s=10"
    },

    {
        name: "Velvet Bloom",
        category: "women",
        categoryName: "Eau De Parfum",
        price: 79,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzYOIadLv5giYywo88zKXCN9ke2QWcnsSMt_WqfdCRQ&s"
    },

    {
        name: "Midnight Rose",
        category: "unisex",
        categoryName: "Eau De Parfum",
        price: 85,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRceEb4mPEr4WshqaD-mMmnPvWkmHrOp7mHuPCOcuh6zw&s=10"
    },

    {
        name: "Rose Oud",
        category: "men",
        categoryName: "Eau De Parfum",
        price: 95,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcBirWMIw5cxeTk1Htzs0JKx0_G1SIo_vk_0kZQYxeQ&s=10"
    },

    {
        name: "Royal Rose",
        category: "women",
        categoryName: "Luxury Perfume",
        price: 120,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
    },

    {
        name: "Black Oud",
        category: "men",
        categoryName: "Premium Oud",
        price: 135,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f"
    },

    {
        name: "Floral Dream",
        category: "women",
        categoryName: "Floral Perfume",
        price: 49,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"
    },

    {
        name: "Pure Essence",
        category: "unisex",
        categoryName: "Eau De Parfum",
        price: 99,
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75"
    },

    {
        name: "Blue moon",
        category: "men",
        categoryName: "Premium Oud",
        price: 125,
        image: "https://bluemoonfragrance.pk/cdn/shop/files/NawaboudBox.jpg?v=1784987627&width=3840"
    },

    {
        name: "Amora",
        category: "women",
        categoryName: "Vanilla Perfume",
        price: 75,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9CkKBmu9hBKU1tQhwNDo5cxxgU7GQ-aRqAxkYHKGCA&s"
    },

    {
        name: "KAYALI ",
        category: "unisex",
        categoryName: "Royal Musk",
        price: 105,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PD68eRLluovUz_-DxK7lZqiQNQmnlHWJYzTAea5X9w&s=10"
    },

    {
        name: "Red Velvet",
        category: "women",
        categoryName: "Floral Perfume",
        price: 90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrTvbLh-6rCXFZtkUhXYCA2jGVoT_vCEb3aWSUAU_Sg&s=10"
    },

     {
        name: "Jo Malone London",
        category: "men",
        categoryName: "Floral velvet",
        price: 90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_zetQ4n583kBf8P_4pZcyBhQ7sWdLXWrHty1_3A06A&s=10"
    },

    {
        name: "LATTAFA MAAHIR ",
        category: "women",
        categoryName: "Floral Perfume",
        price: 150,
        image: "https://alfatah.pk/cdn/shop/files/AFP-000298998-1000.png?v=1691765329&width=500"
    },

     {
        name: "LAMIS EVERYONE",
        category: "men",
        categoryName: "Floral perfume",
        price: 90,
        image: "https://alfatah.pk/cdn/shop/files/NewProject_53_84798a3f-7a48-4727-8978-d51f5e2eaee7.png?v=1734956806&width=500"
    },



];


const productsGrid =
    document.getElementById("productsGrid");

const productCount =
    document.getElementById("productCount");


function displayProducts(productList) {

    productsGrid.innerHTML = "";

    productCount.textContent = productList.length;


    productList.forEach(function(product) {

        const card = document.createElement("div");

        card.classList.add("product-card");


        card.innerHTML = `

            <span class="wishlist">♡</span>

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <h3>${product.name}</h3>

            <p class="category">
                ${product.categoryName}
            </p>

            <p class="price">
                $${product.price.toFixed(2)}
            </p>

            <button 
            class="product-btn"
            onclick = "viewProduct ('${product.name}')"
            >
                View Product
            </button>

        `;


        productsGrid.appendChild(card);

    });

}


displayProducts(products);


/* =========================
   WISHLIST
========================= */

document.addEventListener("click", function(event) {

    if (
        event.target.classList.contains("wishlist")
    ) {

        event.target.classList.toggle("active");


        if (
            event.target.classList.contains("active")
        ) {

            event.target.textContent = "♥";

        } else {

            event.target.textContent = "♡";

        }

    }

});


/* =========================
   CATEGORY FILTER
========================= */

const categoryInputs =
    document.querySelectorAll(
        '.sidebar input[type="checkbox"]'
    );


categoryInputs.forEach(function(input) {

    input.addEventListener("change", function() {

        if (input.value === "all") {

            categoryInputs.forEach(function(item) {

                item.checked = false;

            });

            input.checked = true;

            displayProducts(products);

            return;
        }


        document.querySelector(
            '.sidebar input[value="all"]'
        ).checked = false;


        const selectedCategories = [];


        categoryInputs.forEach(function(item) {

            if (
                item.checked &&
                item.value !== "all"
            ) {

                selectedCategories.push(
                    item.value
                );

            }

        });


        if (selectedCategories.length === 0) {

            document.querySelector(
                '.sidebar input[value="all"]'
            ).checked = true;

            displayProducts(products);

            return;

        }


        const filteredProducts =
            products.filter(function(product) {

                return selectedCategories.includes(
                    product.category
                );

            });


        displayProducts(filteredProducts);

    });

});


/* =========================
   PRICE FILTER
========================= */

const priceInputs =
    document.querySelectorAll(
        '.sidebar input[type="radio"]'
    );


priceInputs.forEach(function(input) {

    input.addEventListener("change", function() {

        let filteredProducts = products;


        if (input.value === "50") {

            filteredProducts =
                products.filter(function(product) {

                    return product.price < 50;

                });

        }


        if (input.value === "100") {

            filteredProducts =
                products.filter(function(product) {

                    return (
                        product.price >= 50 &&
                        product.price <= 100
                    );

                });

        }


        if (input.value === "150") {

            filteredProducts =
                products.filter(function(product) {

                    return product.price > 100;

                });

        }


        displayProducts(filteredProducts);

    });

});


/* =========================
   SORTING
========================= */

const sortProducts =
    document.getElementById("sortProducts");


sortProducts.addEventListener(
    "change",
    function() {

        let sortedProducts =
            [...products];


        if (this.value === "low") {

            sortedProducts.sort(
                (a, b) => a.price - b.price
            );

        }


        if (this.value === "high") {

            sortedProducts.sort(
                (a, b) => b.price - a.price
            );

        }


        if (this.value === "name") {

            sortedProducts.sort(
                (a, b) =>
                    a.name.localeCompare(b.name)
            );

        }


        displayProducts(sortedProducts);

    }
);


function viewProduct(productName) {
    const product = products.find(function(item) {
        return item.name === productName;
    });
    console.log("Selected Product:", product);

    if (product) {
        localStorage.setItem(
            "selectedProduct",
            JSON.stringify(product)
        );

        window.location.href = "product.html";
    }
}



