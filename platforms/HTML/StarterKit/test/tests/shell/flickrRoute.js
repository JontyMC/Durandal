define(['scenario/scenario', 'scenario/assert', 'plugins/http', 'test/model/app', 'plugins/router', 'viewmodels/shell', 'viewmodels/flickr', 'test/model/Shell', 'test/model/waitFor'], function (scenario, assert, mockHttp, appModel, router, shell, flickr, ShellModel, waitFor) {

var metadata = {
    feature: 'Shell Navigation'
}

scenario('Flickr route', function () {
    'Given a route "flickr" is supplied'._(function () {
        window.location.hash = 'flickr';

        mockHttp.uri('http://api.flickr.com/services/feeds/photos_public.gne')
            .response({ body: { items: [] } })
            .mockJsonp();
    });

    'When the shell is loaded'._(function () {
        appModel.setRoot(shell, ShellModel, false);
    });

    'Then the flickr page is displayed'._(function (shellModel) {
        waitFor.view(flickr);
    });
}, metadata);

});