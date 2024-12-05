function toggleAddressFields() {
    const addressOption = document.getElementById('address-option').value;
    const accountAddress = document.getElementById('account-address');
    const newAddress = document.getElementById('new-address');

    if (addressOption === 'account') {
        accountAddress.style.display = 'block';
        newAddress.style.display = 'none';
    } else {
        accountAddress.style.display = 'none';
        newAddress.style.display = 'block';
    }
}

function toggleCreditCardFields() {
    const paymentMethod = document.getElementById('payment-method').value;
    const creditCardInfo = document.getElementById('credit-card-info');

    if (paymentMethod === 'credit-card') {
        creditCardInfo.style.display = 'block';
    } else {
        creditCardInfo.style.display = 'none';
    }
}

function showOrderSummary() {
    const orderSummaryModal = document.getElementById('orderSummaryModal');
    const orderSummaryContent = document.getElementById('order-summary-content');

    // Generate order summary content
    const cartItems = getCartItems(); // Assume this function returns the cart items
    let summaryHtml = '<ul>';
    cartItems.forEach(item => {
        summaryHtml += `<li>${item.name} - ${item.quantity} x ${item.price}</li>`;
    });
    summaryHtml += '</ul>';
    summaryHtml += `<p>Tổng tiền: ${calculateTotalPrice()} VND</p>`; // Assume this function calculates the total price

    orderSummaryContent.innerHTML = summaryHtml;
    orderSummaryModal.style.display = 'block';
}

function closeOrderSummary() {
    const orderSummaryModal = document.getElementById('orderSummaryModal');
    orderSummaryModal.style.display = 'none';
}

function saveOrderToHistory(order) {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        loggedInUser.orderHistory = loggedInUser.orderHistory || [];
        loggedInUser.orderHistory.push(order);
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    }
}

function confirmOrder() {
    const fullName = document.getElementById('full-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    const order = {
        date: new Date().toLocaleString(),
        items: getCartItems(),
        total: calculateTotalPrice(),
        shippingInfo: {
            fullName,
            phoneNumber,
            email,
            address,
            paymentMethod
        }
    };
    saveOrderToHistory(order);
    alert('Đơn hàng của bạn đã được xác nhận!');
    closeOrderSummary();
}

document.getElementById('shipping-form').addEventListener('submit', function (event) {
    event.preventDefault();
    showOrderSummary();
});