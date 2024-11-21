const products = [
    { name: "Combo Gà Rán Giảm Giá", price: "99,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Burger Gà", price: "75,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Quay", price: "89,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Cay", price: "95,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Không Xương", price: "85,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Nướng", price: "105,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Chiên Xù", price: "110,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt BBQ", price: "120,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Cay", price: "130,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Mật Ong", price: "140,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Tỏi", price: "150,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Chanh", price: "160,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Me", price: "170,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dứa", price: "180,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Xoài", price: "190,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dâu", price: "200,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Việt Quất", price: "210,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dừa", price: "220,000 VND", img: "https://via.placeholder.com/300" }
];

const itemsPerPage = 6;
let currentPage = 1;

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);

    // Remove existing items
    while (productContainer.firstChild) {
        productContainer.removeChild(productContainer.firstChild);
    }

    // Add new items with initial styles
    paginatedProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('menu-item');
        if (index === 0) {
            productElement.classList.add('active');
        } else {
            productElement.classList.add('next');
        }
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <a href="#" class="btn-order">Thêm</a>
            <button class="btn-details" onclick="showDetails('${product.name}')">Chi tiết</button>
        `;
        productContainer.appendChild(productElement);
    });

    // Apply the effect
    const items = productContainer.querySelectorAll('.menu-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.remove('prev', 'next');
            item.classList.add('active');
        }, index * 100); // Stagger the animation
    });
}

function displayPageNumbers() {
    const pageNumbersContainer = document.getElementById('page-numbers');
    pageNumbersContainer.innerHTML = '';
    const totalPages = Math.ceil(products.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageNumberElement = document.createElement('button');
        pageNumberElement.innerText = i;
        pageNumberElement.className = i === currentPage ? 'active' : '';
        pageNumberElement.addEventListener('click', () => goToPage(i));
        pageNumbersContainer.appendChild(pageNumberElement);
    }
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    updatePage();
}

function nextPage() {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

function updatePage() {
    const productContainer = document.getElementById('product-container');
    const items = productContainer.querySelectorAll('.menu-item');

    items.forEach(item => {
        item.classList.remove('active');
        item.classList.add('prev');
    });

    setTimeout(() => {
        displayProducts();
        displayPageNumbers();
    }, 500); // Wait for the transition to complete
}

function showDetails(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        const detailsOverlay = document.createElement('div');
        detailsOverlay.classList.add('details-overlay');
        detailsOverlay.innerHTML = `
            <div class="details-container" onclick="event.stopPropagation()">
                <span class="close-btn" onclick="closeDetails()">&times;</span>
                <div class="details-content">
                    <div class="details-image">
                        <img src="${product.img}" alt="${product.name}">
                    </div>
                    <div class="details-info">
                        <h2>${product.name}</h2>
                        <p class="description">This is a brief description of the combo, including a promotional note.</p>
                        <p class="price">${product.price}</p>
                        <div class="drink-selection">
                            <h3>Choose up to 2 drinks:</h3>
                            <div class="drink-option">
                                <span>Drink 1 (+0₫)</span>
                                <input type="number" value="0" min="0" max="2">
                            </div>
                            <div class="drink-option">
                                <span>Drink 2 (+0₫)</span>
                                <input type="number" value="0" min="0" max="2">
                            </div>
                        </div>
                        <div class="quantity-add-to-cart">
                            <input type="number" value="1" min="1">
                            <button class="btn-add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        detailsOverlay.addEventListener('click', closeDetails);
        document.body.appendChild(detailsOverlay);
    }
}

function closeDetails() {
    const detailsOverlay = document.querySelector('.details-overlay');
    if (detailsOverlay) {
        detailsOverlay.remove();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    displayPageNumbers();
});