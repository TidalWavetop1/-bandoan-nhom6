const products = [
    { ID: 1, name: "Gà Rán", price: "99,000 VND", img: "image/Product_Menu/Gà_Rán.png", category: "Gà" },
    { ID: 2, name: "Burger Gà", price: "75,000 VND", img: "image/Product_Menu/Burger_Gà.png", category: "Burger" },
    { ID: 3, name: "Gà Quay", price: "89,000 VND", img: "image/Product_Menu/Gà_quay.png", category: "Gà" },
    { ID: 4, name: "Phi-lê Gà Quay", price: "95,000 VND", img: "image/Product_Menu/Phi-lê Gà Quay.jpg", category: "Gà" },
    { ID: 5, name: "Gà Không Xương", price: "85,000 VND", img: "image/Product_Menu/Gà_Ko_xương.png", category: "Gà" },
    { ID: 6, name: "Đùi Gà Quay", price: "105,000 VND", img: "image/Product_Menu/Đùi_gà_quay.png", category: "Gà" },
    { ID: 7, name: "Gà Chiên Xù", price: "110,000 VND", img: "image/Product_Menu/Gà_Chiên_Xù.jpg", category: "Gà" },
    { ID: 8, name: "Gà Sốt BBQ", price: "120,000 VND", img: "image/Product_Menu/Gà_sốt_BBQ.png", category: "Gà" },
    { ID: 9, name: "Gà Sốt Cay", price: "130,000 VND", img: "image/Product_Menu/Gà_sốt_cay.png", category: "Gà" },
    { ID: 10, name: "Gà Sốt Mật Ong", price: "140,000 VND", img: "image/Product_Menu/Gà_sốt_mật_ong.png", category: "Gà" },
    { ID: 11, name: "Mì Ý Gà Zinger", price: "150,000 VND", img: "image/Product_Menu/Mì_Ý_gà_Zinger.png", category: "Mì Ý" },
    { ID: 12, name: "Gà Sốt Chanh", price: "160,000 VND", img: "image/Product_Menu/gà_sốt_chanh.png", category: "Gà" },
    { ID: 13, name: "Khoai Tây Nghiền (Vừa)", price: "170,000 VND", img: "image/Product_Menu/Khoai Tây Nghiền (Vừa).png", category: "Khoai Tây" },
    { ID: 14, name: "Gà Sốt Dứa", price: "180,000 VND", img: "image/Product_Menu/Gà_sốt_dứa.png", category: "Gà" },
    { ID: 15, name: "Khoai Tây Nghiền (Lớn)", price: "190,000 VND", img: "image/Product_Menu/Khoai Tây Nghiền (Lớn).png", category: "Khoai Tây" },
    { ID: 16, name: "Gà Sốt Dâu", price: "200,000 VND", img: "image/Product_Menu/Gà_sốt_dâu.png", category: "Gà" },
    { ID: 17, name: "Khoai Tây Nghiền (Đại)", price: "210,000 VND", img: "image/Product_Menu/Khoai Tây Nghiền (Đại).png", category: "Khoai Tây" },
    { ID: 18, name: "Khoai Tây Chiên (Vừa)", price: "80,000 VND", img: "image/Product_Menu/Khoai_tây_chiên_Vừa.png", category: "Khoai Tây" },
    { ID: 19, name: "Khoai Tây Chiên (Lớn)", price: "85,000 VND", img: "image/Product_Menu/Khoai Tây Chiên (Lớn).png", category: "Khoai Tây" },
    { ID: 20, name: "Khoai Tây Chiên (Đại)", price: "90,000 VND", img: "image/Product_Menu/Khoai Tây Chiên (Đại).png", category: "Khoai Tây" },
    { ID: 21, name: "Burger Bò", price: "95,000 VND", img: "image/Product_Menu/Burger Bò.png", category: "Burger" },
    { ID: 22, name: "Burger Phô Mai", price: "100,000 VND", img: "image/Product_Menu/Burger_Phô_mai.png", category: "Burger" },
    { ID: 23, name: "Burger Cá", price: "105,000 VND", img: "image/Product_Menu/Burger_cá.png", category: "Burger" },
    { ID: 24, name: "Mì Ý Sốt Bò", price: "110,000 VND", img: "image/Product_Menu/Mì Ý Sốt Bò.png", category: "Mì Ý" },
    { ID: 25, name: "Bắp Cải Trộn (Vừa)", price: "115,000 VND", img: "image/Product_Menu/Bắp Cải Trộn (Vừa).png", category: "Bắp Cải" },
    { ID: 26, name: "Bắp Cải Trộn (Lớn)", price: "120,000 VND", img: "image/Product_Menu/Bắp Cảii Trộn (Lớn).png", category: "Bắp Cải" },
    { ID: 27, name: "Bắp Cải Trộn (Đại)", price: "125,000 VND", img: "image/Product_Menu/Bắp Cải Trộn (Đại).png", category: "Bắp Cải" },
    { ID: 28, name: "Combo Gà Nướng", price: "130,000 VND", img: "image/Product_Menu/Combo Gà Nướn.png", category: "Combo" },
    { ID: 29, name: "Mì Ý Phi-Lê Gà Quay", price: "135,000 VND", img: "image/Product_Menu/Mì Ý Phi-Lê Gà Quay.png", category: "Mì Ý" },
    { ID: 30, name: "Combo Gà Sốt BBQ", price: "140,000 VND", img: "image/Product_Menu/Combo Gà Sốt BBQ.png", category: "Combo" },
    { ID: 31, name: "Combo Gà Sốt Cay", price: "145,000 VND", img: "image/Product_Menu/Combo Gà Sốt Cay.png", category: "Combo" },
    { ID: 32, name: "Salad Hạt", price: "150,000 VND", img: "image/Product_Menu/Salad Hạt.png", category: "Salad" },
    { ID: 33, name: "Salad Pop", price: "155,000 VND", img: "image/Product_Menu/Salad Pop.png", category: "Salad" },
    { ID: 34, name: "Mì Ý Gà Rán", price: "160,000 VND", img: "image/Product_Menu/Mì Ý Gà Rán.png", category: "Mì Ý" },
    { ID: 35, name: "3 Cá Thanh", price: "165,000 VND", img: "image/Product_Menu/3 Cá Thanh.png", category: "Cá" },
    { ID: 36, name: "Combo Gà Sốt Dứa", price: "170,000 VND", img: "image/Product_Menu/Combo Gà Sốt Dứa.png", category: "Combo" },
    { ID: 37, name: "Combo Gà Sốt Xoài", price: "175,000 VND", img: "image/Product_Menu/Combo Gà Sốt Xoài.png", category: "Combo" },
    { ID: 38, name: "Combo Gà Sốt Dâu", price: "180,000 VND", img: "image/Product_Menu/Combo Gà Sốt Dâu.png", category: "Combo" },
    { ID: 39, name: "4 Phô Mai Viên", price: "185,000 VND", img: "image/Product_Menu/4 Phô Mai Viên.png", category: "Phô Mai" },
    { ID: 40, name: "Combo Gà Sốt Dừa", price: "190,000 VND", img: "image/Product_Menu/Combo Gà Sốt Dừa.png", category: "Combo" }
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
        productElement.setAttribute('data-product-id', index); // Set data-product-id attribute
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
            case 'Gà':
                filteredProducts = products.filter(product => product.name.toLowerCase().includes('gà') && !product.name.toLowerCase().includes('mì ý') && !product.name.toLowerCase().includes('burger') && !product.name.toLowerCase().includes('combo'));
                break;
            case 'Burger - Mì Ý':
                filteredProducts = products.filter(product => product.name.toLowerCase().includes('burger') || product.name.toLowerCase().includes('mì ý'));
                break;
            case 'Combo':
                filteredProducts = products.filter(product => product.name.toLowerCase().includes('combo'));
                break;
            case 'Thức ăn nhẹ':
                filteredProducts = products.filter(product => !product.name.toLowerCase().includes('gà') && !product.name.toLowerCase().includes('burger') && !product.name.toLowerCase().includes('mì ý'));
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
        detailsOverlay.setAttribute('data-product-id', product.ID); // Set data-product-id attribute
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
                        <div class="quantity-add-to-cart">
                            <input type="number" value="1" min="1" id="product-quantity">
                            <button class="btn-add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        detailsOverlay.addEventListener('click', closeDetails);
        document.body.appendChild(detailsOverlay);

        // Thêm sự kiện cho nút "Add to Cart"
        const productId = detailsOverlay.getAttribute('data-product-id'); // Assuming product ID is stored in a data attribute
        const addToCartButton = detailsOverlay.querySelector('.btn-add-to-cart');
        if (productId) {
            console.log('ID sản phẩm:', productId); // Kiểm tra giá trị ID
        } else {
            console.error('Không tìm thấy thuộc tính data-product-id.');
        }
        addToCartButton.addEventListener('click', function() {
            const quantityInput = detailsOverlay.querySelector('#product-quantity');
            if (quantityInput) {
                const quantity = parseInt(quantityInput.value);
                addToCart(productId, quantity);
                closeDetails();
            } else {
                console.error('Element with ID "product-quantity" not found.');
            }
        });
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

function moHome() {
    window.location.href = 'index.html';
}

function moGioiThieu() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function moThucDon() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    displayProducts();
    displayPageNumbers();
});
