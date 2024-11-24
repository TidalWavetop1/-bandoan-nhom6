// State management
let loggedInUser = null;

// Mock database
const users = [
    { email: "admin@gmail.com", password: "1234", username: "admin", role: "admin" }, // Admin user
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

// Handle user registration
function handleRegister(event) {
    event.preventDefault();
    const registerForm = document.querySelector(".register-form");
    const [firstName, lastName, email, password, confirmPassword] = registerForm.elements;

    if (password.value !== confirmPassword.value) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    const existingUser = users.find((user) => user.email === email.value);
    if (existingUser) {
        alert("Email này đã được đăng ký!");
        return;
    }

    users.push({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        role: "user", // Default role
    });

    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    closeRegister();
    toggleLogin(); // Chuyển sang form đăng nhập
}

// Handle user login
function handleLogin(event) {
    event.preventDefault();
    const loginForm = document.querySelector(".login-form");
    const [email, password] = loginForm.elements;

    const user = users.find(
        (user) => user.email === email.value && user.password === password.value
    );

    if (!user) {
        alert("Thông tin đăng nhập không chính xác!");
        return;
    }

    loggedInUser = user;

    // Redirect to admin page if role is admin
    if (user.role === "admin") {
        alert("Chào mừng Admin!");
        window.location.href = "admin.html"; // Chuyển đến trang admin
        return;
    }

    alert(`Chào mừng, ${user.firstName} ${user.lastName}!`);
    closeLogin();
    updateAccountInfo();
}

// Update account info display
function updateAccountInfo() {
    const accountLink = document.getElementById("account");
    if (loggedInUser) {
        accountLink.innerHTML = `<i class="fa-solid fa-user"></i> ${loggedInUser.firstName} ${loggedInUser.lastName}`;
        const dropdown = document.querySelector(".dropdown");
        dropdown.innerHTML = `
            <li><a href="#profile" onclick="viewProfile()">Thông tin tài khoản</a></li>
            <li><a href="javascript:void(0);" onclick="handleLogout()">Đăng xuất</a></li>
        `;
    }
}

function viewProfile() {
    if (!loggedInUser) {
        alert("Bạn chưa đăng nhập!");
        return;
    }

    // Tạo nội dung HTML cho form thông tin tài khoản
    const profileHTML = `
        <div class="overlay" id="profileOverlay">
            <div class="profile-container">
                <span class="close-btn" onclick="closeProfile()">&times;</span>
                <h2>Thông tin tài khoản</h2>
                <form id="profileForm" class="profile-form">
                    <label for="firstName">Họ:</label>
                    <input type="text" id="firstName" name="firstName" value="${loggedInUser.firstName}" required />

                    <label for="lastName">Tên:</label>
                    <input type="text" id="lastName" name="lastName" value="${loggedInUser.lastName}" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="${loggedInUser.email}" readonly />

                    <label for="birthDate">Ngày sinh:</label>
                    <input type="date" id="birthDate" name="birthDate" value="${loggedInUser.birthDate || ''}" />

                    <label for="phone">Số điện thoại:</label>
                    <input type="tel" id="phone" name="phone" value="${loggedInUser.phone || ''}" pattern="[0-9]{10}" placeholder="0123456789" />

                    <button type="submit">Lưu thay đổi</button>
                </form>
            </div>
        </div>
    `;

    // Chèn HTML vào DOM
    document.body.insertAdjacentHTML("beforeend", profileHTML);

    // Thêm sự kiện xử lý form
    document.getElementById("profileForm").addEventListener("submit", saveProfileChanges);
}

// Đóng form thông tin tài khoản
function closeProfile() {
    const overlay = document.getElementById("profileOverlay");
    if (overlay) {
        overlay.remove();
    }
}

// Lưu thay đổi thông tin tài khoản
function saveProfileChanges(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const birthDate = document.getElementById("birthDate").value;
    const phone = document.getElementById("phone").value;

    if (phone && !/^[0-9]{10}$/.test(phone)) {
        alert("Số điện thoại không hợp lệ! Vui lòng nhập đúng định dạng 10 chữ số.");
        return;
    }

    // Cập nhật thông tin người dùng
    loggedInUser.firstName = firstName;
    loggedInUser.lastName = lastName;
    loggedInUser.email = email;
    loggedInUser.birthDate = birthDate;
    loggedInUser.phone = phone;

    alert("Thông tin tài khoản đã được cập nhật!");
    closeProfile();
    updateAccountInfo();
}

// Cập nhật thanh tài khoản
function updateAccountInfo() {
    const accountLink = document.getElementById("account");
    if (loggedInUser) {
        accountLink.innerHTML = `<i class="fa-solid fa-user"></i> ${loggedInUser.firstName} ${loggedInUser.lastName}`;
        const dropdown = document.querySelector(".dropdown");
        dropdown.innerHTML = `
            <li><a href="#profile" onclick="viewProfile()">Thông tin tài khoản</a></li>
            <li><a href="javascript:void(0);" onclick="handleLogout()">Đăng xuất</a></li>
        `;
    }
}

// Handle logout
function handleLogout() {
    if (!loggedInUser) return;

    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
        loggedInUser = null;
        document.getElementById("account").innerHTML = '<i class="fa-solid fa-caret-down"></i>Tài khoản';
        const dropdown = document.querySelector(".dropdown");
        dropdown.innerHTML = `
            <li><a href="javascript:void(0);" onclick="toggleLogin()">Đăng nhập</a></li>
            <li><a href="javascript:void(0);" onclick="toggleRegister()">Đăng ký</a></li>
        `;
        alert("Bạn đã đăng xuất.");
    }
}

// Hàm cập nhật URL mà không tải lại trang
function updateURL(hash) {
    const newUrl = window.location.origin + window.location.pathname + hash;
    window.history.replaceState({}, '', newUrl);
}

// Attach event listeners
document.querySelector(".register-form").addEventListener("submit", handleRegister);
document.querySelector(".login-form").addEventListener("submit", handleLogin);
