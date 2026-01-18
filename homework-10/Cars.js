export class Car {
  constructor(model, year, mileage) {
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  buy() {
    console.log(
      `Иван приобрёл ${this.model} ${this.year} года выпуска c пробегом ${this.mileage} км`,
    );
  }
}

export class DieselCar extends Car {
  constructor(model, year, mileage, fuel) {
    super(model, year, mileage);
    this.fuel = fuel;
  }

  refuel() {
    console.log(
      `Степан заправил ${this.fuel} ${this.model} ${this.year} года выпуска c пробегом ${this.mileage} км`,
    );
  }
}
