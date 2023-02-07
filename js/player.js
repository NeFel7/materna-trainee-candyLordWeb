import Candy from "./candy.js";

class Player {
  #location;
  #inventorySpace;
  #cash;
  #inBank;
  #inDebt;
  #candies = [];

  constructor(location) {
    this.#location = location;
    this.#inventorySpace = 20;
    this.#cash = 2000;
    this.#inBank = 0;
    this.#inDebt = 0;
    this.#candies = this.initCandies();
  }

  initCandies() {
    let candies = [];
    candies.push(new Candy("Giotto", 45_000, 70_000, this.location));
    candies.push(new Candy("Kinder Schocobons", 30_000, 44_000, this.location));
    candies.push(new Candy("Toblorone", 15_000, 29_000, this.location));
    candies.push(new Candy("Snickers", 5_000, 14_000, this.location));
    candies.push(new Candy("Smarties", 1_000, 4_500, this.location));
    candies.push(new Candy("Haribo", 300, 900, this.location));
    candies.push(new Candy("Schocokuss", 70, 250, this.location));
    candies.push(new Candy("Esspapier", 10, 60, this.location));
    return candies;
  }

  resetMoney() {
    this.#cash = 0;
  }

  isEnoughMoney(value){
    if(value > 0 && value <= this.#cash){
      return true;
    }else{
      return false;
    }
  }

  addMoney(value) {
    if (value > 0) {
      this.#cash += value;
    }else{
      console.log("Es kann kein negativer Betrag hinzugefügt werden!");
    }
  }

  subtractMoney(value){
    if (value > 0){
      this.#cash -= value;
    }else{
      console.log("Es kann kein negativer Betrag abgezogen werden!");
    }
  }

  // Setter ------------------------------------------------------------------------------
  set candies(candies) {
    this.#candies = candies;
  }

  set location(location) {
    this.#location = location;
  }

  set inventorySpace(inventorySpace) {
    this.#inventorySpace = inventorySpace;
  }

  // Getter ------------------------------------------------------------------------------
  get candies() {
    return this.#candies;
  }

  get location() {
    return this.#location;
  }

  get inventorySpace() {
    return this.#inventorySpace;
  }

  get cash() {
    return this.#cash;
  }

  get inBank() {
    return this.#inBank;
  }

  get inDebt() {
    return this.#inDebt;
  }
}

export default Player;
