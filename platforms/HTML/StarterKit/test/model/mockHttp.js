define('plugins/http', ['durandal/system'], function (system) {
    var responses = {};

    return {
        setup: function (uri) {
            return {
                returns: function (response) {
                    responses[uri] = response;
                }
            };
        },
        get: function (uri) {
            return system.defer(function (dfd) {
                dfd.resolve(responses[uri]);
            }).promise();
        }
    };
});