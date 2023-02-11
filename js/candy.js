class Candy {
  name;
  #currentPrice;
  #minPrice;
  #maxPrice;
  #amount;

  constructor(name, minPrice, maxPrice, location) {
    this.name = name;
    this.#minPrice = minPrice;
    this.#maxPrice = maxPrice;
    this.#currentPrice = this.setCurrentPrice(location);
    this.#amount = 0;
  }

  setCurrentPrice(location) {
    return this.#minPrice + Math.floor(Math.random() * (this.#maxPrice-this.#minPrice));
  }

  get amount(){
    return this.#amount;
  }
}


export default Candy;
