define(['durandal/system'], function (system) {
    var mocks = {};

    function RequestMatch(uri) {
        this.uri = uri;
    }

    RequestMatch.prototype.withData = function (withData) {
        this.withData = withData;
        return this;
    };

    RequestMatch.prototype.withCallBackParam = function (callbackParam) {
        this.callbackParam = callbackParam;
        return this;
    };

    RequestMatch.prototype.response = function (response) {
        this.response = response;
        return this;
    };

    RequestMatch.prototype.mockJsonp = function () {
        console.log("Mock jsonp setup for:", this.uri);
        this.jsonp = true;
        mocks[this.uri] = this;
    };

    function uri(uri) {
        return new RequestMatch(uri);
    }

    function jsonp(uri, query, callbackParam) {
        var mock = mocks[uri];

        if (!mock) {
            throw new Error("Could not find jsonp mock for uri: \"" + uri + "\"");
        }

        if (mock.jsonp === false) {
            throw new Error("Mock request type for uri: \"" + uri + "\" was not jsonp");
        }

        if (mock.withData && !mock.withData(query)) {
            throw new Error("Mock request data did not match for uri: \"" + uri + "\"");
        }

        if (mock.callbackParam && mock.callbackParam !== callbackParam) {
            throw new Error("Mock request callbackParam did not match for uri: \"" + uri + "\"");
        }

        console.log("Mock jsonp matched with:", uri, query, callbackParam);

        return system.defer(function (dfd) {
            dfd.resolve(mock.response.body);
        }).promise();
    }

    return {
        uri: uri,
        jsonp: jsonp
    };
});