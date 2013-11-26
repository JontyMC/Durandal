define(['./Builder'], function (Builder) {
    function FlickrItemBuilder () { }

    FlickrItemBuilder.prototype = new Builder();

    FlickrItemBuilder.prototype.build = function () {
        return {
            media: {
                m: 'http://lorempixel.com/260/180/'
            }
        };
    };

    return FlickrItemBuilder;
});