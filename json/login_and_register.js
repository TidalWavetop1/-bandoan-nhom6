// State management
let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser ')) || null;

// Mock database
const users = JSON.parse(localStorage.getItem('users')) || [
    { email: "admin@gmail.com", password: "1234", username: "admin", role: "admin", status: "active" }, // Admin user
];

// Open and close login/register modals
function toggleLogin() {
    document.getElementById("loginOverlay").style.display = "block";
}

function toggleRegister() {
    document.getElementById("registerOverlay").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginOverlay").style.display = "none";
}

function closeRegister() {
    document.getElementById("registerOverlay").style.display = "none";
}

function openRegister() {
    closeLogin();
    toggleRegister();
}

function openLogin() {
    closeRegister();
    toggleLogin();
}
function login(username, password) {
    // Giả sử bạn có một hàm để xác thực người dùng
    const user = authenticateUser(username, password);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Đăng nhập thành công!');
        // Các hành động khác sau khi đăng nhập thành công
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
}
// Hàm kiểm tra định dạng email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Hàm kiểm tra định dạng số điện thoại
function validatePhoneNumber(number) {
    const phonePattern = /^[0-9]{10,15}$/; // Giả sử số điện thoại có từ 10 đến 15 chữ số
    return phonePattern.test(number);
}

// Hàm kiểm tra định dạng mật khẩu
function validatePassword(password) {
    return password.length >= 6; // Độ dài tối thiểu là 6 ký tự
}

// Cập nhật hàm handleRegister
function handleRegister(event) {
    event.preventDefault();
    const registerForm = document.querySelector(".register-form");
    const [name, number, address, email, userName, password, confirmPassword] = registerForm.elements;

    // Kiểm tra định dạng email
    if (!validateEmail(email.value)) {
        alert("Email không hợp lệ! Vui lòng nhập lại.");
        return;
    }

    // Kiểm tra định dạng số điện thoại
    if (!validatePhoneNumber(number.value)) {
        alert("Số điện thoại không hợp lệ! Vui lòng nhập lại.");
        return;
    }

    // Kiểm tra định dạng mật khẩu
    if (!validatePassword(password.value)) {
        alert("Mật khẩu phải có ít nhất 6 ký tự! Vui lòng nhập lại.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    const existingUser = users.find((user) => user.email === email.value);
    if (existingUser) {
        alert("Email này đã được đăng ký!");
        return;
    }

    const newUser = {
        name: name.value,
        number: number.value,
        address: address.value,
        email: email.value,
        userName: userName.value,
        password: password.value,
        role: "user",
        status: "active"
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    closeRegister();
    toggleLogin();

    // Clear input fields
    registerForm.reset();
}

// Handle user login
function handleLogin(event) {
    event.preventDefault();
    const loginForm = document.querySelector(".login-form");
    const [userName, password] = loginForm.elements;

    const user = users.find(
        (user) => user.userName === userName.value && user.password === password.value
    );

    if (!user) {
        alert("Thông tin đăng nhập không chính xác!");
        return;
    }

    // Kiểm tra trạng thái người dùng
    if (user.status === "loggedOut") {
        alert("Bạn đã đăng xuất. Vui lòng đăng nhập lại.");
        return;
    }

    loggedInUser = user;
    localStorage.setItem('loggedInUser ', JSON.stringify(loggedInUser));

    // Redirect to admin page if role is admin
    if (user.role === "admin") {
        alert("Chào mừng Admin!");
        window.location.href = "admin.html"; // Chuyển đến trang admin
        return;
    }

    alert(`Chào mừng, ${user.name}!`);
    closeLogin();
    updateAccountInfo();

    // Clear input fields
    loginForm.reset();
}

// Update account info display
function updateAccountInfo() {
    const accountLink = document.getElementById("account");
    if (loggedInUser) {
        accountLink.innerHTML = `<i class="fa-solid fa-user"></i> ${loggedInUser.name}`;
        const dropdown = document.querySelector(".dropdown");
        dropdown.innerHTML = `
            <li><a href="#profile" onclick="viewProfile()">Thông tin tài khoản</a></li>
            <li><a href="javascript:void(0);" onclick="handleLogout()">Đăng xuất</a></li>
        `;
    }
}

// View user profile
function viewProfile() {
    if (!loggedInUser) {
        alert("Bạn chưa đăng nhập!");
        return;
    }

    // Create HTML content for the profile form
    const profileHTML = `
        <div class="overlay" id="profileOverlay">
            <div class="profile-container">
                <span class="close-btn" onclick="closeProfile()">&times;</span>
                <h2>Thông tin tài khoản</h2>
                <form id="profileForm" class="profile-form">
                    <label for="name">Họ và tên:</label>
                    <input type="text" id="name" name="name " value="${loggedInUser.name}" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="${loggedInUser.email}" required>
                    <label for="number">Số điện thoại:</label>
                    <input type="text" id="number" name="number" value="${loggedInUser.number}" required>
                    <label for="address">Địa chỉ:</label>
                    <input type="text" id="address" name="address" value="${loggedInUser.address}" required>
                    <button type="submit">Cập nhật thông tin</button>
                </form>
                <button id="view-purchase-history" style="display: block;">Xem lịch sử mua hàng</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', profileHTML);
}

// Close profile overlay
function closeProfile() {
    const profileOverlay = document.getElementById("profileOverlay");
    if (profileOverlay) {
        profileOverlay.remove();
    }
}

// Handle user logout
function handleLogout() {
    if (!loggedInUser) return;

    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
        // Thay đổi trạng thái người dùng thành "loggedOut"
        loggedInUser.status = "loggedOut";
        localStorage.setItem('loggedInUser  ', JSON.stringify(loggedInUser));

        // Cập nhật giao diện người dùng
        document.getElementById("account").innerHTML = '<i class="fa-solid fa-caret-down"></i>Tài khoản';
        const dropdown = document.querySelector(".dropdown");
        dropdown.innerHTML = `
            <li><a href="javascript:void(0);" onclick="toggleLogin()">Đăng nhập</a></li>
            <li><a href="javascript:void(0);" onclick="toggleRegister()">Đăng ký</a></li>
        `;
        alert("Bạn đã đăng xuất.");
    }
}

function togglePurchaseHistoryButton(show) {
    var button = document.getElementById('view-purchase-history');
    if (button) {
        if (show) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
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

// Các hàm hiện tại của bạn
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

// Initialize account info on page load
window.onload = function () {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser  ')) || null;
    updateAccountInfo();
};

// Attach event listeners
document.querySelector(".register-form").addEventListener("submit", handleRegister);
document.querySelector(".login-form").addEventListener("submit", handleLogin);