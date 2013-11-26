define(['test/model/TestModel'], function (TestModel) {
	function Flickr($) {
		this.$ = $;
        this.setupById('displayName');
	}

    Flickr.prototype = new TestModel();

    Flickr.prototype.items = function () {
        return this.$.find('[data-test="image"]');
    };

    return Flickr;
});