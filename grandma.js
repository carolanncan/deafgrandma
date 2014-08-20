var randomYear = function getRandomYear() {
  return Math.round(Math.random() * (max - min) + min);
};

var speakUp = "Huh?! Speak up, Sonny!"
var yellsBack = "No, not since " + randomYear() + "!"
var min = 1920
var max = 1945

function deafGrandma(string) {
  if (string.toUpperCase() !== string) {
    return speakUp;
  }
  return yellsBack;
};

