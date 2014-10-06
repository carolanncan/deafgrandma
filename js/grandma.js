function makeGrandma() {
  var min           = 1920;
  var max           = 1945;
  var randomYear    = function() {
                      return Math.round(Math.random() * (max - min) + min);
                    };
  var yellsBack     = function() {
                        return "No, not since " + randomYear() + "!";
                      };
  var saySomething  = "Say something, Sonny!";
  var speakUp       = "Huh?! Speak up, Sonny!"
  var isDone        = false;
  var byeResponse   = "Bye now.";
  var bye           = "BYE";
  var byeCount      = 0;

  function checkCounter(string) {
    if (string === bye)  {
      byeCount++;
    } else {
      byeCount = 0;
    }
  };

  function talkFunction(string) {
    checkCounter(string);

    if (byeCount === 3) {
      isDone = true;
      return byeResponse;
    }

    if (typeof string !== "string" || string.length < 1) {
      return saySomething;
    }

    if (string.toUpperCase() !== string) {
      return speakUp;
    }

    return yellsBack()
  };

  function isDoneFunction() {
    return isDone;
  }

  return {
    talk: talkFunction
    isDone: isDoneFunction
  }
}
