const products = [
    { name: "Gà Rán", price: "99,000 VND", img: "image/Product_Menu/Gà_Rán.png" },
    { name: "Burger Gà", price: "75,000 VND", img: "image/Product_Menu/Burger_Gà.png" },
    { name: "Gà Quay", price: "89,000 VND", img: "image/Product_Menu/Gà_quay.png" },
    { name: "Phi-lê Gà Quay", price: "95,000 VND", img: "image/Product_Menu/Phi-lê Gà Quay.jpg" },
    { name: "Gà Không Xương", price: "85,000 VND", img: "image/Product_Menu/Gà_Ko_xương.png" },
    { name: "Đùi Gà Quay", price: "105,000 VND", img: "image/Product_Menu/Đùi_gà_quay.png" },
    { name: "Gà Chiên Xù", price: "110,000 VND", img: "image/Product_Menu/Gà_Chiên_Xù.jpg" },
    { name: "Gà Sốt BBQ", price: "120,000 VND", img: "image/Product_Menu/Gà_sốt_BBQ.png" },
    { name: "Gà Sốt Cay", price: "130,000 VND", img: "image/Product_Menu/Gà_sốt_cay.png" },
    { name: "Gà Sốt Mật Ong", price: "140,000 VND", img: "image/Product_Menu/Gà_sốt_mật_ong.png" },
    { name: "Mì Ý Gà Zinger", price: "150,000 VND", img: "image/Product_Menu/Mì_Ý_gà_Zinger.png" },
    { name: "Gà Sốt Chanh", price: "160,000 VND", img: "image/Product_Menu/gà_sốt_chanh.png" },
    { name: "Khoai Tây Nghiền (Vừa)", price: "170,000 VND", img: "image/Product_Menu/Khoai Tây Nghiền (Vừa).png" },
    { name: "Gà Sốt Dứa", price: "180,000 VND", img: "image/Product_Menu/Gà_sốt_dứa.png" },
    { name: "Khoai Tây Nghiền (Lớn)", price: "190,000 VND", img: "image/Product_Menu/Khoai Tây Nghiền (Lớn).png" },
    { name: "Gà Sốt Dâu", price: "200,000 VND", img: "image/Product_Menu/Gà_sốt_dâu.png" },
    { name: "Khoai Tây Nghiền (Đại)", price: "210,000 VND", img: "image/Product_Menu/Khoai Tây Nghiền (Đại).png" },
    { name: "Khoai Tây Chiên (Vừa)", price: "80,000 VND", img: "image/Product_Menu/Khoai_tây_chiên_Vừa.png" },
    { name: "Khoai Tây Chiên (Lớn)", price: "85,000 VND", img: "image/Product_Menu/Khoai Tây Chiên (Lớn).png" },
    { name: "Khoai Tây Chiên (Đại)", price: "90,000 VND", img: "image/Product_Menu/Khoai Tây Chiên (Đại).png" },
    { name: "Burger Bò", price: "95,000 VND", img: "image/Product_Menu/Burger Bò.png" },
    { name: "Burger Phô Mai", price: "100,000 VND", img: "image/Product_Menu/Burger_Phô_mai.png" },
    { name: "Burger Cá", price: "105,000 VND", img: "image/Product_Menu/Burger_cá.png" },
    { name: "Mì Ý Sốt Bò", price: "110,000 VND", img: "image/Product_Menu/Mì Ý Sốt Bò.png" },
    { name: "Bắp Cải Trộn (Vừa)", price: "115,000 VND", img: "image/Product_Menu/Bắp Cải Trộn (Vừa).png" },
    { name: "Bắp Cải Trộn (Lớn)", price: "120,000 VND", img: "image/Product_Menu/Bắp Cải Trộn (Lớn).png" },
    { name: "Bắp Cải Trộn (Đại)", price: "125,000 VND", img: "image/Product_Menu/Bắp Cải Trộn (Đại).png" },
    { name: "Combo Gà Nướng", price: "130,000 VND", img: "image/Product_Menu/Combo Gà Nướn.png" },
    { name: "Mì Ý Phi-Lê Gà Quay", price: "135,000 VND", img: "image/Product_Menu/Mì Ý Phi-Lê Gà Quay.png" },
    { name: "Combo Gà Sốt BBQ", price: "140,000 VND", img: "image/Product_Menu/Combo Gà Sốt BBQ.png" },
    { name: "Combo Gà Sốt Cay", price: "145,000 VND", img: "image/Product_Menu/Combo Gà Sốt Cay.png" },
    { name: "Salad Hạt", price: "150,000 VND", img: "image/Product_Menu/Salad Hạt.png" },
    { name: "Salad Pop", price: "155,000 VND", img: "image/Product_Menu/Salad Pop.png" },
    { name: "Mì Ý Gà Rán", price: "160,000 VND", img: "image/Product_Menu/Mì Ý Gà Rán.png" },
    { name: "3 Cá Thanh", price: "165,000 VND", img: "image/Product_Menu/3 Cá Thanh.png" },
    { name: "Combo Gà Sốt Dứa", price: "170,000 VND", img: "image/Product_Menu/Combo Gà Sốt Dứa.png" },
    { name: "Combo Gà Sốt Xoài", price: "175,000 VND", img: "image/Product_Menu/Combo Gà Sốt Xoài.png" },
    { name: "Combo Gà Sốt Dâu", price: "180,000 VND", img: "image/Product_Menu/Combo Gà Sốt Dâu.png" },
    { name: "4 Phô Mai Viên", price: "185,000 VND", img: "image/Product_Menu/4 Phô Mai Viên.png" },
    { name: "Combo Gà Sốt Dừa", price: "190,000 VND", img: "image/Product_Menu/Combo Gà Sốt Dừa.png" }
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

function displayItems(items, page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = items.slice(startIndex, endIndex);

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = itemsToDisplay.map(item => `
        <div class="menu-item">
            <h3>${item.name}</h3>
            <p>${item.category}</p>
            <p>${item.price} VNĐ</p>
        </div>
    `).join('');

    updatePaginationControls(items.length, page);
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