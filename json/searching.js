let currentpage = 1;
const itemsPerpage = 8;
let currentItems = [];

function performSearch() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    currentItems = filterItems(searchInput, '', '');
    currentpage = 1; // Reset to first page on new search
    currentItems.forEach(item => console.log(item.img));
    displayCacSP(currentItems, currentpage);
    displayPageNumbers(currentItems);
}

function performAdvancedSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceRange').value;
    currentItems = filterItems(searchInput, categoryFilter, priceRange);
    currentpage = 1; // Reset to first page on new search
    displayCacSP(currentItems, currentpage);
    displayPageNumbers(currentItems);
}

function filterItems(searchInput, categoryFilter, priceRange) {
    return products.filter(item => {
        const matchesName = String(item.name).toLowerCase().includes(searchInput);
        const matchesCategory = categoryFilter ? String(item.category) === categoryFilter : true;
        const matchesPrice = priceRange ? checkPriceRange(Number(item.price), priceRange) : true;
        return matchesName && matchesCategory && matchesPrice;
    });
}

function checkPriceRange(price, priceRange) {
    const numericPrice = parseInt(String(price).replace(/[^0-9]/g, ''), 10);
    const [min, max] = priceRange.split('-').map(Number);
    return numericPrice >= min && (max ? numericPrice <= max : true);
}

function displayCacSP(items, page) {
    const startIndex = (page - 1) * itemsPerpage;
    const endIndex = startIndex + itemsPerpage;
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
    const totalPages = Math.ceil(totalItems / itemsPerpage);
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = `Page ${page} of ${totalPages}`;

    document.querySelector('.pagination-controls button[onclick="prevpage()"]').disabled = page === 1;
    document.querySelector('.pagination-controls button[onclick="nextpage()"]').disabled = page === totalPages;
}

function displayPageNumbers(items) {
    const pageNumbersContainer = document.getElementById('page-numbers');
    pageNumbersContainer.innerHTML = '';
    console.log(items);
    const totalPages = Math.ceil(items.length() / itemsPerpage);

    for (let i = 1; i <= totalPages; i++) {
        const pageNumberElement = document.createElement('button');
        pageNumberElement.innerText = i;
        pageNumberElement.className = i === currentpage ? 'active' : '';
        pageNumberElement.addEventListener('click', () => goToPage(i));
        pageNumbersContainer.appendChild(pageNumberElement);
    }
}

function goToPage(pageNumber) {
    currentpage = pageNumber;
    displayCacSP(currentItems, currentpage);
}

function prevpage() {
    if (currentpage > 1) {
        currentpage--;
        displayCacSP(currentItems, currentpage);
    }
}

function nextpage() {
    if (currentpage * itemsPerpage < currentItems.length) {
        currentpage++;
        displayCacSP(currentItems, currentpage);
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



