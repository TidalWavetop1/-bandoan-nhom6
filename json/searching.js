const products = [
    { name: "Combo Gà Rán Giảm Giá", price: 99000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Burger Khoai Tây Chiên", price: 75000, category: "Burger", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Quay", price: 89000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Cay", price: 95000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Không Xương", price: 85000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Nướng", price: 105000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Chiên Xù", price: 110000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt BBQ", price: 120000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Cay", price: 130000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Mật Ong", price: 140000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Tỏi", price: 150000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Chanh", price: 160000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Me", price: 170000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dứa", price: 180000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Xoài", price: 190000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dâu", price: 200000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Việt Quất", price: 210000, category: "Combo", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dừa", price: 220000, category: "Combo", img: "https://via.placeholder.com/300" }
];

let currentPage = 1;
const itemsPerPage = 6;
let filteredProducts = [];

function performSearch() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice").value) || Infinity;

    filteredProducts = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchInput);
        const categoryMatch = category === "" || product.category === category;
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return nameMatch && categoryMatch && priceMatch;
    });

    currentPage = 1;
    displayProducts();
    setupPagination();
}

function displayProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    if (paginatedProducts.length > 0) {
        paginatedProducts.forEach(product => {
            const productElement = document.createElement("div");
            productElement.className = "menu-item";
            productElement.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <span>${product.price.toLocaleString('vi-VN')} VND</span>
            `;
            productContainer.appendChild(productElement);
        });
    } else {
        productContainer.innerHTML = "<p>Không tìm thấy sản phẩm nào phù hợp.</p>";
    }
}

function setupPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.textContent = i;
        pageLink.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = i;
            displayProducts();
            updatePaginationActive();
        });
        paginationContainer.appendChild(pageLink);
    }

    updatePaginationActive();
}

function updatePaginationActive() {
    const paginationLinks = document.querySelectorAll("#pagination a");
    paginationLinks.forEach((link, index) => {
        if (index + 1 === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function toggleAdvancedSearch() {
    const advancedSearchMenu = document.getElementById('advancedSearchMenu');
    advancedSearchMenu.style.display = advancedSearchMenu.style.display === 'none' ? 'block' : 'none';
}

// Thêm sự kiện lắng nghe cho các trường tìm kiếm
document.getElementById("searchInput").addEventListener("input", performSearch);
document.getElementById("categoryFilter").addEventListener("change", performSearch);
document.getElementById("minPrice").addEventListener("input", performSearch);
document.getElementById("maxPrice").addEventListener("input", performSearch);

// Hiển thị tất cả sản phẩm khi trang được tải
window.onload = function () {
    filteredProducts = [...products];
    displayProducts();
    setupPagination();
};