function filterMenu(category) {
    const items = document.querySelectorAll('.menu-items .item');
    items.forEach(item => {
        if (category === '' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Lấy các nút "Tin tức" và "Điều khoản"
const newsLink = document.querySelector('.news-link');
const termsLink = document.querySelector('.terms-link');

// Thêm sự kiện click cho nút "Tin tức"
newsLink.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    window.location.href = 'index.html'; // Thay đổi đường dẫn tới trang chủ
});

// Thêm sự kiện click cho nút "Điều khoản"
termsLink.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    window.location.href = 'index.html'; // Thay đổi đường dẫn tới trang chủ
});

// Modal giỏ hàng
//thêm sản phẩm vào giỏ hàng
function addToCart(itemName, itemPrice) {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!isLoggedIn) {
        alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
        return;
    }

    // Tạo đối tượng sản phẩm trong giỏ hàng
    const cartItem = {
        name: itemName,
        price: itemPrice,
        quantity: 1
    };

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItem = cart.find(cartItem => cartItem.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(cartItem);
    }

    // Cập nhật giao diện giỏ hàng (hàm này cần được triển khai để phản ánh thay đổi trong giỏ hàng)
    updateCartUI();

    console.log("Sản phẩm đã được thêm vào giỏ hàng:", cartItem);
}

// Ví dụ hàm để cập nhật giao diện giỏ hàng
function updateCartUI() {
    const cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = ''; // Xóa các sản phẩm hiện tại trong giỏ hàng

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-price">${item.price} VND</span>
            <span class="cart-item-quantity">Số lượng: ${item.quantity}</span>
        `;
        cartContainer.appendChild(cartItemElement);
    });
}

let cart = [];
let isLoggedIn = false; // Giả sử người dùng chưa đăng nhập

// Mở giỏ hàng
function openCart() {
    const modal = document.getElementById("cartModal");
    const overlay = document.getElementById("pageOverlay");
    overlay.style.display = 'block';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Vô hiệu hóa cuộn trang
    modal.classList.remove('hide');
    modal.classList.add('show');
    setTimeout(function() {
        modal.classList.add('show');
    }, 10); // Thêm một chút thời gian để đảm bảo hiệu ứng hoạt động
}

// Đóng giỏ hàng
function closeCart() {
    const modal = document.getElementById("cartModal");
    const overlay = document.getElementById("pageOverlay");
    modal.classList.remove('show');
    modal.classList.add('hide');
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Kích hoạt lại cuộn trang
    }, 300); // Thời gian trùng với thời gian của transition
}

document.addEventListener('DOMContentLoaded', function() {
    // Giả sử container của giỏ hàng có ID là 'cartModal'
    const cartModal = document.getElementById('cartModal');
    const cartContainer = document.querySelector('.modal-content');
    const overlay = document.getElementById('pageOverlay');

    // Kiểm tra nếu các phần tử tồn tại
    if (!cartModal || !cartContainer || !overlay) {
        console.error('Không tìm thấy phần tử với ID "cartModal", class "modal-content" hoặc ID "pageOverlay"');
        return;
    }

    // Event listener để phát hiện các lần nhấp chuột bên ngoài container của giỏ hàng
    document.addEventListener('click', function(event) {
        if (!cartContainer.contains(event.target) && cartModal.style.display === 'block') {
            closeCart();
        }
    });

    // Hàm để hiển thị giỏ hàng
    function showCart() {
        cartModal.style.display = 'block';
        overlay.style.display = 'block';
        cartModal.classList.remove('hide');
        cartModal.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // Vô hiệu hóa cuộn trang
    }

    // Gán hàm closeCart và showCart vào window để có thể gọi từ HTML
    window.closeCart = closeCart;
    window.showCart = showCart;
});

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Cập nhật danh sách sản phẩm trong giỏ hàng
function updateCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Xóa nội dung cũ

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price}₫ x ${item.quantity}</span>
            <button onclick="removeFromCart(${index})">Xóa</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartItems();
    updateCartCount();
    updateTotalAmount();
}

// Cập nhật tổng tiền
function updateTotalAmount() {
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById('total-amount').innerText = `${totalAmount}₫`;

    // Kích hoạt hoặc vô hiệu hóa nút thanh toán
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.disabled = cart.length === 0;
}

// Thanh toán
function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống.");
        return;
    }

    alert("Thanh toán thành công!");
    cart = [];
    updateCartItems();
    updateCartCount();
    updateTotalAmount();
}

// Ví dụ: Gọi hàm này khi cập nhật giỏ hàng
updateCart(0); // Cập nhật tổng tiền là 0 ₫ và vô hiệu hóa nút thanh toán

// Ví dụ về cách thêm sản phẩm vào giỏ hàng
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            name: button.dataset.productName,
            price: parseFloat(button.dataset.productPrice)
        };
        addToCart(product.name, product.price);
    });
});

function login() {
    isLoggedIn = true;
    alert("Đăng nhập thành công!");
}

function logout() {
    isLoggedIn = false;
    alert("Đăng xuất thành công!");
}
