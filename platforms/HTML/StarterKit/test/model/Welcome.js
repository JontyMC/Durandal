define(['test/model/TestModel'], function (TestModel) {
	function Welcome($) {
		this.$ = $;
        this.setupById('displayName', 'description');
	}

    Welcome.prototype = new TestModel();

    Welcome.prototype.featureList = function () {
        return this.findById('featureList').find('> li');
    }

    return Welcome;
});