class Event {
  #eventIndex;
  static #events = [["Robbery", "A stranger takes all your cash."],
    ["Find Candies", "Lucky you! You find candies on the street."],
    ["Offer", "A stranger offers you a new bag for your candies."]];

  constructor() {
    this.#eventIndex = Math.floor(Math.random() * Event.#events.length);
  }

  get name() {
    return Event.#events[this.#eventIndex][0];
  }

  get description() {
    return Event.#events[this.#eventIndex][1];
  }

  robbery(player) {
    player.resetMoney();
  }

  findCandies(player) {
    let randomNumber = Math.floor(Math.random() * player.candies.length);
    player.candies[randomNumber].amount += randomNumber + 2;
  }

  offer(player) {
    const bags = [[50, 500], [75, 750], [100, 1000], [150, 1500], [200, 2000], [350, 3500], [500, 5000]];
    let chosenBag = Math.floor(Math.random() * bags.length);
    let msg = `You can have a bag with a capacity of ${bags[chosenBag][0]} for ${bags[chosenBag][1]}$. \n
    Do you accept?`;
    console.log(msg);
    let input = "yes";
    if (input == "yes") {
      if (player.isEnoughMoney(bags[chosenBag][1])) {
        player.subtractMoney(bags[chosenBag][1]);
        player.inventorySpace = bags[chosenBag][0];
      }else{
        console.log("Nich genug Geld!");
      }
    }else{
      return;
    }
  }
}

export default Event;
