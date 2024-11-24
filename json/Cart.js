let cart = [];

function openCart() {
    const cartModal = document.getElementById('cartModal');
    const overlay = document.getElementById('pageOverlay');
    cartModal.style.display = 'block';
    overlay.style.display = 'block';
    cartModal.classList.remove('hide');
    cartModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang khi mở giỏ hàng
}

function closeCart() {
    const cartModal = document.getElementById('cartModal');
    const overlay = document.getElementById('pageOverlay');
    cartModal.classList.remove('show');
    cartModal.classList.add('hide');
    setTimeout(() => {
        cartModal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Cho phép cuộn trang trở lại bình thường

    }, 500); // Thời gian trùng với thời gian của animation
}

function isLoggedIn() {
    // Giả sử có một hàm kiểm tra đăng nhập
    return !!localStorage.getItem('user');
}

function addToCart(product) {
    if (!isLoggedIn()) {
        alert('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.');
        return;
    }

    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        emptyCart.style.display = 'block';
    } else {
        emptyCart.style.display = 'none';
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price.toLocaleString()} VND</span> <!-- Đã sửa: Thêm đơn vị tiền tệ đúng cách -->
            <span>${item.quantity}</span>
            <button onclick="removeFromCart(${item.id})">Xóa</button>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
        totalItems += item.quantity;
    });

    document.getElementById('total-amount').innerText = `${total}₫`; // Đã sửa: Thêm đơn vị tiền tệ đúng cách
    document.getElementById('total-price').innerText = `${total}₫`;
    document.getElementById('checkout-button').disabled = cart.length === 0;
     // Cập nhật số lượng sản phẩm khác nhau trong giỏ hàng
     cartCount.innerText = cart.length;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống.');
        return;
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        alert('Bạn cần đăng nhập để thanh toán.');
        return;
    }

    alert(`Thông tin khách hàng:\nTên: ${user.name}\nEmail: ${user.email}`);
}
// Đảm bảo các phần tử tồn tại trước khi thêm sự kiện
document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.querySelector('.fa-shopping-cart').parentElement;
    const checkoutButton = document.getElementById('checkout-btn');

    if (cartButton) {
        cartButton.addEventListener('click', openCart);
    }

    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
});
