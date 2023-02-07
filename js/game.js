import City from "./city.js";
import Player from './player.js';
import Event from "./event.js";

class Game {
  daysLeft;

  constructor() {
    this.daysLeft = 30;
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
      console.log(event.name);
      console.log(event.description);
      if (event.name == "Robbery"){
        event.robbery(this.player);
      }
      if(event.name == "Find Candies"){
        event.findCandies(this.player);
      }
      if(event.name == "Offer"){
        event.offer(this.player);
      }
    }
    this.daysLeft--;
  }
}

function run(){
  let game = new Game();

  // console.log(game.player.cash);
  // console.log(game.player.candies);
  // console.log(game.player.inventorySpace);
  // game.nextDay();
  // console.log(game);
  // console.log(game.player.cash);
  // console.log(game.player.candies);
  // console.log(game.player.inventorySpace);

  console.log(game.player.location);
  console.log(game.player.location.getDistanceTo(game.newYork.districts[5]));
}

run();




