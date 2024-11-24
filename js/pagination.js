const products = [
    { name: "Combo Gà Rán Giảm Giá", price: 99000, category:"combo" ,img: "image/img1.jpg" },
    { name: "Combo Đầy Đủ", price: 59000,category:"combo", img: "image/img2.png" },
    { name: "Combo Siêu Hời", price: 40000, category:"combo", img: "image/img3.png" },
    { name: "Combo Burger, Khoai Tây Chiên", price: 65000, category:"combo", img: "image/img4.jpg" },
    { name: "Combo Gà Rán, Khoai Tây Chiên", price: 59000, category:"combo", img: "image/img5.jpg" },
    { name: "Combo Siêu Cấp", price: 199000, category:"combo", img: "image/img6.jpg" },
    { name: "Burger Gà ", price: 59000, category:"burger", img: "image/img7.webp" },
    { name: "Burger Phô Mai", price: 40000, category:"burger", img: "image/img8.png" },
    { name: "Burger Cá", price: 49000,category:"burger", img: "image/img9.jpg" },
    { name: "Burger Big Mac", price: 79000, category:"burger",img: "image/img10.png" },
    { name: "Gà Sốt Cay", price: 39000, category:"ga", img: "image/img11.png" },
    { name: "Gà Rán", price: 30000, category:"ga", img: "image/img12.jpg" },
    { name: "Gà Viên", price: 49000, category:"ga", img: "image/img13.jpg" },
    { name: "Gà Sốt Phô Mai", price: 49000, category:"ga", img: "image/img14.jpg" },
    { name: "Pizza Hải Sản", price: 200000, category:"pizza", img: "image/img15.png" },
    { name: "Pizza Chay", price: 139000, category:"pizza", img: "image/img16.jpg" },
    { name: "Pizza Bò", price: 179000, category:"pizza", img: "image/img17.jpg" },
    { name: "Pizza Phô Mai", price: 159000 ,category:"pizza", img: "image/img18.jpg" },
    { name: "CoCa-CoLa", price: 15000 , category:"nuoc", img: "image/img19.webp" },
    { name: "Sprite", price: 15000 , category:"nuoc", img: "image/ing20.webp" },
    { name: "7UP", price: 15000 , category:"nuoc", img: "image/img21.webp" },
    { name: "Pepsi", price: 15000 , category:"nuoc", img: "image/img22.webp" },
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
             <p class="price">${product.price.toLocaleString()} VND</p> <!-- Đã sửa: Thêm đơn vị tiền tệ đúng cách -->
            <button class="btn-order" onclick="addToCart(event, { id: ${product.id}, name: '${product.name}', price: ${product.price} })">Thêm</button>
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