define(['scenario/scenario', 'scenario/assert', 'test/model/app', 'plugins/router', 'viewmodels/shell', 'test/model/Shell',], function (scenario, assert, appModel, router, shell, ShellModel) {

scenario('Welcome route', function () {
    'Given an empty route is supplied'._(function () {
        window.location.hash = '';
    });

    'When the shell is loaded'._(function () {
        return appModel.setRoot(shell, ShellModel);
    });

    'Then the welcome page is displayed'._(function (shellModel) {
        
    });
});

});