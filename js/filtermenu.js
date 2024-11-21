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
