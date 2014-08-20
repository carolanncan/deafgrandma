var speakUp = "Huh?! Speak up, Sonny!"
var yellsBack = "No, not since 1938!"

function deafGrandma(string) {
  if (string.toUpperCase() !== string) {
    return speakUp;
  }
  return yellsBack;
}
