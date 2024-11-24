// Thông tin đăng nhập giả lập
const USER_CREDENTIALS = {
    firstName="admin",
    lastName="web",
    email: admin@gmail.com,
    password: "1234"
};

// Hàm cập nhật URL mà không tải lại trang
function updateURL(hash) {
    const newUrl = window.location.origin + window.location.pathname + hash;
    window.history.replaceState({}, '', newUrl);
}

// Hàm hiển thị dashboard và ẩn form đăng nhập
function showDashboard() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
    document.getElementById("dashboard").style.display = "block";

    // Ẩn các phần khác trên dashboard
    const sections = ['users', 'products', 'orders', 'product-statistics', 'customer-statistics'];
    sections.forEach(section => {
        document.getElementById(section).style.display = "none";
    });
}

// Hàm xử lý đăng xuất
function logout() {
    // Ẩn bảng điều khiển admin và hiển thị form đăng nhập
    document.getElementById("admin-dashboard").style.display = "none";
    document.getElementById("login-form").style.display = "flex";

    // Xóa thông tin đăng nhập
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Cập nhật URL về trang đăng nhập
    updateURL('#login');

    console.log('Đã đăng xuất thành công.');
}

// Hàm kiểm tra thông tin đăng nhập
function validateLogin(username, password, listusr = []) {
    // Kiểm tra thông tin từ danh sách người dùng trong localStorage
    for (const usr of listusr) {
        if (username === usr.Username && password === usr.Password) {
            if (usr.Trangthai === "Hoạt động") {
                return { success: true, message: "success" };
            } else if (usr.Trangthai === "Đã khóa") {
                return { success: false, message: "Tài khoản đã bị khóa!" };
            }
        }
    }

    // Kiểm tra thông tin đăng nhập giả lập
    if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
        return { success: true, message: "success" };
    }

    // Không tìm thấy thông tin phù hợp
    return { success: false, message: "Tên đăng nhập hoặc mật khẩu không đúng!" };
}

// Hàm đăng nhập
function login() {
    const listusr = JSON.parse(localStorage.getItem('listUsers')) || [];
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const result = validateLogin(username, password, listusr);
    if (result.success) {
        showDashboard();
        updateURL('#dashboard');
    } else {
        alert(result.message);
    }
}

// Hàm kiểm tra thông tin đăng nhập từ URL
function checkLoginFromURL() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");
    const password = params.get("password");

    if (username && password) {
        const listusr = JSON.parse(localStorage.getItem('listUsers')) || [];
        const result = validateLogin(username, password, listusr);

        if (result.success) {
            showDashboard();
            updateURL('#dashboard');
        } else {
            alert(result.message);
            updateURL('#login');
        }
    }
}
