requirejs.config({
    paths: {
        'text': '../lib/requirejs-text/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout.js/knockout',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery',
        'underscore': '../lib/lodash/dist/lodash'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(['durandal/system', 'durandal/app', './configuration/custom_view_locator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Kitchen Sink';

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router:true,
        dialog: true,
        widget: {
            kinds: ['rating']
        }
    });

    app.start().then(function () {
        viewLocator.configureViewLocator();
        //Show the app by setting the root view model for our application.
        app.setRoot('shell/view_models/shell');
    });
});
