// SLIDER-HERO

const swiperHero = new Swiper(".swiper-hero", {
  loop: true,
  direction: "horizontal",
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },

  on: {
    slideChange: function () {
      const paginationBullets = document.querySelectorAll(
        ".swiper-pagination-bullet"
      );
      const isOddSlide = this.realIndex % 2 !== 0;

      paginationBullets.forEach((bullet) => {
        bullet.style.transition = "filter 0.3s ease";
        if (isOddSlide) {
          bullet.style.filter = "brightness(0) invert(1)";
        } else {
          bullet.style.filter = "none";
        }
      });
    },
  },
});
