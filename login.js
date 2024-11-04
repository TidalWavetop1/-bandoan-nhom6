

function toggleLogin() {
    var overlay = document.getElementById("loginOverlay");
    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "flex";
    } else {
        overlay.style.display = "none";
    }
}

function toggleRegister() {
    var overlay = document.getElementById("registerOverlay");
    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "flex";
    } else {
        overlay.style.display = "none";
    }
}