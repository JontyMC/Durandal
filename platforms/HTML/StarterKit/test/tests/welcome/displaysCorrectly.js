define(['jquery', 'scenario/scenario', 'scenario/assert', 'test/model/app', 'viewmodels/welcome', 'test/model/Welcome'], function ($, scenario, assert, appModel, welcome, WelcomeModel) {

var welcomeViewModel;
var metadata = {
    feature: 'Welcome Page'
}

scenario('Displays correctly', function () {
    'When the welcome page is displayed'._(function () {
        welcomeViewModel = new welcome();
        return appModel.setRoot(welcomeViewModel, WelcomeModel);
    });

    'Then the displayName is correct'._(function (welcomeModel) {
        assert.equal(welcomeModel.displayName().text(), welcomeViewModel.displayName);
    });

    'And the description is correct'._(function (welcomeModel) {
        assert.equal(welcomeModel.description().text(), welcomeViewModel.description);
    });

    'And the feature list is correct'._(function (welcomeModel) {
        var featureList = welcomeModel.featureList();
        $.each(welcomeViewModel.features, function(index, value) {
            assert.equal(featureList.eq(index).text(), value);
        });
    });
}, metadata);

});