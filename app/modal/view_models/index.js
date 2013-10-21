define(['durandal/app', './preferences_form'], function (app, PreferencesForm) {
  var preferencesForm = new PreferencesForm();
  return {
    preferencesForm: preferencesForm,
    setPreferences: function() {
      preferencesForm.show();
    }
  };
});
