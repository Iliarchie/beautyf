function updatePrice(selectElement) {
  const card = selectElement.closest(".new-card__price");
  const salePriceElement = card.querySelector(".new-card__info-num.sale-price");
  const oldPriceElement = card.querySelector(".new-card__info-num.old-price");

  const selectedOption = selectElement.value;

  if (selectedOption === "200мм") {
    salePriceElement.textContent = "1200грн";
    oldPriceElement.textContent = "699грн";
  } else if (selectedOption === "300мм") {
    salePriceElement.textContent = "3000грн";
    oldPriceElement.textContent = "4000грн";
  } else {
  }
}
