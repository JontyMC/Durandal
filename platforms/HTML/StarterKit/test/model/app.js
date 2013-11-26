define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'test/model/waitFor'],  function (system, app, viewLocator, waitFor) {
    return {
		setRoot: function (module, CreateModel, wait) {
            wait = wait || true;

			app.setRoot(module);

            if (wait) {
    			return waitFor.view(module).then(function (view) {
    				return new CreateModel(view);
    			});
            }
        }
    };
});