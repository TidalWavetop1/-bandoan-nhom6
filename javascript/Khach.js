class Khach {
    constructor() {}
    constructor(Makhach, Tenkhach, SDT, Email, Diachi, Trangthai) {
        this.Makhach = Makhach;
        this.Tenkhach = Tenkhach;
        this.SDT = SDT;
        this.Email = Email;
        this.Diachi = Diachi;
        this.Trangthai = Trangthai;
    }

    getMakhach() {
        return this.Makhach;
    }


    getTenkhach() {
        return this.Tenkhach;
    }


    getSDT() {
        return this.SDT;
    }


    getEmail() {
        return this.Email;
    }


    getDiachi() {
        return this.Diachi;
    }

    gettrangthai() {
        return this.Trangthai;
    }
}