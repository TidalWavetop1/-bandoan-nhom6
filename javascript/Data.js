// Khởi tạo data cho các đối tượng
document.addEventListener('DOMContentLoaded', function () {
    let listDonHang = [ 
        {Madon: 1, Makhach: 1, sanPhamMua: [{Masanpham: 1, SLmua: 1}, {Masanpham: 2, SLmua: 1}], Thoigian: "11-1-2024", Thanhtien: 83000, PTTT: "Tiền mặt", Diachi: "abc, p.16, q.5, tpHCM", Trangthai: "Đã xác nhận"}, 
        {Madon: 2, Makhach: 2, sanPhamMua: [{Masanpham: 2, SLmua: 2}], Thoigian: "11-2-2024", Thanhtien: 66000, PTTT: "Zalopay", Diachi: "xyz, p.5, q.6, tpHCM", Trangthai: "Đã xác nhận"}, 
        {Madon: 3, Makhach: 3, sanPhamMua: [{Masanpham: 1, SLmua: 3}], Thoigian: "11-3-2024", Thanhtien: 150000, PTTT: "Tiền mặt", Diachi: "abc, p.16, q.5, tpHCM", Trangthai: "Chưa xử lý"}, 
        {Madon: 4, Makhach: 4, sanPhamMua: [{Masanpham: 2, SLmua: 1}], Thoigian: "11-4-2024", Thanhtien: 33000, PTTT: "Thẻ tín dụng", Diachi: "xyz, p.4, q.7, tpHCM", Trangthai: "Đã xác nhận"}, 
        {Madon: 5, Makhach: 5, sanPhamMua: [{Masanpham: 1, SLmua: 2}], Thoigian: "11-5-2024", Thanhtien: 100000, PTTT: "Tiền mặt", Diachi: "abc, p.16, q.5, tpHCM", Trangthai: "Đã xác nhận"}, 
        {Madon: 6, Makhach: 6, sanPhamMua: [{Masanpham: 2, SLmua: 3}], Thoigian: "11-6-2024", Thanhtien: 99000, PTTT: "Zalopay", Diachi: "xyz, p.5, q.6, tpHCM", Trangthai: "Chưa xử lý"} 
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

    let KhachList = [ 
        { Makhach: 1, Tenkhach: "Nguyễn Văn A", SDT: "098765432", Email: "VanA@gmail.com", Diachi: "abc, p.16, q.5, tpHCM", Trangthai: "Hoạt động" }, 
        { Makhach: 2, Tenkhach: "Trần Thị B", SDT: "0912364578", Email: "ThiB@gmail.com", Diachi: "vnm, p.4, q.7", Trangthai: "Hoạt động" },
        { Makhach: 3, Tenkhach: "Lê Thị C", SDT: "093456789", Email: "LeC@gmail.com", Diachi: "xyz, p.5, q.10, tpHCM", Trangthai: "Hoạt động" },
        { Makhach: 4, Tenkhach: "Phạm Văn D", SDT: "097654321", Email: "VanD@gmail.com", Diachi: "pqr, p.7, q.5, tpHCM", Trangthai: "Hoạt động" },
        { Makhach: 5, Tenkhach: "Ngô Thị E", SDT: "094567891", Email: "ThiE@gmail.com", Diachi: "stu, p.6, q.3, tpHCM", Trangthai: "Hoạt động" },
        { Makhach: 6, Tenkhach: "Đặng Văn F", SDT: "092345678", Email: "VanF@gmail.com", Diachi: "vwx, p.8, q.1, tpHCM", Trangthai: "Hoạt động" }
    ];
    localStorage.setItem('KhachList', JSON.stringify(KhachList));

    let listLoaiSP = [
        {Maloai: 1, Tenloai: "Burger"},
        {Maloai: 2, Tenloai: "Pizza"},
        {Maloai: 3, Tenloai: "Đồ uống"},
        {Maloai: 4, Tenloai: "Tráng miệng"}
    ];
    localStorage.setItem('listLoaiSP', JSON.stringify(listLoaiSP));
});
