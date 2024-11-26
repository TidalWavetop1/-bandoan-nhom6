const products = [
    { name: "Gà Rán", price: "99,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Burger Gà", price: "75,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Quay", price: "89,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Phi-lê Gà Quay", price: "95,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Không Xương", price: "85,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Đùi Gà Quay", price: "105,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Chiên Xù", price: "110,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt BBQ", price: "120,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Cay", price: "130,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Mật Ong", price: "140,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Mì Ý Gà Zinger", price: "150,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Chanh", price: "160,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Nghiền (Vừa)", price: "170,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Dứa", price: "180,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Nghiền (Lớn)", price: "190,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Dâu", price: "200,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Nghiền (Đại)", price: "210,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Chiên (Vừa)", price: "80,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Chiên (Lớn)", price: "85,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Chiên (Đại)", price: "90,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Burger Bò", price: "95,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Burger Phô Mai", price: "100,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Burger Cá", price: "105,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Mì Ý Sốt Bò)", price: "110,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Bắp Cải Trộn (Vừa)", price: "115,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Bắp Cải Trộn (Lớn)", price: "120,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Bắp Cải Trộn (Đại)", price: "125,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Nướng", price: "130,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Mì Ý Phi-Lê Gà Quay", price: "135,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt BBQ", price: "140,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Cay", price: "145,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Salad Hạt", price: "150,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Salad Pop", price: "155,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Mì Ý Gà Rán", price: "160,000 VND", img: "https://via.placeholder.com/300" },
    { name: "3 Cá Thanh", price: "165,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dứa", price: "170,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Xoài", price: "175,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dâu", price: "180,000 VND", img: "https://via.placeholder.com/300" },
    { name: "4 Phô Mai Viên", price: "185,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dừa", price: "190,000 VND", img: "https://via.placeholder.com/300" }
];

const initialItemsPerPage = 12;
const filteredItemsPerPage = 8;
let itemsPerPage = initialItemsPerPage;
let currentPage = 1;
let filteredProducts = products;

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);

    // Remove existing items
    while (productContainer.firstChild) {
        productContainer.removeChild(productContainer.firstChild);
    }

    // Add new items with initial styles
    paginatedProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('menu-item');
        if (itemsPerPage === filteredItemsPerPage) {
            productElement.classList.add('filtered');
        } else {
            productElement.classList.remove('filtered');
        }
        if (index === 0) {
            productElement.classList.add('active');
        } else {
            productElement.classList.add('next');
        }
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <a href="#" class="btn-order" data-product-name="${product.name}">Thêm</a>
        `;
        productContainer.appendChild(productElement);
    });

    // Add event listener to btn-order
    const orderButtons = document.querySelectorAll('.btn-order');
    orderButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const productName = this.getAttribute('data-product-name');
            showDetails(productName);
        });
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
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
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

function filterMenu(category) {
    if (category === '') {
        filteredProducts = products;
        itemsPerPage = initialItemsPerPage;
    } else {
        itemsPerPage = filteredItemsPerPage;
        switch (category) {
            case 'Gà Rán':
                filteredProducts = products.filter(product => product.name.toLowerCase().includes('gà rán') || product.name.toLowerCase().includes('gà quay') || product.name.toLowerCase().includes('gà không xương') || product.name.toLowerCase().includes('đùi gà'));
                break;
            case 'Burger':
                filteredProducts = products.filter(product => product.name.toLowerCase().includes('burger') || product.name.toLowerCase().includes('mì ý'));
                break;
            case 'Combo':
                filteredProducts = products.filter(product => product.name.toLowerCase().includes('combo'));
                break;
            case 'Thức ăn nhẹ':
                filteredProducts = products.filter(product => !product.name.toLowerCase().includes('gà rán') && !product.name.toLowerCase().includes('gà quay') && !product.name.toLowerCase().includes('gà không xương') && !product.name.toLowerCase().includes('đùi gà') && !product.name.toLowerCase().includes('burger') && !product.name.toLowerCase().includes('mì ý') && !product.name.toLowerCase().includes('combo'));
                break;
            default:
                filteredProducts = products;
                break;
        }
    }
    currentPage = 1;
    updatePage();
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

function closeOverlay(event) {
    if (event.target.classList.contains('overlay')) {
        event.target.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayProducts();
    displayPageNumbers();
});