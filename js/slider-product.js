const swiperProduct = new Swiper(".swiper-product", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  spaceBetween: 20,
  slidesPerView: 3,

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    461: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 1,
    },
  },
});
