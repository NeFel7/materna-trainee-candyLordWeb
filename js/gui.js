const navTrigger = document.querySelectorAll("nav li");
navTrigger.forEach((menu) => menu.addEventListener("click", toggle));

function toggle() {
  navTrigger.forEach((item) => item != this ? item.classList.remove("active") : null);

  if (this.classList != "active") {
    this.classList.toggle("active");
  }
}

const newJersey = document.querySelector("#groupNewJersey");
const bronx = document.querySelector("#groupBronx");
const manhattan = document.querySelector("#groupManhattan");
const brooklyn = document.querySelector("#groupBrooklyn");
const queens = document.querySelector("#groupQueens");
const statenIsland = document.querySelector("#groupStatenIsland");

queens.addEventListener("click", () => {
  console.log("Queens wurde geclickt!");
})

class Gui {
  #eventModal = document.querySelector("#eventModal");
  #eventConfirm = document.querySelector("#popupConfirm");
  #eventDecline = document.querySelector("#popupDecline");
  #travelModal = document.querySelector("#travelModal");

  eventModal(event, player) {
    this.#eventModal.style.display = "grid";
    const popupImg = document.querySelector(".popupImgContainer > img");

    const popupTitle = document.querySelector("#popupTitle");
    popupTitle.textContent = event.name;

    const popupText = document.querySelector("#popupText");
    popupText.textContent = event.description;

    if (event.name == "Robbery") {
      popupImg.setAttribute("src", "img/eventRobbery.png");
      event.robbery(player);
      this.#eventConfirm.addEventListener("click", () => {
        this.closeModal();
        this.home(this.game);
      });
    }
    if (event.name == "Find Candies") {
      popupImg.setAttribute("src", "img/eventFindCandies.png");
      event.findCandies(player);
      this.#eventConfirm.addEventListener("click", () => {
        this.closeModal();
        this.home(this.game);
      });
    }
    if (event.name == "Offer") {
      this.#eventDecline.style.display = "block";
      const bags = [[50, 500], [75, 750], [100, 1000], [150, 1500], [200, 2000], [350, 3500], [500, 5000]];
      let chosenBag = Math.floor(Math.random() * bags.length);

      popupImg.setAttribute("src", "img/eventOffer.png");
      let popupMsg = document.querySelector("#popupMsg");
      popupMsg.textContent = `You can have a bag with a capacity of ${bags[chosenBag][0]} for ${bags[chosenBag][1]}$. \n
                              Do you accept?`;

      this.#eventConfirm.addEventListener("click", () => {
          event.offer(player, bags[chosenBag][0], bags[chosenBag][1], this);
          this.home(this.game);
        });
      this.#eventDecline.addEventListener("click", () => {
        this.closeModal();
        this.home(this.game);
      });

    }
  }

  home(game){
    // Player Card
    const playerDays = document.querySelector("#playerDays");
    const playerInventory = document.querySelector("#playerInventory");
    const playerCash = document.querySelector("#playerCash");
    const playerLocation = document.querySelector("#playerLocation");
    const playerBank = document.querySelector("#playerBank");
    const playerDebt = document.querySelector("#playerDebt");
    this.game = game;

    playerDays.textContent = this.game.daysLeft;
    playerInventory.textContent = this.game.player.inventorySpace;
    playerCash.textContent = this.game.player.cash;
    playerLocation.textContent = this.game.player.location.name;
    playerBank.textContent = this.game.player.inBank;
    playerDebt.textContent = this.game.player.inDebt;

  //   Candies on Hand
    const candyStats = document.querySelector("#candyStats");
    this.game.player.candies.forEach((element) => {
      let candyName = document.createElement("div");
      let candyAmount = document.createElement("div");
      candyName.textContent = element.name;
      candyAmount.textContent = element.amount;
      candyStats.append(candyName, candyAmount);
    });



  }

  travelModal(player) {

  }

  closeModal() {
    this.#eventModal.style.display = "none";
  }

}
export default Gui;
