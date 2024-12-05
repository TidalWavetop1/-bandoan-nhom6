const newsLink = document.querySelector('.news-link');
const termsLink = document.querySelector('.terms-link');

newsLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
});

termsLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
});

document.getElementById("menu-toggle").addEventListener("click", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
});















