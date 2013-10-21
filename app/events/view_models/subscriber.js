define(['durandal/app', 'knockout'], function (app, ko) {
  var Subscriber = function(){
    this.received = ko.observableArray([]);
    this.subscription = ko.observable();
  }
  Subscriber.prototype.subscribe = function(){
    var sub = app.on('event:broadcast').then(function(message) {
      this.received.push(message);
    }, this);
    this.subscription(sub);
  }

  Subscriber.prototype.unsubscribe= function () {
    this.subscription().off();
    this.subscription(null);
  }
  return Subscriber;
});
