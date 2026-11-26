function showTemperature(city, temperature) {
  console.log(
    `Сейчас в ${city} температура - ${temperature} градусов по Цельсию`,
  );
}

const LIGHT_SPEED = 299792458;

function checkSpeed(highSpeed) {
  if (highSpeed > LIGHT_SPEED) {
    console.log("Сверхсветовая");
  } else if (LIGHT_SPEED > highSpeed) console.log("Субсветовая скорость");
  else LIGHT_SPEED === LIGHT_SPEED;
  console.log("Скорость света");
}

const car = "Toyota Camry";
const carPrice = 2500;

function calculateBudget(money) {
  if (money >= carPrice) {
    console.log(`${car} приобретён. Спасибо за покупку!`);
  } else {
    const difference = carPrice - money;
    {
      console.log(`Вам не хватает ${difference}, Пополните баланс`);
    }
  }
}

function showMessage() {
  console.log("Функция создана для улучшения аналитических способностей дз7");
}

var meri = "учебная переменная вар";
let meri01 = "учебная переменная лет";
const meri02 = "учебная переменная консты";