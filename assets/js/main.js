let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.style.backgroundColor = "var(--white)";
    header.style.transition = "background-color 0.3s ease, padding 0.1s ease";
    header.style.padding = "20px";
  } else {
    header.style.backgroundColor = "";
    header.style.padding = "20px";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 70) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const switchBtn = document.getElementById("switch");
const navMenu = document.querySelector(".nav-menu");

// Toggle Navigation on Click
switchBtn.addEventListener("change", function () {
  if (this.checked) {
    navMenu.classList.add("active");
  } else {
    navMenu.classList.remove("active");
  }
});
