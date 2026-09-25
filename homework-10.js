import { productsData } from "./productsData.js";

const productCardTemplate = document.querySelector(".product-card__template");
const productCardList = document.querySelector(".products");

function renderProducts(array) {
  const count = +prompt(
    "Сколько карточек отобразить? (Введите число от 1 до 5)",
  );
  let selectedProducts = [];
  if (count >= 1 && count <= 5) {
    selectedProducts = array.filter((card, index) => index < count);
  } else if (count > 5) {
    alert("Есть только 5 карточек!");
    return renderProducts(array);
  }

  selectedProducts.forEach((card) => {
    const productCardClone = productCardTemplate.content.cloneNode(true);
    productCardClone.querySelector(".product-card__category").textContent =
      card.category;
    productCardClone.querySelector(".product-card__title").textContent =
      card.title;
    productCardClone.querySelector(".product-card__description").textContent =
      card.description;
    const ingredientsList = productCardClone.querySelectorAll(
      ".product-card__ingredients li",
    );
    if (ingredientsList.length >= 3) {
      ingredientsList[0].textContent = card.ingredients[0] || "";
      ingredientsList[1].textContent = card.ingredients[1] || "";
      ingredientsList[2].textContent = card.ingredients[2] || "";
    }
    const img = productCardClone.querySelector(".product-card__photo img");
    img.src = card.imageSrc;
    img.alt = `Фото товара ${card.title}`;

    productCardClone.querySelector(".product-card__price").textContent =
      `${card.price} ₽`;
    productCardList.appendChild(productCardClone);
  });
}

renderProducts(productsData);

const productTitle = productsData.reduce((acc, card) => {
  const productObject = {
    [card.title]: card.description,
  };
  acc.push(productObject);
  return acc;
}, []);
console.log(productTitle);
