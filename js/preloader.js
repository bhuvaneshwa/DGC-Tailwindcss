document.addEventListener("DOMContentLoaded", function () {
    // Remove the preloader when the page is fully loaded
    window.addEventListener("load", function () {
        var preloader = document.getElementById("preloader");
        preloader.style.display = 'none';
    });
});