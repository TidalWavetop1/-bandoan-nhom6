const products = [
    { name: "Gà Rán", price: "99,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Burger Gà", price: "75,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Quay", price: "89,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Phi-lê Gà Quay", price: "95,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Không Xương", price: "85,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Đùi Gà Quay", price: "105,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Chiên Xù", price: "110,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt BBQ", price: "120,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Cay", price: "130,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Mật Ong", price: "140,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Mì Ý Gà Zinger", price: "150,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Chanh", price: "160,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Nghiền (Vừa)", price: "170,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Dứa", price: "180,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Nghiền (Lớn)", price: "190,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Gà Sốt Dâu", price: "200,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Nghiền (Đại)", price: "210,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Chiên (Vừa)", price: "80,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Chiên (Lớn)", price: "85,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Khoai Tây Chiên (Đại)", price: "90,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Burger Bò", price: "95,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Burger Phô Mai", price: "100,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Burger Cá", price: "105,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Mì Ý Sốt Bò)", price: "110,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Bắp Cải Trộn (Vừa)", price: "115,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Bắp Cải Trộn (Lớn)", price: "120,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Bắp Cải Trộn (Đại)", price: "125,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Nướng", price: "130,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Mì Ý Phi-Lê Gà Quay", price: "135,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt BBQ", price: "140,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Cay", price: "145,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Salad Hạt", price: "150,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Salad Pop", price: "155,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Mì Ý Gà Rán", price: "160,000 VND", img: "https://via.placeholder.com/300" },
    { name: "3 Cá Thanh", price: "165,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dứa", price: "170,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Xoài", price: "175,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dâu", price: "180,000 VND", img: "https://via.placeholder.com/300" },
    { name: "4 Phô Mai Viên", price: "185,000 VND", img: "https://via.placeholder.com/300" },
    { name: "Combo Gà Sốt Dừa", price: "190,000 VND", img: "https://via.placeholder.com/300" }
];

function toggleAdvancedSearch() {
    var menu = document.getElementById("advancedSearchMenu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"; // Hiển thị menu
    } else {
        menu.style.display = "none"; // Ẩn menu
    }
}

