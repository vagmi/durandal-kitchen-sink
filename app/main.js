requirejs.config({
    paths: {
        'text': '../lib/requirejs-text/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout.js/knockout',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery',
        'underscore': '../lib/lodash/dist/lodash',
        'common': 'common'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(['durandal/system', 'durandal/app', './configuration/custom_view_locator','plugins/widget'],  function (system, app, viewLocator,widget) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Kitchen Sink';
    widget.registerKind("myrating");
    //specify which plugins to install and their configuration
    app.configurePlugins({
        router:true,
        dialog: true,
        widget: {
            kinds: ['myrating']
        }
    });

    app.start().then(function () {
        viewLocator.configureViewLocator();
        //Show the app by setting the root view model for our application.
        app.setRoot('shell/view_models/shell');
    });
});
