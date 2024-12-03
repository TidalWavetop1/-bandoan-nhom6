const products = [
    { name: "Gà Rán", price: "99,000 VND", img: "image/Product_Menu/Gà_Rán.png", category: "Gà" },
    { name: "Burger Gà", price: "75,000 VND", img: "image/Product_Menu/Burger_Gà.png", category: "Burger" },
    { name: "Gà Quay", price: "89,000 VND", img: "image/Product_Menu/Gà_quay.png", category: "Gà" },
    { name: "Phi-lê Gà Quay", price: "95,000 VND", img: "image/Product_Menu/Phi-lê Gà Quay.jpg", category: "Gà" },
    { name: "Gà Không Xương", price: "85,000 VND", img: "image/Product_Menu/Gà_Ko_xương.png", category: "Gà" },
    { name: "Đùi Gà Quay", price: "105,000 VND", img: "image/Product_Menu/Đùi_gà_quay.png", category: "Gà" },
    { name: "Gà Chiên Xù", price: "110,000 VND", img: "image/Product_Menu/Gà_Chiên_Xù.jpg", category: "Gà" },
    { name: "Gà Sốt BBQ", price: "120,000 VND", img: "image/Product_Menu/Gà_sốt_BBQ.png", category: "Gà" },
    { name: "Gà Sốt Cay", price: "130,000 VND", img: "image/Product_Menu/Gà_sốt_cay.png", category: "Gà" },
    { name: "Gà Sốt Mật Ong", price: "140,000 VND", img: "image/Product_Menu/Gà_sốt_mật_ong.png", category: "Gà" },
    { name: "Mì Ý Gà Zinger", price: "150,000 VND", img: "image/Product_Menu/Mì_Ý_gà_Zinger.png", category: "Mì Ý" },
    { name: "Gà Sốt Chanh", price: "160,000 VND", img: "image/Product_Menu/gà_sốt_chanh.png", category: "Gà" },
    { name: "Khoai Tây Nghiền (Vừa)", price: "170,000 VND", img: "image/Product_Menu/Khoai Tây Nghiền (Vừa).png", category: "Khoai Tây" },
    { name: "Gà Sốt Dứa", price: "180,000 VND", img: "image/Product_Menu/Gà_sốt_dứa.png", category: "Gà" },
    { name: "Khoai Tây Nghiền (Lớn)", price: "190,000 VND", img: "image/Product_Menu/Khoai Tây Nghiền (Lớn).png", category: "Khoai Tây" },
    { name: "Gà Sốt Dâu", price: "200,000 VND", img: "image/Product_Menu/Gà_sốt_dâu.png", category: "Gà" },
    { name: "Khoai Tây Nghiền (Đại)", price: "210,000 VND", img: "image/Product_Menu/Khoai Tây Nghiền (Đại).png", category: "Khoai Tây" },
    { name: "Khoai Tây Chiên (Vừa)", price: "80,000 VND", img: "image/Product_Menu/Khoai_tây_chiên_Vừa.png", category: "Khoai Tây" },
    { name: "Khoai Tây Chiên (Lớn)", price: "85,000 VND", img: "image/Product_Menu/Khoai Tây Chiên (Lớn).png", category: "Khoai Tây" },
    { name: "Khoai Tây Chiên (Đại)", price: "90,000 VND", img: "image/Product_Menu/Khoai Tây Chiên (Đại).png", category: "Khoai Tây" },
    { name: "Burger Bò", price: "95,000 VND", img: "image/Product_Menu/Burger Bò.png", category: "Burger" },
    { name: "Burger Phô Mai", price: "100,000 VND", img: "image/Product_Menu/Burger_Phô_mai.png", category: "Burger" },
    { name: "Burger Cá", price: "105,000 VND", img: "image/Product_Menu/Burger_cá.png", category: "Burger" },
    { name: "Mì Ý Sốt Bò", price: "110,000 VND", img: "image/Product_Menu/Mì Ý Sốt Bò.png", category: "Mì Ý" },
    { name: "Bắp Cải Trộn (Vừa)", price: "115,000 VND", img: "image/Product_Menu/Bắp Cải Trộn (Vừa).png", category: "Bắp Cải" },
    { name: "Bắp Cải Trộn (Lớn)", price: "120,000 VND", img: "image/Product_Menu/Bắp C��i Trộn (Lớn).png", category: "Bắp Cải" },
    { name: "Bắp Cải Trộn (Đại)", price: "125,000 VND", img: "image/Product_Menu/Bắp Cải Trộn (Đại).png", category: "Bắp Cải" },
    { name: "Combo Gà Nướng", price: "130,000 VND", img: "image/Product_Menu/Combo Gà Nướn.png", category: "Combo" },
    { name: "Mì Ý Phi-Lê Gà Quay", price: "135,000 VND", img: "image/Product_Menu/Mì Ý Phi-Lê Gà Quay.png", category: "Mì Ý" },
    { name: "Combo Gà Sốt BBQ", price: "140,000 VND", img: "image/Product_Menu/Combo Gà Sốt BBQ.png", category: "Combo" },
    { name: "Combo Gà Sốt Cay", price: "145,000 VND", img: "image/Product_Menu/Combo Gà Sốt Cay.png", category: "Combo" },
    { name: "Salad Hạt", price: "150,000 VND", img: "image/Product_Menu/Salad Hạt.png", category: "Salad" },
    { name: "Salad Pop", price: "155,000 VND", img: "image/Product_Menu/Salad Pop.png", category: "Salad" },
    { name: "Mì Ý Gà Rán", price: "160,000 VND", img: "image/Product_Menu/Mì Ý Gà Rán.png", category: "Mì Ý" },
    { name: "3 Cá Thanh", price: "165,000 VND", img: "image/Product_Menu/3 Cá Thanh.png", category: "Cá" },
    { name: "Combo Gà Sốt Dứa", price: "170,000 VND", img: "image/Product_Menu/Combo Gà Sốt Dứa.png", category: "Combo" },
    { name: "Combo Gà Sốt Xoài", price: "175,000 VND", img: "image/Product_Menu/Combo Gà Sốt Xoài.png", category: "Combo" },
    { name: "Combo Gà Sốt Dâu", price: "180,000 VND", img: "image/Product_Menu/Combo Gà Sốt Dâu.png", category: "Combo" },
    { name: "4 Phô Mai Viên", price: "185,000 VND", img: "image/Product_Menu/4 Phô Mai Viên.png", category: "Phô Mai" },
    { name: "Combo Gà Sốt Dừa", price: "190,000 VND", img: "image/Product_Menu/Combo Gà Sốt Dừa.png", category: "Combo" }
];

let currentPage = 1;
const itemsPerPage = 8;

function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = filterItems(searchInput, '', '');
    currentPage = 1; // Reset to first page on new search
    displayItems(filteredItems, currentPage);
}

function performAdvancedSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceRange').value;
    const filteredItems = filterItems(searchInput, categoryFilter, priceRange);
    currentPage = 1; // Reset to first page on new search
    displayItems(filteredItems, currentPage);
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
            <h3>${item.name}</h3>
            <p>${item.category}</p>
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

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        performAdvancedSearch();
    }
}

function nextPage() {
    currentPage++;
    performAdvancedSearch();
}

function toggleAdvancedSearch() {
    var menu = document.getElementById("advancedSearchMenu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block"; // Show menu
    } else {
        menu.style.display = "none"; // Hide menu
    }
}



