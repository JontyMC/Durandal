define(['jquery', 'scenario/scenario', 'scenario/assert', 'test/model/mockHttp', 'test/model/app', 'viewmodels/flickr', 'test/model/Flickr', 'test/model/FlickrItemBuilder'], function ($, scenario, assert, mockHttp, appModel, flickr, FlickrModel, FlickrItemBuilder) {

var flickrItems;

scenario('Images displayed from Flickr API', function () {
    'Given the flickr api returns 3 items'._(function () {
        // Using builder pattern here is overkill, but important for
        // scenarios with complex data dependencies
        flickrItems = new FlickrItemBuilder.times(3);

        mockHttp.jsonp('http://api.flickr.com/services/feeds/photos_public.gne')
            .withData(function (data) {
                return data.tags === 'mount ranier'
                    && data.tagmode === 'any'
                    && data.format === 'json'
            })
            .withCallBackParam('jsoncallback')
            .response({
                items: flickrItems
            });
    });

    'When the flickr page is displayed'._(function () {
        // Returning a promise here, so the next step will not run until it is resolved
        return appModel.setRoot(flickr, FlickrModel);
    });

    'Then the displayName is correct'._(function (flickrModel) {
        assert.equal(flickrModel.displayName().text(), flickr.displayName);
    });

    'And 3 photos are displayed'._(function (welcomeModel) {
        assert.equal(flickrModel.items().length, 3);
    });

    'And the urls are correct'._(function (welcomeModel) {
        assert.equal(flickrModel.items().first().children().attr('src'), flickrItems[0].media.m);
    });
});

});