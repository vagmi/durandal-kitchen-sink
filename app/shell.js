define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                {route: ['', 'home'],
                 moduleId: 'hello/index',
                 title: 'Hello World',
                 nav: true },
                {route: 'view-composition',
                 moduleId: 'compose_views/index',
                 title: 'View Composition',
                 nav: true },
                {route: 'modal',
                 moduleId: 'modal/index',
                 title: 'Modal Dialogs',
                 nav: true },
                {route: 'activators',
                 moduleId: 'activators/index',
                 title: 'Activators',
                 nav: true},
                {route: 'events',
                 moduleId: 'events/index',
                 title: 'Events',
                 nav: true}
            ]).buildNavigationModel()
              .mapUnknownRoutes('hello/index', 'not-found')
              .activate();
        }
    };
});
