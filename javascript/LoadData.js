function setlistUsers(listUsers) {
    localStorage.setItem('listUsers', JSON.stringify(listUsers));
}

function setlistDonHang(listDonHang) {
    localStorage.setItem('listDonHang', JSON.stringify(listDonHang));
}

function setlistSanPham(listSanPham) {
    localStorage.setItem('listSanPham', JSON.stringify(listSanPham));
}

function setlistLoaiSP(listLoaiSP) {
    localStorage.setItem('listLoaiSP', JSON.stringify(listLoaiSP));
}

function getlistUsers() {
    return JSON.parse(localStorage.getItem('listUsers'));
}

function getlistDonHang() {
    return JSON.parse(localStorage.getItem('listDonHang'));
}

function getlistSanPham() {
    return JSON.parse(localStorage.getItem('listSanPham'));
}

function getlistLoaiSP() {
    return JSON.parse(localStorage.getItem('listLoaiSP'));
}