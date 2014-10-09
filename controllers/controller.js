var grandma = makeGrandma();
var responses = $(".grandma-responses");
var input = $("input");
var target = $("#target");

target.click(function() {
  var inputString = input.val();
  input.val("").focus();
  var returnString = deafGrandma(inputString);

  responses.text(returnString);

  if (inputString === bye && byeCount === 3) {
    $("body").toggleClass("background-change");
  }
});

input.keyup(function(event) {
  if (event.keyCode === 13) {
    target.click();
  }
});
