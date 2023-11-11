const swiperNews = new Swiper(".swiper-news", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  spaceBetween: 30,
  slidesPerView: 2,

  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-news__next",
    prevEl: ".swiper-news__prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-news__scrollbar",
  },

  breakpoints: {
    460: {
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

const btnLike = document.querySelectorAll(".new-card__like");
const btnBasket = document.querySelectorAll(".new-card__basket");

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
