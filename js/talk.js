var grandma      = require('./grandma');
var processInput = require('./processInput');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var sentence = processInput(process.stdin.read());
  var grandmaResponse = (grandma.interface(sentence));

  process.stdout.write(grandmaResponse + "\n");
  if (grandmaResponse === grandma.byeResponse) {
    process.exit();
  }
});
