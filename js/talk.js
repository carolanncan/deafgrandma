var grandma      = require('./grandma');
var processInput = require('./processInput');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var sentence = processInput(process.stdin.read());

  if (grandma.interface(sentence) === grandma.byeResponse) {
    process.stdout.write(grandma.byeResponse);
    process.exit();
  }

  process.stdout.write(grandma.interface(sentence) + "\n");

});
