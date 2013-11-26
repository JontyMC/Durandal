define(['scenario/scenario', 'scenario/assert', 'test/model/app', 'plugins/router', 'viewmodels/shell', 'viewmodels/welcome', 'test/model/Shell', 'test/model/waitFor'], function (scenario, assert, appModel, router, shell, welcome, ShellModel, waitFor) {

var metadata = {
    feature: 'Shell Navigation'
}

scenario('Welcome route', function () {
    'Given an empty route is supplied'._(function () {
        window.location.hash = '';
    });

    'When the shell is loaded'._(function () {
        appModel.setRoot(shell, ShellModel);
    });

    'Then the welcome page is displayed'._(function (shellModel) {
        waitFor.view(new welcome());
    });
}, metadata);

});