var counter       = require'./counter');
var min           = 1920;
var max           = 1945;

var randomYear    =
    function() {
      return Math.round(Math.random() * (max - min) + min);
    };

var yellsBack     =
    function() {
      return "No, not since " + randomYear() + "!";
    };

var saySomething  = "Say something, Sonny!";
var speakUp       = "Huh?! Speak up, Sonny!"
var byeResponse   = "Bye now.";
var bye           = "BYE";
var byeCount      = 0;

var addToByeCount =
    function addToCount(string) {
      if (string === bye)  {
        byeCount++;
      }

      else {
        deafGrandma();
      }

      if (byeCount < 1) {
        byeCount = 0;
      }

      if (byeCount > 3) {
        return "See you later!";
        byeCount = 0;
        process.exit();
      }
    };

function deafGrandma(string) {
  if (typeof string !== "string" || string.length < 1) {
    return saySomething;
  }

  if (string.toUpperCase() !== string) {
    return speakUp;
  }

  if (string === bye) {
    return byeResponse;
    addToByeCount();
  }

  return yellsBack()
};

module.exports.interface = deafGrandma
module.exports.byeResponse = byeResponse
