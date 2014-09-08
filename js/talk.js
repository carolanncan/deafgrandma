var grandma      = require('./grandma');
var processInput = require('./processInput');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var sentence = processInput(process.stdin.read());

  if (sentence === "BYE") {
    process.stdout.write("Bye now.\n");
    process.exit()
  }

  process.stdout.write(grandma(sentence) + "\n");

});
