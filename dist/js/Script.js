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
      delay: 5000,
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



  // const swiper1 = new Swiper(".swiper-container2", {
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination", // Fixed selector
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   effect: "slide",
  // });


  var swiper2 = new Swiper('.swiper-container2', {
    loop: true,
    navigation: {
      nextEl: '.swipers-button-next2',
      prevEl: '.swipers-button-prev2',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
  });



  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          lato: ['Lato', 'sans-serif'],
        },
      },
    },
  };
  
});


