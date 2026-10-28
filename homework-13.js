class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  showInfo() {
    console.log(this.name, this.size, this.price, this.#temperature);
  }
  getTemperature() {
    return this.#temperature;
  }
  editTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }
  #prepairDrink() {
    this.getTemperature();
  }
  serveDrink() {
    this.#prepairDrink();
  }5
}

class Coffee extends Drink {
  constructor(
    name,
    size,
    price,
    temperature,
    beanType,
    milkType,
    syrup,
    sugar,
  ) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
    this.syrup = syrup;
    this.sugar = sugar;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  showCafeInfo() {
    console.log(this.name, this.location);
  }
  orderDrink(Drink) {
    Drink.serveDrink();
  }
}

const kafe = new Cafe("Meri", " Lenin.st 7");
kafe.showCafeInfo();

const orderNewDrink = new Drink("latte", 0.5, 100, 100);
orderNewDrink.showInfo();
