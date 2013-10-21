define(['plugins/dialog', 'knockout'], function (dialog, ko) {
    var PreferencesForm = function() {
        this.email = ko.observable('test@example.com');
        this.shouldNotify = ko.observable('true');
    };

    PreferencesForm.prototype.ok = function() {
        dialog.close(this);
    };

    PreferencesForm.prototype.canDeactivate = function () {
        return dialog.showMessage('Your preferences will be saved', 'Confirm', ['Yes', 'No']);
    };

    PreferencesForm.prototype.show = function(){
        return dialog.show(this);
    };

    return PreferencesForm;
});
