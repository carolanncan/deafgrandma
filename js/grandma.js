var min = 1920;
var max = 1945;
var randomYear = function() {
  return Math.round(Math.random() * (max - min) + min);
};
var yellsBack = function() {
  return "No, not since " + randomYear() + "!";
};
var saySomething = "Say something, Sonny!";
var speakUp = "Huh?! Speak up, Sonny!"
var byeResponse = "Bye now.\n";
var bye = "BYE";

function deafGrandma(string) {
  if (typeof string !== "string" || string.length < 1) {
    return saySomething;
  }

  if (string.toUpperCase() !== string) {
    return speakUp;
  }

  if (string === bye) {
    return byeResponse;
  }

  return yellsBack()
};

module.exports.interface = deafGrandma
module.exports.byeResponse = byeResponse
