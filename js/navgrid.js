var myCellWidth = 30;
var horizPlacement = 25;
var vertPlacement = 35;

$(document).ready(function() {

  $(".gridLink").hover(function() {
    $(this).addClass("hover");
  },
  function() {
    $(this).removeClass("hover");
  });

  $(".gridLink").click(function() {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
  });
});

function setMandatoryClass() {
  document.getElementsByTagName("style")[0].innerHTML += '.hWord, .vWord { position: absolute; margin: 0; }';
}

function displayWord(id, direction, placement, cellWidth) {
  var elementString = "";
  var styleString = "";
  var reference = "";
  var character = id + '-char';

  if (direction === "h") {
    reference = "left";
  }
  else {
    reference = "top";
  }

  elementString = '<p class="' + id + ' gridLink ' + direction + 'Word">';
  styleString = '.' + character + ' { position: absolute; width: ' + cellWidth + 'px; }';

  for(var i = 0; i < id.length; i++) {
    elementString += '<span class="' + character + ' char' + (i + 1) + '">' + id.charAt(i) + '</span>';
    styleString += '.' + direction + 'Word .char' + (i + 1) + ' { ' + reference + ': ' + (i * placement) + 'px; }';
  }
  elementString += '</p>';
  document.getElementById("navgrid").innerHTML += elementString;
  document.getElementsByTagName("style")[0].innerHTML += styleString;
}

function elementClicked(e) {
  var myContent = document.getElementById("request-text");

  if((" " + e.target.className + " ").indexOf(" SIMPLE-char ") > -1) {
    myContent.innerHTML = "<p>Simple content</p>";
  }
  else if((" " + e.target.className + " ").indexOf(" PORTFOLIO-char ") > -1) {
    myContent.innerHTML = "<p>Portfolio content</p>";
  }
  else if((" " + e.target.className + " ").indexOf(" RESPONSIVE-char ") > -1) {
    myContent.innerHTML = "<p>Responsive content</p>";
  }
  else if((" " + e.target.className + " ").indexOf(" CREATIVE-char ") > -1) {
    myContent.innerHTML = "<p>Creative content</p>";
  }
  else if((" " + e.target.className + " ").indexOf(" ABOUT-char ") > -1) {
    myContent.innerHTML = "<p>About content</p>";
  }
  else if((" " + e.target.className + " ").indexOf(" INTERACTIVE-char ") > -1) {
    myContent.innerHTML = "<p>Interactive content</p>";
  }
  else if((" " + e.target.className + " ").indexOf(" CONTACT-char ") > -1) {
    myContent.innerHTML = "<p>Contact content</p>";
  }
}

setMandatoryClass();
displayWord("SIMPLE", "h", horizPlacement, myCellWidth);
displayWord("PORTFOLIO", "h", horizPlacement, myCellWidth);
displayWord("RESPONSIVE", "h", horizPlacement, myCellWidth);
displayWord("CREATIVE", "h", horizPlacement, myCellWidth);
displayWord("ABOUT", "h", horizPlacement, myCellWidth);
displayWord("INTERACTIVE", "v", vertPlacement, myCellWidth);
displayWord("CONTACT", "v", vertPlacement, myCellWidth);

document.getElementById("body").addEventListener("click", elementClicked, false);
