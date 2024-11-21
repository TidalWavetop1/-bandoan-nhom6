// Khởi tạo data cho các đối tượng
document.addEventListener('DOMContentLoaded', function () {
    let listDonHang = [ 
        {Madon: 1, Makhach: 1,Manhanvien: 7, sanPhamMua: [{Masanpham: 1, SLmua: 1}, {Masanpham: 2, SLmua: 1}], Thoigian: "11-1-2024", Thanhtien: 83000, PTTT: "Tiền mặt", Diachi: "abc, p.16, q.5, tpHCM", Trangthai: "Đã xác nhận"}, 
        {Madon: 2, Makhach: 2, Manhanvien: 7, sanPhamMua: [{Masanpham: 2, SLmua: 2}], Thoigian: "11-2-2024", Thanhtien: 66000, PTTT: "Zalopay", Diachi: "xyz, p.5, q.6, tpHCM", Trangthai: "Đã xác nhận"}, 
        {Madon: 3, Makhach: 3, Manhanvien: 8, sanPhamMua: [{Masanpham: 1, SLmua: 3}], Thoigian: "11-3-2024", Thanhtien: 150000, PTTT: "Tiền mặt", Diachi: "abc, p.16, q.5, tpHCM", Trangthai: "Chưa xử lí"}, 
        {Madon: 4, Makhach: 4, Manhanvien: 7, sanPhamMua: [{Masanpham: 2, SLmua: 1}], Thoigian: "11-4-2024", Thanhtien: 33000, PTTT: "Thẻ tín dụng", Diachi: "xyz, p.4, q.7, tpHCM", Trangthai: "Đã xác nhận"}, 
        {Madon: 5, Makhach: 5, Manhanvien: 8, sanPhamMua: [{Masanpham: 1, SLmua: 2}], Thoigian: "11-5-2024", Thanhtien: 100000, PTTT: "Tiền mặt", Diachi: "abc, p.16, q.5, tpHCM", Trangthai: "Đã xác nhận"}, 
        {Madon: 6, Makhach: 6, Manhanvien: 8, sanPhamMua: [{Masanpham: 2, SLmua: 3}], Thoigian: "11-6-2024", Thanhtien: 99000, PTTT: "Zalopay", Diachi: "xyz, p.5, q.6, tpHCM", Trangthai: "Chưa xử lí"} 
    ]; 
    localStorage.setItem('listDonHang', JSON.stringify(listDonHang)); 

    let listSanPham = [ 
        {Masanpham: 1, Ten: "Burger phô mai", Gia: 50000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/cheese_burger.jpg"}, 
        {Masanpham: 2, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"}, 
        {Masanpham: 3, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"}, 
        {Masanpham: 4, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"}, 
        {Masanpham: 5, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"}, 
        {Masanpham: 6, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"},
        {Masanpham: 7, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"},
        {Masanpham: 8, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"}, 
        {Masanpham: 9, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"},
        {Masanpham: 10, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"}, 
        {Masanpham: 11, Ten: "Burger gà không cay", Gia: 33000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/chicken_nonspicy_burger.jpg"},
        {Masanpham: 12, Ten: "Pizza", Gia: 70000, Soluong: 100, Maloai: 2, Mota: "", Anh: "image/pizza.jpg"},
        {Masanpham: 13, Ten: "Pizza", Gia: 70000, Soluong: 100, Maloai: 2, Mota: "", Anh: "image/pizza.jpg"}, 
        {Masanpham: 14, Ten: "Pizza", Gia: 70000, Soluong: 100, Maloai: 2, Mota: "", Anh: "image/pizza.jpg"}, 
        {Masanpham: 15, Ten: "Pizza", Gia: 70000, Soluong: 100, Maloai: 2, Mota: "", Anh: "image/pizza.jpg"}, 
        {Masanpham: 16, Ten: "Pizza", Gia: 70000, Soluong: 100, Maloai: 2, Mota: "", Anh: "image/pizza.jpg"}, 
        {Masanpham: 17, Ten: "Pizza", Gia: 70000, Soluong: 100, Maloai: 2, Mota: "", Anh: "image/pizza.jpg"}, 
        {Masanpham: 18, Ten: "Burger phô mai", Gia: 50000, Soluong: 100, Maloai: 1, Mota: "", Anh: "image/cheese_burger.jpg"}
    ]; 
    localStorage.setItem('listSanPham', JSON.stringify(listSanPham));

    let listUsers = [ 
        { Manguoidung: 1, Tennguoidung: "Nguyễn Văn A", SDT: "098765432", Email: "VanA@gmail.com", Diachi: "abc, p.16, q.5, tpHCM", Trangthai: "Hoạt động" , Username: "nguyenvana", Password: "nguyenvana123", Chucvu: "Khách hàng"}, 
        { Manguoidung: 2, Tennguoidung: "Trần Thị B", SDT: "0912364578", Email: "ThiB@gmail.com", Diachi: "vnm, p.4, q.7", Trangthai: "Hoạt động" , Username: "tranthib", Password: "tranthib123", Chucvu: "Khách hàng"},
        { Manguoidung: 3, Tennguoidung: "Lê Thị C", SDT: "093456789", Email: "LeC@gmail.com", Diachi: "xyz, p.5, q.10, tpHCM", Trangthai: "Hoạt động" , Username: "lethic", Password: "lethic123", Chucvu: "Khách hàng"},
        { Manguoidung: 4, Tennguoidung: "Phạm Văn D", SDT: "097654321", Email: "VanD@gmail.com", Diachi: "pqr, p.7, q.5, tpHCM", Trangthai: "Hoạt động", Username: "phamvand" , Password: "phamvand123", Chucvu: "Khách hàng"},
        { Manguoidung: 5, Tennguoidung: "Ngô Thị E", SDT: "094567891", Email: "ThiE@gmail.com", Diachi: "stu, p.6, q.3, tpHCM", Trangthai: "Hoạt động", Username: "ngothie", Password: "ngothie123", Chucvu: "Khách hàng"},
        { Manguoidung: 6, Tennguoidung: "Đặng Văn F", SDT: "092345678", Email: "VanF@gmail.com", Diachi: "vwx, p.8, q.1, tpHCM", Trangthai: "Hoạt động", Username: "dangvanf", Password: "dangvanf123", Chucvu: "Khách hàng"},
        { Manguoidung: 7, Tennguoidung: "Trương Gia G", SDT: "09182665710", Email: "GiaG@gmail.com", Diachi: "jgk, p.10, q.1, tpHCM", Trangthai: "Hoạt động", Username: "truonggiag", Password: "truonggiag123", Chucvu: "Nhân viên"},
        { Manguoidung: 8, Tennguoidung: "Dương Cẩm H", SDT: "0977165349", Email: "CamH@gmail.com", Diachi: "opi, p.2, q.8, tpHCM", Trangthai: "Hoạt động", Username: "duongcamh", Password: "duongcamh123", Chucvu: "Nhân viên"}
    ];
    localStorage.setItem('listUsers', JSON.stringify(listUsers));

    let listLoaiSP = [
        {Maloai: 1, Tenloai: "Burger"},
        {Maloai: 2, Tenloai: "Pizza"},
        {Maloai: 3, Tenloai: "Đồ uống"},
        {Maloai: 4, Tenloai: "Tráng miệng"}
    ];
    localStorage.setItem('listLoaiSP', JSON.stringify(listLoaiSP));
});
