class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature
  }
  
  getInfoDrink() {
    return `${this.name},${this.size},${this.price} рублей`;
  }
  
  getTemperatureDrink() {
    return this.#temperature 
  }
  
  #setTemperatureDrink(temperature) {
    this.#temperature = temperature
  }
  
  #prepareDrink() {
    console.log(`${this.name} готовится...`);
  }
  
  serveDrink() {
    this.#prepareDrink();
    this.#setTemperatureDrink(this.#temperature);
    console.log(`Ваш ${this.name} (${this.#temperature}°C) готов. Приятного аппетита!`);
  }
}

export class Tea extends Drink {
  constructor(name, size, price, countryProduction, temperature = 70) {
    super(name, size, price, temperature)
    this.countryProduction = countryProduction
  }
    getInfoDrink() {
    return `Чай "${this.name}" из ${this.countryProduction} объёмом ${this.size} мл, цена: ${this.price} рублей.`;
  }
}

export class Coffee extends Drink {
  constructor(name, size, price, beans, milk, temperature = 90) {
    super(name, size, price, temperature)
    this.beans = beans
    this.milk = milk
  }
    getInfoDrink() {
    return `Горячий "${this.name}" объёмом ${this.size} мл из ${this.beans} c ${this.milk}, цена: ${this.price} рублей.`;
  }
}

export class Cocktail extends Drink {
  constructor(name, size, price, iceCream, iceCubes, temperature = 20) {
    super(name, size, price, temperature)
    this.iceCream = iceCream
    this.iceCubes = iceCubes
  }
    getInfoDrink() {
    return `Молочный коктейль "${this.name}" c ${this.iceCream} c ${this.iceCubes} объёмом ${this.size} мл, цена: ${this.price} руб.`;
  }
}