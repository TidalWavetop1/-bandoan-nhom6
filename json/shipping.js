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

function confirmOrder() {
    // Handle order confirmation logic here
    alert('Đơn hàng của bạn đã được xác nhận!');
    closeOrderSummary();
}

document.getElementById('shipping-form').addEventListener('submit', function (event) {
    event.preventDefault();
    showOrderSummary();
});