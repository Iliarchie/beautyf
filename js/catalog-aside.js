const checkboxes = document.querySelectorAll(".checkbox-green");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    const title = checkbox.nextElementSibling;

    title.classList.toggle("active");
  });
});

// FILTER

const filter = document.querySelector(".aside-catalog__inner");
const filterBtnOpen = document.querySelector(".catalog-mobile__btns-filter");
const filterclose = document.querySelector(".aside-catalog__title-close");

filterBtnOpen.addEventListener("click", function () {
  filter.classList.add("active");
});

filterclose.addEventListener("click", function () {
  filter.classList.remove("active");
});
