class District {
  name;
  #x;
  #y;
  constructor(name,x,y) {
    this.name = name;
    this.#x = x;
    this.#y = y;
  }

  getDistanceTo(district){
    return Math.hypot((this.#x - district.#x), (this.#y - district.#y));
  }


}

export default District;
