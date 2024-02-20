// Toggle mobile menu visibility
document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

// Show/hide navbar on scroll
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  if (window.scrollY > 100 || window.scrollY === 0) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
});
