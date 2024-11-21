// Thông tin đăng nhập giả lập
const USER_CREDENTIALS = {
    username: "admin",
    password: "1234"
};

// Hàm đăng nhập
function login() {
    let listusr = JSON.parse(localStorage.getItem('listUsers'));

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("login-error");
    const customererror = document.getElementById("login-error");

    // Kiểm tra thông tin đăng nhập
    listusr.forEach(usr => {
        if(usr.Trangthai === "Hoạt động" && username === usr.username && password === usr.password)
            showDashboard();
        else if(usr.Trangthai === "Đã khóa" && username === usr.username && password === usr.password)
            alert("Tài khoản đã bị khóa!");
    });
    if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
        showDashboard();
    } 
    else if(username != USER_CREDENTIALS.username && password != USER_CREDENTIALS.password) {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}

// Hàm đăng xuất
function logout() {
    // Ẩn bảng điều khiển admin và hiển thị form đăng nhập
    document.getElementById("admin-dashboard").style.display = "none";
    document.getElementById("login-form").style.display = "flex";
    
    // Xóa dữ liệu đăng nhập
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Clear URL parameters without reloading the page
    const urlWithoutParams = window.location.origin + window.location.pathname;
    window.history.pushState({}, '', urlWithoutParams);

    console.log('Đã đăng xuất thành công.');
}


// Hàm hiển thị dashboard và ẩn form đăng nhập
function showDashboard() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById('users').style.display = "none";
    document.getElementById('products').style.display = "none";
    document.getElementById('orders').style.display = "none";
    document.getElementById('product-statistics').style.display = "none";
    document.getElementById('customer-statistics').style.display = "none";
}

// Hàm kiểm tra thông tin đăng nhập từ URL
function checkLoginFromURL() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");
    const password = params.get("password");

    // Kiểm tra thông tin đăng nhập từ URL
    if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
        showDashboard();

        // Xóa các tham số trên URL sau khi đăng nhập thành công 
        const urlWithoutParams = window.location.origin + window.location.pathname; 
        window.history.replaceState({}, '', urlWithoutParams + '#dashboard');
    }
}
