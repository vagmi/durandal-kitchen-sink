define(['./publisher', './subscriber'], function (publisher, Subscriber) {
  var subscriber1 = new Subscriber();
  var subscriber2 = new Subscriber();
  return {
    publisher:publisher,
    subscriber1: subscriber1,
    subscriber2: subscriber2
  };
});
