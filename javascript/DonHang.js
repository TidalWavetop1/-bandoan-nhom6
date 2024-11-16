//PTTT là phương thức thanh toán
class DonHang {
    constructor() {}
    constructor(Madon, Makhach, Masanpham, Thoigian, SLmua, Thanhtien, PTTT, Diachi, Trangthai) {
        this.Madon = Madon;
        this.Makhach = Makhach;
        this.Masanpham = Masanpham;
        this.Thoigian = Thoigian;
        this.SLmua = SLmua;
        this.Thanhtien = Thanhtien;
        this.PTTT = PTTT;
        this.Diachi =Diachi;
        this.Trangthai = Trangthai;
    }

    getMadon() {
        return this.Madon;
    }

    getTenkhach() {
        return this.Makhach;
    }

    getTensanpham() {
        return this.Masanpham;
    }

    getThoigian() {
        return this.Thoigian;
    }

    getSomua() {
        return this.SLmua;
    }

    getThanhtien() {
        return this.Thanhtien;
    }

    getPTTT() {
        return this.PTTT;
    }

    getDiachi() {
        return this.Diachi;
    }

    getTrangthai() {
        return this.Trangthai;
    }
}