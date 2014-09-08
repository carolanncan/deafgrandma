module.exports = function (input) {
  if (input === null || input === undefined) {
    return ''
  }
  var sentence = input.toString();
  return sentence.slice(0, sentence.length-1)
}
