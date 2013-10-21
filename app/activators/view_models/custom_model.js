define(['durandal/system', 'durandal/app','underscore'], function(system, app,_) {
    var CustomModel = function(options) {
      _.extend(this,options);
    };

    CustomModel.prototype.canActivate = function () {
        return app.showMessage('Do you want to view ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
    };

    CustomModel.prototype.activate = function() {
        system.log('Model Activating', this);
    };

    CustomModel.prototype.canDeactivate = function () {
        return app.showMessage('Do you want to leave ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
    };

    CustomModel.prototype.deactivate = function () {
        system.log('Model Deactivating', this);
    };

    return CustomModel;
});
