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

const newsLink = document.querySelector('.news-link');
const termsLink = document.querySelector('.terms-link');

newsLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
});

termsLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
});

// Hàm cập nhật URL mà không tải lại trang
function updateURL(hash) {
    const newUrl = window.location.origin + window.location.pathname + hash;
    window.history.replaceState({}, '', newUrl);
}





