let products = JSON.parse(localStorage.getItem('products'));

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

function displayPagenumbers() {
    const pageNumbersContainer = document.getElementById('page-numbers');
    pageNumbersContainer.innerHTML = '';
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    console.log(totalPages);

    for (let i = 1; i <= totalPages; i++) {
        const pageNumberElement = document.createElement('button');
        pageNumberElement.innerText = i;
        pageNumberElement.className = i === currentPage ? 'active' : '';
        pageNumberElement.addEventListener('click', () => {
            console.log(`Button for page ${i} clicked`);
            goTopage(i);
        });
        pageNumbersContainer.appendChild(pageNumberElement);
    }
}

function goTopage(pageNumber) {
    currentPage = pageNumber;
    console.log("Hellloo dearrr");
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

    console.log(items);

    items.forEach(item => {
        item.classList.remove('active');
        item.classList.add('prev');
    });


    setTimeout(() => {
        displayProducts();
        displayPagenumbers();
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
        addToCartButton.addEventListener('click', function () {
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
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
}

function moGioiThieu() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function moThucDon() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function showShippingForm() {
    const cartModal = document.getElementById('cartModal');
    const shippingModal = document.getElementById('shippingFormModal');
    const overlay = document.getElementById('pageOverlay'); // Lấy lớp phủ
    const shippingCartItems = document.getElementById('shipping-cart-items');
    const shippingTotalPrice = document.getElementById('shipping-total-price');

    if (cartModal && shippingModal && overlay && shippingCartItems && shippingTotalPrice) {
        cartModal.classList.remove('show');
        cartModal.style.display = 'none'; // Ẩn giỏ hàng
        shippingModal.style.display = 'block'; // Hiển thị form giao hàng
        shippingModal.classList.add('show');

        overlay.style.display = 'block'; // Hiển thị lớp phủ
        document.body.style.overflow = 'hidden'; // Khóa cuộn trang

        // Hiển thị các sản phẩm trong giỏ hàng
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser && loggedInUser.cart) {
            shippingCartItems.innerHTML = '';
            let total = 0;
            loggedInUser.cart.forEach(item => {
                const numericPrice = parseFloat(String(item.price).replace(/[^0-9.-]+/g, "").replace(",", ""));
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                <div class="product-container">
                   <div class="product-img">
                       <img src="${item.img}" alt="${item.name}">
                   </div>
                   <div class="product-detail">
                       <span>${item.name}</span>
                       <span>${numericPrice.toLocaleString()}₫</span>
                       <span>SL: ${item.soluong}</span>
                   </div>     
                </div>
                `;
                shippingCartItems.appendChild(itemElement);
                total += numericPrice * item.soluong;
            });
            shippingTotalPrice.innerText = `${total.toLocaleString()}₫`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayProducts();
    displayPagenumbers();
});
