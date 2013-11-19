define(['test/model/TestModel', 'test/model/app'], function (TestModel, appModel) {
	function Shell($) {
		this.$ = $;
        this.setupById('activeItem');
	}

    Shell.prototype = new TestModel();

    return Shell;
});