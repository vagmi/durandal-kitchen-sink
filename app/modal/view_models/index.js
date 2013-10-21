define(['./preferences_form'], function (PreferencesForm) {
  var preferencesForm = new PreferencesForm();
  return {
    preferencesForm: preferencesForm,
    setPreferences: function() {
      preferencesForm.show();
    }
  };
});
