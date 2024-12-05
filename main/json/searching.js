let currentPage = 1;
const itemsPerPage = 8;
let currentItems = [];

function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    currentItems = filterItems(searchInput, '', '');
    currentPage = 1; // Reset to first page on new search
    displayItems(currentItems, currentPage);
    displayPageNumbers(currentItems);
}

function performAdvancedSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceRange').value;
    currentItems = filterItems(searchInput, categoryFilter, priceRange);
    currentPage = 1; // Reset to first page on new search
    displayItems(currentItems, currentPage);
    displayPageNumbers(currentItems);
}

function filterItems(searchInput, categoryFilter, priceRange) {
    return products.filter(item => {
        const matchesName = item.name.toLowerCase().includes(searchInput);
        const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
        const matchesPrice = priceRange ? checkPriceRange(item.price, priceRange) : true;
        return matchesName && matchesCategory && matchesPrice;
    });
}

function checkPriceRange(price, priceRange) {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
    const [min, max] = priceRange.split('-').map(Number);
    return numericPrice >= min && (max ? numericPrice <= max : true);
}

function displayItems(items, page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = items.slice(startIndex, endIndex);

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = itemsToDisplay.map(item => `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.category || ''}</p>
            <p>${item.price}</p>
        </div>
    `).join('');

    updatePaginationControls(items.length, page);
}

function updatePaginationControls(totalItems, page) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = `Page ${page} of ${totalPages}`;

    document.querySelector('.pagination-controls button[onclick="prevPage()"]').disabled = page === 1;
    document.querySelector('.pagination-controls button[onclick="nextPage()"]').disabled = page === totalPages;
}

function displayPageNumbers(items) {
    const pageNumbersContainer = document.getElementById('page-numbers');
    pageNumbersContainer.innerHTML = '';
    const totalPages = Math.ceil(items.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageNumberElement = document.createElement('button');
        pageNumberElement.innerText = i;
        pageNumberElement.className = i === currentPage ? 'active' : '';
        pageNumberElement.addEventListener('click', () => goToPage(i));
        pageNumbersContainer.appendChild(pageNumberElement);
    }
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    displayItems(currentItems, currentPage);
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayItems(currentItems, currentPage);
    }
}

function nextPage() {
    if (currentPage * itemsPerPage < currentItems.length) {
        currentPage++;
        displayItems(currentItems, currentPage);
    }
}

function toggleAdvancedSearch() {
    const menu = document.getElementById("advancedSearchMenu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block"; // Show menu
    } else {
        menu.style.display = "none"; // Hide menu
    }
}



