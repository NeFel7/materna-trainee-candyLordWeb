
class Gui {

    eventModal(event, player){
        console.log(event.name);
        console.log(event.description);
        if (event.name == "Robbery"){
            event.robbery(player);
          }
          if(event.name == "Find Candies"){
            event.findCandies(player);
          }
          if(event.name == "Offer"){
            event.offer(player);
          }
    }


}

export default Gui;