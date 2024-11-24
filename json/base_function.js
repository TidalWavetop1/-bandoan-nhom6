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

document.addEventListener('DOMContentLoaded', () => {
    const newsLink = document.querySelector('.news-link');
    const termsLink = document.querySelector('.terms-link');

    if (newsLink) {
        newsLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    }

    if (termsLink) {
        termsLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    }
});