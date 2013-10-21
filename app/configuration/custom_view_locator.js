define(['durandal/viewLocator'], function(viewLocator) {
    var _viewLocator = viewLocator;

    var convertViewModelIdToViewId = function(viewModelId) {
      var viewDirectory = viewModelId.replace(new RegExp('view_models', 'g'), 'views');
      var viewName = viewDirectory + '_view';
      return viewName;
    };

    var configure = function() {
        _viewLocator.useConvention();
        _viewLocator.convertModuleIdToViewId = convertViewModelIdToViewId;
    };

    return {
        configureViewLocator : configure
    };
});

