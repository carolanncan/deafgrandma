var min = 1920
var max = 1945
var randomYear = function() {
  return Math.round(Math.random() * (max - min) + min);
};
var speakUp = "Huh?! Speak up, Sonny!"
var yellsBack = function() {
  return "No, not since " + randomYear() + "!";
};

var count = i;

function deafGrandma(string) {
  if (string.toUpperCase() !== string) {
    return speakUp;
  }
  return yellsBack()
};

do {
  deafGrandma(string)
  while (count < 3) {
        count++;
  }
}

module.exports = deafGrandma
