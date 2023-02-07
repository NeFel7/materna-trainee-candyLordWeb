import City from "./city.js";
import Player from './player.js';
import Event from "./event.js";
import Gui from "./gui.js";

class Game {
  daysLeft;

  constructor() {
    this.daysLeft = 30;
    this.gui = new Gui();
    this.newYork = new City();
    this.player = new Player(this.newYork.districts[0]);

  }

  isEvent(){
    let randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber >= 70){
      return true;
    }else{
      return false;
    }
  }

  nextDay(){
    if(this.isEvent()){
      let event = new Event();
      this.gui.eventModal(event, this.player);
    }
    this.daysLeft--;
  }
}

function run(){
  let game = new Game();

  // console.log(game.player.cash);
  // console.log(game.player.candies);
  // console.log(game.player.inventorySpace);
  game.nextDay();
  // console.log(game);
  // console.log(game.player.cash);
  // console.log(game.player.candies);
  // console.log(game.player.inventorySpace);

  console.log(game.player.location);
  console.log(game.player.location.getDistanceTo(game.newYork.districts[5]));
}

run();




