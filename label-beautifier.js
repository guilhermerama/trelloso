var cards = document.getElementsByClassName("list-card");

for (var i = 0; i < cards.length ; i++) {
    var card = cards[i];
    var card_labels = card.getElementsByClassName("card-label");

    if(card_labels.length > 0){
      var first_card_label = card_labels[0];
      var recovered_style = window.getComputedStyle(first_card_label, null);
      var color = recovered_style.getPropertyValue("background-color");
      card.style.backgroundColor = color;
      var text_color = foregroundColorRGB(color, '#FFFFFF', '#000000');
      var card_title = card.getElementsByClassName("list-card-title")[0];
      card_title.style.color = text_color;
    }

}

/**
Deve recber cores em HexaDecial (ex: #FFFFFF)
*/
function foregroundColorHex(bgColor, lightColor, darkColor) {
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
  return (L > 0.179) ? darkColor : lightColor;
}

function foregroundColorRGB(bgColor, lightColor, darkColor) {
  var a = bgColor.split("(")[1].split(")")[0];

  a = a.split(",");

  var color_hex = a.map(function(x){
      x = parseInt(x).toString(16);
      return (x.length==1) ? "0"+x : x;
  })

  color_hex = "#" + color_hex.join("");

  return foregroundColorHex(color_hex, lightColor, darkColor)
}
