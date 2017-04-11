var cards = document.getElementsByClassName("list-card");

for (var i = 0; i < cards.length ; i++) {
    var card = cards[i];
    var card_labels = card.getElementsByClassName("card-label");

    if(card_labels.length > 0){
      var first_card_label = card_labels[0];
      var recovered_style = window.getComputedStyle(first_card_label, null);
      var color = recovered_style.getPropertyValue("background-color");
      card.style.backgroundColor = color;
    }

}
