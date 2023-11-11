const swiperSales = new Swiper(".swiper-sales", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 30,
  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-sales__next",
    prevEl: ".swiper-sales__prev",
  },

  scrollbar: {
    el: ".swiper-sales__scrollbar",
  },

  breakpoints: {
    440: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2,
    },
    1001: {
      slidesPerView: 3,
    },
  },
});

const btnLike = document.querySelectorAll(".sales-card__like");
const btnBasket = document.querySelectorAll(".sales-card__basket");

btnLike.forEach((like) => {
  like.addEventListener("click", function () {
    like.classList.toggle("active");
  });
});

btnBasket.forEach((basket) => {
  basket.addEventListener("click", function () {
    basket.classList.toggle("active");
  });
});
