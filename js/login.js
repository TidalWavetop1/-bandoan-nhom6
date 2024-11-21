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

// Khi trang được tải
window.onload = function () {
    closeLogin(); // Ẩn form đăng nhập
    closeRegister(); // Ẩn form đăng ký
};

// Xử lý sự kiện cho nút chuyển đến đăng ký
document.getElementById('toRegisterBtn').addEventListener('click', toggleRegister);

// Xử lý sự kiện cho nút chuyển đến đăng nhập
document.getElementById('toLoginBtn').addEventListener('click', toggleLogin);

// Xử lý sự kiện gửi form đăng ký
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector('.register-form');
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn gửi form

        // Lấy dữ liệu từ form
        const formData = new FormData(registerForm);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        // Hiển thị thông tin người dùng (có thể thay thế bằng xử lý khác)
        console.log('Dữ liệu đăng ký:', userData);
        alert('Đăng ký thành công!');

        // Reset form
        registerForm.reset();
    });
});

function closeResetPassword() {
    document.getElementById('resetPasswordOverlay').style.display = 'none';
}

function openResetPassword() {
    document.getElementById('resetPasswordOverlay').style.display = 'flex';
}

// Hàm xử lý gửi form đặt lại mật khẩu
document.addEventListener("DOMContentLoaded", function () {
    const resetPasswordForm = document.querySelector('.reset-password-form');
    resetPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn gửi form

        // Lấy dữ liệu từ form
        const newPassword = resetPasswordForm[0].value; // Mật khẩu mới
        const confirmPassword = resetPasswordForm[1].value; // Xác nhận mật khẩu

        // Kiểm tra xem mật khẩu mới và xác nhận có khớp nhau không
        if (newPassword === confirmPassword) {
            // Thực hiện hành động đặt lại mật khẩu (gửi yêu cầu đến server, v.v.)
            alert('Mật khẩu đã được đặt lại thành công!');
            closeResetPassword(); // Đóng form sau khi thành công
        } else {
            alert('Mật khẩu không khớp. Vui lòng thử lại.');
        }
    });
});

// Hàm xử lý gửi form đăng ký
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn gửi form

        // Lấy dữ liệu từ form
        const password = registerForm[2].value; // Mật khẩu
        const confirmPassword = registerForm[3].value; // Xác nhận mật khẩu

        // Kiểm tra xem mật khẩu và xác nhận có khớp nhau không
        if (password === confirmPassword) {
            // Thực hiện hành động đăng ký (gửi yêu cầu đến server, v.v.)
            alert('Đăng ký thành công!');
            closeRegister(); // Đóng form sau khi thành công
        } else {
            alert('Mật khẩu không khớp. Vui lòng thử lại.');
        }
    });
});
