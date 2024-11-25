// State management
let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;

// Mock database
let users = JSON.parse(localStorage.getItem('users')) || [
    { email: "admin@gmail.com", password: "1234", username: "admin", name: "Admin User", role: "admin", status: "active" } // Admin user
];

// Hàm lưu danh sách người dùng vào LocalStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Hàm lưu trạng thái người dùng hiện tại vào LocalStorage
function saveLoggedInUser() {
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
}

// Hàm khôi phục trạng thái tài khoản khi tải lại trang
function restoreAccountState() {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    users = JSON.parse(localStorage.getItem('users')) || users;
    updateAccountInfo();
}

// Hàm cập nhật giao diện tài khoản
function updateAccountInfo() {
    const accountLink = document.getElementById("account");
    if (loggedInUser) {
        accountLink.innerHTML = `<i class="fa-solid fa-user"></i> ${loggedInUser.name}`;
        const dropdown = document.querySelector(".dropdown");
        dropdown.innerHTML = `
            <li><a href="#profile" onclick="viewProfile()">Thông tin tài khoản</a></li>
            <li><a href="javascript:void(0);" onclick="handleLogout()">Đăng xuất</a></li>
        `;
    } else {
        accountLink.innerHTML = '<i class="fa-solid fa-caret-down"></i>Tài khoản';
        const dropdown = document.querySelector(".dropdown");
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
    const [name, number, address, email, userName, password, confirmPassword] = registerForm.elements;

    if (!validateEmail(email.value) || !validatePhoneNumber(number.value) || !validatePassword(password.value)) {
        alert("Vui lòng kiểm tra lại thông tin nhập vào!");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    const existingUser = users.find((user) => user.email === email.value || user.userName === userName.value);
    if (existingUser) {
        alert("Email hoặc tên người dùng đã tồn tại!");
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
    saveUsers();

    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    closeRegister();
    toggleLogin();
    registerForm.reset();
}

// Hàm đăng nhập
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

    loggedInUser = user;
    saveLoggedInUser();
    alert(`Chào mừng, ${user.name}!`);
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
                    <input type="text" id="name" name="name" value="${loggedInUser.name}" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="${loggedInUser.email}" required>
                    <label for="number">Số điện thoại:</label>
                    <input type="text" id="number" name="number" value="${loggedInUser.number}" required>
                    <label for="address">Địa chỉ:</label>
                    <input type="text" id="address" name="address" value="${loggedInUser.address}" required>
                    <button type="submit">Cập nhật thông tin</button>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', profileHTML);
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
document.querySelector(".register-form").addEventListener("submit", handleRegister);
document.querySelector(".login-form").addEventListener("submit", handleLogin);
