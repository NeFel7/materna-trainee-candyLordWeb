import District from "./district.js";

class City{
  #districts = []

  constructor() {
    this.#districts = this.initDistricts();
  }

  initDistricts() {
    let districts = [];
    districts.push(new District("Bronx",1699,437));
    districts.push(new District("New Jersey",300,900));
    districts.push(new District("Staten Island", 432,1942));
    districts.push(new District("Brooklyn", 1268,1668));
    districts.push(new District("Manhattan",1240,1084));
    districts.push(new District("Queens", 1883,1215));
    return districts;
  }

  get districts() {
    return this.#districts;
  }

  set districts(district){
    this.#districts = district;
  }
}

export default City;
