localStorage.setItem('products', JSON.stringify([
    { ID: 1, name: "Gà Rán", price: "99,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 2, name: "Burger Gà", price: "75,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 3, name: "Gà Quay", price: "89,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 4, name: "Phi-lê Gà Quay", price: "95,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 5, name: "Gà Không Xương", price: "85,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 6, name: "Đùi Gà Quay", price: "105,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 7, name: "Gà Chiên Xù", price: "110,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 8, name: "Gà Sốt BBQ", price: "120,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 9, name: "Gà Sốt Cay", price: "130,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 10, name: "Gà Sốt Mật Ong", price: "140,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 11, name: "Mì Ý Gà Zinger", price: "150,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 12, name: "Gà Sốt Chanh", price: "160,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 13, name: "Khoai Tây Nghiền (Vừa)", price: "170,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 14, name: "Gà Sốt Dứa", price: "180,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 15, name: "Khoai Tây Nghiền (Lớn)", price: "190,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 16, name: "Gà Sốt Dâu", price: "200,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 17, name: "Khoai Tây Nghiền (Đại)", price: "210,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 18, name: "Khoai Tây Chiên (Vừa)", price: "80,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 19, name: "Khoai Tây Chiên (Lớn)", price: "85,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 20, name: "Khoai Tây Chiên (Đại)", price: "90,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 21, name: "Burger Bò", price: "95,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 22, name: "Burger Phô Mai", price: "100,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 23, name: "Burger Cá", price: "105,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 24, name: "Mì Ý Sốt Bò)", price: "110,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 25, name: "Bắp Cải Trộn (Vừa)", price: "115,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 26, name: "Bắp Cải Trộn (Lớn)", price: "120,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 27, name: "Bắp Cải Trộn (Đại)", price: "125,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 28, name: "Combo Gà Nướng", price: "130,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 29, name: "Mì Ý Phi-Lê Gà Quay", price: "135,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 30, name: "Combo Gà Sốt BBQ", price: "140,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 31, name: "Combo Gà Sốt Cay", price: "145,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 32, name: "Salad Hạt", price: "150,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 33, name: "Salad Pop", price: "155,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 34, name: "Mì Ý Gà Rán", price: "160,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 35, name: "3 Cá Thanh", price: "165,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 36, name: "Combo Gà Sốt Dứa", price: "170,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 37, name: "Combo Gà Sốt Xoài", price: "175,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 38, name: "Combo Gà Sốt Dâu", price: "180,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 39, name: "4 Phô Mai Viên", price: "185,000 VND", img: "https://via.placeholder.com/300" },
    { ID: 40, name: "Combo Gà Sốt Dừa", price: "190,000 VND", img: "https://via.placeholder.com/300" }
]));

let cart = [];

function openCart() {
    const cartModal = document.getElementById('cartModal');
    const overlay = document.getElementById('pageOverlay');

    if(cartModal){
        cartModal.style.display ='block';
    }

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
    const user = localStorage.getItem('loggedInUser');
    console.log('User in localStorage:', user); // Thêm dòng này để kiểm tra giá trị của user
    return !!user;
}


// Hàm lưu sản phẩm vào LocalStorage
function saveProduct(product) {
    let products = localStorage.getItem('products');
    products = products ? JSON.parse(products) : [];

    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}


function addToCart(productId, quantity) {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!isLoggedIn()) {
        alert('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.');
        return;
    }

    // Lấy danh sách sản phẩm từ localStorage
    let products = localStorage.getItem('products');
    products = products ? JSON.parse(products) : [];

    // Tìm sản phẩm dựa trên productId
    const product = products.find(p => p.ID === parseInt(productId));
    if (!product) {
        alert('Sản phẩm không tồn tại.');
        console.log('Không tìm thấy sản phẩm với ID:', productId); // In ra để debug
        return;
    }

    // Lấy thông tin người dùng đang đăng nhập từ localStorage
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        alert('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.');
        return;
    }

    // Khởi tạo giỏ hàng nếu chưa có
    if (!loggedInUser.cart) {
        loggedInUser.cart = [];
    }

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    let existingProduct = loggedInUser.cart.find(item => item.ID === product.ID);
    if (existingProduct) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        existingProduct.soluong += quantity;
    } else {
        // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
        loggedInUser.cart.push({
            ID: product.ID,
            name: product.name,
            price: product.price,
            img: product.img,
            soluong: quantity,
            note: "Không có ghi chú" // Thêm ghi chú mặc định
        });
    }

    // Lưu lại thông tin người dùng vào localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

    // Cập nhật thông báo cho người dùng
    alert('Sản phẩm đã được thêm vào giỏ hàng.');

    updateCart();
}

// Khởi tạo mảng sản phẩm nếu chưa tồn tại trong localStorage
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify([]));
}


//cập nhật giỏ hàng
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-btn');
    const gioHangTrong = document.getElementById('empty-cart');

    cartItems.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || !loggedInUser.cart || loggedInUser.cart.length === 0) {
        if (gioHangTrong) {
            gioHangTrong.style.display = 'block';  // Kiểm tra trước khi thay đổi style
        }
        totalPriceElement.innerText = '0₫';
        checkoutButton.disabled = true;
        cartCount.innerText = 0;  // Đảm bảo cartCount là 0 khi giỏ hàng rỗng
        return;
    }

    loggedInUser.cart.forEach(item => {
        const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, "").replace(",", ""));
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
           <div class="remove-btn">
               <button onclick="removeFromCart(${item.ID})">Xóa</button>
           </div>       
        </div>
        `;
        cartItems.appendChild(itemElement);

        total += numericPrice * item.soluong;
        totalItems += item.soluong;
        cartCount.innerText = totalItems; // Cập nhật lại số lượng giỏ hàng
    });

    totalPriceElement.innerText = `${total.toLocaleString()}₫`;
    if (gioHangTrong) {
        gioHangTrong.style.display = 'none';  // Kiểm tra trước khi thay đổi style
    }

    // Kích hoạt lại nút thanh toán nếu có sản phẩm trong giỏ hàng
    if (checkoutButton && loggedInUser.cart.length > 0) {
        checkoutButton.disabled = false;
    }
}

function removeFromCart(productId) {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || !loggedInUser.cart) {
        console.error("No logged-in user or cart found.");
        return;
    }

    // Lọc bỏ sản phẩm khỏi giỏ hàng của loggedInUser dựa trên productId
    loggedInUser.cart = loggedInUser.cart.filter(item => item.ID !== productId);

    // Lưu lại thông tin người dùng đã cập nhật vào localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

    // Cập nhật giỏ hàng trên giao diện
    updateCart();
}

// Hàm mở form thông tin giao hàng
function showShippingForm() {
    const cartModal = document.querySelector('#cartModal');
    const shippingModal = document.querySelector('#shippingFormModal');
    if (cartModal && shippingModal) {
        cartModal.classList.remove('show');
        shippingModal.classList.add('show');
    }
}

// Hàm đóng form thông tin giao hàng
function closeShippingForm() {
    const shippingModal = document.querySelector('#shippingFormModal');
    const overlay = document.querySelector('#pageOverlay');
    if (shippingModal && overlay) {
        shippingModal.classList.remove('show');
        overlay.classList.remove('show');
    }
}

// Hàm trở về giỏ hàng từ form thông tin giao hàng
function backToCart() {
    const cartModal = document.querySelector('#cartModal');
    const shippingModal = document.querySelector('#shippingFormModal');
    if (cartModal && shippingModal) {
        shippingModal.classList.remove('show');
        cartModal.classList.add('show');
    }
}

// Hàm hiển thị hoặc ẩn thông tin thẻ tín dụng
function toggleCreditCardFields() {
    const paymentMethod = document.getElementById('payment-method').value;
    const creditCardInfo = document.getElementById('credit-card-info');
    if (paymentMethod === 'credit-card') {
        creditCardInfo.style.display = 'block';
    } else {
        creditCardInfo.style.display = 'none';
    }
}

// Handle the shipping form submission
document.getElementById('shipping-form').addEventListener('Đặt hàng', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const province = document.getElementById('province').value;
    const district = document.getElementById('district').value;
    const ward = document.getElementById('ward').value;

    // Handle the form data as needed, e.g., send it to the server or store it in localStorage
    console.log({
        fullName,
        phoneNumber,
        email,
        address,
        paymentMethod,
        province,
        district,
        ward
    });

    // Redirect to a confirmation page or show a success message
    alert('Shipping information submitted successfully!');
    closeShippingForm();
});

 // hàm thanh toán
function checkout() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || !loggedInUser.cart || loggedInUser.cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống.');
        return;
    }

    if (!loggedInUser) {
        alert('Bạn cần đăng nhập để thanh toán.');
        return;
    }
 // Redirect to the shipping information form
 showShippingForm();
    updateCart();

}



// Gọi hàm cập nhật giỏ hàng khi tải trang
window.onload = function() {
    localStorage.removeItem('loggedInUser');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        updateCart();
    }
};



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
