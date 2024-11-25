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
    return !!localStorage.getItem('loggedInUser');
}


function addToCart(productId) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        alert('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.');
        return;
    }

    const product = getProductById(productId); // Giả sử bạn có một hàm để lấy thông tin sản phẩm
    if (product) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
        updateCart();
        alert('Sản phẩm đã được thêm vào giỏ hàng.');
    } else {
        alert('Sản phẩm không tồn tại.');
    }
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

     // Hiển thị tóm tắt hóa đơn
     displayOrderSummary();

     // Hiển thị tùy chọn thanh toán
     displayPaymentOptions();

    alert(`Thông tin khách hàng:\nTên: ${user.name}\nEmail: ${user.email}`);
}
function displayOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = '<h2>Tóm tắt hóa đơn</h2>';
    cart.forEach(item => {
        orderSummary.innerHTML += `
            <p>Sản phẩm: ${item.name} - Số lượng: ${item.quantity} - Giá: ${item.price} VND</p>
        `;
    });
    orderSummary.innerHTML += `<p>Tổng tiền: ${calculateTotal()} VND</p>`;
    orderSummary.style.display = 'block';
}

function displayPaymentOptions() {
    const paymentOptions = document.getElementById('payment-options');
    paymentOptions.innerHTML = `
        <h2>Chọn phương thức thanh toán</h2>
        <button onclick="payByCash()">Thanh toán tiền mặt</button>
        <button onclick="payByBankTransfer()">Chuyển khoản</button>
        <button onclick="payByCard()">Thanh toán qua thẻ</button>
    `;
    paymentOptions.style.display = 'block';
}

function payByCash() {
    alert('Bạn đã chọn thanh toán tiền mặt.');
    completeCheckout('cash');
}

function payByBankTransfer() {
    alert('Bạn đã chọn chuyển khoản.');
    completeCheckout('bank_transfer');
}

function payByCard() {
    const paymentGateway = document.getElementById('payment-gateway');
    paymentGateway.innerHTML = `
        <h2>Nhập thông tin thẻ</h2>
        <form id="card-payment-form">
            <input type="text" placeholder="Số thẻ" required>
            <input type="text" placeholder="Tên chủ thẻ" required>
            <input type="text" placeholder="Ngày hết hạn" required>
            <input type="text" placeholder="CVV" required>
            <button type="submit">Thanh toán</button>
        </form>
    `;
    paymentGateway.style.display = 'block';

    document.getElementById('card-payment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thanh toán qua thẻ thành công.');
        completeCheckout('card');
    });
}

function completeCheckout(paymentMethod) {
    const user = JSON.parse(localStorage.getItem('user'));
    const order = {
        user: user,
        cart: cart,
        total: calculateTotal(),
        paymentMethod: paymentMethod,
        date: new Date().toLocaleString()
    };

    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

    alert('Thanh toán thành công!');
    cart = [];
    updateCart();
    document.getElementById('order-summary').style.display = 'none';
    document.getElementById('payment-options').style.display = 'none';
    document.getElementById('payment-gateway').style.display = 'none';
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function viewOrderHistory() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        alert('Bạn cần đăng nhập để xem lịch sử mua hàng.');
        return;
    }

    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const userOrders = orderHistory.filter(order => order.user.email === user.email);

    const orderHistoryDiv = document.getElementById('order-history');
    const historyDetails = orderHistoryDiv.querySelector('.history-details');
    historyDetails.innerHTML = '<h2>Lịch sử mua hàng</h2>';
    userOrders.forEach(order => {
         historyDetails.innerHTML += `
            <div>
                <p>Ngày: ${order.date}</p>
                <p>Phương thức thanh toán: ${order.paymentMethod}</p>
                <p>Tổng tiền: ${order.total} VND</p>
                <h3>Sản phẩm:</h3>
                ${order.cart.map(item => `<p>${item.name} - Số lượng: ${item.quantity} - Giá: ${item.price} VND</p>`).join('')}
                <hr>
            </div>
        `;
    });
    orderHistoryDiv.style.display = 'block';
}

function closeOrderSummary() {
    document.getElementById('order-summary').style.display = 'none';
}

function closePaymentOptions() {
    document.getElementById('payment-options').style.display = 'none';
}

function closePaymentGateway() {
    document.getElementById('payment-gateway').style.display = 'none';
}

function closeOrderHistory() {
    document.getElementById('order-history').style.display = 'none';
}
    function togglePurchaseHistoryButton(show) {
        var button = document.getElementById('view-order-history-btn');
        if (show) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    }

    function viewAccountInfo() {
        // Mã hiện tại của bạn để hiển thị thông tin tài khoản
        togglePurchaseHistoryButton(true);
    }

    function closeAccountInfo() {
        // Mã hiện tại của bạn để ẩn thông tin tài khoản
        togglePurchaseHistoryButton(false);
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
