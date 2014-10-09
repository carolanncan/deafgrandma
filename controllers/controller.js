var grandma = makeGrandma();
var responses = $(".grandma-responses");
var input = $("input");
var target = $("#target");

target.click(function() {
  var inputString = input.val();
  input.val("").focus();
  var returnString = grandma.talk(inputString);

  responses.text(returnString);

  if (grandma.isDone()) {
    $("body").addClass("background-change");
    grandma = makeGrandma();
  }
});

input.keyup(function(event) {
  if (event.keyCode === 13) {
    target.click();
  }
});
