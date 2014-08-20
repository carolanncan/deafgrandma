var speakUp = "Huh?! Speak up, Sonny!"
var yellsBack = "No, not since " + getYear() + "!"
var min = 1920
var max = 1945

function deafGrandma(string) {
  if (string.toUpperCase() !== string) {
    return speakUp;
  }
  return yellsBack;
}

function getYear() {
  return Math.round(Math.random() * (max - min) + min);
}
