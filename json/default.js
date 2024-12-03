function moThucDon() {
    const menumodal = document.getElementById('menu');
    const gioithieumodal = document.getElementById('about');
    const homemodal = document.getElementById('promotions');
    menumodal.style.display = 'block';
    gioithieumodal.style.display = 'none';
    homemodal.style.display = 'none';
}

function moGioiThieu() {
    const menumodal = document.getElementById('menu');
    const gioithieumodal = document.getElementById('about');
    const homemodal = document.getElementById('promotions');
    menumodal.style.display = 'none';
    gioithieumodal.style.display = 'block';
    homemodal.style.display = 'none';
}

function moHome() {
    const menumodal = document.getElementById('menu');
    const gioithieumodal = document.getElementById('about');
    const homemodal = document.getElementById('promotions');
    menumodal.style.display = 'none';
    gioithieumodal.style.display = 'none';
    homemodal.style.display = 'block';
}

window.onload = moHome;