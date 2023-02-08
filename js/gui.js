const main = document.querySelector("#main");

class Gui {


  eventModal(event, player) {
    let card = document.createElement("div");
    card.classList.add("card", "w-75", "mt-5");
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title", "border-bottom", "border-primary", "pb-3");
    cardTitle.textContent = event.name;
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = event.description;
    

    cardBody.append(cardTitle, cardText);
    
    console.log(event.name);
    console.log(event.description);

    if (event.name == "Robbery") {
      event.robbery(player);
    }
    if (event.name == "Find Candies") {
      event.findCandies(player);
    }
    if (event.name == "Offer") {
      event.offer(player);

      cardText.textContent = event.msg;
      let cardBtnGroup = document.createElement("div");
      cardBtnGroup.classList.add("d-flex", "justify-content-evenly");
      let cardBtn1 = document.createElement("button")
      cardBtn1.classList.add("col-4", "btn", "btn-primary");
      cardBtn1.textContent = "Yes";
      let cardBtn2 = document.createElement("button");
      cardBtn2.classList.add("col-4", "btn", "btn-primary");
      cardBtn2.textContent = "No";

      cardBtnGroup.append(cardBtn1, cardBtn2);
      cardBody.appendChild(cardBtnGroup);
    }
    
    card.appendChild(cardBody);
    
    main.appendChild.card;
  }


}

export default Gui;