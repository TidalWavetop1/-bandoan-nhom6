// State management
let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;

// Mock database
let users = JSON.parse(localStorage.getItem('userList')) || [];

// Hàm lưu danh sách người dùng vào LocalStorage
function saveUsers() {
    localStorage.setItem('userList', JSON.stringify(users));
}

// Hàm lưu trạng thái người dùng hiện tại vào LocalStorage
function saveLoggedInUser() {
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
}

// Hàm khôi phục trạng thái tài khoản khi tải lại trang
function restoreAccountState() {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    users = JSON.parse(localStorage.getItem('userList')) || [];

    updateAccountInfo();
}

function updateAccountInfo() {
    const accountLink = document.getElementById("account");
    const dropdown = document.querySelector(".dropdown");

    if (loggedInUser) {
        // Chỉ hiển thị tên người dùng cho người dùng bình thường
        accountLink.innerHTML = `<i class="fa-solid fa-caret-down"></i> ${loggedInUser.username}`;
        let dropdownHTML = `
            <li><a href="#profile" onclick="viewProfile()">Thông tin tài khoản</a></li>
            <li><a href="#order-history" onclick="viewOrderHistory()">Lịch sử mua hàng</a></li>
            <li><a href="javascript:void(0);" onclick="handleLogout()">Đăng xuất</a></li>
        `;
        dropdown.innerHTML = dropdownHTML;
    } else {
        accountLink.innerHTML = '<i class="fa-solid fa-caret-down"></i>Tài khoản';
        dropdown.innerHTML = `
            <li><a href="javascript:void(0);" onclick="toggleLogin()">Đăng nhập</a></li>
            <li><a href="javascript:void(0);" onclick="toggleRegister()">Đăng ký</a></li>
        `;
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

// Hàm đăng ký
function handleRegister(event) {
    event.preventDefault();
    const registerForm = document.querySelector(".register-form");
    const [name, number, address, e_mail, userName, password, confirmPassword] = registerForm.elements;

    if (!validateEmail(e_mail.value) || !validatePhoneNumber(number.value) || !validatePassword(password.value)) {
        alert("Vui lòng kiểm tra lại thông tin nhập vào!");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    const existingUser = users.find((user) => user.email === e_mail.value || user.username === userName.value);
    if (existingUser) {
        alert("Email hoặc tên người dùng đã tồn tại!");
        return;
    }

    const newUser = {
        fullName: name.value,
        phoneNumber: number.value,
        address: address.value,
        email: e_mail.value,
        username: userName.value,
        password: password.value,
        role: "Khách hàng",
        status: "Active",
        orderHistory: [] // Initialize order history
    };

    users.push(newUser);
    saveUsers();

    // Gửi thông tin đăng ký đến admin
    // notifyAdmin(newUser);

    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    closeRegister();
    toggleLogin();
    registerForm.reset();
}

// Hàm đăng nhập
function handleLogin(event) {
    let users = JSON.parse(localStorage.getItem('userList'));

    event.preventDefault();
    const loginForm = document.querySelector(".login-form");
    const [userName, password] = loginForm.elements;

    const user = users.find(
        (user) => (user.username === userName.value || user.email === userName.value) && user.password === password.value && user.status === "Active"// Allow login with email
    );
    if (!user) {
        alert("Thông tin đăng nhập không chính xác hoặc đã bị khóa!");
        return;
    }

    loggedInUser = user;
    saveLoggedInUser();
    alert(`Chào mừng, ${user.fullName}!`);
    closeLogin();
    updateAccountInfo();
    loginForm.reset();
}

// Hàm đăng xuất
function handleLogout() {
    if (!loggedInUser) return;

    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
        loggedInUser = null;
        saveLoggedInUser();
        alert("Bạn đã đăng xuất.");
        updateAccountInfo();
    }
}

// Hàm hiển thị thông tin tài khoản
function viewProfile() {
    if (!loggedInUser) {
        alert("Bạn chưa đăng nhập!");
        return;
    }

    const profileHTML = `
        <div class="overlay" id="profileOverlay">
            <div class="profile-container">
                <span class="close-btn" onclick="closeProfile()">&times;</span>
                <h2>Thông tin tài khoản</h2>
                <form id="profileForm" class="profile-form">
                    <label for="name">Họ và tên:</label>
                    <input type="text" id="name" name="name" value="${loggedInUser.fullName}" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="${loggedInUser.email}" required>
                    <label for="number">Số điện thoại:</label>
                    <input type="text" id="number" name="number" value="${loggedInUser.phoneNumber}" required>
                    <label for="address">Địa chỉ:</label>
                    <input type="text" id="address" name="address" value="${loggedInUser.address}" required>
                    <button type="submit">Cập nhật thông tin</button>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', profileHTML);

    document.getElementById('profileForm').addEventListener('submit', function (event) {
        event.preventDefault();
        updateProfile();
    });
}

// Hàm hiển thị lịch sử mua hàng
function viewOrderHistory() {
    if (!loggedInUser) {
        alert("Bạn chưa đăng nhập!");
        return;
    }

    const orderHistoryHTML = `
        <div class="overlay" id="orderHistoryOverlay">
            <div class="order-history-container">
                <span class="close-btn" onclick="closeOrderHistory()">&times;</span>
                <h2>Lịch sử mua hàng</h2>
                <div id="orderHistoryContent">
                    ${loggedInUser.orderHistory && loggedInUser.orderHistory.length > 0 ? loggedInUser.orderHistory.map(order => `
                        <div class="order-item">
                            <p><strong>Ngày:</strong> ${order.date}</p>
                            <p><strong>Sản phẩm:</strong> ${order.items.map(item => `${item.name} x ${item.quantity}`).join(', ')}</p>
                            <p><strong>Tổng tiền:</strong> ${order.total}</p>
                        </div>
                    `).join('') : '<p>Bạn chưa có đơn hàng nào.</p>'}
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', orderHistoryHTML);
}

// Hàm đóng overlay lịch sử mua hàng
function closeOrderHistory() {
    const orderHistoryOverlay = document.getElementById("orderHistoryOverlay");
    if (orderHistoryOverlay) {
        orderHistoryOverlay.remove();
    }
}

// Hàm cập nhật thông tin tài khoản
function updateProfile() {
    const profileForm = document.getElementById('profileForm');
    const [Name, Email, number, Address] = profileForm.elements;

    loggedInUser.fullName = Name.value;
    loggedInUser.email = Email.value;
    loggedInUser.phoneNumber = number.value;
    loggedInUser.address = Address.value;

    users = users.map(khach => {
        if (loggedInUser.userId === khach.userId) {
            return { ...khach, fullName: Name.value, email: Email.value, phoneNumber: number.value, address: Address.value };
        }
        return khach;
    });
    saveLoggedInUser();
    saveUsers();
    alert("Cập nhật thông tin thành công!");
    closeProfile();
    updateAccountInfo();
}

// Hàm đóng overlay tài khoản
function closeProfile() {
    const profileOverlay = document.getElementById("profileOverlay");
    if (profileOverlay) {
        profileOverlay.remove();
    }
}

// Hàm đóng overlay đăng nhập
function closeLogin() {
    document.getElementById('loginOverlay').style.display = 'none';
}

// Hàm mở overlay đăng nhập
function openLogin() {
    document.getElementById('loginOverlay').style.display = 'flex';
}

// Hàm đóng overlay đăng ký
function closeRegister() {
    document.getElementById('registerOverlay').style.display = 'none';
}

// Hàm mở overlay đăng ký
function openRegister() {
    document.getElementById('registerOverlay').style.display = 'flex';
}

// Hàm chuyển đổi giữa form đăng nhập và đăng ký
function toggleRegister() {
    closeLogin(); // Đóng form đăng nhập
    openRegister(); // Mở form đăng ký
}

// Hàm chuyển đổi giữa form đăng ký và đăng nhập
function toggleLogin() {
    closeRegister(); // Đóng form đăng ký
    openLogin(); // Mở form đăng nhập
}

// Khởi tạo trạng thái khi tải trang
window.onload = restoreAccountState;

// Đăng ký sự kiện
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".register-form").addEventListener("submit", handleRegister);
    document.querySelector(".login-form").addEventListener("submit", handleLogin);
});
