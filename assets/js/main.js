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

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {},

  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuOverlay = document.getElementById("menu-overlay");
  const closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click", function () {
    menuOverlay.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    menuOverlay.classList.remove("active");
  });
});
