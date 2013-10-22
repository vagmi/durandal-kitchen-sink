define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                {route: ['', 'home'],
                 moduleId: 'hello/view_models/hello',
                 title: 'Hello World',
                 nav: true },
                {route: 'view-composition',
                 moduleId: 'compose_views/view_models/index',
                 title: 'View Composition',
                 nav: true },
                {route: 'modal',
                 moduleId: 'modal/view_models/index',
                 title: 'Modal Dialogs',
                 nav: true },
                {route: 'activators',
                 moduleId: 'activators/view_models/index',
                 title: 'Activators',
                 nav: true},
                {route: 'events',
                 moduleId: 'events/view_models/index',
                 title: 'Events',
                 nav: true},
                {route: 'movies',
                 moduleId: 'movies/view_models/index',
                 title: 'Movies - BH',
                 nav: true}
            ]).buildNavigationModel()
              .mapUnknownRoutes('hello/index', 'not-found')
              .activate();
        }
    };
});
