// Sidebar Toggle
$(document).ready(function () {
  $("#sidebar-toggle").click(function () {
    $("#sidebar").toggleClass("transform-none");
  });
});

// Swiper.js Initialization
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination", // Fixed selector
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "slide",
  });
});
