define(['durandal/app', 'knockout'], function (app, ko) {
    var message = ko.observable();
    var canPublish = ko.computed(function () {
        return !!message();
    });

    return {
        message: message,
        canPublish:canPublish,
        publish: function () {
            app.trigger('event:broadcast', message());
        }
    };
});
