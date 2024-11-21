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

//Xử lý chức năng tìm kiếm 
const data = [
    "Burger",
    "Pizza",


];

// Lấy các phần tử cần thiết
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// Hàm tìm kiếm
function search(query) {
    // Làm sạch kết quả trước khi tìm kiếm
    searchResults.innerHTML = '';

    // Kiểm tra nếu có từ khóa tìm kiếm
    if (query) {
        // Lọc dữ liệu theo từ khóa
        const filteredData = data.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );

        // Hiển thị kết quả
        if (filteredData.length > 0) {
            filteredData.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.textContent = item;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = '<div>Không tìm thấy kết quả.</div>';
        }
    }
}

// Thêm sự kiện cho nút tìm kiếm
searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    search(query);
});

// Thêm sự kiện cho ô nhập liệu để tìm kiếm theo thời gian thực
searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    search(query);
});