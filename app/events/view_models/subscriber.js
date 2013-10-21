define(['durandal/app', 'knockout'], function (app, ko) {
    return {
        received: ko.observableArray([]),
        subscription:ko.observable(),
        subscribe: function () {
            var sub = app.on('event:broadcast').then(function(message) {
                this.received.push(message);
            }, this);

            this.subscription(sub);
        },
        unsubscribe: function () {
            this.subscription().off();
            this.subscription(null);
        }
    };
});
