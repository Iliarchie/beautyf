// MENU-MOBILE

const menuMobileOpen = document.querySelector(".header-start__btn-menu");
const menuMobileClose = document.querySelector(".menu-mobile__close-btn");
const menu = document.querySelector(".menu-mobile");

const menuBtn = document.querySelectorAll(".menu-mobile__list-link");

menuMobileOpen.addEventListener("click", function () {
  menu.classList.add("active");
});

menuMobileClose.addEventListener("click", function () {
  menu.classList.remove("active");
});

menuBtn.forEach((linkTab) => {
  linkTab.addEventListener("click", function () {
    const menuBtnTab = linkTab.nextElementSibling;
    menuBtnTab.classList.toggle("active");
  });
});

// MENU-CATALOG

const catalogLink = document.querySelectorAll(".menu-catalog__list-item");

catalogLink.forEach((link) => {
  link.addEventListener("click", function () {
    const linkTab = link.nextElementSibling;

    linkTab.classList.toggle("active");
  });
});

// MENU-LIST

const linkList = document.querySelectorAll(".menu-list__link");
const menuCatalog = document.querySelector(".menu-catalog");

let timeoutId;

menuCatalog.addEventListener("mouseenter", function () {
  clearTimeout(timeoutId);
  menuCatalog.classList.add("active");
});

menuCatalog.addEventListener("mouseleave", function () {
  timeoutId = setTimeout(function () {
    menuCatalog.classList.remove("active");
  }, 500);
});

menuCatalog.addEventListener("mouseenter", function () {
  clearTimeout(timeoutId);
});

menuCatalog.addEventListener("mouseleave", function (event) {
  if (!menuCatalog.contains(event.relatedTarget)) {
    menuCatalog.classList.remove("active");
  }
});

linkList.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
    menuCatalog.classList.add("active");
  });

  link.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(function () {
      menuCatalog.classList.remove("active");
    }, 500);
  });
});

// VALUE-PRICE

function updatePrice(selectElement) {
  const selectedValue =
    selectElement.options[selectElement.selectedIndex].getAttribute(
      "data-value"
    );
  const priceElement = selectElement
    .closest(".new-card__price")
    .querySelector(".new-card__info-num");

  if (selectedValue === "200") {
    priceElement.textContent = "1122 грн";
  } else if (selectedValue === "300") {
    priceElement.textContent = "1569 грн";
  } else {
    priceElement.textContent = "699 грн";
  }
}

const selectElement = document.getElementById("yourSelectElementId");
selectElement.addEventListener("change", function () {
  updatePrice(this);
});

selectElement.addEventListener("touchend", function () {
  if (this.selectedIndex !== this.lastSelectedIndex) {
    updatePrice(this);
    this.lastSelectedIndex = this.selectedIndex;
  }
});

// Initialize the lastSelectedIndex property
selectElement.lastSelectedIndex = selectElement.selectedIndex;
