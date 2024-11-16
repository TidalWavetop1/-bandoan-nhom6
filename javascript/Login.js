const USER_CREDENTIALS = {
    username: "admin",
    password: "1234"
};

// Hàm đăng nhập
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("login-error");

    // Kiểm tra thông tin đăng nhập
    if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
        showDashboard();
    } else {
        loginError.textContent = "Tên đăng nhập hoặc mật khẩu không đúng!";
    }
}

// Hàm đăng xuất
function logout() {
    document.getElementById("admin-dashboard").style.display = "none";
    document.getElementById("login-form").style.display = "flex";
    document.getElementById("username").value = ""; // Xóa dữ liệu đăng nhập
    document.getElementById("password").value = "";
    // Xóa tham số URL bằng cách tải lại trang
    window.location.href = window.location.origin + window.location.pathname;
    
}

// Hàm hiển thị dashboard và ẩn form đăng nhập
function showDashboard() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
}

// Hàm kiểm tra thông tin đăng nhập từ URL
function checkLoginFromURL() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");
    const password = params.get("password");

    // Kiểm tra thông tin đăng nhập từ URL
    if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
        showDashboard();
    }
}