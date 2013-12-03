define(function () {
    function Builder () {
    }

    Builder.prototype.with = function (cb) {
        cb.apply(this, [this.spec]);
        return this;
    };

    Builder.prototype.toString = function () {
        return JSON.stringify(this.build());
    };

    Builder.prototype.times = function (count) {
        var list = [];
        while (count--) {
            list.push(this.build());
        }
        return list;
    };

    Builder.prototype.build = function () {
        return {};
    };

    return Builder;
});