
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

  offer(player, bagSize, bagPrice, gui) {
    this.gui = gui;
    if (player.isEnoughMoney(bagPrice)) {
      player.subtractMoney(bagPrice);
      player.inventorySpace = bagSize;
    } else {
      console.log("Nich genug Geld!");
    }
    gui.closeModal();
  }
}

export default Event;
