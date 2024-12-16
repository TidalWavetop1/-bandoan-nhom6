// Khởi tạo data cho các đối tượng
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('listDonHang')) {
        let listDonHang = [
            { Madon: 1, Makhach: 1, Manhanvien: 7, sanPhamMua: [{ ID: 1, SLmua: 1 }, { ID: 2, SLmua: 1 }], Thoigian: "11-1-2024", Thanhtien: 174000, PTTT: "Tiền mặt", address: "abc, p.16, q.5, tpHCM", status: "Đã xác nhận" },
            { Madon: 2, Makhach: 2, Manhanvien: 7, sanPhamMua: [{ ID: 2, SLmua: 2 }], Thoigian: "11-2-2024", Thanhtien: 150000, PTTT: "Zalopay", address: "xyz, p.5, q.6, tpHCM", status: "Đã xác nhận" },
            { Madon: 3, Makhach: 3, Manhanvien: 8, sanPhamMua: [{ ID: 1, SLmua: 3 }], Thoigian: "11-3-2024", Thanhtien: 297000, PTTT: "Tiền mặt", address: "abc, p.16, q.5, tpHCM", status: "Chưa xử lí" },
            { Madon: 4, Makhach: 4, Manhanvien: 7, sanPhamMua: [{ ID: 2, SLmua: 1 }], Thoigian: "11-4-2024", Thanhtien: 75000, PTTT: "Thẻ tín dụng", address: "xyz, p.4, q.7, tpHCM", status: "Đã xác nhận" },
            { Madon: 5, Makhach: 5, Manhanvien: 8, sanPhamMua: [{ ID: 1, SLmua: 2 }], Thoigian: "11-5-2024", Thanhtien: 198000, PTTT: "Tiền mặt", address: "abc, p.16, q.5, tpHCM", status: "Đã xác nhận" },
            { Madon: 6, Makhach: 6, Manhanvien: 8, sanPhamMua: [{ ID: 2, SLmua: 3 }], Thoigian: "11-6-2024", Thanhtien: 225000, PTTT: "Zalopay", address: "xyz, p.5, q.6, tpHCM", status: "Chưa xử lí" }
        ];
        localStorage.setItem('listDonHang', JSON.stringify(listDonHang));
    }

    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify([
            { ID: 1, name: "Gà Rán", price: 99000, img: "image/Product_Menu/Gà_Rán.png", category: "Gà", quantity: 100, description: "" },
            { ID: 2, name: "Burger Gà", price: 75000, img: "image/Product_Menu/Burger_Gà.png", category: "Burger", quantity: 100, description: "" },
            { ID: 3, name: "Gà Quay", price: 89000, img: "image/Product_Menu/Gà_quay.png", category: "Gà", quantity: 100, description: "" },
            { ID: 4, name: "Phi-lê Gà Quay", price: 95000, img: "image/Product_Menu/Phi-lê Gà Quay.jpg", category: "Gà", quantity: 100, description: "" },
            { ID: 5, name: "Gà Không Xương", price: 85000, img: "image/Product_Menu/Gà_Ko_xương.png", category: "Gà", quantity: 100, description: "" },
            { ID: 6, name: "Đùi Gà Quay", price: 105000, img: "image/Product_Menu/Đùi_gà_quay.png", category: "Gà", quantity: 100, description: "" },
            { ID: 7, name: "Gà Chiên Xù", price: 110000, img: "image/Product_Menu/Gà_Chiên_Xù.jpg", category: "Gà", quantity: 100, description: "" },
            { ID: 8, name: "Gà Sốt BBQ", price: 120000, img: "image/Product_Menu/Gà_sốt_BBQ.png", category: "Gà", quantity: 100, description: "" },
            { ID: 9, name: "Gà Sốt Cay", price: 130000, img: "image/Product_Menu/Gà_sốt_cay.png", category: "Gà", quantity: 100, description: "" },
            { ID: 10, name: "Gà Sốt Mật Ong", price: 140000, img: "image/Product_Menu/Gà_sốt_mật_ong.png", category: "Gà", quantity: 100, description: "" },
            { ID: 11, name: "Mì Ý Gà Zinger", price: 150000, img: "image/Product_Menu/Mì_Ý_gà_Zinger.png", category: "Mì Ý", quantity: 100, description: "" },
            { ID: 12, name: "Gà Sốt Chanh", price: 160000, img: "image/Product_Menu/gà_sốt_chanh.png", category: "Gà", quantity: 100, description: "" },
            { ID: 13, name: "Khoai Tây Nghiền (Vừa)", price: 170000, img: "image/Product_Menu/Khoai Tây Nghiền (Vừa).png", category: "Khoai Tây", quantity: 100, description: "" },
            { ID: 14, name: "Gà Sốt Dứa", price: 180000, img: "image/Product_Menu/Gà_sốt_dứa.png", category: "Gà", quantity: 100, description: "" },
            { ID: 15, name: "Khoai Tây Nghiền (Lớn)", price: 190000, img: "image/Product_Menu/Khoai Tây Nghiền (Lớn).png", category: "Khoai Tây", quantity: 100, description: "" },
            { ID: 16, name: "Gà Sốt Dâu", price: 200000, img: "image/Product_Menu/Gà_sốt_dâu.png", category: "Gà", quantity: 100, description: "" },
            { ID: 17, name: "Khoai Tây Nghiền (Đại)", price: 210000, img: "image/Product_Menu/Khoai Tây Nghiền (Đại).png", category: "Khoai Tây", quantity: 100, description: "" },
            { ID: 18, name: "Khoai Tây Chiên (Vừa)", price: 80000, img: "image/Product_Menu/Khoai_tây_chiên_Vừa.png", category: "Khoai Tây", quantity: 100, description: "" },
            { ID: 19, name: "Khoai Tây Chiên (Lớn)", price: 85000, img: "image/Product_Menu/Khoai Tây Chiên (Lớn).png", category: "Khoai Tây", quantity: 100, description: "" },
            { ID: 20, name: "Khoai Tây Chiên (Đại)", price: 90000, img: "image/Product_Menu/Khoai Tây Chiên (Đại).png", category: "Khoai Tây", quantity: 100, description: "" },
            { ID: 21, name: "Burger Bò", price: 95000, img: "image/Product_Menu/Burger Bò.png", category: "Burger", quantity: 100, description: "" },
            { ID: 22, name: "Burger Phô Mai", price: 100000, img: "image/Product_Menu/Burger_Phô_mai.png", category: "Burger", quantity: 100, description: "" },
            { ID: 23, name: "Burger Cá", price: 105000, img: "image/Product_Menu/Burger_cá.png", category: "Burger", quantity: 100, description: "" },
            { ID: 24, name: "Mì Ý Sốt Bò", price: 110000, img: "image/Product_Menu/Mì Ý Sốt Bò.png", category: "Mì Ý", quantity: 100, description: "" },
            { ID: 25, name: "Bắp Cải Trộn (Vừa)", price: 115000, img: "image/Product_Menu/Bắp Cải Trộn (Vừa).png", category: "Bắp Cải", quantity: 100, description: "" },
            { ID: 26, name: "Bắp Cải Trộn (Lớn)", price: 120000, img: "image/Product_Menu/Bắp Cải Trộn (Lớn).png", category: "Bắp Cải", quantity: 100, description: "" },
            { ID: 27, name: "Bắp Cải Trộn (Đại)", price: 125000, img: "image/Product_Menu/Bắp Cải Trộn (Đại).png", category: "Bắp Cải", quantity: 100, description: "" },
            { ID: 28, name: "Combo Gà Nướng", price: 130000, img: "image/Product_Menu/Combo Gà Nướn.png", category: "Combo", quantity: 100, description: "" },
            { ID: 29, name: "Mì Ý Phi-Lê Gà Quay", price: 135000, img: "image/Product_Menu/Mì Ý Phi-Lê Gà Quay.png", category: "Mì Ý", quantity: 100, description: "" },
            { ID: 30, name: "Combo Gà Sốt BBQ", price: 140000, img: "image/Product_Menu/Combo Gà Sốt BBQ.png", category: "Combo", quantity: 100, description: "" },
            { ID: 31, name: "Combo Gà Sốt Cay", price: 145000, img: "image/Product_Menu/Combo Gà Sốt Cay.png", category: "Combo", quantity: 100, description: "" },
            { ID: 32, name: "Salad Hạt", price: 150000, img: "image/Product_Menu/Salad Hạt.png", category: "Salad", quantity: 100, description: "" },
            { ID: 33, name: "Salad Pop", price: 155000, img: "image/Product_Menu/Salad Pop.png", category: "Salad", quantity: 100, description: "" },
            { ID: 34, name: "Mì Ý Gà Rán", price: 160000, img: "image/Product_Menu/Mì Ý Gà Rán.png", category: "Mì Ý", quantity: 100, description: "" },
            { ID: 35, name: "3 Cá Thanh", price: 165000, img: "image/Product_Menu/3 Cá Thanh.png", category: "Cá", quantity: 100, description: "" },
            { ID: 36, name: "Combo Gà Sốt Dứa", price: 170000, img: "image/Product_Menu/Combo Gà Sốt Dứa.png", category: "Combo", quantity: 100, description: "" },
            { ID: 37, name: "Combo Gà Sốt Xoài", price: 175000, img: "image/Product_Menu/Combo Gà Sốt Xoài.png", category: "Combo", quantity: 100, description: "" },
            { ID: 38, name: "Combo Gà Sốt Dâu", price: 180000, img: "image/Product_Menu/Combo Gà Sốt Dâu.png", category: "Combo", quantity: 100, description: "" },
            { ID: 39, name: "4 Phô Mai Viên", price: 185000, img: "image/Product_Menu/4 Phô Mai Viên.png", category: "Phô Mai", quantity: 100, description: "" },
            { ID: 40, name: "Combo Gà Sốt Dừa", price: 190000, img: "image/Product_Menu/Combo Gà Sốt Dừa.png", category: "Combo", quantity: 100, description: "" }
        ]));
    }

    if (!localStorage.getItem('userList')) {
        let userList = [
            { 
                userId: 1, fullName: "Nguyễn Văn A", phoneNumber: "098765432", email: "VanA@gmail.com", address: "abc, p.16, q.5, tpHCM", 
                status: "Active", username: "nguyenvana", password: "nguyenvana123", role: "Khách hàng", orderHistory: [] 
            },
            { 
                userId: 2, fullName: "Trần Thị B", phoneNumber: "0912364578", email: "ThiB@gmail.com", address: "vnm, p.4, q.7", 
                status: "Active", username: "tranthib", password: "tranthib123", role: "Khách hàng", orderHistory: [] 
            },
            { 
                userId: 3, fullName: "Lê Thị C", phoneNumber: "093456789", email: "LeC@gmail.com", address: "xyz, p.5, q.10, tpHCM", 
                status: "Active", username: "lethic", password: "lethic123", role: "Khách hàng", orderHistory: [] 
            },
            { 
                userId: 4, fullName: "Phạm Văn D", phoneNumber: "097654321", email: "VanD@gmail.com", address: "pqr, p.7, q.5, tpHCM", 
                status: "Active", username: "phamvand", password: "phamvand123", role: "Khách hàng", orderHistory: [] 
            },
            { 
                userId: 5, fullName: "Ngô Thị E", phoneNumber: "094567891", email: "ThiE@gmail.com", address: "stu, p.6, q.3, tpHCM", 
                status: "Active", username: "ngothie", password: "ngothie123", role: "Khách hàng", orderHistory: [] 
            },
            { 
                userId: 6, fullName: "Đặng Văn F", phoneNumber: "092345678", email: "VanF@gmail.com", address: "vwx, p.8, q.1, tpHCM", 
                status: "Active", username: "dangvanf", password: "dangvanf123", role: "Khách hàng", orderHistory: [] 
            },
            { 
                userId: 7, fullName: "Trương Gia G", phoneNumber: "09182665710", email: "GiaG@gmail.com", address: "jgk, p.10, q.1, tpHCM", 
                status: "Active", username: "truonggiag", password: "truonggiag123", role: "Nhân viên", orderHistory: [] 
            },
            { 
                userId: 8, fullName: "Dương Cẩm H", phoneNumber: "0977165349", email: "CamH@gmail.com", address: "opi, p.2, q.8, tpHCM", 
                status: "Active", username: "duongcamh", password: "duongcamh123", role: "Nhân viên", orderHistory: [] 
            },
            {
                userId: 9, fullName: "lamlam", phoneNumber: "0987327902", email: "lamlam@gmail.com", address: "hjs, p.3, q.Tan Phu, tpHCM",
                status: "Active", username: "admin", password: "1234", role: "Admin", orderHistory: []
            }
        ];
        
        localStorage.setItem('userList', JSON.stringify(userList));
        
    }
    
});
