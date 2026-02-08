export class Cafe {
  constructor(name, address) {
    this.name = name,
    this.address = address
  };

  getInfoCafe() {
    return (`Информация про кафе: Название: "${this.name}", адрес: "${this.address}"`);
  };
  
  orderDrink(drink) {
    console.log(drink.getInfoDrink())
    drink.serveDrink();
  }
}