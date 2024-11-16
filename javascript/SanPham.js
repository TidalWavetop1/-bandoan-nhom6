class SanPham {
    constructor() {}
    constructor(Masanpham, Ten, Gia, Soluong, Loai, Mota) {
        this.Masanpham = Masanpham;
        this.Ten = Ten;
        this.Gia = Gia;
        this.Soluong = Soluong;
        this.Mota = Mota;
        this.Loai = Loai;
    }

    getMasanpham() {
        return this.Masanpham;
    }

    setMasanpham(Masanpham) {
        this.Masanpham = Masanpham;
    }

    getTen() {
        return this.Ten;
    }

    setTen(Ten) {
        this.Ten = Ten;
    }

    getGia() {
        return this.Gia;
    }

    setGia(Gia) {
        this.Gia = Gia;
    }

    getSoluong() {
        return this.Soluong;
    }

    setSoluong(Soluong) {
        this.Soluong = Soluong;
    }

    getMota() {
        return this.Mota;
    }

    setMota(Mota) {
        this.Mota = Mota;
    }

    getLoai() {
        return this.Loai;
    }

    setLoai(Loai) {
        this.Loai = Loai;
    }
}