var min = 1920;
var max = 1945;
var count = 0;
var bye = "BYE";

var randomYear = function() {
  return Math.round(Math.random() * (max - min) + min);
};
var saySomething = "Say something, Sonny!";
var speakUp = "Huh?! Speak up, Sonny!"
var yellsBack = function() {
  return "No, not since " + randomYear() + "!";
};



function deafGrandma(string) {
  if (typeof string !== "string" || string.length < 1) {
    return saySomething;
  }

  if (string.toUpperCase() !== string) {
    return speakUp;
  }

  return yellsBack()
};

module.exports = deafGrandma
