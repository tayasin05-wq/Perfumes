const products = [
    {
        name: "Red Rose",
        category: "Eau De Parfum",
        price: "$89.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPVvlH9I1mql_49AlsvilDb01_ghElVjYIU2jFDeANQ&s=10"
    },

    {
        name: "Velvet Bloom",
        category: "Eau De Parfum",
        price: "$79.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzYOIadLv5giYywo88zKXCN9ke2QWcnsSMt_WqfdCRQ&s"
    },

    {
        name: "Midnight Rose",
        category: "Eau De Parfum",
        price: "$85.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRceEb4mPEr4WshqaD-mMmnPvWkmHrOp7mHuPCOcuh6zw&s=10"
    },

    {
        name: "Rose Oud",
        category: "Eau De Parfum",
        price: "$95.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcBirWMIw5cxeTk1Htzs0JKx0_G1SIo_vk_0kZQYxeQ&s=10"
    }
];


const productContainer =
    document.getElementById("productContainer");


products.forEach(function(product) {

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
            ${product.category}
        </p>

        <p class="price">
            ${product.price}
        </p>

    `;

    productContainer.appendChild(card);
});

document.addEventListener("click", function(e) {

    if (e.target.classList.contains("wishlist")) {

        e.target.classList.toggle("active");

        if (e.target.classList.contains("active")) {
            e.target.innerHTML = "♥";
        } else {
            e.target.innerHTML = "♡";
        }

    }

});

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
searchBtn.addEventListener("click",()=>{
    if(searchBox.style.display === "block"){
        searchBox.style.display = "none";

    }
    else{
        searchBox.style.display = "block";
    }

});