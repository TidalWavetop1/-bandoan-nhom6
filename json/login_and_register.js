// Hàm mở form đăng nhập
function toggleLogin() {
    document.getElementById('loginOverlay').style.display = 'block';
}

// Hàm đóng form đăng nhập
function closeLogin() {
    document.getElementById('loginOverlay').style.display = 'none';
}

// Hàm mở form đăng ký
function toggleRegister() {
    document.getElementById('registerOverlay').style.display = 'block';
}

// Hàm đóng form đăng ký
function closeRegister() {
    document.getElementById('registerOverlay').style.display = 'none';
}

// Hàm mở form đăng ký từ form đăng nhập
function openRegister() {
    closeLogin(); // Đóng form đăng nhập trước
    toggleRegister(); // Mở form đăng ký
}

// Hàm mở form đăng nhập từ form đăng ký
function openLogin() {
    closeRegister(); // Đóng form đăng ký trước
    toggleLogin(); // Mở form đăng nhập
}

// Hàm xử lý đăng nhập
document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy thông tin từ các trường nhập liệu
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    const messageElement = document.getElementById('loginMessage'); // Phần tử hiển thị thông báo

    // Kiểm tra thông tin đăng nhập (ở đây bạn có thể thay thế bằng API thực tế)
    if (email === 'test@example.com' && password === '123456') {
        alert('Đăng nhập thành công!');
        closeLogin(); // Đóng cửa sổ đăng nhập

        // Chuyển hướng về trang chủ
        window.location.href = 'homepage.html'; // Đường dẫn đến trang chủ

        // Cập nhật nội dung nút tài khoản
        document.getElementById('accountButton').innerHTML = 'Tài khoản của tôi'; // Thay đổi nội dung nút
    } else {
        messageElement.innerText = 'Email hoặc mật khẩu không đúng. Vui lòng thử lại.';
    }
});

// Hàm xử lý đăng ký
document.querySelector('.register-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy thông tin từ các trường nhập liệu
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    const messageElement = document.getElementById('registerMessage'); // Phần tử hiển thị thông báo

    // Giả lập việc đăng ký thành công (ở đây bạn có thể thay thế bằng API thực tế)
    if (email && password) {
        alert('Đăng ký thành công!');
        closeRegister(); // Đóng cửa sổ đăng ký

        // Chuyển hướng về trang chủ
        window.location.href = 'homepage.html'; // Đường dẫn đến trang chủ

        // Cập nhật nội dung nút tài khoản
        document.getElementById('accountButton').innerHTML = 'Tài khoản của tôi'; // Thay đổi nội dung nút
    } else {
        messageElement.innerText = 'Vui lòng điền đầy đủ thông tin.';
    }
});

// Đảm bảo rằng khi người dùng nhấn ra ngoài form, overlay sẽ đóng lại
window.onclick = function (event) {
    const loginOverlay = document.getElementById('loginOverlay');
    const registerOverlay = document.getElementById('registerOverlay');

    if (event.target === loginOverlay) {
        closeLogin();
    }
    if (event.target === registerOverlay) {
        closeRegister();
    }
}



