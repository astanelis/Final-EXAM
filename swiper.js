const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowSlidePrev: true,
      allowSlideNext: true,
    },
  },
});
