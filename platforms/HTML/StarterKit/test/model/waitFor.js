define(['durandal/system', 'durandal/viewLocator', 'scenario/waitFor'],  function (system, viewLocator, waitFor) {
	var config = {
		interval: 200,
		timeout: 3000
	};

    return {
    	config: config,
    	view: function (module) {
	    	var moduleId = system.getModuleId(module),
				viewId = viewLocator.convertModuleIdToViewId(moduleId);

			return waitFor.element('*[data-view="' + viewId + '"]', config.timeout, config.interval);
	    }
	};
});