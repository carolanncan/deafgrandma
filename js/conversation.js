function makeConversation() {
  var grandma = makeGrandma();
  var me = makeMe();

  function isDoneFunction() {
    return grandma.isDone() && me.isDone();
  }

  return {
    grandma: grandma
    me: me
    isDone: isDoneFunction
  }
}
