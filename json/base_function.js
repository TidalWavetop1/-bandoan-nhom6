function filterMenu(category) {
    const items = document.querySelectorAll('.menu-items .item');
    items.forEach(item => {
        if (category === '' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Lấy các nút "Tin tức" và "Điều khoản"
const newsLink = document.querySelector('.news-link');
const termsLink = document.querySelector('.terms-link');

// Thêm sự kiện click cho nút "Tin tức"
newsLink.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    window.location.href = 'index.html'; // Thay đổi đường dẫn tới trang chủ
});

// Thêm sự kiện click cho nút "Điều khoản"
termsLink.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    window.location.href = 'index.html'; // Thay đổi đường dẫn tới trang chủ
});
