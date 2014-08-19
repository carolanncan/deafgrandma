// Write a Deaf Grandma program.

// Whatever you say to grandma (whatever you type in), she should respond with
// HUH?! SPEAK UP, SONNY!, unless you shout it (type in all capitals). If you
// shout, she can hear you (or at least she thinks so) and yells back, NO, NOT
// SINCE 1938!

var speakUp = "Huh?! Speak up, Sonny!"
var yellsBack = "No, not since 1938!"

function lowerCase(str) {
  if (str.toUpperCase() !=str) {
    return speakUp;
  }
  return yellsBack;
}

function deafGrandma(string) {
  return speakUp;
}
